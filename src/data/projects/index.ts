/**
 * ADDING A NEW PROJECT:
 * 1. Add a new object here with a unique slug.
 * 2. Add translated summaries/details under projects.items.<slug> in kg/ru/en.json.
 * 3. Add a real screenshot under public/images/projects and set image: '/images/projects/name.webp'.
 * 4. Set liveUrl to your DEPLOYED site's https URL, and repositoryUrl if public.
 * 5. git add . && git commit -m "Add project" && git push — Vercel deploys automatically.
 *
 * No database/admin login required. Blank links do not render as clickable actions.
 */
export type Project = {
  slug: string;
  year: string;
  category: 'beauty' | 'commerce' | 'travel';
  status: 'practice' | 'prototype' | 'concept';
  stack: string[];
  image: string;
  liveUrl: string;
  repositoryUrl: string;
};

export const projects: Project[] = [
  {
    slug: 'el-bem-beauty', year: '2026', category: 'beauty', status: 'practice',
    stack: ['React', 'TypeScript', 'Vite', 'Firebase', 'i18next'],
    image: '', liveUrl: 'https://elbem-beauty.vercel.app/', repositoryUrl: '',
  },
  {
    slug: 'nurikbrand', year: '2026', category: 'commerce', status: 'prototype',
    stack: ['React', 'Vite', 'UI Components'],
    image: '', liveUrl: '', repositoryUrl: '',
  },
  {
    slug: 'abu-mobile', year: '2026', category: 'commerce', status: 'practice',
    stack: ['Frontend', 'E-commerce', 'UI/UX'],
    image: '', liveUrl: 'https://abumobile.vercel.app/', repositoryUrl: '',
  },
  {
    slug: 'madina-uzgen', year: '2026', category: 'commerce', status: 'practice',
    stack: ['Frontend', 'E-commerce', 'UI/UX'],
    image: '', liveUrl: 'https://madina-shop-website.vercel.app/', repositoryUrl: '',
  },
  {
    slug: 'konok-kg', year: '2026', category: 'travel', status: 'concept',
    stack: ['React', 'TypeScript', 'i18n'],
    image: '', liveUrl: '', repositoryUrl: '',
  },
];

// Only HTTPS (and http://localhost for local testing) links are exposed to visitors.
export function safeExternalUrl(url: string): string | undefined {
  if (!url) return undefined;
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'https:' || (parsed.protocol === 'http:' && parsed.hostname === 'localhost') ? url : undefined;
  } catch {
    return undefined;
  }
}
