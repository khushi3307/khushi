# Developer Portfolio Website

A clean, responsive, and professional personal developer portfolio website designed for a college student and software engineer. Built with **React**, **TypeScript**, and **Tailwind CSS**.

---

## 📑 Portfolio Sections Included

1. **Hero / Introduction**
   - Name & headline
   - Student introduction & status indicator
   - High-fidelity portrait photo with resilient CSS fallback
   - Interactive Resume Viewer button
   - Direct external links to LinkedIn and GitHub
2. **About Me**
   - Concise academic and technical summary based on undergraduate Computer Science studies
   - Key highlights and core areas of focus
3. **Skills (Categorized into 5 distinct groups)**
   - **Programming Languages**: Python, C++, JavaScript, TypeScript, SQL, HTML5, CSS3
   - **Frameworks & Libraries**: React.js, Node.js, Express.js, Tailwind CSS, Bootstrap
   - **AI / Machine Learning**: Scikit-Learn, Pandas, NumPy, TensorFlow, Matplotlib, Seaborn
   - **Databases**: PostgreSQL, MySQL, MongoDB, SQLite
   - **Tools & Platforms**: Git, GitHub, VS Code, Postman, Linux/Bash, Jupyter, Vercel
   - Interactive category filter controls
4. **Projects**
   - Problem and purpose descriptions
   - Technologies used with clean, unboxed typographic separators
   - Detailed feature lists
   - Working links for Source Code (GitHub) and Live Demo
   - Filter by All, Featured, AI/ML, and Web projects
   - Project detail inspection modal
5. **Experience**
   - Organization, Role, and Duration
   - Concrete, unexaggerated student technical contributions & internship responsibilities
6. **Education**
   - Degree (B.Tech in Computer Science and Engineering), Institution, Duration, and CGPA
   - Senior Secondary Education details
   - Core relevant coursework
7. **Certifications**
   - Machine Learning with Python (IBM/Coursera)
   - Data Structures & Algorithms
   - Responsive Web Design
8. **Achievements & Activities**
   - Hackathon finalist recognition
   - Problem solving milestones (LeetCode, GeeksforGeeks)
   - Student technical event participation
9. **Contact Section**
   - Direct email (`vkhushi.3307@gmail.com`)
   - One-click copy email button with visual confirmation
   - Interactive message form with validation and mailto client launch
   - Quick links to LinkedIn and GitHub
10. **Resume Modal & Data Customizer**
    - Built-in ATS-friendly printable resume viewer (`Ctrl+P` / PDF ready)
    - In-app "Edit Data" modal for live customization or pasting custom JSON without touching code

---

## 🛠 Tech Stack

- **Framework**: React 19 + TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Bundler & Dev Server**: Vite 8
- **Typography**: Cabinet Grotesk, Plus Jakarta Sans, JetBrains Mono

---

## 🚀 How to Run Locally

1. **Clone or navigate to the repository directory**:
   ```bash
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:3000` (or the URL displayed in the terminal).

4. **Build for production**:
   ```bash
   npm run build
   ```
   This generates an optimized static bundle in the `dist` folder.

---

## 🚢 How to Deploy on Vercel

### Option A: Via Vercel Dashboard (Recommended)
1. Push this repository to your **GitHub** account:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of developer portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New Project"** and select **"Import Git Repository"**.
4. Choose your portfolio repository.
5. Vercel automatically detects **Vite**:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
6. Click **Deploy**. Your portfolio will be live on an HTTPS `.vercel.app` domain in seconds!

### Option B: Via Vercel CLI
```bash
npm install -g vercel
vercel
```
Follow the interactive prompts to deploy directly.

---

## ✏️ How to Customize Your Resume Details

You have two options:
1. **Directly in the code**: Open `src/data/portfolioData.ts` and modify your name, links, project descriptions, skills, or experience.
2. **Inside the website**: Click the **"Edit Data"** button in the top navigation bar or the footer. You can edit any field or paste your raw JSON, apply changes, and preview them live instantly.
