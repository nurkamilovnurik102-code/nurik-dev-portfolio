import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { Link, useLocation } from 'react-router';
import { useTranslation } from 'react-i18next';
import { ArrowUp, Github, Mail } from 'lucide-react';
import { profile } from '../data/profile';
import { Header } from './Header';

function RouteScroll() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const id = hash.slice(1);
    if (id) {
      const frame = window.requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      return () => cancelAnimationFrame(frame);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function ProgressAndTop() {
  const bar = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (bar.current) bar.current.style.transform = `scaleX(${max ? window.scrollY / max : 0})`;
      setShow(window.scrollY > 650);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const { t } = useTranslation();
  return <><div className="scroll-progress" ref={bar} /><button className={`back-to-top ${show ? 'show' : ''}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} type="button" aria-label={t('common.top')} tabIndex={show ? 0 : -1}><ArrowUp size={19}/></button></>;
}

export function SiteChrome({ children }: { children: ReactNode }) {
  const { t } = useTranslation();
  useEffect(() => {
    const meta = document.querySelector('meta[name="description"]');
    meta?.setAttribute('content', t('seo.description'));
  }, [t]);
  return <>
    <RouteScroll/>
    <ProgressAndTop/>
    <Header />
    <main id="main">{children}</main>
    <footer className="site-footer"><div className="site-container footer-inner"><div><Link className="footer-brand" to="/">NURIK<span>.DEV</span></Link><p>{t('footer.tagline')}</p></div><div className="footer-links"><a target="_blank" rel="noopener noreferrer" href={profile.github} aria-label="GitHub"><Github size={19}/></a><a href={`mailto:${profile.email}`} aria-label={t('contact.email')}><Mail size={19}/></a></div><span className="copyright">© {new Date().getFullYear()} Nurislam Nurkamilov · {t('footer.rights')}</span></div></footer>
  </>;
}
