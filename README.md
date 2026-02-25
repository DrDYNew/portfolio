# MyPortfolio

A modern, responsive personal portfolio website built with **Next.js 14+**, **TypeScript**, and **Tailwind CSS**.

## Features

- Hero section with CTA buttons
- About section with personal info
- Skills section organized by category
- Projects showcase with demo & GitHub links
- Contact section with form and social links
- Responsive design for all screen sizes
- Smooth scroll navigation

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Geist (by Vercel)

## Project Structure

```
portfolio/
 app/
    globals.css
    layout.tsx
    page.tsx
 components/
    Navbar.tsx
    Hero.tsx
    About.tsx
    Skills.tsx
    Projects.tsx
    Contact.tsx
    Footer.tsx
 public/
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Customization

Update the placeholder content in each component with your own information:

- **Hero.tsx**  Your name and tagline
- **About.tsx**  Bio, location, email
- **Skills.tsx**  Your tech stack
- **Projects.tsx**  Your real projects with links
- **Contact.tsx**  Your contact details
- **Footer.tsx**  Social links

## Build for Production

```bash
npm run build
npm start
```
