import myBlogImg from "../assets/MyBlog.png"
import TKF from "../assets/TKF.png"
import Reach from "../assets/Reach.png"

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
    tags: ['Html', 'CSS Grid', 'Javascript'],
    image: TKF,
    live: 'https://fale1278.github.io/TKF-THE-KINGSHIMA-FOUNDATION/',
    github: 'https://github.com/Fale1278/TKF-THE-KINGSHIMA-FOUNDATION',
  },
  {
    id: 3,
    title: 'Reach Transit',
    slug: 'commercial-company',
    description:
      'A website for travels, car bookings, and journeyings',
    longDescription:
      'This portfolio focuses on commercial transport, Waybills, Car Bookings and ticketing...',
    tags: ['React', 'Framer Motion', 'CSS'],
    image: Reach,
    live: 'https://reach-transit.vercel.app/',
    github: 'https://github.com/Fale1278/Reach-Transit',
  },
];
