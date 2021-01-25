const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Nisal Upendra',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | Nisal Upendra',
    heading: 'ABOUT ME',
  },
  {
    route: '/projects',
    title: 'Projects | Nisal Upendra',
    heading: 'PROJECTS',
  },
  {
    route: '/contact',
    title: 'Contact | Nisal Upendra',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
