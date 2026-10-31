import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Hero } from '../sections/Hero';
import { About } from '../sections/About';
import { Education } from '../sections/Education';
import { Achievements } from '../sections/Achievements';
import { Projects } from '../sections/Projects';
import { Experience } from '../sections/Experience';
import { GithubRepos } from '../components/GithubRepos';
import { Contact } from '../sections/Contact';

export default function HomePage() {
  const {t}=useTranslation();
  useEffect(()=>{document.title=`Nurislam Nurkamilov — ${t('hero.role')}`;},[t]);
  return <><Hero/><About/><Education/><Achievements/><Projects/><Experience/><GithubRepos/><Contact/></>;
}
