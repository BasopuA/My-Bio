export interface ResumeData {
  personal: {
    name: string;
    profession: string;
    location: string;
    phone: string;
    email: string;
    photo: string;
    summary: string;
  };
  skills: string[];
  experience: Experience[];
  education: Education[];
  languages: string[];
  references: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  achievements?: string[];
}

export const resumeData: ResumeData = {
  personal: {
    name: "Anele Basopu",
    profession: "Software Developer & Logistics Professional",
    location: "Butterworth, South Africa 4960",
    phone: "+27835978556",
    email: "anelebasopu@gmail.com",
    photo: "/ace.jpeg",
      summary:
        "Dedicated and versatile professional with a unique blend of software development expertise and logistics experience. Currently completing a National Diploma in Computer Science at Tshwane University of Technology while gaining practical experience through Work Integrated Learning at the South African Radio Astronomy Observatory. Proficient in Java, Python (FastAPI), React, TypeScript, and database technologies. Strong problem-solving abilities with a track record of collaboration and achievement in both technical and operational environments.",
  },
  skills: [
    "Java",
    "HTML",
    "CSS",
    "Database (Oracle and PostgreSQL)",
    "Python (FastAPI)",
    "React (Next.js)",
    "TypeScript",
    "GitHub",
    "Docker",
  ],
  experience: [
    {
      title: "Work Integrated Learning",
      company: "South African Radio Astronomy Observatory, Cape Town",
      period: "Aug 2025 – Jan 2026",
      description: [
        "Managed an employee project as part of training for a major initiative.",
        "Learned Python using FastAPI and React with TypeScript during the project.",
        "Collaborated with team members to achieve target results.",
        "Awarded certificate in Advanced Python Training by SARAO.",
      ],
    },
    {
      title: "Dispatch Clerk",
      company: "Novus Print Holdings",
      period: "Jan 2017 – Jan 2023",
      description: [],
    },
    {
      title: "Load Master",
      company: "Novus Print Holdings",
      period: "May 2011 – Jan 2017",
      description: [],
    },
  ],
  education: [
    {
      degree: "Bachelor of Science: National Diploma in Computer Science",
      institution: "Tshwane University of Technology - South Africa",
      period: "Expected May 2026",
      achievements: ["Highest achiever in Database Programming"],
    },
    {
      degree: "Matric",
      institution: "Joe Slovo Engineering School",
      period: "Dec 2009",
    },
  ],
  languages: ["IsiXhosa", "English"],
  references: "Available upon request",
};