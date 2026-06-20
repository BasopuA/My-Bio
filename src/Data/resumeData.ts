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
    profession: "Software Engineer",
    location: "Butterworth, South Africa 4960",
    phone: "+27835978556",
    email: "anelebasopu@gmail.com",
    photo: "/ace.jpeg",
      summary:
        "Dedicated software engineer with practical experience in software development through Work Integrated Learning at the South African Radio Astronomy Observatory (SARAO). Currently pursuing an Advanced Diploma in Computer Science while working as a Graduate in Training Software – Work Integrated Learning at SARAO. Proficient in Java, Python (FastAPI), React, TypeScript, and database technologies. Strong problem-solving abilities with a focus on building scalable software solutions.",
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
      title: "Graduate in Training Software – Work Integrated Learning",
      company: "South African Radio Astronomy Observatory (SARAO), Cape Town",
      period: "Aug 2025 – Present",
      description: [
        "Work Integrated Learning student at SARAO from August 2025 – July 2026, progressing to Graduate in Training Software – Work Integrated Learning from July 2026 – June 2029 (3-year programme).",
        "Developed software solutions using Python (FastAPI), React, and TypeScript.",
        "Collaborated with cross-functional teams to deliver projects within the SARAO Graduate Programme.",
        "Awarded certificate in Advanced Python Training by SARAO.",
      ],
    },
  ],
  education: [
    {
      degree: "Advanced Diploma in Computer Science",
      institution: "Currently pursuing",
      period: "In Progress",
    },
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