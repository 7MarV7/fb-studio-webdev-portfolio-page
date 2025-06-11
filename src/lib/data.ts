import type { LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  imageUrl: string;
  imageHint: string;
  technologies: string[];
  liveLink?: string;
  repoLink?: string;
}

export const initialProjectsData: Project[] = [
  {
    id: 'proj1',
    title: 'Interactive Data Visualizer',
    description: 'A web app for visualizing complex datasets with interactive 3D charts.',
    detailedDescription: 'Developed an innovative web application, the Interactive Data Visualizer, which allows users to explore and understand complex datasets through dynamic, interactive 3D charts and graphs. Leveraged WebGL technologies for high-performance rendering.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'data visualization',
    technologies: ['React', 'Three.js', 'D3.js', 'Node.js'],
    liveLink: '#',
    repoLink: '#',
  },
  {
    id: 'proj2',
    title: 'E-commerce Platform X',
    description: 'A modern e-commerce platform with a focus on user experience and 3D product previews.',
    detailedDescription: 'Led the frontend development for E-commerce Platform X, a cutting-edge online shopping solution. Key features include a highly intuitive user interface and unique 3D product preview capabilities, enhancing customer engagement and conversion rates.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'ecommerce shopping',
    technologies: ['Next.js', 'TypeScript', 'GraphQL', 'Stripe'],
    liveLink: '#',
    repoLink: '#',
  },
  {
    id: 'proj3',
    title: 'Personal Portfolio CMS',
    description: 'A custom CMS to manage and showcase creative portfolios with dynamic content loading.',
    detailedDescription: 'Designed and built a bespoke Content Management System tailored for creative professionals to effortlessly manage and showcase their portfolios. Features include dynamic content loading for a seamless user experience and customizable themes.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'portfolio cms',
    technologies: ['Vue.js', 'Firebase', 'Nuxt.js'],
    liveLink: '#',
    repoLink: '#',
  },
];

export const initialIntroductionText = "A passionate and creative Web Developer specializing in crafting immersive and interactive digital experiences. With a strong foundation in modern frontend and backend technologies, coupled with a keen eye for design and 3D graphics, I transform complex ideas into elegant and user-friendly solutions. Explore my work to see how I can bring your next project to life.";

export interface SkillCategory {
  title: string;
  iconName: "Code2" | "Server" | "ToyBrick" | "Wrench"; // Adjust based on available Lucide icons
  skillsList: string[];
}

export const skillsData: SkillCategory[] = [
  {
    title: 'Frontend Development',
    iconName: 'Code2',
    skillsList: ['HTML5, CSS3, Tailwind CSS', 'JavaScript (ES6+), TypeScript', 'React, Next.js', 'Vue.js, Nuxt.js', 'Responsive Design'],
  },
  {
    title: 'Backend Development',
    iconName: 'Server',
    skillsList: ['Node.js, Express.js', 'Python (Flask, Django)', 'Firebase, Supabase', 'RESTful APIs, GraphQL'],
  },
  {
    title: '3D & Graphics',
    iconName: 'ToyBrick',
    skillsList: ['Three.js, WebGL', 'Blender (Basic Modeling)', 'Interactive Animations'],
  },
  {
    title: 'Tools & DevOps',
    iconName: 'Wrench',
    skillsList: ['Git, GitHub', 'Docker', 'CI/CD Pipelines', 'Figma'],
  },
];

export interface SocialLink {
  name: string;
  url: string;
  iconName: "Linkedin" | "Github" | "Mail"; // Adjust based on available Lucide icons
}

export const socialLinksData: SocialLink[] = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/yourprofile', iconName: 'Linkedin' },
  { name: 'GitHub', url: 'https://github.com/yourusername', iconName: 'Github' },
  { name: 'Email', url: 'mailto:youremail@example.com', iconName: 'Mail' },
];

export const contactEmail = "youremail@example.com";
