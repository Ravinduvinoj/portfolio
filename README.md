# Ravindu Vinoj – Portfolio

A modern, fully responsive developer portfolio built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## ✨ Features

- 🌗 Dark / Light theme toggle (defaults to dark)
- 🎨 Light blue + light red accent color system
- 📱 Fully responsive (mobile-first)
- ⚡ App Router (Next.js 14)
- 🧭 Hybrid routing: Home page + individual section pages
- 🎞️ Smooth animations (CSS keyframes)
- ✍️ Typewriter hero effect
- 📊 Animated skill bars
- 🗺️ Career & Education timelines
- 🛠️ Filterable Projects grid
- 💌 Contact form with success state

## 📁 Pages

| Route | Description |
|-------|-------------|
| `/` | Home / Hero with stats |
| `/about` | Profile, bio, values |
| `/skills` | Tech stack, languages, skill bars |
| `/education` | Education timeline + certifications |
| `/career` | Work experience timeline |
| `/projects` | Filterable project cards |
| `/services` | Service offerings + process |
| `/contact` | Contact form + social links |

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 3. Build for production

```bash
npm run build
npm start
```

## 🎨 Customization

### Update your personal info
Edit the data in each page file:
- `app/page.tsx` – stats, hero text
- `app/about/page.tsx` – bio, personal info
- `app/skills/page.tsx` – skills, tech stack
- `app/education/page.tsx` – education, certifications
- `app/career/page.tsx` – work experience
- `app/projects/page.tsx` – projects
- `app/services/page.tsx` – services
- `app/contact/page.tsx` – contact info, socials
- `components/Footer.tsx` – footer socials

### Change colors
Edit `tailwind.config.ts`:
```ts
colors: {
  primary: { DEFAULT: "#60a5fa" },  // light blue
  accent:  { DEFAULT: "#f87171" },  // light red
}
```

### Add your photo
Replace the `RV` initials in `app/page.tsx` and `app/about/page.tsx` with:
```tsx
<Image src="/photo.jpg" alt="Ravindu Vinoj" fill className="object-cover rounded-full" />
```
Place `photo.jpg` in the `public/` folder.

### Connect the contact form
In `app/contact/page.tsx`, replace the `handleSubmit` function with a real API call (e.g., EmailJS, Resend, Formspree).

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** react-icons
- **Fonts:** Inter + Fira Code (Google Fonts)

## 📦 Deploy

```bash
# Deploy to Vercel (recommended)
npx vercel

# Or connect your GitHub repo to vercel.com
```
