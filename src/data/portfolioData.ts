export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'frontend' | 'landing' | 'academic' | 'internship';
  description: string;
  fullOverview: string;
  technologies: string[];
  image: string;
  liveDemoUrl?: string;
  githubUrl?: string;
  highlights: string[];
  keyFeatures: string[];
  codeSnippet?: {
    language: string;
    code: string;
  };
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Languages' | 'Tools & Workflow';
  level: number; // percentage
  experience: string;
  description: string;
  highlights: string[];
}

export const PERSONAL_INFO = {
  name: 'Shibbu Kumar',
  role: 'Web Developer',
  tagline: 'Aspiring Frontend Developer & B.Tech IT Student',
  bio: 'I am a B.Tech Information Technology student passionate about building clean, responsive, and user-friendly web applications. Currently focused on mastering modern HTML, CSS, JavaScript, and Java to deliver seamless digital experiences.',
  education: {
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Information Technology',
    status: 'Undergraduate Student',
    highlights: 'Core Coursework in Data Structures, OOPs in Java, Web Technologies, Database Systems & Software Engineering',
  },
  contact: {
    email: 'shibbukumar74080@gmail.com',
    phone: '+91 7408070347',
    location: 'Uttar Pradesh, India',
    github: 'https://github.com/shibbukumar967-afk',
    linkedin: 'https://www.linkedin.com/in/shibbu-kumar-1b86aa439/',
  },
  internshipTask: {
    title: 'Web Development Internship Task 1',
    level: 'Level 1 – Task 1',
    topic: 'Personal Portfolio Website',
    requirements: [
      'Semantic HTML5 document structure with clean hierarchy',
      'Modern, responsive CSS3 styling across desktop, tablet, and mobile',
      'Dedicated sections: Home, About, Skills, Projects, Resume, Contact',
      'Accessible navigation with smooth anchor scrolling',
      'Contact channels with direct email and phone integration',
      'Resume download link and submission documentation',
    ],
  },
};

