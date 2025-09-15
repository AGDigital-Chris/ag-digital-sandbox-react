# AG Digital Sandbox - React Edition

A modern, responsive portfolio site built with React, TypeScript, and Tailwind CSS using atomic design principles.

## 🚀 Live Demo

Visit the live site: [https://AGDigital-Chris.github.io/ag-digital-sandbox-react](https://AGDigital-Chris.github.io/ag-digital-sandbox-react)

## 🏗️ Architecture

This project follows **Atomic Design** methodology with a modern tech stack:

### 📁 Project Structure

```
src/
├── components/
│   ├── atoms/           # Basic building blocks
│   │   ├── Button.tsx
│   │   ├── Badge.tsx
│   │   ├── AnimatedBadge.tsx
│   │   └── Card.tsx
│   ├── molecules/       # Simple component groups
│   │   ├── ProjectCard.tsx
│   │   └── Navigation.tsx
│   ├── organisms/       # Complex UI components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   ├── About.tsx
│   │   └── Footer.tsx
│   ├── templates/       # Page layouts
│   └── pages/          # Full pages
├── types/              # TypeScript definitions
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
└── styles/             # Global styles
```

## 🛠️ Tech Stack

- **React 19** - Latest React with concurrent features
- **TypeScript** - Type safety and better developer experience
- **Vite** - Fast build tool and dev server
- **Tailwind CSS v4** - Utility-first CSS framework
- **Atomic Design** - Scalable component architecture

## 🎨 Design System

### Atomic Components

- **Atoms**: Button, Badge, Card, AnimatedBadge
- **Molecules**: ProjectCard, Navigation
- **Organisms**: Header, Hero, Projects, About, Footer

### Color Palette

- **Primary**: Blue gradient (50-900)
- **Secondary**: Gray scale (50-900)
- **Accent**: Red gradient (50-900)

### Typography

- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

## 🚀 Development

### Prerequisites

- Node.js 18+
- npm 8+

### Setup

```bash
# Clone the repository
git clone https://github.com/AGDigital-Chris/ag-digital-sandbox-react.git

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## 🎯 Features

- **Responsive Design** - Works on all devices
- **Modern Animations** - Smooth transitions and effects
- **Type Safety** - Full TypeScript support
- **Component Reusability** - Atomic design principles
- **Performance Optimized** - Vite build system
- **Accessibility** - WCAG compliant components

## 📱 Components Showcase

### Animated Badge
Exclusive animated badge with blue and red shine effect:
```tsx
<AnimatedBadge 
  text="EXCLUSIVE TO"
  highlightText="ag"
  variant="blue-red"
/>
```

### Project Cards
Responsive project showcase with technology tags:
```tsx
<ProjectCard 
  project={{
    title: "Project Name",
    description: "Project description",
    technologies: ["React", "TypeScript"],
    demoUrl: "/demo",
    codeUrl: "/code"
  }}
/>
```

## 🚀 Deployment

### GitHub Pages (Automatic)

The project is configured for automatic deployment via GitHub Actions:

1. Push to `main` branch
2. GitHub Actions builds and deploys automatically
3. Site available at `https://AGDigital-Chris.github.io/ag-digital-sandbox-react`

### Manual Deployment

```bash
npm run deploy
```

## 🔧 Customization

### Adding New Components

1. **Atoms**: Create in `src/components/atoms/`
2. **Molecules**: Combine atoms in `src/components/molecules/`
3. **Organisms**: Build complex UI in `src/components/organisms/`

### Styling

- Use Tailwind utility classes
- Extend theme in `tailwind.config.js`
- Add custom components in `src/index.css`

### Adding Projects

Update the `projects` array in `src/components/organisms/Projects.tsx`:

```tsx
const projects: Project[] = [
  {
    id: 'new-project',
    title: 'New Project',
    description: 'Project description',
    technologies: ['React', 'TypeScript'],
    demoUrl: '/demo',
    codeUrl: '/code',
    featured: false
  }
];
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Contact

- **GitHub**: [@AGDigital-Chris](https://github.com/AGDigital-Chris)
- **Repository**: [AG Digital Sandbox React](https://github.com/AGDigital-Chris/ag-digital-sandbox-react)

---

⭐ If you found this project helpful, please give it a star!