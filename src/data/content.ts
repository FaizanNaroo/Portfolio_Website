import type { PersonalInfo} from '@/types';

// export const personalInfo: PersonalInfo = {
//   name: "Faizan Naroo", // Replace with your actual name
//   title: "Full-Stack Developer & Problem Solver",
//   heroTagline: "Engineering Intelligent Systems from the Ground Up.",
//   heroSubtitle: "Specializing in AI, Computer Vision, and Full-Stack Development. Building scalable solutions that bridge cutting-edge research with production-ready applications.",
//   about: {
//     story: "I'm a passionate Full-Stack Developer and Computer Science student with a deep interest in building intelligent systems that solve real-world problems. My journey in technology began with a curiosity about how things work, which evolved into a commitment to creating impactful solutions that bridge the gap between cutting-edge research and production-ready applications. With expertise spanning AI, computer vision, and full-stack development, I thrive on tackling complex challenges that require both technical depth and creative problem-solving. Whether it's optimizing algorithms for performance, architecting scalable systems, or designing intuitive user interfaces, I approach each project with a focus on quality, maintainability, and user value.",
//     education: {
//       degree: "Bachelor of Science in Computer Science",
//       institution: "FAST NUCES Lahore",
//       duration: "2021 - 2025",
//       details: "CGPA: 3.8/4.0. Relevant Coursework: Artificial Intelligence, Machine Learning, Computer Vision, Software Design & Architecture, Database Systems, Computer Networks. Dean's List: Fall 2022, Spring 2023, Fall 2023"
//     }
//   }
// };

// export const skillsData = {
//   proficient: ["Python", "JavaScript/TypeScript", "React.js", "Node.js", "Django", "PostgreSQL", "MongoDB", "Git", "REST APIs", "Tailwind CSS"],
//   intermediate: ["TensorFlow", "PyTorch", "OpenCV", "Next.js", "Express.js", "Docker", "AWS", "Redis", "GraphQL", "WebSockets"],
//   familiar: ["Kubernetes", "Go", "Rust", "Apache Kafka", "Microservices", "CI/CD", "Terraform", "Machine Learning Ops"],
//   coreCs: ["Data Structures & Algorithms", "Software Design & Architecture (SDA)", "Computer Networks", "Operating Systems", "Database Management Systems", "Object-Oriented Programming", "Design Patterns", "System Design"]
// };

// export const projectsData = [
//   {
//     id: "agrismart",
//     title: "AgriSmart",
//     description: "An intelligent agricultural monitoring system leveraging computer vision for crop health analysis and yield prediction.",
//     techStack: ["Python", "Django", "OpenCV", "TensorFlow", "PostgreSQL", "React"],
//     challenge: "Traditional crop monitoring methods are time-consuming and lack real-time insights. Farmers need an automated system to detect diseases early and optimize resource allocation.",
//     solution: "Developed a computer vision pipeline using CNNs for disease detection with 94% accuracy. Integrated Django REST API for real-time data processing and React dashboard for visualization. Implemented edge computing for on-field deployment.",
//     // Add links later: githubUrl: '', liveUrl: ''
//   },
//   {
//     id: "arhatiya",
//     title: "Arhatiya App",
//     description: "A comprehensive marketplace platform connecting farmers directly with buyers, eliminating middlemen and ensuring fair pricing.",
//     techStack: ["MongoDB", "Express.js", "React", "Node.js", "Django", "Redis", "AWS"],
//     challenge: "Farmers lose 30-40% of profits to intermediaries. The platform needed to handle real-time bidding, secure transactions, and scale to thousands of concurrent users.",
//     solution: "Built a hybrid MERN + Django microservices architecture. Implemented WebSocket-based real-time bidding, JWT authentication, and Redis caching for sub-100ms response times. Deployed on AWS with auto-scaling to handle 10K+ concurrent users.",
//   },
//   {
//     id: "faststay-dashboard",
//     title: "FastStay Dashboard",
//     description: "An enterprise hotel management system with advanced analytics, booking management, and revenue optimization.",
//     techStack: ["TypeScript", "Next.js", "Prisma", "PostgreSQL", "tRPC", "Tailwind CSS"],
//     challenge: "Hotel managers needed a unified dashboard to manage bookings, analyze revenue patterns, and optimize pricing strategies across multiple properties.",
//     solution: "Architected a type-safe full-stack application using TypeScript and tRPC for end-to-end type safety. Implemented complex data aggregations with Prisma, real-time updates via WebSockets, and dynamic pricing algorithms. Achieved 99.9% uptime with comprehensive error handling.",
//   },
//   // Add the other projects (ML Experiment Tracker, API Health Monitor, Component Design System) here following the same pattern
// ];

