cd "d:\Private repos\PURAN Job placement\SkillForge"
git init
git branch -M main
git remote add origin https://github.com/ImArijitBasu/SkillForge.git

git add package.json package-lock.json jsconfig.json eslint.config.mjs next.config.mjs postcss.config.mjs
git commit -m "chore: Initialize Next.js project with Tailwind CSS v4"

git add README.md .gitignore
git commit -m "docs: Add README and gitignore"

git add src/app/globals.css
git commit -m "style: Add global CSS and design system tokens"

git add src/app/layout.js
git commit -m "feat: Add root layout with font and metadata"

git add src/lib/firebase.js
git commit -m "feat: Setup Firebase configuration"

git add .env.local
git commit -m "chore: Add environment variables for Firebase"

git add src/contexts/AuthContext.js
git commit -m "feat: Implement AuthContext for Firebase authentication"

git add src/components/ProtectedRoute.js
git commit -m "feat: Add ProtectedRoute component for route guarding"

git add src/components/Navbar.js
git commit -m "feat: Implement responsive Navbar with auth state"

git add src/components/Footer.js
git commit -m "feat: Add application Footer"

git add src/lib/data.js
git commit -m "data: Add static course data and categories"

git add src/components/CourseCard.js
git commit -m "feat: Implement reusable CourseCard component"

git add src/app/page.js
git commit -m "feat: Build Landing page with multiple sections"

git add src/app/about/page.js
git commit -m "feat: Add About page"

git add src/app/login/page.js
git commit -m "feat: Implement Login page with Google auth"

git add src/app/register/page.js
git commit -m "feat: Implement Registration page"

git add src/app/items/page.js
git commit -m "feat: Add Items catalog page with search and filtering"

git add src/app/items/[id]/page.js src/app/items/[id]/ItemDetailFallback.js
git commit -m "feat: Implement dynamic Item details page"

git add src/app/items/add/page.js
git commit -m "feat: Add protected Add Item page"

git add src/app/items/manage/page.js
git commit -m "feat: Add protected Manage Items page"

git add .
git commit -m "fix: Final polish and minor fixes"

git push -u origin main
