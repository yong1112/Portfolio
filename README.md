# Portfolio Website

Academic portfolio for PhD applicant focused on human-centred AI in education.

## Structure

```
src/
├── components/     # Reusable UI components
│   ├── Navbar.tsx
│   └── StarField.tsx
├── pages/          # Page components
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Blog.tsx
│   └── Contact.tsx
├── data/           # Content data
│   └── projects.ts
├── App.tsx         # Main app with routing
├── main.tsx        # Entry point
└── index.css       # Global styles
```

## Tech Stack

- React 18 + TypeScript
- Ant Design (UI components)
- React Router (navigation)
- Vite (build tool)

## Colors

- White: #FFFFFF (background)
- Red: #9A0000 (primary accent)
- Black: #090809 (text)

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
