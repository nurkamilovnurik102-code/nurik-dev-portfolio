import { useTranslation } from 'react-i18next';
import { Coffee, Code2, Medal } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';

const experiences = [{key:'family',Icon:Coffee},{key:'frontend',Icon:Code2},{key:'sports',Icon:Medal}] as const;
export function Experience() {
  const { t } = useTranslation();
  return <section className="section" id="experience"><div className="site-container"><Reveal><SectionHeading eyebrow="experience.eyebrow" title="experience.title" description="experience.subtitle" centered /></Reveal>
    <div className="experience-grid">{experiences.map(({key,Icon},i) => <Reveal key={key} delay={i*60}><div className="experience-card"><span className="experience-icon"><Icon size={22}/></span><span className="experience-period">{t(`experience.items.${key}.period`)}</span><h3>{t(`experience.items.${key}.title`)}</h3><p>{t(`experience.items.${key}.description`)}</p></div></Reveal>)}</div>
  </div></section>;
}
