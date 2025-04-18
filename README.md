# Domain Driven Design WebApp PoC

## Problem

- Codebases for commercial products maintain a complex state machine to support the business logic:
  - Features launch with tier-specific behaviors: Enterprise customers get the real thing, Families get a subset, Free users get a painted door.
  - Dashboards depend on a web of data sources, all varying by customer type or persona — and still expected to feel fast.
  - Components ask for a slice of data but get handed massive blobs, rerendering unnecessarily, hurting both frontend performance and backend efficiency.
  - The underlying state logic must be bulletproof, so it requires 100% unit test coverage to feel safe to touch.
- Even though there's a lot of business logic that's very important to the customer, the codebase is not treating it as a first-class citizen:
  - Instead it's organized around a few main data pipelines and major components
  - Or around "universal functions" that sit on the data pipeline and only every grow in size with conditional transformations of the data to meet the needs of unrelated features, making developers dizzy from how many seemingly random places they need to modify to get a feature working.
- Pushed into implementing features by yesterday developers introduce antipatterns:
  - Prop-drilling
  - Mixing data-fetching, logic, and UI in the same file
  - Skipping unit testing
- Creators of the codebase leave and it's up to the generations to come to maintain it
  - Onboarding is slow, tracing and untangling one feature at a time, documentation is out of date or non-existent
  - Large refactors require a lot of investigation and preparation to avoid regressions

## Solution

Form a strong, consistent opinion around a single core principle that governs the entire codebase: every screen and feature is built around explicit UX states, typed and shared across the app.

That means:
- TypeScript types map 1:1 to meaningful user experience states — loading, success, empty, error, gated, etc.
- Presentation, logic, and data fetching are decoupled, all unified by the UX state structure.
- Once you learn the pattern, you can read or build any feature.

It’s not boilerplate — it’s orientation.

Added bonus:
Because of the predictable structure, this architecture plays incredibly well with AI assistants (more than half of this codebase is AI-generated):

After creating the main feature, my local model generated the login feature almost entirely on it's own.
That means that you get to focus on architecure and design - a small model that can run on your laptop can do the heavy lifting

### Design Decisions

```bash
.
├── app
│   └── store.ts
├── App.css
├── App.tsx
├── features
│   ├── login
│   │   ├── api
│   │   │   └── mockLogin.ts
│   │   ├── components
│   │   │   └── LoginPage.tsx
│   │   ├── state
│   │   │   └── loginPageSlice.ts
│   │   ├── types
│   │   │   └── loginTypes.ts
│   │   └── viewmodels
│   │       ├── useLoginActions.ts
│   │       └── useLoginViewModel.ts
│   └── main
│       ├── api
│       │   └── mockAPI.ts
│       ├── components
│       │   └── MainPage.tsx
│       ├── state
│       ├── types
│       │   └── mainTypes.ts
│       └── viewmodels
│           ├── useMainPageInputs.ts
│           ├── useMainPageMutations.ts
│           └── useMainPageViewModel.ts
├── index.css
├── main.tsx
├── shared
│   └── utils
│       └── typeHelpers.ts
└── vite-env.d.ts
```

The Directories:

- features: Promotes modularity and ownership per feature
- components: UI stays dumb — no logic inside
- viewmodels: Encapsulates logic/state separation from UI
- state: Centralized Redux slice and selectors
- api: Easy to swap mock / real services

Features:

- Full separation of concerns
- Clean testing (unit test the ViewModel without UI or Redux)
- Safe Redux state transitions with TypeScript

Explore on your own, starting with fully modular and type-safe Login Page:

- loginPageSlice.ts: Redux slice with discriminated union state
- useLoginActions.ts: Logic for deciding login result and dispatching
- useLoginViewModel.ts: Local component state and event handling
- LoginPage.tsx: Pure presentational component that renders the view model

## Stack

- [Vite](https://vite.dev/)
- React
- TypeScript
- [Tan Stack Query](https://tanstack.com/query)

## Environment

- Node.js v22.2.0 (in .nvmrc)

## How this was made

cwd: your gits directory

```bash
npm create vite@latest
cd domain-driven-design-app
v22.2.0 > .nvmrc
npm install
npm run dev
```

#### installing Tan Stack Query:

```bash
npm install --save @tanstack/react-query@4
```

error, need to downgrade React to v18:

```bash
npm error Could not resolve dependency:
npm error peer react@"^16.8.0 || ^17.0.0 || ^18.0.0" from @tanstack/react-query@4.36.1
```

```bash
npm install --save react@18 react-dom@18
```

#### installing Tan Stack Query ESLint Plugin

```bash
npm i -D @tanstack/eslint-plugin-query@4
```

error, need to downgrade eslint to v8:

```bash
npm error Could not resolve dependency:
npm error peer eslint@"^6.0.0 || ^7.0.0 || ^8.0.0" from @tanstack/eslint-plugin-query@4.38.0
```

```bash
npm install --save-dev eslint@8
npm i -D @tanstack/eslint-plugin-query@4
```

#### installing React Router

```bash
npm install --save react-router
npm install --save react-router-dom
```

#### installing Redux

```bash
npm install --save @reduxjs/toolkit
npm install --save react-redux
```
