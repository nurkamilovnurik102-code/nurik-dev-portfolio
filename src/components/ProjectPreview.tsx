import type { Project } from '../data/projects';
import { MonitorSmartphone, Mountain, ShoppingBag, Sparkles } from './Icons';
import { useState } from 'react';

const icons = { beauty: Sparkles, commerce: ShoppingBag, travel: Mountain } as const;

export function ProjectPreview({ project }: { project: Project }) {
  const [failed, setFailed] = useState(false);
  const Icon = icons[project.category] ?? MonitorSmartphone;
  if (project.image && !failed) return <div className={`project-preview preview-${project.category}`}>
    <img alt="" className="project-photo" loading="lazy" src={project.image} onError={() => setFailed(true)} />
  </div>;
  return <div className={`project-preview preview-${project.category}`} aria-hidden="true">
    <div className="preview-halo" />
    <div className="fake-browser">
      <div className="fake-browser-top"><i/><i/><i/><span /></div>
      <div className="fake-browser-content">
        <div className="fake-browser-sidebar" />
        <div className="fake-browser-main">
          <div className="fake-browser-heading" />
          <div className="fake-browser-text" /><div className="fake-browser-text shorter" />
          <div className="fake-browser-blocks"><span/><span/><span/></div>
        </div>
        <div className="fake-browser-graphic"><Icon size={36} strokeWidth={1.2}/></div>
      </div>
    </div>
    <span className="preview-watermark">{project.slug.toUpperCase().replaceAll('-', ' ')}</span>
  </div>;
}
