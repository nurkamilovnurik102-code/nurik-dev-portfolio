import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { projects } from '../data/projects';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import { ProjectCard } from '../components/ProjectCard';

const filters = ['all','beauty','commerce','travel'] as const;
type Filter = typeof filters[number];
export function Projects() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<Filter>('all');
  const filtered = projects.filter(item => filter === 'all' || item.category === filter);
  return <section className="section section-tinted" id="projects"><div className="site-container"><Reveal><SectionHeading eyebrow="projects.eyebrow" title="projects.title" description="projects.subtitle" centered /></Reveal>
    <div className="project-filters" role="group" aria-label={t('projects.filterLabel')}>{filters.map(key => <button type="button" key={key} className={filter === key ? 'active' : ''} aria-pressed={filter === key} onClick={() => setFilter(key)}>{t(`projects.filters.${key}`)} <span>{key === 'all' ? projects.length : projects.filter(p => p.category === key).length}</span></button>)}</div>
    <div className="projects-grid">{filtered.map((project, index) => <Reveal key={project.slug}><ProjectCard project={project} index={index}/></Reveal>)}</div>
  </div></section>;
}
