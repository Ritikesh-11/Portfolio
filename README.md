# 🌌 Ritikesh Machhewar — Personal Portfolio

![Next.js Badge](https://img.shields.io/badge/Built_with-Next.js-000000?style=for-the-badge&logo=next.js)
![TailwindCSS Badge](https://img.shields.io/badge/Styled_with-Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion Badge](https://img.shields.io/badge/Animated_with-Framer_Motion-EF4444?style=for-the-badge&logo=framer)
![Vercel Badge](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel)

> A modern, GitHub-inspired personal portfolio built using **Next.js**, **Tailwind CSS**, and **Framer Motion** to showcase my projects, experience, and technical skills in AI, Data Science, and Software Development.

## Tech Stack for this Project

I will use this tech stack in my project:

- **Frontend Framework:** Next.js (latest version)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Content:** Markdown or JSON files for projects, skills, and experience
- **Deployment:** Vercel (1-click deployment setup)
- **Optional Add-ons:** next-themes (for dark/light mode), shadcn/ui (for clean UI components)

## How to Run This Project

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn

### Installation and Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ritikesh11052000/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser and navigate to:**
   ```
   http://localhost:3000
   ```

### Build for Production

To build the project for production:

```bash
npm run build
npm start
```

The application will be available at `http://localhost:3000`.

### Deployment

This project is configured for easy deployment on Vercel:

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Deploy with one click

The project includes all necessary configurations for Vercel deployment.

---

## 🚀 Tech Stack

| Layer | Technology |
|-------|-------------|
| Framework | [Next.js 14](https://nextjs.org/) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| Animations | [Framer Motion](https://www.framer.com/motion/) |
| Theme Toggle | [next-themes](https://github.com/pacocoursey/next-themes) |
| UI Components | [shadcn/ui](https://ui.shadcn.com/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Deployment | [Vercel](https://vercel.com/) |

---

## 🎨 Features

- ⚡ **Blazing Fast Performance** – Built with Next.js (SSR + SSG)
- 🌙 **Dark/Light Theme Toggle** (GitHub-inspired)
- 💫 **Smooth Animations** with Framer Motion
- 🧩 **Modular Components & Clean Architecture**
- 🧠 **JSON-Driven Content** for Projects, Skills, and Experience
- 📱 **Fully Responsive** across devices
- 🔍 **SEO-Optimized** with meta tags and Open Graph
- 📨 **Contact Form** integration (Formspree/EmailJS)
- 🤖 Optional **AI Chatbot** section powered by OpenAI API

---

## 🖼️ Preview

> Here’s a sneak peek of the portfolio layout.

![Portfolio Preview](https://github.com/ritikesh11052000/Portfolio/blob/main/Portfolio_Preview.png)

---

## 📂 Folder Structure

portfolio/
├─ app/
│ ├─ page.tsx # Home (Overview)
│ ├─ projects/page.tsx
│ ├─ experience/page.tsx
│ ├─ contact/page.tsx
│ └─ layout.tsx
├─ components/
│ ├─ Navbar.tsx
│ ├─ ProjectCard.tsx
│ ├─ SkillBadge.tsx
│ ├─ Footer.tsx
│ └─ ThemeToggle.tsx
├─ data/
│ ├─ projects.json
│ ├─ skills.json
│ └─ experience.json
├─ styles/
│ └─ globals.css
├─ public/
│ └─ avatar.png
├─ README.md
└─ package.json


---

## ⚙️ Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/ritikesh11052000/portfolio.git
cd portfolio

2️⃣ Install Dependencies
npm install

3️⃣ Run Development Server
npm run dev


Now open http://localhost:3000
 in your browser 🚀

🧩 Environment Variables (Optional)

If you plan to integrate APIs, create a .env.local file:

NEXT_PUBLIC_GITHUB_USERNAME=ritikesh11052000
NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/xxxxxx
OPENAI_API_KEY=your_openai_api_key_here

🖌️ GitHub-Inspired Color Palette
Element	Color
Background	#0d1117
Surface	#161b22
Text	#c9d1d9
Accent	#58a6ff
Border	#30363d
🧠 Future Enhancements

🔄 Auto-fetch latest GitHub repositories using GitHub REST API

🗂️ Add Blog section with MDX support

🤖 Integrate OpenAI API chatbot

📈 Analytics (Vercel or Google Analytics)

🧑‍💻 Author

Ritikesh Shankar Machhewar
🎓 B.Tech in Artificial Intelligence & Data Science
📍 Hyderabad, India
📧 ritikeshmachhewar@gmail.com
📱 +91 7745090264

🔗 [LinkedIn](https://www.linkedin.com/in/ritikesh-machhewar-36381b179/) • [GitHub](https://github.com/ritikesh11052000)

🪄 Deployment

Deploy instantly on Vercel:

vercel


After deployment, access it at:
👉 https://ritikesh.vercel.app

🧾 License

This project is licensed under the MIT License
.


---

### ✅ Optional Enhancements for the README
- Add a real screenshot or GIF of your portfolio UI under “Preview.”  
- Add a **“Built With ❤️” footer line**:
  ```markdown
  ---
  🛠️ Built with ❤️ using Next.js & Tailwind CSS


Once deployed on Vercel, replace the placeholder link with your live portfolio URL.
---

## 🔍 SEO & Google Search Optimization

Your portfolio is now fully optimized for Google search visibility! Here's how to get it indexed and appearing in search results for "Ritikesh Machhewar":

### 🚀 Next Steps for Google Search Visibility 

1. **Submit to Google Search Console**:
   - Go to: https://search.google.com/search-console
   - Add your property: `https://portfolio-4xv7z9ss7-ritikesh11052000s-projects.vercel.app`
   - Verify ownership using the HTML file method (already in `/public/google-site-verification.html`)
   - Submit your sitemap: `/sitemap.xml`

2. **Wait for Indexing**:
   - Google typically indexes new sites within 1-2 weeks
   - You can request indexing for specific pages in Search Console

3. **Monitor Performance**:
   - Check Search Console regularly for impressions, clicks, and indexing status
   - Use "Ritikesh Machhewar" as a search query to see when your site appears

### 🎯 Expected Results
- Your portfolio should appear in Google search results for "Ritikesh Machhewar"
- Rich snippets with your profile image and description
- Social media sharing with proper Open Graph tags

Your portfolio is now search engine optimized and ready to be discovered! 🔍✨
