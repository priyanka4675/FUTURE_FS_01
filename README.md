# 🌐 Priyanka Pilla — 3D Portfolio Website

A stunning, immersive 3D portfolio website built with React.js, featuring real-time canvas particle animations, smooth scroll interactions, and a futuristic dark-theme UI.

## ✨ Live Demo

> **[View Live →](https://priyanka-portfolio.vercel.app)**  
> Deployed on Vercel · Built with React

---

## 🚀 Features

- **3D Particle Sphere** — Animated canvas with orbiting particles and connecting lines
- **Typewriter Effect** — Animated role switcher in the hero section
- **Custom Cursor** — Glowing cyan cursor with ring tracker
- **Scroll Animations** — Reveal-on-scroll for all sections
- **3D Card Hover** — CSS 3D transforms on skill & project cards
- **Animated Profile Rings** — CSS 3D spinning orbital rings
- **Project Filter** — Category-based filtering for projects
- **Contact Form** — Validated contact form (connect to EmailJS or Formspree)
- **Responsive Design** — Fully mobile-friendly
- **SEO Ready** — Meta tags and open graph data

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React.js 18 |
| Animations | Canvas API, CSS3 Keyframes |
| Fonts | Google Fonts (Orbitron, Rajdhani, Space Mono) |
| Icons | Inline SVGs |
| Deployment | Vercel |

---

## 📁 Project Structure

```
priyanka-portfolio/
├── public/
│   └── index.html          # HTML entry with meta tags & Google Fonts
├── src/
│   ├── components/
│   │   ├── Navbar.js/.css  # Fixed navbar with scroll-spy
│   │   ├── Hero.js/.css    # 3D canvas hero with typewriter
│   │   ├── About.js/.css   # About with 3D orbital rings
│   │   ├── Skills.js/.css  # Tech skill cards with progress bars
│   │   ├── Projects.js/.css# Filterable project cards
│   │   ├── Contact.js/.css # Contact form + details
│   │   └── Footer.js/.css  # Footer
│   ├── App.js              # Root component + custom cursor
│   ├── App.css             # Global grid/noise overlay
│   ├── index.js            # React entry point
│   └── index.css           # CSS variables & resets
├── vercel.json             # Vercel deployment config
├── .gitignore
└── package.json
```

---

## ⚙️ Setup & Run Locally

### Prerequisites
- Node.js ≥ 16
- npm or yarn

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/priyanka-portfolio.git
cd priyanka-portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm start

# App runs at http://localhost:3000
```

---

## 🚢 Deploy to Vercel

### Option A — Vercel CLI (Recommended)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy from project root
vercel

# Follow prompts → your site is live!
```

### Option B — GitHub + Vercel Dashboard

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repository
4. Vercel auto-detects Create React App settings
5. Click **Deploy** — done!

### Option C — Build & Deploy Manually

```bash
npm run build
# Upload the /build folder to any static host
```

---

## 📧 Setting Up the Contact Form

The contact form is pre-wired. To make it actually send emails:

### Using EmailJS (Free)
1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Create an Email Service and Template
3. Install: `npm install @emailjs/browser`
4. In `Contact.js`, replace the simulation with:

```js
import emailjs from '@emailjs/browser';

// Inside handleSubmit:
await emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  { name: form.name, email: form.email, message: form.message },
  'YOUR_PUBLIC_KEY'
);
```

### Using Formspree (Even simpler)
1. Sign up at [formspree.io](https://formspree.io)
2. Create a form → get your endpoint URL
3. Change `<form>` action to `https://formspree.io/f/YOUR_ID`

---

## 🎨 Customisation

All personal data is in the component files:

| File | What to change |
|------|---------------|
| `Hero.js` | Name, roles array, stats |
| `About.js` | Bio text, education, CGPA |
| `Skills.js` | Tech skills, tools, languages |
| `Projects.js` | Project list, GitHub links |
| `Contact.js` | Email, phone, location |
| `index.css` | CSS variables (colors, fonts) |

---

## 📄 License

MIT — free to use, adapt, and share.

---

*Built with ❤️ by Priyanka Pilla · CSE Undergraduate · Aditya College of Engineering and Technology*
