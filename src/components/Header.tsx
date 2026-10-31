import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router';
import { useTranslation } from 'react-i18next';
import { Menu, X, Moon, Sun, ArrowUpRight, Download } from 'lucide-react';
import { setLanguage, type Language } from '../lib/i18n';

const sections = ['about','education','achievements','projects','experience','contact'] as const;
type Theme = 'dark' | 'light';
function getInitialTheme(): Theme {
  try { return localStorage.getItem('nurik:theme') === 'dark' ? 'dark' : 'light'; }
  catch { return 'light'; }
}

export function Header() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [active, setActive] = useState('');
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('nurik:theme', theme); } catch { /* optional */ }
  }, [theme]);
  useEffect(() => { setOpen(false); }, [location]);
  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    return () => document.body.classList.remove('menu-open');
  }, [open]);
  useEffect(() => {
    if (!open) return;
    const onResize = () => { if (window.innerWidth > 900) setOpen(false); };
    const onKeyDown = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('resize', onResize);
    document.addEventListener('keydown', onKeyDown);
    return () => { window.removeEventListener('resize', onResize); document.removeEventListener('keydown', onKeyDown); };
  }, [open]);
  useEffect(() => {
    if (location.pathname !== '/') return;
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(e => e.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio);
      if (visible[0]) setActive(visible[0].target.id);
    }, { rootMargin: '-20% 0px -55% 0px' });
    sections.forEach(id => { const node = document.getElementById(id); if (node) observer.observe(node); });
    return () => observer.disconnect();
  }, [location.pathname]);
  const changeLanguage = (language: Language) => { if (language !== i18n.resolvedLanguage) setLanguage(language); };
  const activeLanguage = i18n.resolvedLanguage === 'en' ? 'en' : 'ru';
  return <>
    <header className="site-header">
      <div className="site-container nav-row">
        <Link to="/" className="brand" aria-label={t('nav.home')}><span className="brand-symbol">N<span>.</span></span><span>NURIK<span className="brand-dot">.DEV</span></span></Link>
        <nav className="desktop-nav" aria-label={t('nav.aria')}>
          {sections.map(id => <Link className={active === id && location.pathname === '/' ? 'active' : ''} to={`/#${id}`} key={id}>{t(`nav.${id}`)}</Link>)}
        </nav>
        <div className="nav-tools">
          <div className="language-switch" role="group" aria-label={t('nav.language')}>
            {(['ru','en'] as const).map(lang => <button type="button" key={lang} aria-pressed={activeLanguage === lang} className={activeLanguage === lang ? 'is-active' : ''} onClick={() => changeLanguage(lang)}>{lang.toUpperCase()}</button>)}
          </div>
          <button type="button" className="icon-btn" aria-label={theme === 'dark' ? t('nav.light') : t('nav.dark')} onClick={() => setTheme(value => value === 'dark' ? 'light' : 'dark')}>{theme === 'dark' ? <Sun size={17}/> : <Moon size={17}/>}</button>
          <Link className="resume-nav" to="/resume"><span>{t('nav.resume')}</span><ArrowUpRight size={16}/></Link>
          <button className="mobile-menu-btn icon-btn" type="button" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? t('nav.close') : t('nav.open')} onClick={() => setOpen(value => !value)}>{open ? <X size={21} /> : <Menu size={21}/>}</button>
        </div>
      </div>
    </header>
    {open && <button className="menu-overlay" type="button" onClick={() => setOpen(false)} aria-label={t('nav.close')} />}
    <nav id="mobile-nav" className={`mobile-nav ${open ? 'is-open' : ''}`} aria-label={t('nav.aria')} aria-hidden={!open}>
      {sections.map((id, i) => <Link onClick={() => setOpen(false)} tabIndex={open ? 0 : -1} to={`/#${id}`} key={id}><small>{String(i+1).padStart(2, '0')}</small>{t(`nav.${id}`)}<ArrowUpRight size={17}/></Link>)}
      <Link onClick={() => setOpen(false)} tabIndex={open ? 0 : -1} className="mobile-resume" to="/resume"><Download size={18}/>{t('nav.resume')}</Link>
    </nav>
  </>;
}
