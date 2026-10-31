import { useEffect } from 'react';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Download, ExternalLink } from 'lucide-react';

export default function ResumePage() {
  const { t } = useTranslation();
  useEffect(() => { document.title = `${t('resume.title')} · NURIK.DEV`; }, [t]);
  return <section className="inner-page site-container resume-page"><Link className="go-back" to="/"><ArrowLeft size={17}/>{t('common.backHome')}</Link><div className="resume-page-heading"><div><span className="eyebrow">PDF / CV</span><h1>{t('resume.title')}</h1><p>{t('resume.pageDescription')}</p></div><div className="resume-page-buttons"><a href="/resume.pdf" download="Nurislam_Nurkamilov_CV.pdf" className="button-primary">{t('resume.download')} <Download size={17}/></a><a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="button-ghost">{t('resume.openPdf')} <ExternalLink size={17}/></a></div></div><div className="pdf-frame"><iframe title={t('resume.title')} src="/resume.pdf#toolbar=0&view=FitH" loading="lazy" /></div><p className="pdf-fallback">{t('resume.fallback')} <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">{t('resume.openPdf')}</a>.</p></section>;
}
