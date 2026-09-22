# Cinematic3D Estate

Production-oriented Next.js PropTech foundation for luxury real-estate cinematic walkthroughs.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Video

Place the final cinematic video at:

`public/videos/video-cinematic.mp4`

The app ships with an SVG poster so the experience is still testable before the final video is added.

## Lead API

`POST /api/leads` validates name, phone, email and current cinematic scene. Replace the console persistence with your CRM/database integration.

## Architecture

- App Router
- GSAP + ScrollTrigger video scrubbing
- Lenis smooth scroll
- Data-driven property scenes
- Responsive cinematic UI
- Lead capture modal + API route
- Amenities/specification sections
