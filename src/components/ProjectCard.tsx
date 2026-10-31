import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import type { Project } from '../data/projects';
import { safeExternalUrl } from '../data/projects';

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { t } = useTranslation();
  const live = safeExternalUrl(project.liveUrl);
  const repo = safeExternalUrl(project.repositoryUrl);
  const title = t(`projects.items.${project.slug}.title`);
  const action = <span className="project-arrow" aria-hidden="true"><ArrowUpRight size={20}/></span>;
  return <article className="project-card">
    {project.image && <Link to={`/projects/${project.slug}`} className="project-card-image"><img src={project.image} loading="lazy" alt={t('projects.previewAlt', {name: title})}/></Link>}
    <div className="project-card-body">
      <div className="project-card-number">{String(index + 1).padStart(2, '0')} / {project.year}</div>
      <h3>{title}</h3>
      <span className="project-status">{t(`projects.status.${project.status}`)}</span>
      <p>{t(`projects.items.${project.slug}.summary`)}</p>
      <div className="project-card-bottom"><div className="project-tags">{project.stack.slice(0,3).map(tag=><span key={tag}>{tag}</span>)}</div>
        {live ? <a className="project-arrow-link" href={live} target="_blank" rel="noopener noreferrer" aria-label={`${t('common.live')}: ${title}`}>{action}</a> : <Link className="project-arrow-link" to={`/projects/${project.slug}`} aria-label={`${t('common.details')}: ${title}`}>{action}</Link>}
      </div>
      <div className="project-extra-links"><Link to={`/projects/${project.slug}`}>{t('common.details')}</Link>{live&&<a href={live} target="_blank" rel="noopener noreferrer">{t('common.live')}<ExternalLink size={14}/></a>}{repo&&<a href={repo} target="_blank" rel="noopener noreferrer">GitHub<Github size={14}/></a>}</div>
    </div>
  </article>;
}
