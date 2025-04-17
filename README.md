# Domain Driven Design WebApp PoC

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
├── tsconfig.json
└── vite-env.d.ts

The Directories:

```
features: Promotes modularity and ownership per feature
components: UI stays dumb — no logic inside
viewmodels: Encapsulates logic/state separation from UI
state: Centralized Redux slice and selectors
api: Easy to swap mock / real services
```

Features:

- Full separation of concerns
- Clean testing (unit test the ViewModel without UI or Redux)
- Safe Redux state transitions with TypeScript

Explore on your own, starting with fully modular and type-safe Login Page:

- loginPageSlice.ts: Redux slice with discriminated union state
- useLoginActions.ts: Logic for deciding login result and dispatching
- useLoginViewModel.ts: Local component state and event handling
- LoginPage.tsx: Pure presentational component that renders the view model
