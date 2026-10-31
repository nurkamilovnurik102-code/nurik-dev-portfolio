# NURIK.DEV — Frontend Portfolio (v3)

Personal portfolio website built with React + Vite + TypeScript + Tailwind CSS, React Router and react-i18next. Two interface languages: Russian and English. The layout follows an editorial single-page structure with project details, achievements, and PDF CV view. No database and no admin panel.

## Running locally

1. Open the **nurik-dev-portfolio** folder in VS Code.
2. Run `npm install` (internet connection needed for the initial install).
3. Run `npm run dev` and open the localhost address displayed by Vite.
4. Run `npm run build` before publishing to Vercel.

### Main pages

- `/` — hero + flipping CV preview, biography, education, achievements, projects, experience, live GitHub repos, contacts.
- `/resume` — full embedded PDF with download/open buttons.
- `/achievements` — the full achievements list.
- `/projects/:slug` — individual project information.

## Add a new project without admin or database

1. Add a unique project object in `src/data/projects/index.ts` (`slug`, `year`, `category`, `status`, `stack`, `image`, `liveUrl`, `repositoryUrl`).
2. Add translated `title`, `summary`, `detail` to `projects.items.<slug>` in **both** `src/locales/ru.json` and `src/locales/en.json`.
3. Put a real optimized project screenshot (WebP preferred) in `public/images/projects/`, e.g. `public/images/projects/my-project.webp` and set `image: '/images/projects/my-project.webp'`.
4. Set `liveUrl` only to the genuine deployed website; use `repositoryUrl` for a public GitHub repository. Empty links simply do not render as active links. For cards: the round arrow opens the live site if configured; otherwise it opens the local project details page.
5. `git add . && git commit -m "Add portfolio project" && git push`. When GitHub is connected to Vercel, a successful build deploys the updated site automatically.

Data is stored in code and included in the Vercel build. Editing local files does **not** update the published site until deployed.

## Add achievements

1. Add an object with a unique `id` and supported `icon` in `src/data/achievements/index.ts`.
2. Add `category`, `title`, and `description` in both language JSON files under `achievements.items.<id>`.
3. Optionally add authentic `image` and `link` evidence (only confirmed achievements). Keep unverified dates, awards and placements unspecified rather than inventing them.

Current achievements: wrestling, school olympiads, creative/international events, and Frontend training. The detailed page is automatic.

## Social cards and email

Edit `src/data/profile.ts`. WhatsApp currently uses the contact number **+996 224 201 530**, already provided in the resume; GitHub is `https://github.com/nuriswv`.

Your Instagram and Telegram profile URLs have not yet been supplied. Set `socialProfiles.instagram` and `socialProfiles.telegram` to your genuine HTTPS account links (such as `https://instagram.com/YOUR_USERNAME` or `https://t.me/YOUR_USERNAME`). Until then those two cards are visibly unavailable rather than directing visitors to the wrong accounts. The email link works with `mailto:`.

## Resume

`public/resume.pdf` is the two-page CV shown inside the site. Replace it with an updated PDF when necessary. The hero previews `public/images/resume/page-1.webp` and `page-2.webp` are static snapshots of the PDF: regenerate them after replacing the resume. The snapshots in this version match the bundled PDF. The previously displayed school-grade line has been removed from the bundled copy of the CV.

## Localization

- Russian: `src/locales/ru.json`
- English: `src/locales/en.json`
- Header features visible RU / EN controls; selection is saved to localStorage and updates page text and SEO description.
- When adding new text, use `t('section.key')` and add matching translation keys in *both* JSON files. Technical names (React, GitHub, brand names) stay unchanged.

## Design and accessibility

Editorial light/navy-blue palette with optional dark mode, subtle ambient backgrounds, button and card micro-interactions, accessible focus rings, scroll reveal and reduced-motion support. The CV uses a subtle hover tilt on fine pointers, and mobile shows tappable preview controls.

Breakpoints are handled in `src/styles/responsive.css` and `src/styles/polish.css` for desktop, tablet, and mobile. Fonts load through Google Fonts with local system fallbacks.

## API and error states

The GitHub section uses the public REST API to fetch a small set of public repositories. It includes skeleton loading, empty and retry/error states, handles fetch cancellation on unmount, and shows repository data as returned by GitHub. No private token is embedded.

## Technical validation note

Static TypeScript/TSX syntax and Russian/English key parity were checked when assembling this archive. Full npm install / build / browser validation may require your machine: the package registry was unreachable in the creating environment. Do not deploy without running `npm install`, `npm run build`, and checking mobile layouts and outgoing links.
