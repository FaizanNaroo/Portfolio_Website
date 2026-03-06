// src/types/index.ts
export interface PersonalInfo {
  name: string;
  title: string;
  heroTagline: string;
  heroSubtitle: string;
  about: {
    story: string;
    education: {
      degree: string;
      institution: string;
      duration: string;
      details: string;
    }[];
  };
}

// You can add other interfaces here later (for Project, Skill, etc.)