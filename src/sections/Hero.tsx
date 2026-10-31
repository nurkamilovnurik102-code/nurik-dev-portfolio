import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight, ArrowDown, Download, Code2, Trophy, Layers3 } from 'lucide-react';
import { ResumeFlip } from '../components/ResumeFlip';
import { projects } from '../data/projects';

export function Hero() {
  const { t } = useTranslation();
  return <section className="hero" id="home"><div className="site-container hero-grid">
    <ResumeFlip />
    <div className="hero-copy">
      <div className="hero-roles" aria-label={t('hero.role')}>
        <span><Code2 size={15}/>{t('hero.badges.developer')}</span>
        <span><Trophy size={15}/>{t('hero.badges.athlete')}</span>
        <span><Layers3 size={15}/>{t('hero.badges.creator')}</span>
      </div>
      <h1><span className="name-accent">{t('hero.firstName')}</span> {t('hero.lastName')}</h1>
      <p className="hero-role-line">{t('hero.role')}</p>
      <p className="hero-description">{t('hero.description')}</p>
      <div className="hero-points">
        <p>{t('hero.points.one')}</p>
        <p>{t('hero.points.two')}</p>
        <p>{t('hero.points.three')}</p>
      </div>
      <div className="hero-stats">
        <div><strong>{String(projects.length).padStart(2, '0')}</strong><small>{t('hero.statProjects')}</small></div>
        <div><strong>02</strong><small>{t('hero.statSport')}</small></div>
        <div><strong>03</strong><small>{t('hero.statLanguages')}</small></div>
      </div>
      <div className="hero-buttons">
        <Link className="button-primary" to="/#projects">{t('hero.projects')} <ArrowUpRight size={18}/></Link>
        <Link className="button-ghost" to="/resume">{t('hero.resume')} <Download size={17}/></Link>
      </div>
    </div>
  </div><a href="#about" className="hero-scroll" aria-label={t('hero.scroll')}><ArrowDown size={16}/>{t('hero.scroll')}</a></section>;
}