export const SKILLS_DATA: Skill[] = [
  {
    name: 'HTML5',
    category: 'Frontend',
    level: 95,
    experience: 'Solid Foundation',
    description: 'Semantic markup, accessible web standards, SEO-friendly page structure, form validations, and multimedia integration.',
    highlights: ['Semantic Elements', 'Web Accessibility (a11y)', 'Audio/Video & Forms'],
  },
  {
    name: 'CSS3 & Modern Styling',
    category: 'Frontend',
    level: 90,
    experience: 'Advanced Layouts',
    description: 'Flexbox, CSS Grid systems, custom properties, media queries for responsive viewports, and smooth transitions.',
    highlights: ['Flexbox & Grid Systems', 'Responsive Breakpoints', 'Smooth Animations'],
  },
  {
    name: 'JavaScript / React Basics',
    category: 'Frontend',
    level: 80,
    experience: 'Interactive UI',
    description: 'Modern ES6+ syntax, DOM manipulation, state management, event listeners, component-driven development, and async fetch.',
    highlights: ['ES6+ Syntax', 'DOM Manipulation', 'Component Architecture'],
  },
  {
    name: 'Java Programming',
    category: 'Languages',
    level: 85,
    experience: 'Core Fundamentals',
    description: 'Object-Oriented Programming (OOP) principles, inheritance, polymorphism, basic data structures, and algorithmic logic.',
    highlights: ['OOPs Principles', 'Data Structures Basics', 'Problem Solving'],
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend',
    level: 88,
    experience: 'Utility-First Styling',
    description: 'Rapid UI prototyping, design consistency, responsive design utilities, and modern dark mode implementation.',
    highlights: ['Utility Classes', 'Responsive Design', 'Custom Themes'],
  },
  {
    name: 'Git & GitHub',
    category: 'Tools & Workflow',
    level: 82,
    experience: 'Version Control',
    description: 'Repository management, branching, committing, pull requests, and hosting project code for team collaboration.',
    highlights: ['Version Tracking', 'GitHub Hosting', 'Branch Workflows'],
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'portfolio-task-1',
    title: 'Personal Portfolio (Internship Task 1)',
    subtitle: 'Level 1 – Task 1 Submission',
    category: 'internship',
    description: 'A fully responsive and interactive personal portfolio showcasing developer background, technical skills, projects, and contact channels.',
    fullOverview: 'Developed as part of the Web Development Internship program (Level 1, Task 1). Built from ground up using semantic HTML5, modern CSS3 styling, and clean JavaScript component architecture. Features responsive layouts for all screen sizes, smooth section transitions, an interactive resume modal, and instant contact verification.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    image: '/src/assets/images/portfolio_project_preview_1790228174789.jpg',
    liveDemoUrl: '#home',
    githubUrl: 'https://github.com/shibbukumar967-afk/personal-portfolio',
    highlights: [
      '100% Mobile & Desktop Responsive',
      'Smooth scroll navigation across all 6 core sections',
      'Downloadable resume and printable view',
      'Active email & phone integration with clipboard copy',
    ],
    keyFeatures: [
      'Hero section with developer introduction & quick actions',
      'About Me breakdown with B.Tech IT education highlights',
      'Visual skills matrix with interactive progress indicators',
      'Filtered project gallery with detailed modal viewer',
      'Contact section with working copy-to-clipboard tools',
    ],
    codeSnippet: {
      language: 'html',
      code: `<!-- Semantic Header & Navigation -->
<header class="hero" id="home">
  <nav class="navbar">
    <div class="logo">SK<span>.</span></div>
    <ul class="nav-links">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</header>`,
    },
  },
  {
    id: 'modern-landing-page',
    title: 'Modern Product Landing Page',
    subtitle: 'Frontend Practice & Layout Architecture',
    category: 'landing',
    description: 'A high-converting landing page layout designed to practice responsive grids, visual hierarchies, and call-to-action funnels.',
    fullOverview: 'A sleek, contemporary digital product landing page crafted to master modern layout principles. Features a balanced 3-column benefit grid, testimonial highlights, pricing cards, and interactive newsletter sign-up with real-time field validation.',
    technologies: ['HTML5', 'CSS3 Flexbox', 'CSS Grid', 'UI/UX Design'],
    image: '/src/assets/images/landing_project_preview_1790228187463.jpg',
    githubUrl: 'https://github.com/shibbukumar/modern-landing-page',
    highlights: [
      'Conversion-focused visual hierarchy',
      'Adaptive CSS Grid with zero horizontal scroll',
      'Refined typography with balanced headline contrast',
    ],
    keyFeatures: [
      'High-impact hero section with primary and secondary CTAs',
      'Features showcase with custom SVG icon styling',
      'Interactive pricing tier comparison cards',
      'Optimized viewport handling across mobile and tablet',
    ],
    codeSnippet: {
      language: 'css',
      code: `/* Responsive CSS Grid Showcase */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  padding: 4rem 1.5rem;
}

.feature-card:hover {
  transform: translateY(-4px);
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}`,
    },
  },
  {
    id: 'student-academic-portal',
    title: 'Student Web Project & Academic Portal',
    subtitle: 'Campus Dashboard & Information Portal',
    category: 'academic',
    description: 'An intuitive academic student portal focused on course timetables, semester modules, performance tracking, and clean data tables.',
    fullOverview: 'Engineered as an academic project during B.Tech coursework. Provides students with an organized view of semester schedules, course syllabus outlines, faculty contacts, and study resource links. Implemented with clean tabular structures and intuitive navigation.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Tabular Data'],
    image: '/src/assets/images/student_portal_preview_1790228198597.jpg',
    githubUrl: 'https://github.com/shibbukumar/student-web-portal',
    highlights: [
      'Clean tabular alignment with tabular figures',
      'Accessible timetable navigation with tab switching',
      'Modular layout adaptable for college announcements',
    ],
    keyFeatures: [
      'Weekly timetable timetable viewer with day filters',
      'Course module directory with syllabus progress tracking',
      'Notice board component with priority tags',
      'Quick academic resource download repository',
    ],
    codeSnippet: {
      language: 'javascript',
      code: `// Schedule Filter Logic
function filterSchedule(day) {
  const allRows = document.querySelectorAll('.schedule-row');
  allRows.forEach(row => {
    row.style.display = (row.dataset.day === day || day === 'all') 
      ? 'table-row' 
      : 'none';
  });
}`,
    },
  },
];