// export const roadmapData = [
//   {
//     type: "education",
//     title: "Bachelor of Science in Computer Science",
//     organization: "FAST NUCES Lahore",
//     location: "Lahore, Pakistan",
//     startDate: "2021",
//     endDate: "2025",
//     achievements: [
//       "CGPA: 3.8/4.0",
//       "Relevant Coursework: Artificial Intelligence, Machine Learning, Computer Vision, Software Design & Architecture, Database Systems, Computer Networks",
//       "Dean's List: Fall 2022, Spring 2023, Fall 2023"
//     ]
//   },
//   {
//     type: "experience",
//     title: "Full-Stack Development Intern",
//     organization: "Tech Company Name", // Replace if you have a specific name
//     location: "Lahore, Pakistan",
//     startDate: "Jun 2024",
//     endDate: "Aug 2024",
//     achievements: [
//       "Developed RESTful APIs using Django and Node.js, serving 50K+ daily requests",
//       "Built responsive React dashboards with real-time data visualization",
//       "Optimized database queries, reducing response time by 40%",
//       "Collaborated with cross-functional teams using Agile methodologies"
//     ]
//   },
//   {
//     type: "experience",
//     title: "AI Research Assistant",
//     organization: "University Research Lab",
//     location: "Lahore, Pakistan",
//     startDate: "Jan 2024",
//     endDate: "May 2024",
//     achievements: [
//       "Implemented computer vision models for object detection using YOLO and Faster R-CNN",
//       "Achieved 92% mAP on custom dataset through data augmentation and transfer learning",
//       "Published research paper on agricultural disease detection (under review)",
//       "Mentored 3 junior students on ML fundamentals and PyTorch"
//     ]
//   }
// ];










// src/data/content.ts
import { Project, RoadmapItem, SkillCategory } from '@/types';

export const personalInfo = {
  name: "Muhammad Fezaan", // Replace with your actual name
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
    id: "faststay-dashboard",
    title: "FastStay",
    description: "An enterprise hotel management system with advanced analytics, booking management, and revenue optimization.",
    techStack: ["TypeScript", "Next.js", "Prisma", "PostgreSQL", "tRPC", "Tailwind CSS"],
    challenge: "Hotel managers needed a unified dashboard to manage bookings, analyze revenue patterns, and optimize pricing strategies across multiple properties.",
    solution: "Architected a type-safe full-stack application using TypeScript and tRPC for end-to-end type safety. Implemented complex data aggregations with Prisma, real-time updates via WebSockets, and dynamic pricing algorithms. Achieved 99.9% uptime with comprehensive error handling.",
    githubUrl: "https://github.com/yourusername/faststay",
    liveUrl: "https://faststay-demo.vercel.app"
  },
  {
    id: "moviemate",
    title: "MovieMate",
    description: "A movie discovery and recommendation web app with search, watchlist management, and trending insights.",
    techStack: ["React", "TypeScript", "Next.js", "Tailwind CSS", "REST APIs"],
    challenge: "Users need a fast and clean way to discover movies, track what they want to watch, and explore trending content in one place.",
    solution: "Built a responsive movie platform with real-time API search, detailed movie pages, and watchlist flows. Optimized UX with clean information hierarchy and smooth interactions for quick browsing.",
    githubUrl: "https://github.com/yourusername/moviemate",
    liveUrl: "https://moviemate-demo.vercel.app"
  },
  {
    id: "flappy-bird",
    title: "Flappy Bird",
    description: "A browser-based Flappy Bird clone featuring smooth physics, obstacle generation, scoring, and restart flow.",
    techStack: ["JavaScript", "HTML", "CSS"],
    challenge: "Recreating simple but responsive arcade gameplay requires precise collision detection and tuned jump/gravity behavior for a fair experience.",
    solution: "Implemented game loop timing, obstacle spawn logic, collision checks, and score progression with lightweight front-end code for fast load and smooth controls.",
    githubUrl: "https://github.com/yourusername/flappy-bird",
    liveUrl: "https://flappybird-demo.vercel.app"
  },
  {
    id: "sam-chatbot",
    title: "Sam Chatbot",
    description: "An AI-powered chatbot for conversational assistance with intent handling and context-aware responses.",
    techStack: ["Python", "Dialogflow ES", "JavaScript", "HTML", "CSS"],
    challenge: "Building a chatbot that understands varied user queries while maintaining relevant, human-like responses across conversations.",
    solution: "Designed conversation flows, integrated intent/entity handling, and implemented a clean web chat interface with responsive behavior for smooth interaction.",
    githubUrl: "https://github.com/yourusername/sam-chatbot",
    liveUrl: "https://sam-chatbot-demo.vercel.app"
  },
  {
    id: "medai",
    title: "MedAI",
    description: "An AI-assisted healthcare support platform for symptom guidance, basic risk insights, and streamlined user interaction.",
    techStack: ["Python", "React", "Node.js", "REST APIs", "Tailwind CSS"],
    challenge: "Healthcare-related assistants must provide fast and clear responses while maintaining a simple user experience for diverse users.",
    solution: "Built a responsive full-stack application with structured prompt handling, clean UI flows, and API integration for reliable, low-latency interactions.",
    githubUrl: "https://github.com/yourusername/medai",
    liveUrl: "https://medai-demo.vercel.app"
  }
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