import { useEffect } from 'react';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Award, GraduationCap, Code2, ExternalLink, Trophy, Palette } from 'lucide-react';
import { achievements } from '../data/achievements';
import { safeExternalUrl } from '../data/projects';

const icons={ award:Award, graduation:GraduationCap, code:Code2, trophy:Trophy, palette:Palette };
export default function AchievementsPage() {
 const {t}=useTranslation();
 useEffect(()=> {document.title = `${t('achievements.title')} · NURIK.DEV`;},[t]);
 return <section className="inner-page site-container achievement-page"><Link to="/#achievements" className="go-back"><ArrowLeft size={17}/>{t('common.backHome')}</Link><span className="eyebrow">{t('achievements.eyebrow')}</span><h1>{t('achievements.title')}</h1><p className="achievements-intro">{t('achievements.subtitle')}</p><div className="achievement-grid">{achievements.map(item=>{const Icon=icons[item.icon];const link=safeExternalUrl(item.link||'');return <article key={item.id} className="achievement-card"><span className="achievement-icon"><Icon size={26}/></span><span className="achievement-type">{t(`achievements.items.${item.id}.category`)}</span><h2>{t(`achievements.items.${item.id}.title`)}</h2><p>{t(`achievements.items.${item.id}.description`)}</p>{item.image&&<img className="achievement-photo" src={item.image} alt={t(`achievements.items.${item.id}.title`)} loading="lazy"/>}{link&&<a className="card-link" href={link} target="_blank" rel="noopener noreferrer">{t('achievements.evidence')}<ExternalLink size={16}/></a>}</article>})}</div></section>;
}
