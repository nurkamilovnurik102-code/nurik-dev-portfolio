/** Public profile fields. Review before publishing contact details. */
export const profile = {
  fullName: 'Nurislam Nurkamilov',
  initials: 'NN',
  github: 'https://github.com/nuriswv',
  githubUsername: 'nuriswv',
  email: 'nurkamilovnurik102@gmail.com',
} as const;

/**
 * Instagram and Telegram have not been provided. Add *your real profile links*
 * here to activate the corresponding contact cards, e.g. https://instagram.com/yourname
 * Never insert someone else's account or an invented handle.
 * WhatsApp uses the contact number previously provided for the CV.
 */
export const socialProfiles = {
  whatsapp: 'https://wa.me/996224201530',
  instagram: 'https://www.instagram.com/nuriswv',
  github: profile.github,
  telegram: 'https://t.me/.nuriswv01',
};

export const education = ['school77', 'nariman', 'bilim', 'kalnazarov'] as const;
export const skillGroups = {
  frontend: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Vite'],
  interfaces: ['Responsive Design', 'React Router', 'Tailwind CSS', 'i18next', 'UI/UX'],
  tooling: ['Git', 'GitHub', 'VS Code', 'Vercel', 'REST API', 'AI Tools'],
} as const;
