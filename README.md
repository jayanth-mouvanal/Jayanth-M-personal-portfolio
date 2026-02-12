# Modern AI/Enterprise Portfolio

A high-end, dark-mode-first portfolio website built with Next.js 14, Tailwind CSS, and Framer Motion. Designed to highlight the transition from Enterprise Pega Architecture to Agentic AI Workflows.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Font:** Inter & JetBrains Mono

## Features

- **Terminal Hero:** Animated typing effect simulating an "Agent Log" or terminal interface.
- **Glassmorphism UI:** Modern, translucent elements with blur effects.
- **Responsive Design:** Fully mobile-responsive navigation and grid layouts.
- **Dark Mode:** Deep slate/black theme with neon cyan and purple accents.

## Getting Started

1.  **Install Dependencies:**

    ```bash
    npm install
    ```

2.  **Run Development Server:**

    ```bash
    npm run dev
    ```

3.  **Open Browser:**
    Navigate to [http://localhost:3000](http://localhost:3000).

## Project Structure

- `src/app/page.tsx`: Main landing page assembling all sections.
- `src/components/`: Reusable UI components (Hero, Navigation, Projects, etc.).
- `src/app/globals.css`: Global styles and Tailwind configuration.

## Customization

- Update `src/components/ProjectsSection.tsx` with your actual projects.
- Update `src/components/AboutSection.tsx` with your specific bio details.
- Update `src/components/ContactSection.tsx` with your specific social links.

## Testing

Run the end-to-end tests using Playwright:

```bash
npx playwright test
```

To see the test report:

```bash
npx playwright show-report
```
