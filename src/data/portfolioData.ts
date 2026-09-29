export interface Project {
  id: string;
  name: string;
  purpose: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  organization: string;
  role: string;
  duration: string;
  responsibilities: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  score?: string;
  coursework?: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date?: string;
}

export interface SkillsGroup {
  languages: string[];
  frameworks: string[];
  aiMl: string[];
  databases: string[];
  tools: string[];
}

export interface PortfolioData {
  hero: {
    name: string;
    headline: string;
    introduction: string;
    location: string;
    email: string;
    linkedin: string;
    github: string;
    kaggle: string;
    profilePhoto: string;
  };
  about: {
    summary: string[];
    highlights: string[];
  };
  skills: SkillsGroup;
  projects: Project[];
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
  achievements: Achievement[];
}

export const initialPortfolioData: PortfolioData = {
  hero: {
    name: "Khushi V.",
    headline: "Computer Science Student & Aspiring Software Engineer",
    introduction:
      "Passionate undergraduate student focusing on machine learning, data structures, and full-stack software development. Dedicated to building reliable, accessible web applications and exploring applied AI systems.",
    location: "India",
    email: "vkhushi.3307@gmail.com",
    linkedin: "https://www.linkedin.com/in/khushi-v-developer",
    github: "https://github.com/vkhushi3307",
    kaggle: "https://www.kaggle.com/khushiv3307",
    profilePhoto: "/src/assets/images/profile_student_developer_1790672627492.jpg",
  },
  about: {
    summary: [
      "Currently pursuing a Bachelor of Technology in Computer Science and Engineering, with a strong foundation in core computer science subjects including algorithms, object-oriented programming, and database management.",
      "Hands-on experience developing web applications using React and modern JavaScript/TypeScript, paired with practical exploration of machine learning algorithms, model evaluation, and Python data science libraries.",
      "Active participant in technical student activities, coding challenges, and open-source learning communities. Eager to contribute to meaningful engineering projects and collaborative software teams.",
    ],
    highlights: [
      "Core interests in applied machine learning, predictive analytics, and clean frontend engineering",
      "Consistent academic record with coursework in Data Structures, DBMS, Operating Systems, and AI",
      "Hands-on project work emphasizing clean code, modular architecture, and user accessibility",
    ],
  },
  skills: {
    languages: ["Python", "C++", "JavaScript", "TypeScript", "SQL", "HTML5", "CSS3"],
    frameworks: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "Bootstrap"],
    aiMl: ["Scikit-Learn", "Pandas", "NumPy", "TensorFlow", "Matplotlib", "Seaborn"],
    databases: ["PostgreSQL", "MySQL", "MongoDB", "SQLite"],
    tools: ["Git", "GitHub", "VS Code", "Postman", "Linux/Bash", "Jupyter Notebook", "Vercel"],
  },
  projects: [
    {
      id: "project-1",
      name: "Predictive Health Risk Classifier",
      purpose:
        "Developed a supervised machine learning model to evaluate clinical patient indicators and classify potential risk levels to assist early screening.",
      technologies: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Streamlit", "Matplotlib"],
      features: [
        "Data preprocessing pipeline handling missing values, standard scaling, and categorical feature encoding",
        "Trained and compared Logistic Regression, Random Forest, and Decision Tree classifiers",
        "Evaluated model performance using Confusion Matrix, ROC-AUC curve, Precision, and Recall metrics",
        "Built an interactive parameter-tuning interface with real-time prediction feedback",
      ],
      githubUrl: "https://github.com/vkhushi3307/predictive-health-classifier",
      liveDemoUrl: "https://predictive-health-demo.vercel.app",
      featured: true,
    },
    {
      id: "project-2",
      name: "Campus Resource & Notes Sharing Hub",
      purpose:
        "Engineered a responsive web portal enabling college peers to organize, categorize, and search academic study materials and past year question sets.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "PostgreSQL"],
      features: [
        "Semester-wise and department-wise subject filtering with instant client-side keyword search",
        "Secure document metadata storage and structured tagging system",
        "Clean, responsive interface with accessible keyboard navigation and mobile-first layout",
        "REST API endpoints with structured request validation and error handling",
      ],
      githubUrl: "https://github.com/vkhushi3307/campus-notes-hub",
      liveDemoUrl: "https://campus-hub-preview.vercel.app",
      featured: true,
    },
    {
      id: "project-3",
      name: "Algorithmic Pathfinding Visualizer",
      purpose:
        "Built an interactive educational visualizer to demonstrate graph traversal and shortest-path algorithms on customizable 2D grid mazes.",
      technologies: ["JavaScript", "HTML5 Canvas", "CSS3", "Vite"],
      features: [
        "Step-by-step visual execution of Dijkstra's algorithm, A* search, and Breadth-First Search (BFS)",
        "Interactive wall placement, obstacle weighting, and start/target waypoint dragging",
        "Adjustable animation speed and real-time step counter for algorithmic analysis",
      ],
      githubUrl: "https://github.com/vkhushi3307/pathfinding-visualizer",
      liveDemoUrl: "https://pathfinding-visualizer-khushi.vercel.app",
      featured: false,
    },
    {
      id: "project-4",
      name: "Kaggle Exploratory Customer Analytics",
      purpose:
        "Comprehensive exploratory data analysis and feature engineering on structured retail consumer behavior data to identify purchasing patterns.",
      technologies: ["Python", "Pandas", "Seaborn", "Jupyter Notebook", "Scipy"],
      features: [
        "Detailed univariate and bivariate statistical analysis uncovering seasonal sales variations",
        "Feature correlation matrix analysis and dimensionality assessment",
        "Documented reproducible Jupyter notebook published with step-by-step insights",
      ],
      githubUrl: "https://github.com/vkhushi3307/customer-analytics-eda",
      liveDemoUrl: "https://www.kaggle.com/khushiv3307",
      featured: false,
    },
  ],
  experience: [
    {
      id: "exp-1",
      organization: "College Technical Club / Student Developers Chapter",
      role: "Student Technical Member & Web Coordinator",
      duration: "Aug 2024 – Present",
      responsibilities: [
        "Collaborated with student peers to build and maintain the official event portal for college hackathons and technical symposiums.",
        "Assisted junior students in introductory workshops covering Git version control, basic HTML/CSS, and Python programming fundamentals.",
        "Contributed code reviews and UI refinements to ensure mobile responsiveness across university student portals.",
      ],
    },
    {
      id: "exp-2",
      organization: "Software Development & Data Science Internship",
      role: "Software Engineering Intern",
      duration: "May 2024 – July 2024",
      responsibilities: [
        "Assisted in cleaning and preprocessing structured tabular datasets using Python, Pandas, and NumPy for internal analytics pipelines.",
        "Built modular React frontend components matching Figma wireframes for an internal dashboard prototype.",
        "Participated in weekly agile sprint standups and documented API endpoints using Postman collections.",
      ],
    },
  ],
  education: [
    {
      id: "edu-1",
      degree: "Bachelor of Technology (B.Tech) in Computer Science and Engineering",
      institution: "University Institute of Technology / Engineering College",
      duration: "2022 – 2026 (Expected)",
      score: "CGPA: 8.6 / 10.0",
      coursework: [
        "Data Structures & Algorithms",
        "Object Oriented Programming (C++/Java)",
        "Database Management Systems (DBMS)",
        "Operating Systems",
        "Computer Networks",
        "Machine Learning Fundamentals",
      ],
    },
    {
      id: "edu-2",
      degree: "Higher Secondary Education (Class XII - Science stream: PCM & CS)",
      institution: "Senior Secondary School",
      duration: "2020 – 2022",
      score: "Percentage: 91.4%",
      coursework: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
    },
  ],
  certifications: [
    {
      id: "cert-1",
      name: "Machine Learning with Python",
      issuer: "Coursera / IBM",
      date: "2024",
      credentialUrl: "https://coursera.org/verify/example-cert",
    },
    {
      id: "cert-2",
      name: "Data Structures and Algorithms Specialization",
      issuer: "Coursera",
      date: "2023",
      credentialUrl: "https://coursera.org/verify/example-cert-2",
    },
    {
      id: "cert-3",
      name: "Responsive Web Design Certification",
      issuer: "freeCodeCamp",
      date: "2023",
      credentialUrl: "https://freecodecamp.org/certification/example",
    },
  ],
  achievements: [
    {
      id: "ach-1",
      title: "Inter-College Hackathon Finalist",
      description: "Secured top-10 position out of 60+ participating teams by prototyping a civic grievance tracker in 24 hours.",
      date: "2024",
    },
    {
      id: "ach-2",
      title: "Active Problem Solver on Coding Platforms",
      description: "Solved 250+ algorithmic problems across LeetCode and GeeksforGeeks focusing on Arrays, Trees, Dynamic Programming, and Graph algorithms.",
      date: "2023 – Present",
    },
    {
      id: "ach-3",
      title: "Kaggle Competitions & Notebooks Contributor",
      description: "Consistently publishing reproducible exploratory data analysis kernels and participating in student tabular benchmark challenges.",
      date: "2024",
    },
  ],
};
