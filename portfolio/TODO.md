# TODO: Optimize Next.js Portfolio for Speed

## Steps to Complete
- [ ] Configure Tailwind purge paths in postcss.config.mjs or add content paths for better optimization.
- [ ] Implement dynamic imports for large components (Navbar, Footer, ProjectCard, SkillBadge) to reduce initial bundle size.
- [ ] Add lazy loading for images and animations where possible.
- [ ] Defer non-critical scripts and optimize loading.
- [ ] Clean unused packages from package.json.
- [ ] Add Next.js optimizations in next.config.ts (image optimization, compression).
- [ ] Test bundle size reduction and Lighthouse scores.

## Notes
- Current bundle likely large due to framer-motion animations and client-side components.
- No external images in projects, only avatar.jpg which is already optimized with Next.js Image.
- No external scripts detected.
- Potential unused packages: check @shadcn/ui usage.
- Goal: reduce bundle size, speed up load, achieve >90 Lighthouse performance.
