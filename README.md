# Shreya Rathore — Personal Brand & AI Portfolio

A premium personal brand website for Shreya Rathore, Business Development Associate at CloudNexus. Built with Next.js 15, Tailwind CSS, and Framer Motion.

## ✨ Features

- 🌌 **Immersive dark/light modes** — deep space aesthetics with aurora animations
- 🤖 **Shreya AI** — powered by Google Gemini with smart offline fallback
- 🎨 **Premium UI** — glassmorphism, particle effects, animated star field
- 📱 **Fully responsive** — pixel perfect from mobile to 4K
- ⚡ **High performance** — optimized with Next.js 15 App Router
- 🎭 **Rich animations** — Framer Motion scroll reveals, hover effects, typing animation

## 🚀 Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

```bash
cp .env.local.example .env.local
```

Then edit `.env.local` and add your Gemini API key:

```
GEMINI_API_KEY=your_actual_api_key_here
```

> **Get your Gemini API key**: Visit https://makersuite.google.com/app/apikey
>
> **Don't have a key?** The AI chat still works! It falls back to a local knowledge base automatically.

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the website.

### 4. Build for production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
shreya-portfolio/
├── app/
│   ├── api/chat/route.ts      # Gemini AI API with fallback
│   ├── globals.css            # Global styles & animations
│   ├── layout.tsx             # Root layout with theme provider
│   └── page.tsx               # Main page
├── components/
│   ├── effects/
│   │   ├── AuroraBackground.tsx
│   │   └── StarField.tsx
│   ├── layout/
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   └── ThemeProvider.tsx
│   └── sections/
│       ├── AIChatSection.tsx
│       ├── AboutSection.tsx
│       ├── ContactSection.tsx
│       ├── ExperienceSection.tsx
│       ├── HeroSection.tsx
│       ├── ProjectsSection.tsx
│       ├── SkillsSection.tsx
│       └── TestimonialsSection.tsx
├── data/
│   └── portfolio.ts           # All content + AI knowledge base
└── public/
    └── images/               # Place your photos here
```

## 🎨 Customization

### Update personal info
Edit `data/portfolio.ts` to update:
- Personal details (name, email, phone)
- Experience and achievements
- Projects and skills
- Testimonials

### Add your photo
Place your professional photo in `public/images/photo.jpg` and update the HeroSection component to show it instead of the initials placeholder.

### Change theme colors
Edit `tailwind.config.js` to modify the color palette.

## 🚢 Deployment

### Deploy on Vercel (Recommended)

1. Push to GitHub
2. Import to [Vercel](https://vercel.com)
3. Add `GEMINI_API_KEY` to environment variables
4. Deploy!

### Deploy on Netlify

```bash
npm run build
```
Upload the `.next` folder or connect your GitHub repo.

## 📄 Sections

| Section | Description |
|---------|------------|
| Hero | Animated intro with typing effect and rotating profile ring |
| About | Story, education, certifications, and animated stats |
| Experience | Interactive timeline with CloudNexus role |
| Skills | Categorized skills with progress bars |
| Projects | 3-column project showcase with impact metrics |
| Ask AI | Gemini-powered chatbot with fallback system |
| Testimonials | Auto-scrolling testimonials strip |
| Contact | Interactive contact hub with form |

## 🔑 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **AI**: Google Gemini 1.5 Flash
- **Icons**: Lucide React
- **Notifications**: React Hot Toast
- **Markdown**: React Markdown

---

Built with ❤️ for Shreya Rathore's personal brand
