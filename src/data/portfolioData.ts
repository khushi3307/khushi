import profilePhotoImg from '../assets/images/regenerated_image_1790778735928.jpg';

export interface Project {
  id: string;
  name: string;
  subtitle?: string;
  label?: string;
  purpose: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  isPlaceholder?: boolean;
}

export interface Experience {
  id: string;
  organization?: string;
  role: string;
  duration?: string;
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
  computerScience: string[];
  dataAndProductivity: string[];
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
    linkedin: "https://www.linkedin.com/in/khushi-vishwakarma-a11470384",
    github: "https://github.com/khushi3307",
    profilePhoto: profilePhotoImg,
  },
  about: {
    summary: [
      "I’m a B.Tech student specializing in Computer Science and Engineering with a focus on Data Science. I enjoy understanding how technology works, solving problems through programming, and turning what I learn into practical projects.",
      "My current foundation includes C, Python, Data Structures and Algorithms, and core data science concepts. I’m also exploring SQL, data analytics, machine learning, and generative AI.",
      "Beyond academics, I enjoy technical events, hackathons, public speaking, and collaborative projects. I’m always looking for opportunities to learn, build, and take on challenges that push me beyond the classroom.",
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
    computerScience: ["Data Structures & Algorithms", "Problem Solving"],
    dataAndProductivity: ["Data Science Fundamentals", "Microsoft Excel", "Microsoft Office"],
    tools: ["Git", "GitHub"],
    currentlyExploring: ["SQL", "Data Analytics", "Machine Learning", "Generative AI"],
  },
  projects: [
    {
      id: "project-1",
      name: "Proofa — Student Growth Passport",
      purpose:
        "A web-based platform designed to help students present and organize their skills, projects, learning progress, and achievements through a digital student profile.",
      technologies: ["Web Platform", "Digital Student Profile"],
      features: [
        "Digital student profile presentation",
        "Organization of skills, projects, and learning progress",
        "Showcase of student achievements and development milestones",
      ],
      liveDemoUrl: "https://proofa.pages.dev/",
      isPlaceholder: false,
    },
    {
      id: "project-2",
      name: "TaskFlow",
      subtitle: "Collaborative Portfolio & Git Workflow Project",
      label: "Team project · 3 members",
      purpose:
        "A three-member collaborative portfolio project built to practice real-world Git and GitHub workflows. The project involved working with branches, commits, pull requests, code reviews, and merge conflict resolution while developing the portfolio together.",
      technologies: [
        "Git",
        "GitHub",
        "Team Collaboration",
        "Version Control",
        "Web Development",
      ],
      features: [
        "Branch-based development",
        "Commits and pushes",
        "Pull requests",
        "Code reviews",
        "Merge conflict resolution",
      ],
      isPlaceholder: false,
    },
    {
      id: "project-3",
      name: "Personal Portfolio Website",
      purpose:
        "A personal portfolio created to showcase my academic journey, skills, projects, technical interests, and ongoing learning.",
      technologies: ["Google AI Studio", "GitHub", "Vercel"],
      features: [
        "Showcase of academic journey, technical foundation, and hands-on projects",
        "Highlights technical interests and ongoing learning",
        "Interactive resume viewer and markdown export",
      ],
      liveDemoUrl: "https://khushi-portfolio-6u8i.vercel.app/",
      githubUrl: "https://github.com/khushi3307",
      isPlaceholder: false,
    },
  ],
  experience: [
    {
      id: "act-1",
      role: "Technical Events & Hackathons",
      responsibilities: [
        "Participated in student technical activities, collaborative problem-solving sessions, and hackathon-related activities.",
      ],
    },
    {
      id: "act-2",
      role: "Public Speaking & Presentations",
      responsibilities: [
        "Participated in technical presentations, public-speaking activities, and student events.",
      ],
    },
    {
      id: "act-3",
      role: "Model United Nations",
      responsibilities: [
        "Participated in Model United Nations activities involving research, speech preparation, structured argumentation, and formal discussion.",
      ],
    },
  ],
  education: [
    {
      id: "edu-1",
      degree: "Bachelor of Technology (B.Tech) — Computer Science & Engineering (Data Science)",
      institution: "Nalla Narasimha Reddy Education Society’s Group of Institutions",
      duration: "2025 – 2029",
      coursework: [
        "Programming",
        "Data Structures & Algorithms",
        "Data Science",
        "Mathematics",
        "Computer Organization",
        "Digital Logic",
      ],
    },
  ],
  certifications: [
    {
      id: "cert-1",
      name: "AI Fundamentals: Foundations for Understanding AI",
      issuer: "IBM SkillsBuild",
      date: "Completed · 2026",
      credentialUrl:
        "https://www.linkedin.com/posts/khushi-vishwakarma-a11470384_ibm-ibmskillsbuild-artificialintelligence-activity-7508513490400362496-c7TR",
    },
  ],
  achievements: [
    {
      id: "ach-1",
      title: "Hackathon Participation",
      description:
        "Participated in student hackathon activities involving problem identification, ideation, teamwork, and solution development.",
    },
    {
      id: "ach-2",
      title: "Public Speaking",
      description:
        "Participated in college-level speaking and presentation activities, including technical and formal events.",
    },
    {
      id: "ach-3",
      title: "Continuous Technical Learning",
      description:
        "Building foundations in programming, data structures, data science, Git/GitHub, and emerging AI tools through coursework and independent learning.",
    },
  ],
};
