/**
 * Only user-confirmed achievement categories. Exact places/dates remain unspecified.
 * Add a new ID here, then its RU and EN texts in src/locales/*.json.
 * Optional evidence: image path /images/achievements/name.webp and HTTPS link.
 */
export type Achievement = {
  id: string;
  icon: 'code' | 'award' | 'graduation' | 'trophy' | 'palette';
  period?: string;
  image?: string;
  link?: string;
};
export const achievements: Achievement[] = [
  { id: 'wrestling', icon: 'trophy' },
  { id: 'olympiads', icon: 'award' },
  { id: 'creative', icon: 'palette' },
  { id: 'frontendTraining', icon: 'graduation' },
];
