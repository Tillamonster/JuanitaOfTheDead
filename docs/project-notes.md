# The Bells of Pajaro Website

## Project Goal

Launch a minimum viable website for *The Bells of Pajaro / Juanita of the Dead*. Prioritize a reliable visitor experience and a straightforward way to read the graphic novel. Avoid adding features that are not necessary for launch.

## Current Status

**Working foundation**
- Next.js website runs locally.
- Git repository is connected to GitHub.
- Home page includes the hero, book-purchase link, Episodes link, Explore the World link, and Seed Vault link.
- Navigation has been simplified to three links: Episodes, Explore the World, and About.
- Episodes landing page exists at `/episodes` and reuses the existing episode-card components.
- Individual episode routes exist at `/episodes/[slug]`.
- World, maps, character, and Seed Vault pages exist.

**Latest verified GitHub checkpoint**
- Commit: `7875341`
- Message: `MVP: Add Episodes landing page and simplify navigation`
- At the last Git status check, the working tree was clean and the commit had been pushed to GitHub.

## MVP Scope

### Required
1. Working navigation and essential links.
2. An Episodes landing page.
3. A usable graphic-novel reader that displays finished comic pages in sequence.
4. Essential project information and a working book-purchase link.
5. Usable mobile and desktop layouts.
6. A successful production build and deployment to Vercel.
7. Verification of the live website and custom domain.

### Deferred
- Separate Archive and Gallery destinations.
- Elaborate animations and reader effects.
- Panel-by-panel editing or composition tools.
- Additional world-building features that are not needed for launch.

## Next Task

**Build the basic image-based episode reader.**

The current episode page displays a banner, title, description, sample prose, and previous/next episode links. Replace the sample prose with vertically scrolling finished comic-page images.

The existing files `public/images/episode1.png`, `episode2.png`, and `episode3.png` are complete placeholder comic pages. They will eventually be replaced with the real artwork.

Before implementing the reader, establish a simple, maintainable way to associate each episode with its ordered page images. Preserve the existing episode routes and navigation wherever practical.

## Known Follow-Up Items

- Create or otherwise resolve the missing `/about` route so the navigation does not lead to a 404.
- Replace placeholder episode descriptions with approved content.
- Review responsive navigation and page layouts.
- Correct minor CSS class typos when encountered during relevant work.
- Verify all essential links and image paths.
- Run the production build and complete launch checks.

## Working Rules

- Use an MVP-first approach.
- Inspect existing code before changing it.
- Reuse working components instead of rebuilding them.
- Make small, testable changes.
- Verify changes locally before committing.
- Commit and push meaningful checkpoints to GitHub.
- Flag potential scope creep and defer nonessential features.

## Resume Here

Start by checking `git status`. Then inspect `data/episodes.ts` and implement the simplest reusable page-image structure for the episode reader. Test the reader with the existing placeholder images before expanding the content system.