# SkillForge

A premium online course management platform built with **Next.js 16 (App Router)**, **Firebase Authentication**, and **Tailwind CSS v4**. Browse, search, and manage courses with a polished dark-mode UI.

![SkillForge](https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=400&fit=crop)

## Key Features

- **Landing Page** — Hero section, feature highlights, popular courses, stats, testimonials, and CTA
- **Course Catalog** — Search by title, filter by category & price range, responsive grid layout
- **Course Details** — Dynamic routes with full descriptions, specifications, and related courses
- **Firebase Auth** — Email/password registration & login, Google sign-in, persistent auth state
- **Protected Routes** — Add and manage courses (login required)
- **CRUD Operations** — Add new courses, view details, delete courses (localStorage)
- **Responsive Design** — Mobile-first, works on all screen sizes
- **Premium UI** — Dark mode, glassmorphism, gradient accents, micro-animations

## Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 16 (App Router) | Frontend framework |
| React 19 | UI library |
| Tailwind CSS v4 | Styling |
| Firebase Auth | Authentication |
| localStorage | Data persistence |
| react-hot-toast | Toast notifications |
| react-icons | Icon library |

## Route Summary

| Route | Type | Description |
|---|---|---|
| `/` | Public | Landing page with 7 sections |
| `/items` | Public | Course catalog with search & filters |
| `/items/[id]` | Public | Dynamic course detail page |
| `/about` | Public | About SkillForge |
| `/login` | Public | User login (email/password + Google) |
| `/register` | Public | User registration |
| `/items/add` | Protected | Add new course form |
| `/items/manage` | Protected | Manage & delete courses |

## Setup & Installation

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/ImArijitBasu/SkillForge.git
cd SkillForge

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.js          # Root layout with AuthProvider
│   ├── page.js            # Landing page
│   ├── globals.css        # Global styles & animations
│   ├── about/page.js      # About page
│   ├── login/page.js      # Login page
│   ├── register/page.js   # Register page
│   └── items/
│       ├── page.js        # Course catalog
│       ├── add/page.js    # Add course (protected)
│       ├── manage/page.js # Manage courses (protected)
│       └── [id]/page.js   # Course details
├── components/
│   ├── Navbar.js          # Sticky navigation
│   ├── Footer.js          # Site footer
│   ├── CourseCard.js      # Reusable course card
│   └── ProtectedRoute.js  # Auth guard wrapper
├── contexts/
│   └── AuthContext.js     # Firebase auth context
└── lib/
    ├── firebase.js        # Firebase config
    └── data.js            # Static course data
```

## Live Demo

🔗 [Live on Vercel](https://skillforge-bd.vercel.app)

---

Built with ❤️ by [Arijit Basu](https://github.com/ImArijitBasu)
