# 🎓 TGP2025 – Training Graduate Program Landing

A modern, responsive landing page built with Next.js 15, React 19, and Tailwind CSS for the Training Graduate Program 2025 (TGP2025). The program is powered by Future & Tatweer and focuses on preparing job‑ready talent through real projects, mentorship, and workshops.

## ✨ Features

- 🎨 Modern, responsive design with Montserrat font
- 🌗 Light/Dark themes (agenda‑inspired dark palette). Toggle in navbar
- 🧭 Corporate infographic layout: Motivation, Targets, Tracks, Phases, Partners
- 🧩 Animated “Powered by” logos with lively hover motion
- 🗂️ Accessible mobile sheet menu + smooth in‑page navigation
- ⚡ Next.js 15 App Router, TypeScript, Radix UI, Tailwind v4
- 🌀 Framer Motion micro‑interactions

## 📋 Prerequisites

Before you begin, make sure you have the following installed on your PC:

1. **Node.js** (version 18.17 or higher)

   - Download from: https://nodejs.org/
   - Check if installed:
     ```bash
     node --version
     ```

2. **pnpm** (Package Manager)
   - Install globally after Node.js is installed:
     ```bash
     npm install -g pnpm
     ```
   - Check if installed:
     ```bash
     pnpm --version
     ```

## 🛠️ Installation & Setup

Follow these steps to get the project running on your PC:

### Step 1: Open Terminal in Project Folder

1. Open the project folder in VS Code
2. Open a new terminal (Terminal → New Terminal) or use PowerShell
3. Make sure you're in the project directory:
   ```bash
   cd C:\Users\DQA\VScodeProjects\TGP-landing
   ```

### Step 2: Install Dependencies

Run the following command to install all required packages:

```bash
pnpm install
```

This will download and install all the dependencies listed in `package.json`. It might take a few minutes depending on your internet connection.

**Alternative Package Managers:**

- If you prefer npm: `npm install`
- If you prefer yarn: `yarn install`

### Step 3: Run the Development Server

Start the development server with:

```bash
pnpm dev
```

**Alternative commands:**

- Using npm: `npm run dev`
- Using yarn: `yarn dev`

### Step 4: View the Website

Once the server is running, you should see a message like:

```
- Local:        http://localhost:3000
- Network:      http://192.168.x.x:3000
```

Open your browser and go to: **http://localhost:3000**

🎉 You should now see your landing page running!

## 📦 Available Scripts

Here are all the commands you can run:

### Development Mode

```bash
pnpm dev
```

Runs the app in development mode with hot-reloading. Open http://localhost:3000 to view it.

### Build for Production

```bash
pnpm build
```

Creates an optimized production build of your application.

### Start Production Server

```bash
pnpm start
```

Starts the production server (run `pnpm build` first).

### Lint Code

```bash
pnpm lint
```

Checks your code for potential errors and style issues.

## 🗂️ Project Structure

```
TGP-landing/
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components (shadcn/ui)
│   ├── hero.tsx          # Hero
│   ├── motivation.tsx    # Why this program exists
│   ├── targets.tsx       # Who we target & our goal
│   ├── tracks.tsx        # Program tracks
│   ├── phases.tsx        # Program phases timeline
│   ├── partners.tsx      # Powered by (logos)
│   ├── contact.tsx       # Contact
│   └── navigation.tsx    # Navbar + dark-mode toggle + mobile sheet
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/              # Static assets (images, etc.)
├── styles/              # Additional styles
└── package.json         # Project dependencies
```

## 🛠️ Technologies Used

- **Framework:** Next.js 15.2.4
- **Language:** TypeScript
- **UI Library:** React 19
- **Styling:** Tailwind CSS v4
- **UI Components:** Radix UI
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod
- **Charts:** Recharts
- **Theme:** next-themes
- **Animations:** tailwindcss-animate

## 🧰 Theming

- Typography: [Montserrat](https://fonts.google.com/specimen/Montserrat) via `next/font/google`.
- Color tokens live in `app/globals.css` under CSS variables.
- Dark mode uses a navy‑purple palette (derived from agenda visuals) and square background motifs in some sections. Light mode stays clean and bright.
- Toggle theme using the Moon/Sun button in the navbar (persisted by `next-themes`).

## 🔧 Troubleshooting

### Port 3000 is already in use

If you see an error that port 3000 is already taken, you can:

1. Kill the process using port 3000, or
2. Run on a different port:
   ```bash
   pnpm dev -- -p 3001
   ```

### Module not found errors

If you encounter "module not found" errors:

1. Delete `node_modules` folder and `pnpm-lock.yaml`
2. Reinstall dependencies:
   ```bash
   pnpm install
   ```

### Clear cache and restart

If something doesn't work correctly:

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules pnpm-lock.yaml
pnpm install

# Restart dev server
pnpm dev
```

**For Windows PowerShell:**

```powershell
# Clear Next.js cache
Remove-Item -Recurse -Force .next

# Reinstall dependencies
Remove-Item -Recurse -Force node_modules, pnpm-lock.yaml
pnpm install

# Restart dev server
pnpm dev
```

## 🌐 Deployment

This Next.js application can be deployed to:

- **Vercel** (Recommended): https://vercel.com
- **Netlify**: https://netlify.com
- **AWS Amplify**
- **Any Node.js hosting service**

### Deploy to Vercel (Easiest)

1. Push your code to GitHub
2. Go to https://vercel.com
3. Import your repository
4. Vercel will automatically detect Next.js and deploy

## 📝 Customization

To customize the landing page:

- **Edit content:** Update sections in the `components/` folder (e.g., `motivation.tsx`, `targets.tsx`).
- **Change styles:** Tweak color variables in `app/globals.css`.
- **Logos:** Replace `public/future-logo1.png` and `public/Tatweer_Research_Logo.png` or point to external URLs.
- **Animations:** Framer Motion variants are co‑located in section components; adjust hover/lift values as needed.
- **Theme:** `ThemeProvider` config is in `app/layout.tsx`.

## 📄 License

This project was bootstrapped with Vercel tooling and customized for TGP2025.

## 🤝 Support

If you encounter any issues or have questions:

1. Check the troubleshooting section above
2. Ensure all prerequisites are installed
3. Make sure you're running the commands in the correct directory
4. Try clearing cache and reinstalling dependencies

---

**Quick Start Summary:**

```bash
# 1. Install pnpm (if not installed)
npm install -g pnpm

# 2. Install dependencies
pnpm install

# 3. Run development server
pnpm dev

# 4. Open browser to http://localhost:3000
```
