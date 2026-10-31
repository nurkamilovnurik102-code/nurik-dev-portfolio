import { useTranslation } from 'react-i18next';

export function SectionHeading({ eyebrow, title, description, centered = false }: { eyebrow: string; title: string; description?: string; centered?: boolean }) {
  const { t } = useTranslation();
  return <div className={`section-heading ${centered ? 'text-center mx-auto' : ''}`}>
    <span className="eyebrow"><span className="eyebrow-line" />{t(eyebrow)}</span>
    <h2 className="section-title">{t(title)}</h2>
    {description && <p className="section-description">{t(description)}</p>}
  </div>;
}
