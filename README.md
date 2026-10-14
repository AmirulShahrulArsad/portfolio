# Amirul Shahrul — Digital Marketing Portfolio

A complete static portfolio, redesigned from the supplied mint-green reference, built from scratch with Next.js App Router, TypeScript, Tailwind CSS, Motion for React, and Lucide. All content comes from the supplied brief. Approved client screenshots and the actual resume PDF were not supplied.

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
2. Use the repository root as the Root Directory. The root `vercel.json` supplies the Next.js preset, `npm ci` install command, `npm run build` build command, and `out` output directory. The nested `My-Portfolio-main` folder is the previous portfolio and is excluded from CLI uploads.
3. Set `NEXT_PUBLIC_SITE_URL` to the final production origin, for example `https://your-domain.com`, without a trailing slash.
4. Deploy. If the domain changes, update the variable and redeploy.

The site needs no backend, database, credentials, or paid integrations. Other static hosts can serve `out/`; enable directory-index routing for paths such as `/work/stepwise/`.

## Edit content

- `src/data/profile.ts`: name, contact URLs, introduction, summary.
- `src/data/projects.ts`: all seven typed case studies, gallery assets, contributions, optional project and GitHub URLs.
- `src/data/experience.ts`: internship dates and grouped responsibilities.
- `src/data/skills.ts`: capabilities and toolkit.
- `src/app/about/page.tsx`: education and co-curricular history.
- `src/app/globals.css`: the six supplied palette tokens, glass surfaces, ribbons, responsive layout, and hover effects.
- `src/components/Backdrop.tsx`: decorative SVG ribbons and animated CSS spheres.
- `src/components/Visual.tsx`: shared blank-image renderer; renders Next Image when a real image path is provided.

The internship dates are supplied as March 2026 – Present and should be updated when necessary. Software Engineering remains the academic background; Digital Marketing is the primary career focus.

## Assets and content integrity

All portrait and project-image areas are deliberately blank. To add approved project images, put them in `public/images/work/`, set the matching gallery `src` in `src/data/projects.ts`, and update captions and alt text. The shared Visual component automatically renders the image instead of the blank area. Do not publish proprietary client information.

Objectives, process details, outcomes, and personal learnings are pending where the brief did not provide them. Do not add invented metrics, budget ownership, client testimonials, or unsupported tool integrations. Dashboard-specific tool use remains pending confirmation. The StepWise recognition is the documented Best Presenter, Ie-RIICH 12th, 2026.

No resume button is shown. Add the actual PDF under `public/resume/` before adding a download link. No portrait was supplied; the homepage and About page have empty portrait frames.

## Routes and interactions

Home, About, Work, Experience, Contact, seven statically generated case studies, and a custom 404. Project filtering updates locally. Case studies include previous/next navigation. The native-dialog lightbox supports Escape, left/right arrows, focus trapping, captions, and close/previous/next buttons. Navigation has current-page indicators, mobile menu, visible keyboard focus, and a skip link. Motion respects reduced-motion settings. Additional effects include scroll reveals, floating spheres, glossy button highlights, elevated tool/project cards, a glass mobile menu, and animated filter changes. The complete toolkit is accessible through a native expandable details section.

## SEO and images

Global and project-specific metadata, Open Graph copy, semantic page structure, `robots.txt`, and `sitemap.xml` are included. Set `NEXT_PUBLIC_SITE_URL` before the production build; sitemap is intentionally empty without a confirmed domain. The Visual component uses Next Image for any approved images added later. Static export disables Next's runtime image optimizer. Optimize replacement raster images before committing, or configure a compatible image loader if needed.

## Verification

See `VERIFICATION.md` for the checks performed in the build environment. The latest reference image and palette guided the redesign: #051F20, #0B2B26, #163832, #235347, #8EB69B, #DAF1DE. Manrope and Caveat are served locally from Fontsource packages. No personal information, project contributions, or documented recognition was changed.
