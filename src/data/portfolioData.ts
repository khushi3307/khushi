export interface Project {
  id: string;
  name: string;
  purpose: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  isPlaceholder?: boolean;
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
  programming: string[];
  core: string[];
  tools: string[];
  currentlyExploring: string[];
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
    interests: string[];
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
    headline: "CSE — Data Science Student",
    introduction:
      "Exploring data, technology, and ideas that turn into real-world solutions.",
    location: "India",
    email: "vkhushi.3307@gmail.com",
    linkedin: "https://www.linkedin.com/in/khushi-v-developer",
    github: "https://github.com/vkhushi3307",
    kaggle: "https://www.kaggle.com/khushiv3307",
    profilePhoto: "/src/assets/images/profile_student_developer_1790672627492.jpg",
  },
  about: {
    summary: [
      "I am an undergraduate B.Tech Computer Science Engineering student specializing in Data Science.",
      "Currently building my foundations in programming, data structures, data science, and problem solving.",
      "I enjoy learning through projects, technical events, hackathons, and public speaking.",
    ],
    interests: [
      "Data Structures & Core Algorithms",
      "Data Science & Statistical Foundations",
      "Hackathons & Collaborative Problem Solving",
      "Technical Presentations & Public Speaking",
    ],
  },
  skills: {
    programming: ["C", "Python"],
    core: ["Data Structures & Algorithms", "Data Science Fundamentals"],
    tools: ["Git", "GitHub", "Microsoft Excel", "Microsoft Office"],
    currentlyExploring: ["SQL", "Data Analytics", "Machine Learning", "Generative AI"],
  },
  projects: [
    {
      id: "project-1",
      name: "Algorithmic Problem Solving & Data Structures",
      purpose:
        "Collection of algorithmic implementations, practice problems, and core data structure routines built in C and Python.",
      technologies: ["C", "Python", "Data Structures", "Algorithms"],
      features: [
        "Structured implementations of arrays, linked lists, stacks, queues, and tree traversals",
        "Algorithmic efficiency analysis focusing on time and space complexity",
        "Documented code solutions for problem-solving challenges",
      ],
      githubUrl: "https://github.com/vkhushi3307",
      isPlaceholder: false,
    },
    {
      id: "project-2",
      name: "Data Science Fundamentals & Analysis (In Progress)",
      purpose:
        "Exploratory scripts and foundational data exercises investigating tabular data processing and statistical summaries.",
      technologies: ["Python", "Data Science Fundamentals", "Microsoft Excel"],
      features: [
        "Data cleaning and dataset structuring using Python",
        "Descriptive statistics and summary metric calculations",
        "Worksheet modeling and tabular data organization in Excel",
      ],
      githubUrl: "https://github.com/vkhushi3307",
      isPlaceholder: false,
    },
    {
      id: "project-3",
      name: "Data Analytics & SQL Project (Upcoming Placeholder)",
      purpose:
        "Upcoming exploration project applying relational queries, analytical schemas, and dashboard visualizations.",
      technologies: ["SQL", "Data Analytics", "Exploring"],
      features: [
        "Relational query design and data aggregation workflows",
        "Insight extraction on real-world sample datasets",
        "Detailed project documentation to be uploaded upon completion",
      ],
      isPlaceholder: true,
    },
    {
      id: "project-4",
      name: "Machine Learning Exploration (Upcoming Placeholder)",
      purpose:
        "Future capstone applying predictive analytics and foundational ML models to domain-specific datasets.",
      technologies: ["Machine Learning", "Python", "Exploring"],
      features: [
        "Baseline model training and evaluation metrics",
        "Documentation of experiments and key findings",
        "Code repository link will be updated as work progresses",
      ],
      isPlaceholder: true,
    },
  ],
  experience: [
    {
      id: "exp-1",
      organization: "College Technical Club & Student Chapter",
      role: "Student Member & Technical Participant",
      duration: "2024 – Present",
      responsibilities: [
        "Active participant in technical club sessions, hackathons, and peer coding workshops.",
        "Contributed to organizing technical events, seminar coordination, and session logistics.",
        "Engaged in technical presentations and public speaking sessions sharing learnings on technology topics.",
      ],
    },
  ],
  education: [
    {
      id: "edu-1",
      degree: "Bachelor of Technology (B.Tech) in Computer Science & Engineering",
      institution: "Specialization in Data Science",
      duration: "Pursuing Undergraduate Degree",
      coursework: [
        "Data Structures & Algorithms",
        "Problem Solving in C & Python",
        "Data Science Fundamentals",
        "Mathematics for Computing",
      ],
    },
    {
      id: "edu-2",
      degree: "Higher Secondary Education (Science stream)",
      institution: "Senior Secondary School",
      duration: "Completed",
    },
  ],
  certifications: [
    {
      id: "cert-1",
      name: "Foundational Programming & Problem Solving",
      issuer: "Technical Learning & Coursework",
      date: "Ongoing",
    },
  ],
  achievements: [
    {
      id: "ach-1",
      title: "Hackathon Participation & Team Collaboration",
      description: "Participated in student hackathons working on ideation, problem definition, and initial solution prototyping.",
      date: "Recent",
    },
    {
      id: "ach-2",
      title: "Technical Presentations & Public Speaking",
      description: "Delivered student talks and presentations on foundational computer science and emerging technology topics.",
      date: "Ongoing",
    },
    {
      id: "ach-3",
      title: "Algorithmic Practice & Problem Solving",
      description: "Regularly practicing core programming and algorithmic problems to strengthen computer science foundations.",
      date: "Ongoing",
    },
  ],
};
