import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ru from '../locales/ru.json';
import en from '../locales/en.json';

export type Language = 'ru' | 'en';
const initialLanguage: Language = (() => {
  try { return window.localStorage.getItem('nurik:language') === 'en' ? 'en' : 'ru'; }
  catch { return 'ru'; }
})();

document.documentElement.lang = initialLanguage;
void i18n.use(initReactI18next).init({
  resources: { ru: { translation: ru }, en: { translation: en } },
  supportedLngs: ['ru', 'en'],
  lng: initialLanguage,
  fallbackLng: 'ru',
  interpolation: { escapeValue: false },
  returnNull: false,
  react: { useSuspense: false },
});

export function setLanguage(language: Language) {
  void i18n.changeLanguage(language);
  document.documentElement.lang = language;
  try { window.localStorage.setItem('nurik:language', language); } catch { /* storage optional */ }
}
export default i18n;
