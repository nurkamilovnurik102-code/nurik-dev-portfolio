import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Award, GraduationCap, Code2, Trophy, Palette } from 'lucide-react';
import { achievements } from '../data/achievements';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';

const icons = { award: Award, graduation: GraduationCap, code: Code2, trophy: Trophy, palette: Palette };
export function Achievements() {
  const {t}=useTranslation();
  return <section className="section" id="achievements"><div className="site-container"><Reveal><SectionHeading eyebrow="achievements.eyebrow" title="achievements.title" description="achievements.subtitle" centered /></Reveal>
    <div className="achievement-grid">{achievements.map((item,i)=> {const Icon=icons[item.icon];return <Reveal key={item.id} delay={i*60}><article className="achievement-card"><span className="achievement-icon"><Icon size={24}/></span><span className="achievement-type">{t(`achievements.items.${item.id}.category`)}</span><h3>{t(`achievements.items.${item.id}.title`)}</h3><p>{t(`achievements.items.${item.id}.description`)}</p></article></Reveal>})}</div>
    <Reveal><div className="section-more"><Link className="button-ghost" to="/achievements">{t('achievements.viewAll')} <ArrowRight size={18}/></Link></div></Reveal>
  </div></section>;
}
