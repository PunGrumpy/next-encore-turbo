# 🐌 Next.js 15 + Encore.ts Turborepo Template

A modern full-stack monorepo template featuring Next.js 15, Encore.ts, and shadcn/ui. Built with TypeScript and TailwindCSS, offering a robust foundation for building type-safe web applications.

![Preview](/public//preview.png)

## ✨ Features

- Next.js 15 with App Router
- Encore.ts for type-safe backend APIs
- shadcn/ui components with dark mode support
- TailwindCSS for styling
- TypeScript for end-to-end type safety
- Turborepo for monorepo management
- pnpm for fast, disk-efficient package management

## 🛠️ Installation

```bash
pnpm install
```

## 📦 Adding Components

To add components to your app, run the following command at the root of your `web` app:

```bash
cd apps/web
pnpm dlx shadcn@canary add button
```

> [!TIP]
> Read more about adding components in the [shadcn/ui documentation for Monorepo](https://ui.shadcn.com/docs/monorepo)

## 🚀 Getting Started

To start the development server, run the following command:

```bash
pnpm dev
```

- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
- Open [http://localhost:9400/{encore-id}](http://localhost:9400/{encore-id}) to access Encore's local developer dashboard.

## 📚 Learn More

To learn more about the technologies used in this template, refer to the following documentation:

- 🏎 [TurboRepo Documentation](https://turbo.build/repo/docs)
- ▲ [Next.js Documentation](https://nextjs.org/docs)
- ⚡ [Encore.ts Documentation](https://encore.dev/docs)
- 🎨 [TailwindCSS Documentation](https://tailwindcss.com/docs)
- 📦 [shadcn/ui Documentation](https://ui.shadcn.com/docs)
- 📦 [pnpm Documentation](https://pnpm.io/docs)
