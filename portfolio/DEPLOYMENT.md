# Portfolio Project

A modern, responsive personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features dark/light theme toggle, smooth animations, and showcases professional experience and projects.

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel
- **SEO**: Next-sitemap

## Features

- ✅ Responsive design (mobile-first)
- ✅ Dark/Light theme toggle
- ✅ Smooth page transitions and animations
- ✅ Professional experience showcase
- ✅ Project portfolio with GitHub links
- ✅ Contact form
- ✅ SEO optimized with sitemap
- ✅ Fast loading with Vercel CDN

## Prerequisites

Before running this project, make sure you have the following installed:

### System Requirements
- **Node.js**: Version 18.0 or higher
- **npm**: Version 8.0 or higher (comes with Node.js)
- **Git**: For version control

### Installation Steps

1. **Clone the repository**:
```bash

git clone https://github.com/Ritikesh-11/Portfolio.git
cd Portfolio
```

2. **Install dependencies**:
```bash
npm install
```

3. **Environment Setup** (Optional):
Create a `.env.local` file for any environment variables (currently not required for basic functionality).

## Development

### Local Development Server
```bash
npm run dev
```
- Starts the development server at `http://localhost:3000`
- Hot reload enabled for instant updates
- Includes error overlay for debugging

### Build for Production
```bash
npm run build
```
- Creates optimized production build
- Generates static files in `.next` folder
- Runs TypeScript type checking and linting

### Start Production Server Locally
```bash
npm start
```
- Serves the production build locally
- Useful for testing production build before deployment

### Linting and Type Checking
```bash
npm run lint
```
- Runs ESLint for code quality
- Checks TypeScript types

## Project Structure

```
portfolio/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── experience/        # Experience page
│   ├── projects/          # Projects page
│   └── contact/           # Contact page
├── components/            # Reusable React components
│   ├── Navbar.tsx         # Navigation bar
│   ├── Footer.tsx         # Footer component
│   ├── ThemeToggle.tsx    # Dark/light theme toggle
│   ├── ProjectCard.tsx    # Project showcase card
│   └── SkillBadge.tsx     # Skill/technology badge
├── data/                  # Static data files
│   ├── experience.json    # Professional experience data
│   ├── projects.json      # Project portfolio data
│   └── skills.json        # Skills and technologies
├── public/                # Static assets
│   └── google-site-verification.html
├── styles/                # Global styles
├── next.config.js         # Next.js configuration
├── next-sitemap.config.js # SEO sitemap configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── package.json           # Dependencies and scripts
└── README.md              # Project documentation
```

## Customization

### Updating Content

1. **Experience**: Edit `data/experience.json`
2. **Projects**: Edit `data/projects.json`
3. **Skills**: Edit `data/skills.json`
4. **Personal Info**: Update components and pages as needed

### Styling
- Colors and themes are defined in `tailwind.config.js`
- Global styles in `app/globals.css`
- Component-specific styles use Tailwind classes

### Adding New Sections
1. Create new page in `app/` directory
2. Add navigation link in `components/Navbar.tsx`
3. Update data files if needed

## Vercel Deployment Commands

### Prerequisites
1. Install Vercel CLI globally:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```
This will open a browser for authentication.

### Deployment Commands

#### 1. Initial Setup (First Time Only)
```bash
cd portfolio
vercel
```
- **Purpose**: Links your project to Vercel and creates a new project
- **What it does**: Prompts for project settings, detects framework (Next.js), and deploys to a preview URL
- **When to use**: First deployment of your portfolio

#### 2. Preview Deployment (Development/Testing)
```bash
cd portfolio
vercel --yes
```
- **Purpose**: Deploy to a preview/staging environment
- **What it does**: Builds and deploys your app to a temporary URL for testing
- **When to use**: Testing changes before production, sharing with others for feedback
- **Output**: Preview URL (e.g., `https://portfolio-xxxxx.vercel.app`)

#### 3. Production Deployment
```bash
cd portfolio
vercel --prod
```
- **Purpose**: Deploy to production/live environment
- **What it does**: Builds and deploys to your main production URL
- **When to use**: When you're ready to make changes live
- **Output**: Production URL (e.g., `https://portfolio-abc123.vercel.app`)

#### 4. Build Locally (Testing)
```bash
cd portfolio
npm run build
```
- **Purpose**: Test the build process locally
- **What it does**: Creates an optimized production build in `.next` folder
- **When to use**: Before deploying to check for build errors

#### 5. Development Server
```bash
cd portfolio
npm run dev
```
- **Purpose**: Run the development server locally
- **What it does**: Starts Next.js development server at `http://localhost:3000`
- **When to use**: During development to see changes in real-time

### Deployment Workflow

1. **Make Changes**: Edit your code in the `portfolio` directory
2. **Test Locally**: Run `npm run dev` to test changes
3. **Build Test**: Run `npm run build` to ensure no build errors
4. **Deploy to Preview**: Run `vercel --yes` to test on Vercel
5. **Deploy to Production**: Run `vercel --prod` when ready for live

### Useful Vercel Commands

#### Check Deployment Status
```bash
vercel ls
```
- Lists all your deployments

#### View Logs
```bash
vercel logs [deployment-url]
```
- Shows deployment logs for debugging

#### Remove Deployment
```bash
vercel rm [deployment-url]
```
- Removes a specific deployment

#### Environment Variables
```bash
vercel env add [variable-name]
```
- Add environment variables for your project

### Current Portfolio URLs
- **Production**: https://portfolio-tawny-six-819ld5u664.vercel.app/ (or your new Vercel URL)
- **Preview**: Check `vercel ls` for latest preview URLs

### Notes
- Vercel automatically detects Next.js projects
- SSL certificates are automatically provisioned
- Global CDN ensures fast loading worldwide
- Automatic deployments can be set up via GitHub integration
