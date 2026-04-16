import type { PersonalInfo} from '@/types';

// src/data/content.ts
import { Project, RoadmapItem, SkillCategory } from '@/types';

export const personalInfo = {
  name: "Muhammad Fezaan Shamshad", // Replace with your actual name
  title: "Full-Stack Developer & AI Enthusiast",
  heroTagline: "Engineering Intelligent Systems from the Ground Up.",
  heroSubtitle: "Specializing in AI, Natural Language Processing, Computer Vision, and Full-Stack Development. Building scalable solutions that bridge cutting-edge research with production-ready applications.",
  about: {
    story: "I'm a passionate Computer Science student from FAST NUCES Lahore with a deep interest in building intelligent systems that solve real-world problems. My journey in technology began with a curiosity about how things work, which evolved into a commitment to creating impactful solutions that bridge the gap between cutting-edge research and production-ready applications. With expertise spanning AI,natural language processing, computer vision, and full-stack development, I thrive on tackling complex challenges that require both technical depth and creative problem-solving. Whether it's optimizing algorithms for performance, architecting scalable systems, or designing intuitive user interfaces, I approach each project with a focus on quality, maintainability, and user value.",
    education: [
      {
        degree: "Bachelor of Science in Computer Science",
        institution: "FAST NUCES Lahore",
        duration: "2023 - 2027",
        details: "Relevant Coursework: Object Oriented Programming, COAL, Software Design & Analysis, Database Systems, Operating Systems, Computer Networks, Natural Language Processing."
      }
    ]
  }
};

export const skillsData: SkillCategory = {
  proficient: ["C++","Python","HTML","CSS","SQL", "Django",  "Git",],
  intermediate: ["React.js", "Node.js","JavaScript/TypeScript","REST APIs", "Tailwind CSS",],
  familiar: ["x86 Assembly","Dialogflow ES",],
  coreCs: ["Object Oriented Programming","Data Structures"  ,"Algorithms", "Software Design & Architecture (SDA)", "Computer Networks", "Operating Systems", "Database Management Systems"]
};

export const projectsData: Project[] = [
   {
    id: "medai",
    title: "MedAI",
    description: "An AI-assisted healthcare support platform for symptom guidance, basic risk insights, and streamlined user interaction, medication interaction graph, report analyzer.",
    techStack: ["Python", "React", "Node.js", "REST APIs", "Tailwind CSS"],
    challenge: "Healthcare-related assistants must provide fast and clear responses while maintaining a simple user experience for diverse users.",
    solution: "Built a responsive full-stack application with structured prompt handling, clean UI flows, and API integration for reliable, low-latency interactions.",
    githubUrl: "https://github.com/Inter-AI-Club-Umt/ai-hackathon-techverse2-team-delta/commit/175008c4d03a4751dbaf5861e72fe9a8d7363827",
    liveUrl: "https://faizannaroo.vercel.app/videos/MedAI.mp4"
  },
  {
    id: "faststay-dashboard",
    title: "FastStay",
    description: "FastStay is a role-based hostel platform where students discover and get personalized recommendations, managers list and manage hostels/rooms, and admins oversee and control the entire system end-to-end.",
    techStack: ["Python", "Django", "Django REST Framework (DRF)", "PostgreSQL", "Cloudinary", "React", "TypeScript", "Vite", "Tailwind CSS", "Axios","React Router","Mapbox GL",],
    challenge: "Key challenge was designing secure, role-based workflows so students, managers, and admins could each access the right features without compromising data integrity or system control.",
    solution: "Implemented a robust role-based access architecture with clear permission boundaries, ensuring each user type gets a streamlined experience while keeping the platform secure and centrally manageable.",
    githubUrl: "https://github.com/FaizanNaroo/FastStay.git",
    liveUrl: "https://faststay.vercel.app"
  },
  {
    id: "moviemate",
    title: "MovieMate",
    description: "A movie discovery and recommendation web app with search, watchlist management, and trending insights.",
    techStack: ["React", "TypeScript", "Next.js", "Tailwind CSS", "REST APIs"],
    challenge: "Users need a fast and clean way to discover movies, track what they want to watch, and explore trending content in one place.",
    solution: "Built a responsive movie platform with real-time API search, detailed movie pages, and watchlist flows. Optimized UX with clean information hierarchy and smooth interactions for quick browsing.",
    githubUrl: "https://github.com/FaizanNaroo/MovieMate",
    liveUrl: "https://faizannaroo.vercel.app/videos/MovieMate.mp4"
  },
  {
    id: "flappy-bird",
    title: "Flappy Bird",
    description: "A browser-based Flappy Bird clone featuring smooth physics, obstacle generation, scoring, and restart flow.",
    techStack: ["JavaScript", "HTML", "CSS"],
    challenge: "Recreating simple but responsive arcade gameplay requires precise collision detection and tuned jump/gravity behavior for a fair experience.",
    solution: "Implemented game loop timing, obstacle spawn logic, collision checks, and score progression with lightweight front-end code for fast load and smooth controls.",
    githubUrl: "https://github.com/FaizanNaroo/FlappyBird",

  },
  {
    id: "sam-chatbot",
    title: "Sam Chatbot",
    description: "An AI-powered chatbot for conversational assistance with intent handling and context-aware responses.",
    techStack: ["Python", "Dialogflow ES", "JavaScript", "HTML", "CSS"],
    challenge: "Building a chatbot that understands varied user queries while maintaining relevant, human-like responses across conversations.",
    solution: "Designed conversation flows, integrated intent/entity handling, and implemented a clean web chat interface with responsive behavior for smooth interaction.",
    githubUrl: "",
    liveUrl: "https://faizannaroo.vercel.app/videos/FlappyBird.mp4"
  },
];

export const roadmapData: RoadmapItem[] = [
    {
    type: "education",
    title: "Matriculation in Computer Science",
    organization: "Allied School, Project of Punjab Group of Colleges",
    location: "Kamoke, Pakistan",
    startDate: "2020",
    endDate: "2021",
    achievements: [
    ],
  },
  {
    type: "education",
    title: "Intermediate in Pre-Engineering",
    organization: "Punjab Group of Colleges",
    location: "Gujranwala, Pakistan",
    startDate: "2022",
    endDate: "2023",
    achievements: [
    ],
  },
  {
    type: "education",
    title: "Bachelor of Science in Computer Science",
    organization: "FAST National University of Computer and Emerging Sciences",
    location: "Lahore, Pakistan",
    startDate: "2023",
    endDate: "2027",
    achievements: [
    ],
  },
  {
    type: "experience",
    title: "Lab Demonstrator",
    organization: "FAST National University of Computer and Emerging Sciences",
    location: "Lahore, Pakistan",
    startDate: "Jan 2026",
    endDate: "",
    achievements: [
     "Provided guidance in Object-Oriented Programming and problem-solving.",
     "Assisted 50+ students in understanding, developing, and debugging logic.",

    ]
  }
];