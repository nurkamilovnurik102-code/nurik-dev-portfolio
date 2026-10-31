import { Link, useParams } from 'react-router';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { ProjectPreview } from '../components/ProjectPreview';
import { projects, safeExternalUrl } from '../data/projects';
import { useEffect } from 'react';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const { t } = useTranslation();
  const project = projects.find(p => p.slug === slug);
  const name = project ? t(`projects.items.${project.slug}.title`) : t('common.notFound');
  useEffect(() => { document.title = `${name} · NURIK.DEV`; }, [name]);
  if (!project) return <section className="inner-page site-container"><h1>{t('common.notFound')}</h1><Link className="button-primary" to="/">{t('common.backHome')} <ArrowLeft size={18}/></Link></section>;
  const live = safeExternalUrl(project.liveUrl);
  const repo = safeExternalUrl(project.repositoryUrl);
  return <article className="inner-page site-container"><Link className="go-back" to="/#projects"><ArrowLeft size={17}/>{t('common.backProjects')}</Link><div className="detail-header"><span className="eyebrow">{project.year} / {t(`projects.status.${project.status}`)}</span><h1>{name}</h1><p>{t(`projects.items.${project.slug}.summary`)}</p></div><div className="detail-preview"><ProjectPreview project={project}/></div><div className="detail-columns"><div><h2>{t('projects.aboutProject')}</h2><p>{t(`projects.items.${project.slug}.detail`)}</p><h2>{t('projects.stack')}</h2><div className="project-tags">{project.stack.map(item => <span key={item}>{item}</span>)}</div></div><aside className="detail-aside"><span>{t('projects.openProject')}</span>{live ? <a href={live} target="_blank" rel="noopener noreferrer" className="button-primary">{t('common.live')} <ExternalLink size={17}/></a> : <p>{t('projects.linkPending')}</p>}{repo && <a href={repo} target="_blank" rel="noopener noreferrer" className="button-ghost">GitHub <Github size={17}/></a>}</aside></div></article>;
}
