# Frontend Assignment v0.0

responsive Next.js web application built for the Frontend Assignment. This application handles Google Social Login (simulated), Profile Synchronization, deterministic Routing, and Dashboard management with a focus on clean architecture and strict type safety.

## Live Demo & Repository

- **Live Demo:** [https://rablo-in-assignment-ten.vercel.app/login]

---

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (v4)
- **State Management:** React Context API (`AuthContext`)
- **API Handling:** Native `fetch` with Next.js Rewrites (Proxy)
- **Icons:** SVG / Lucide React

---
## folder Structure 

```
MY-ASSIGNMENT/
│
├── src/
│   │
│   ├── app/                    # Next.js App Router pages
│   │   ├── login/              # Login screen (Figma based)
│   │   │   └── page.tsx
│   │   │
│   │   ├── create-profile/     # Basic profile creation flow
│   │   │   └── page.tsx
│   │   │
│   │   ├── dashboard/          # Manager dashboard
│   │   │   └── page.tsx
│   │   │
│   │   ├── manager/            # OAuth redirect handler (?userID=)
│   │   │   └── page.tsx
│   │   │
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Splash routing logic
│   │   └── globals.css
│   │
│   ├── api/                    # API abstraction layer
│   │   ├── auth.ts             # Google login helpers
│   │   └── profile.ts          # GET / PATCH profile services
│   │
│   ├── components/             # Reusable UI components
│   │   ├── login/
│   │   │   ├── SocialButton.tsx
│   │   │   └── SocialCard.tsx
│   │   │
│   │   ├── dashboard/
│   │   │   ├── InfoSection.tsx
│   │   │   └── ProfileHeader.tsx
│   │   │
│   │   └── ui/
│   │       ├── InfoRow.tsx
│   │       └── Spinner.tsx
│   │
│   ├── context/
│   │   └── AuthContext.tsx     # Auth + localStorage state management
│   │
│   └── types/
│       └── types.ts            # Shared TypeScript types
│ 
│ 
```


---

## Setup & Installation

### 1. Clone the repository

```
git clone <your-repo-url>
cd manager-app
```

### 2. .env.local setup 

```
NEXT_PUBLIC_API_URL=http://13.50.118.141:6500
```


###  3. Install Dependencies

```
npm install / pnpm install
# or
yarn install

```

### 4. Configuration (Crucial for CORS)

Ensure next.config.ts is configured to handle the backend proxy and external images:

```
// next.config.ts
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**.googleusercontent.com" },
      { protocol: "https", hostname: "ui-avatars.com" },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/proxy/:path*",
        destination: "[http://13.50.118.141:6500/:path](http://13.50.118.141:6500/:path)*", // Backend URL
      },
    ];
  },
};
```

### 5. Run the Development Server

```
npm run dev 
or
pnpm run dev 
```