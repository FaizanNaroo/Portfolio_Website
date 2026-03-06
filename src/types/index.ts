// export interface Education {
//   degree: string;
//   institution: string;
//   duration: string;
//   details?: string;
// }

// export interface PersonalInfo {
//   name: string;
//   title: string;
//   heroTagline: string;
//   heroSubtitle: string;
//   email?: string;
//   location?: string;
//   bio?: string;
//   resumeUrl?: string;
//   about?: {
//     story: string;
//     education: Education;
//   };
//   socialLinks?: {
//     github?: string;
//     linkedin?: string;
//     twitter?: string;
//     email?: string;
//   };
// }

// export interface Project {
//   id: string;
//   title: string;
//   description: string;
//   tags?: string[];
//   techStack?: string[];
//   link?: string;
//   github?: string;
//   image?: string;
//   challenge?: string;
//   solution?: string;
// }

// export interface Skill {
//   category: string;
//   skills: string[];
// }

// export interface Experience {
//   type: 'experience' | 'education';
//   title: string;
//   organization: string;
//   location?: string;
//   startDate: string;
//   endDate: string;
//   achievements?: string[];
//   description?: string;
//   technologies?: string[];
//   company?: string;
//   position?: string;
//   duration?: string;
// }





// export interface RoadmapItem {
//   type: 'education' | 'experience';
//   title: string;
//   organization: string;
//   location: string;
//   startDate: string;
//   endDate: string;
//   achievements: string[];
// }

// export interface SkillCategory {
//   proficient: string[];
//   intermediate: string[];
//   familiar: string[];
//   coreCs: string[];
// }



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

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  challenge: string;
  solution: string;
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string; // For future use with next/image
}

export interface RoadmapItem {
  type: 'education' | 'experience';
  title: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string;
  achievements: string[];
}

export interface SkillCategory {
  proficient: string[];
  intermediate: string[];
  familiar: string[];
  coreCs: string[];
}