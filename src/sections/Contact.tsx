import { useTranslation } from 'react-i18next';
import { MessageCircle, Instagram, Github, Send, ArrowUpRight, Mail } from 'lucide-react';
import { profile, socialProfiles } from '../data/profile';
import { safeExternalUrl } from '../data/projects';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';

const contacts = [
  { id:'whatsapp', label:'WhatsApp', Icon:MessageCircle, url:socialProfiles.whatsapp, detail:'contact.whatsappDetail' },
  { id:'instagram', label:'Instagram', Icon:Instagram, url:socialProfiles.instagram, detail:'contact.instagramDetail' },
  { id:'github', label:'GitHub', Icon:Github, url:socialProfiles.github, detail:'contact.githubDetail' },
  { id:'telegram', label:'Telegram', Icon:Send, url:socialProfiles.telegram, detail:'contact.telegramDetail' },
] as const;

export function Contact() {
  const { t } = useTranslation();
  return <section className="section section-tinted section-contact" id="contact"><div className="site-container">
    <Reveal><SectionHeading eyebrow="contact.eyebrow" title="contact.title" description="contact.subtitle" centered /></Reveal>
    <div className="social-grid">{contacts.map(({id,label,Icon,url,detail},i) => <Reveal key={id} delay={i*60}>
      {safeExternalUrl(url) ? <a className="social-card" href={safeExternalUrl(url)} target="_blank" rel="noopener noreferrer" aria-label={`${label}: ${t(detail)}`}>
        <span className="social-icon"><Icon size={24}/></span><strong>{label}</strong><span className="social-detail">{t(detail)}</span><span className="social-corner"><ArrowUpRight size={16}/></span>
      </a> : <div className="social-card social-card-pending" aria-label={`${label}: ${t('contact.linkPending')}`}>
        <span className="social-icon"><Icon size={24}/></span><strong>{label}</strong><span className="social-detail">{t('contact.linkPending')}</span>
      </div>}
    </Reveal>)}</div>
    <Reveal><p className="contact-email-line">{t('contact.alsoEmail')} <a href={`mailto:${profile.email}`}><Mail size={15}/>{profile.email}<ArrowUpRight size={15}/></a></p></Reveal>
  </div></section>;
}
