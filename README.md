# Atlas Drive Forge

A showcase website for **Atlas Autoware** — a student-led autonomous vehicle team building self-driving technology with LiDAR, computer vision, and embedded systems.

## About Atlas Autoware

Atlas Autoware is a nonprofit organization run by high school students in Northern Virginia. We design, build, and test autonomous vehicles competing in international robotics competitions. Every component, from sensors to software, is engineered by our team members.

## Tech Stack

- **Frontend:** React 19, TypeScript, TailwindCSS
- **Routing:** TanStack Router
- **Build Tool:** Vite
- **Backend:** TanStack Start (SSR-enabled)
- **State Management:** TanStack React Query

## Getting Started

### Prerequisites

- Node.js 18+ or npm
- Git

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd atlas-drive-forge-main

# Install dependencies
npm install --legacy-peer-deps
```

### Running the Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:8080`

### Building for Production

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

## Project Structure

```
src/
├── routes/              # Page routes
│   ├── index.tsx       # Home page
│   ├── the-car.tsx     # The Car showcase
│   └── sponsors.tsx    # Sponsors/Donation page
├── components/         # Reusable UI components
│   └── ui/            # shadcn/ui components
├── lib/               # Utilities and helpers
├── assets/            # Images and static files
└── styles.css         # Global styles
```

## Pages

- **Home** (`/`) - Main landing page with project showcase
- **The Car** (`/the-car`) - Detailed breakdown of Atlas One autonomous vehicle
- **Sponsors** (`/sponsors`) - Support and sponsorship information

## Features

- Responsive design for all devices
- Dark mode optimized UI
- High-performance asset loading
- SSR support for better SEO

## Contributing

Contact us at contact@atlasautoware.org for contribution opportunities.

## License

See LICENSE file for details.

---

**Built by Atlas Autoware students** 🚗
