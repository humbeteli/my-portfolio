export interface Project {
  id: string;
  number: string;
  titleEn: string;
  titleAz: string;
  descriptionEn: string;
  descriptionAz: string;
  technologies: string[];
  features: string[];
  githubUrl: string;
  liveUrl: string;
}

export const projects: Project[] = [
  {
    id: "vendo",
    number: "01",
    titleEn: "Vendo",
    titleAz: "Vendo",
    descriptionEn:
      "A responsive e-commerce application built with React and TypeScript, featuring product filtering, cart functionality and API integration.",
    descriptionAz:
      "React və TypeScript ilə hazırlanmış responsive e-commerce tətbiqi. Məhsul filtrasiyası, səbət funksionallığı və API inteqrasiyası daxildir.",
    technologies: [
      "React",
      "TypeScript",
      "Zustand",
      "React Query",
      "DummyJSON API",
      "Vite",
    ],
    features: [
      "Product filtering",
      "Shopping cart",
      "API integration",
      "State management",
    ],
    githubUrl: "https://github.com/humbeteli/e-commerce-site",
    liveUrl: "https://e-commerce-site-xi-flax.vercel.app/",
  },
  {
    id: "codemate",
    number: "02",
    titleEn: "CodeMate",
    titleAz: "CodeMate",
    descriptionEn:
      "A browser-based chess game built with Vanilla JavaScript and an AI opponent using the Minimax algorithm.",
    descriptionAz:
      "Vanilla JavaScript ilə hazırlanmış və Minimax alqoritmi ilə işləyən AI rəqibə sahib şahmat oyunu.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Minimax",
      "Alpha-Beta Pruning",
      "Capacitor",
    ],
    features: [
      "AI opponent",
      "Drag and drop",
      "Touch interaction",
      "Pawn promotion",
    ],
    githubUrl: "https://github.com/humbeteli/chess-game",
    liveUrl: "https://chess-game-be7z.vercel.app/",
  },
  {
    id: "kanban",
    number: "03",
    titleEn: "Kanban",
    titleAz: "Kanban",
    descriptionEn:
      "A task management application built with React featuring CRUD operations, form validation and protected routes.",
    descriptionAz:
      "React ilə hazırlanmış task management tətbiqi. CRUD əməliyyatları, form validation və protected routes funksiyalarına malikdir.",
    technologies: [
      "React",
      "React Router",
      "Context API",
      "useReducer",
      "json-server",
    ],
    features: [
      "CRUD operations",
      "Form validation",
      "Task management",
      "Protected routes",
    ],
    githubUrl: "https://github.com/humbeteli/kanban",
    liveUrl: "https://kanban-sage-seven.vercel.app/",
  },
  {
    id: "omdb",
    number: "04",
    titleEn: "OMDb Movie Search",
    titleAz: "OMDb Film Axtarışı",
    descriptionEn:
      "A React movie search application connected to the OMDb REST API with loading, error handling and pagination.",
    descriptionAz:
      "OMDb REST API ilə işləyən React film axtarış tətbiqi. Loading, error handling və pagination funksiyalarını əhatə edir.",
    technologies: ["React", "TypeScript", "REST API", "OMDb API", "Vite"],
    features: [
      "Movie search",
      "API integration",
      "Loading state",
      "Pagination",
    ],
    githubUrl: "https://github.com/humbeteli/omdb-movie-search",
    liveUrl: "https://omdb-movie-search-henna.vercel.app/",
  },
];