import { useEffect, useRef, useState } from 'react';
import type { PointerEvent } from 'react';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight, Download, Eye, FileText } from 'lucide-react';

const previewPages = ['/images/resume/page-1.webp', '/images/resume/page-2.webp'];

export function ResumeFlip() {
  const { t } = useTranslation();
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);
  const paper = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (paused || media.matches || document.visibilityState === 'hidden') return;
    const interval = window.setInterval(() => setPage(prev => (prev + 1) % previewPages.length), 5300);
    return () => window.clearInterval(interval);
  }, [paused]);
  function changePage(dir: number) { setPage(prev => (prev + dir + previewPages.length) % previewPages.length); }
  function move(e: PointerEvent<HTMLDivElement>) {
    if (e.pointerType === 'touch' || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5;
    const y = (e.clientY - r.top) / r.height - .5;
    paper.current?.style.setProperty('--rotate-y', `${(x * 7).toFixed(2)}deg`);
    paper.current?.style.setProperty('--rotate-x', `${(-y * 6).toFixed(2)}deg`);
  }
  function reset() {
    setPaused(false);
    paper.current?.style.setProperty('--rotate-y', '0deg');
    paper.current?.style.setProperty('--rotate-x', '0deg');
  }
  return <div className="resume-hero-wrap" onMouseEnter={() => setPaused(true)} onMouseLeave={reset} onFocusCapture={() => setPaused(true)} onBlurCapture={e => { if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false); }} onPointerMove={move}>
    <div className="resume-paper" ref={paper} aria-label={t('hero.cvLabel')}>
      <Link to="/resume" className="resume-paper-link" aria-label={t('hero.openResume')}>
        {previewPages.map((src, index) => <img key={src} src={src} alt={t('hero.cvPage', { number: index + 1 })} className={`resume-paper-page ${index === page ? 'is-active' : ''}`} width="595" height="842" loading={index === 0 ? 'eager' : 'lazy'} />)}
      </Link>
      <div className="resume-paper-actions">
        <Link to="/resume" className="resume-action" aria-label={t('hero.openResume')}><Eye size={16}/>{t('hero.previewResume')}</Link>
        <a href="/resume.pdf" download="Nurislam_Nurkamilov_CV.pdf" className="resume-action" aria-label={t('resume.download')}><Download size={16}/>{t('hero.downloadResume')}</a>
      </div>
    </div>
    <div className="resume-preview-controls" aria-label={t('hero.cvLabel')}>
      <button type="button" onClick={() => changePage(-1)} aria-label={t('hero.prevPage')}><ChevronLeft size={17}/></button>
      <span><FileText size={13}/> {page + 1} / {previewPages.length}</span>
      <button type="button" onClick={() => changePage(1)} aria-label={t('hero.nextPage')}><ChevronRight size={17}/></button>
    </div>
  </div>;
}
