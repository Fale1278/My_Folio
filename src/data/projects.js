import myBlogImg from "../assets/MyBlog.png"
import TKF from "../assets/TKF.png"
import Reach from "../assets/Reach.png"

export const projects = [
  {
    id: 1,
    title: 'Personal Blog Platform',
    slug: 'personal-blog',
    description:
      'A scalable blogging experience built with modern React patterns, focusing on performance and maintainability.',
    longDescription:
      'This project explores scalable architecture for content-heavy applications, featuring custom hooks, optimized rendering, and a fluid responsive design.',
    tags: ['React', 'Redux', 'Node.js'],
    image: myBlogImg ,
    live: 'https://my-personal-blog-gamma.vercel.app/',
    github: 'https://github.com/Fale1278/MyPersonalBlog',
  },
  {
    id: 2,
    title: 'Kingshima Foundation',
    slug: 'kingshima-foundation',
    description:
      'A professional tech organization platform leveraging modern web standards and high-performance UI components.',
    longDescription:
      'Built to demonstrate effective brand identity, community engagement, and UI clarity in organizational web platforms.',
    tags: ['React', 'CSS Grid', 'Framer Motion'],
    image: TKF,
    live: 'https://fale1278.github.io/TKF-THE-KINGSHIMA-FOUNDATION/',
    github: 'https://github.com/Fale1278/TKF-THE-KINGSHIMA-FOUNDATION',
  },
  {
    id: 3,
    title: 'Reach Transit',
    slug: 'reach-transit',
    description:
      'A comprehensive transit solution for car bookings, waybills, and travel logistics.',
    longDescription:
      'This platform focuses on complex logistics management, real-time booking flows, and accessibility for transit services.',
    tags: ['React', 'Framer Motion', 'Interaction Design'],
    image: Reach,
    live: 'https://reach-transit.vercel.app/',
    github: 'https://github.com/Fale1278/Reach-Transit',
  },
];

