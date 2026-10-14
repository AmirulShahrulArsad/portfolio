# Amirul Shahrul — Digital Marketing Portfolio

A complete static portfolio built from scratch with Next.js App Router, TypeScript, Tailwind CSS, Motion for React, and Lucide. All content comes from the supplied brief. Approved client screenshots and the actual resume PDF were not supplied.

## Run locally

Requires Node.js 20.9 or newer (Node.js 24 recommended).

```sh
npm ci
npm run dev
```

Visit http://localhost:3000. For verification:

```sh
npm run lint
npm run typecheck
npm run build
```

The build exports all pages into `out/`. To preview the production export, use a static server such as `npx serve out`. `next start` does not serve a static export.

## Deploy to Vercel

1. Commit the source to a Git repository and import it in Vercel.
2. Choose the Next.js preset. Build command: `npm run build`; output directory: `out`.
3. Set `NEXT_PUBLIC_SITE_URL` to the final production origin, for example `https://your-domain.com`, without a trailing slash.
4. Deploy. If the domain changes, update the variable and redeploy.

The site needs no backend, database, credentials, or paid integrations. Other static hosts can serve `out/`; enable directory-index routing for paths such as `/work/stepwise/`.

## Edit content

- `src/data/profile.ts`: name, contact URLs, introduction, summary.
- `src/data/projects.ts`: all seven typed case studies, gallery assets, contributions, optional project and GitHub URLs.
- `src/data/experience.ts`: internship dates and grouped responsibilities.
- `src/data/skills.ts`: capabilities and toolkit.
- `src/app/about/page.tsx`: education and co-curricular history.
- `src/app/globals.css`: design tokens, editorial layout, responsive behavior.

The internship dates are supplied as March 2026 – Present and should be updated when necessary. Software Engineering remains the academic background; Digital Marketing is the primary career focus.

## Assets and content integrity

The locally supplied SVG covers are abstract illustrative graphics, visibly labeled as not project screenshots. Gallery entries are explicitly labeled placeholders. Replace them with authorized, sanitized real project materials and update their captions and alt text. Do not publish proprietary client information.

Objectives, process details, outcomes, and personal learnings are pending where the brief did not provide them. Do not add invented metrics, budget ownership, client testimonials, or unsupported tool integrations. Dashboard-specific tool use remains pending confirmation. The StepWise recognition is the documented Best Presenter, Ie-RIICH 12th, 2026.

No resume button is shown. Add the actual PDF under `public/resume/` before adding a download link. No portrait was supplied; the About page uses a typographic identity panel.

## Routes and interactions

Home, About, Work, Experience, Contact, seven statically generated case studies, and a custom 404. Project filtering updates locally. Case studies include previous/next navigation. The native-dialog lightbox supports Escape, left/right arrows, focus trapping, captions, and close/previous/next buttons. Navigation has current-page indicators, mobile menu, visible keyboard focus, and a skip link. Motion respects reduced-motion settings.

## SEO and images

Global and project-specific metadata, Open Graph copy, semantic page structure, `robots.txt`, and `sitemap.xml` are included. Set `NEXT_PUBLIC_SITE_URL` before the production build; sitemap is intentionally empty without a confirmed domain. Next Image is used throughout. Static export disables Next's runtime image optimizer; SVG placeholders are lightweight. Optimize replacement raster images before committing, or configure a compatible image loader if needed.

## Verification

See `VERIFICATION.md` for the checks performed in the build environment. The Behance reference could not be accessed; the supplied palette and editorial design requirements guided the implementation.
