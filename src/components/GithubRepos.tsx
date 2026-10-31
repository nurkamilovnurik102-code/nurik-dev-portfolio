import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Github, ExternalLink, RefreshCcw } from 'lucide-react';
import { profile } from '../data/profile';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';

type Repo = { id: number; name: string; html_url: string; description: string | null; language: string | null; stargazers_count: number; fork: boolean };
type FetchState = { status: 'loading' } | { status: 'error' } | { status: 'success'; repos: Repo[] };

export function GithubRepos() {
  const { t } = useTranslation();
  const [version, setVersion] = useState(0);
  const [state, setState] = useState<FetchState>({ status: 'loading' });
  useEffect(() => {
    const controller = new AbortController();
    setState({ status: 'loading' });
    async function load() {
      try {
        const response = await fetch(`https://api.github.com/users/${profile.githubUsername}/repos?sort=updated&per_page=12`, { signal: controller.signal, headers: { Accept: 'application/vnd.github+json' } });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data: unknown = await response.json();
        if (!Array.isArray(data)) throw new Error('Unexpected API response');
        const repos = (data as Repo[]).filter(repo => !repo.fork && /^https:\/\/github\.com\//.test(repo.html_url)).slice(0, 3);
        setState({ status: 'success', repos });
      } catch (error) {
        if (controller.signal.aborted) return;
        console.error('GitHub API unavailable:', error);
        setState({ status: 'error' });
      }
    }
    void load();
    return () => controller.abort();
  }, [version]);
  return <section className="section section-github"><div className="site-container"><Reveal><SectionHeading eyebrow="github.eyebrow" title="github.title" description="github.subtitle" /></Reveal>
    <div className="github-grid" aria-live="polite">
      {state.status === 'loading' && [1,2,3].map(n => <div className="repo-card repo-skeleton" key={n}><div className="skeleton-line w-1/2"/><div className="skeleton-line w-full"/><div className="skeleton-line w-2/3"/></div>)}
      {state.status === 'error' && <div className="github-message"><Github size={24}/><p>{t('github.error')}</p><button type="button" className="button-ghost" onClick={() => setVersion(n => n+1)}><RefreshCcw size={15}/>{t('common.retry')}</button></div>}
      {state.status === 'success' && state.repos.length === 0 && <div className="github-message"><Github size={24}/><p>{t('github.empty')}</p></div>}
      {state.status === 'success' && state.repos.map(repo => <a className="repo-card" href={repo.html_url} target="_blank" rel="noopener noreferrer" key={repo.id}><div className="repo-top"><Github size={21}/><ExternalLink size={16}/></div><strong>{repo.name}</strong><p>{repo.description || t('github.noDescription')}</p><div className="repo-bottom"><span>{repo.language || t('github.code')}</span><span>★ {repo.stargazers_count}</span></div></a>)}
    </div>
    <a className="secondary-inline" href={profile.github} target="_blank" rel="noopener noreferrer">{t('github.all')} <ExternalLink size={16}/></a>
  </div></section>;
}
