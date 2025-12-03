import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,

  html,
  css,
  reactjs,

  git,
  figma,

  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  python,
  firebase,
  mysql,
  c,
  cpp,
  github,
  spreading_smile,
  aa_construction,
  pulse_chain,
  aeif_landing,
  gui_calculator,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Firebase',
    icon: firebase,
  },
  {
    name: 'MySQL',
    icon: mysql,
  },
  {
    name: 'Figma',
    icon: figma,
  },
  {
    name: 'GitHub',
    icon: github,
  },
  {
    name: 'Git',
    icon: git,
  },
  {
    name: 'C',
    icon: c,
  },
  {
    name: 'C++',
    icon: cpp,
  },
  {
    name: 'Python',
    icon: python,
  },
];

const experiences = [
  {
    title: 'Front-End Developer',
    company_name: 'Cover Hunt',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Aug 2021 - Feb 2022',
  },
  {
    title: 'Mentor (Volunteer)',
    company_name: 'Microverse',
    icon: microverse,
    iconBg: '#333333',
    date: 'Mar 2022 - May 2022',
  },
  {
    title: 'Junior Software Engineer',
    company_name: 'Kelhel',
    icon: kelhel,
    iconBg: '#333333',
    date: 'May 2022 - Oct 2022',
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Diversity Cyber Council',
    icon: dcc,
    iconBg: '#333333',
    date: 'Sep 2022 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Spreading Smile Foundation',
    description: 'An NGO website dedicated to helping children and the community.',
    tags: [
      {
        name: 'html',
        color: 'blue-text-gradient',
      },
      {
        name: 'css',
        color: 'green-text-gradient',
      },
      {
        name: 'javascript',
        color: 'pink-text-gradient',
      },
    ],
    image: spreading_smile,
    repo: 'https://github.com/Ahsanaseer/Spreading-Smile-Foundation',
    demo: 'https://spreadingsmilefoundation.org',
  },
  {
    id: 'project-2',
    name: 'AA Construction',
    description: 'A professional website for a construction company.',
    tags: [
      {
        name: 'html',
        color: 'blue-text-gradient',
      },
      {
        name: 'css',
        color: 'green-text-gradient',
      },
      {
        name: 'javascript',
        color: 'pink-text-gradient',
      },
    ],
    image: aa_construction,
    repo: 'https://github.com/Ahsanaseer/AA-Construction-Website',
    demo: 'https://aaconstructionlahore.com',
  },
  {
    id: 'project-3',
    name: 'Pulse Chain GIKI',
    description: 'A blood donation system developed as a semester project.',
    tags: [
      {
        name: 'html',
        color: 'blue-text-gradient',
      },
      {
        name: 'css',
        color: 'green-text-gradient',
      },
      {
        name: 'javascript',
        color: 'pink-text-gradient',
      },
    ],
    image: pulse_chain,
    repo: 'https://github.com/Ahsanaseer/Pulse-Chain-GIKI',
    demo: 'https://ahsanaseer.github.io/Pulse-Chain-GIKI/',
  },
  {
    id: 'project-4',
    name: 'AEIF Landing Page',
    description: 'An AI competition landing page for an event held in LUMS, FAST, COMSATS.',
    tags: [
      {
        name: 'html',
        color: 'blue-text-gradient',
      },
      {
        name: 'css',
        color: 'green-text-gradient',
      },
      {
        name: 'javascript',
        color: 'pink-text-gradient',
      },
    ],
    image: aeif_landing,
    repo: 'https://github.com/Ahsanaseer/Landing-Page-AIEF',
    demo: null, // Button disabled
  },
  {
    id: 'project-5',
    name: 'GUI Calculator',
    description: 'A GUI based calculator desktop app built using Qt.',
    tags: [
      {
        name: 'cpp',
        color: 'blue-text-gradient',
      },
      {
        name: 'qt',
        color: 'green-text-gradient',
      },
    ],
    image: gui_calculator,
    repo: 'https://github.com/Ahsanaseer/CS-101-Semester-Project',
    demo: null, // Button disabled
  },
];

export { services, technologies, experiences, projects };
