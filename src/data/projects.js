import myBlogImg from "../assets/MyBlog.png"
import TKF from "../assets/TKF.png"

export const projects = [
  {
    id: 1,
    title: 'Personal Blog Website',
    slug: 'ecommerce-platform',
    description:
      'A scalable blogging experience built with modern React patterns, focusing on performance and maintainability.',
    longDescription:
      'This project explores scalable frontend architecture for e-commerce applications, including reusable components, optimized rendering, and responsive layouts.',
    tags: ['React', 'Redux', 'Node.js'],
    image: myBlogImg ,
    live: 'https://my-personal-blog-gamma.vercel.app/',
    github: 'https://github.com/Fale1278/MyPersonalBlog',
  },
  {
    id: 2,
    title: 'Tech Organisation PLatform',
    slug: 'personal-dashboard',
    description:
      'A productivity dashboard leveraging browser storage and advanced React hooks.',
    longDescription:
      'Built to demonstrate effective state management, data persistence, and UI clarity in complex user interfaces.',
    tags: ['React Hooks', 'CSS Grid', 'LocalStorage'],
    image: TKF,
    live: 'https://fale1278.github.io/TKF-THE-KINGSHIMA-FOUNDATION/',
    github: 'https://github.com/Fale1278/TKF-THE-KINGSHIMA-FOUNDATION',
  },
  {
    id: 3,
    title: 'Animated Portfolio',
    slug: 'animated-portfolio',
    description:
      'A motion-first portfolio built with Framer Motion and modern CSS techniques.',
    longDescription:
      'This portfolio focuses on animation, interaction design, and visual storytelling while maintaining performance.',
    tags: ['React', 'Framer Motion', 'CSS'],
    image: '/images/projectshero.jpg',
    live: '#',
    github: '#',
  },
];
