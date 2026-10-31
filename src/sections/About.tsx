import { useTranslation } from 'react-i18next';
import { Check, BookOpen, Code2, Languages } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import { skillGroups } from '../data/profile';

export function About() {
  const { t } = useTranslation();
  return <section className="section about-section" id="about"><div className="site-container">
    <Reveal><SectionHeading eyebrow="about.eyebrow" title="about.title" description="about.subtitle" centered/></Reveal>
    <div className="about-grid">
      <Reveal className="about-highlights"><h3>{t('about.highlightsTitle')}</h3>
        {(['first', 'second', 'third', 'fourth'] as const).map(key => <p className="about-highlight" key={key}><Check size={18}/>{t(`about.highlights.${key}`)}</p>)}
      </Reveal>
      <Reveal className="about-skills"><h3><Code2 size={17}/>{t('about.programming')}</h3><div className="skill-tags">{[...skillGroups.frontend, ...skillGroups.interfaces].map(item=><span key={item}>{item}</span>)}</div>
        <h3><BookOpen size={17}/>{t('about.tools')}</h3><div className="skill-tags">{skillGroups.tooling.map(item=><span key={item}>{item}</span>)}</div>
        <h3><Languages size={17}/>{t('about.languages')}</h3><div className="skill-tags"><span>{t('about.languageItems.kg')}</span><span>{t('about.languageItems.ru')}</span><span>{t('about.languageItems.en')}</span></div>
      </Reveal>
    </div>
    <Reveal><div className="story-card"><div><span className="eyebrow">{t('about.storyEyebrow')}</span><h3>{t('about.storyTitle')}</h3></div><div><p>{t('about.story1')}</p><p>{t('about.story2')}</p><p>{t('about.story3')}</p></div></div></Reveal>
  </div></section>;
}
