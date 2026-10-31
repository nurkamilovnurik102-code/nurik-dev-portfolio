import { useTranslation } from 'react-i18next';
import { GraduationCap, MapPin, BookOpen, Code2 } from 'lucide-react';
import { education } from '../data/profile';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';

export function Education() {
  const { t } = useTranslation();
  return <section className="section section-tinted" id="education"><div className="site-container"><Reveal><SectionHeading eyebrow="education.eyebrow" title="education.title" description="education.subtitle" centered/></Reveal>
    <div className="education-grid">{education.map((key, i) => <Reveal key={key} delay={i*50}><article className="education-card"><span className="education-corner" aria-hidden="true"/>
      <div className="education-card-top"><span className="education-icon">{i === 3 ? <BookOpen size={27}/> : <GraduationCap size={27}/>}</span><span className="education-years">{t(`education.items.${key}.years`)}</span></div>
      <h3>{t(`education.items.${key}.name`)}</h3><p>{t(`education.items.${key}.description`)}</p><span className="education-city"><MapPin size={14}/>{t(`education.items.${key}.city`)}</span>
    </article></Reveal>)}
      <Reveal><article className="education-card education-course"><span className="education-corner" aria-hidden="true"/><div className="education-card-top"><Code2 size={27}/><span className="education-years">{t('education.trainingTag')}</span></div><h3>{t('education.trainingTitle')}</h3><p>{t('education.trainingDescription')}</p><span className="education-city">Frontend / OKURMEN</span></article></Reveal>
    </div>
  </div></section>;
}
