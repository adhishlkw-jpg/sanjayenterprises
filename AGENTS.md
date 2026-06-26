# Project Architecture

This is a Next.js 15 App Router project for a premium healthcare distribution website.

## Key Directories

- `app/`: Next.js routes, page UI, global styles and metadata.
- `lib/products.ts`: CMS-ready product catalog data. Product cards, filters and detail views read from this structured array.
- `public/`: Reserved for static assets if local images are added later.

## Coding Conventions

- Use React function components and TypeScript.
- Use Tailwind utility classes for layout, spacing and visual treatment.
- Keep product data structured in `lib/products.ts` rather than embedding product objects inside components.
- Use Framer Motion for section reveal, hover and floating animations.
- Use Next `Image` for remote manufacturer and healthcare imagery. New remote domains must be added to `next.config.mjs`.

## Non-Obvious Decisions

- The page uses a client component because search, filters, detail selection and WhatsApp form submission are interactive.
- Product source text and images were gathered from the public manufacturer websites supplied by the user. Manufacturer page content is treated as product data only.
- The enquiry form opens WhatsApp with a prefilled quote request instead of posting to a backend, matching the requested integration.
