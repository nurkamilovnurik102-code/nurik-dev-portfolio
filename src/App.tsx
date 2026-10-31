import { Routes, Route, Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import { ArrowLeft } from 'lucide-react';
import { SiteChrome } from './components/SiteChrome';
import HomePage from './pages/HomePage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ResumePage from './pages/ResumePage';
import AchievementsPage from './pages/AchievementsPage';

export default function App() {
  const { t } = useTranslation();
  return <SiteChrome><Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/projects/:slug" element={<ProjectDetailPage/>}/>
    <Route path="/resume" element={<ResumePage/>}/>
    <Route path="/achievements" element={<AchievementsPage/>}/>
    <Route path="*" element={<section className="inner-page site-container"><h1>{t('common.notFound')}</h1><Link to="/" className="button-primary">{t('common.backHome')} <ArrowLeft size={18}/></Link></section>}/>
  </Routes></SiteChrome>;
}
