export type PortfolioData = {
  id: string;
  name: string;
  deployedAt?: string;
  languages: string[];
  languagesIcons: string[];
  sourceCode: string;
  info: string;
  picture: string;
};

export const portfolioData: PortfolioData[] = [
  {
    id: Math?.random()?.toString(),
    name: 'Wedding website',
    deployedAt: 'https://mariage-orpin-delta.vercel.app/',
    languages: ['nextjs', 'react', 'typescript', 'tailwind', 'all'],
    languagesIcons: ['fab fa-js', 'fab fa-react'],
    sourceCode: 'https://github.com/swann-martin/mariage',
    info: 'A simple website using Nextjs, typescript, tailwind. It was used to give informations about a wedding event.',
    picture: './media/project12.webp'
  },
  {
    id: Math?.random()?.toString(),
    name: 'Sauvons la friche Josaphat',
    languages: ['wordpress', 'php', 'all'],
    deployedAt: 'https://www.sauvonslafrichejosaphat.be/',
    languagesIcons: ['fa-brands fa-wordpress', 'fa-brands fa-elementor'],
    sourceCode: '',
    info: 'I worked on the existing website of an organization which aims to prevent an urbanisation project to destroy a local animal sanctuary in Bruxelles. I was tasked with maintaining and updating the website informations and content. This project was using Wordpress with an old Twenty-Twenty template. I redesigned and remade most of the pages. I used Elementor since it was easier to use for an amateur and the site might be maintained by one in the future.',
    picture: './media/project11.webp'
  },
  {
    id: Math?.random()?.toString(),
    name: 'Sofas shop',
    deployedAt: 'https://sofas-shop.vercel.app/',
    languages: ['vite', 'react', 'typescript', 'tailwind', 'all'],
    languagesIcons: ['fab fa-js', 'fab fa-react'],
    sourceCode: 'https://github.com/swann-martin/react-leSofa',
    info: 'A simple website using React, typescript, tailwind, react-router and vite. It is a mock website for a fake company very interested in sofas.',
    picture: './media/project4.webp'
  },
  {
    id: Math?.random()?.toString(),
    name: 'Sharewash',
    languages: [
      'typescript',
      'expo',
      'react native',
      'zustand',
      'mobile',
      'all'
    ],
    languagesIcons: ['fab fa-js', 'fab fa-react', 'fab fa-css3-alt'],
    sourceCode: 'https://github.com/swann-martin/sharewash',
    info: 'This project was made to follow up on the WashAtHome end of course project wich was made. My aim was to recreate and adapt the app for mobile by using typescript, react native, expo and zustand.',
    picture: './media/project10.webp'
  },
  {
    id: Math?.random()?.toString(),
    name: "L'Anerie",
    languages: [
      'typescript',
      'react',
      'preact',
      'deno',
      'fresh',
      'tailwind',
      'all'
    ],
    deployedAt: 'https://lanerie.deno.dev/',
    languagesIcons: ['fab fa-js', 'fab fa-react'],
    sourceCode: 'https://github.com/swann-martin/lanerie',
    info: 'This project was made for a wood artisan shop. My aim was to create a simple SPA using the framework fresh with deno, typescript, preact and tailwind-css.',
    picture: './media/project9.webp'
  },
  {
    id: Math?.random()?.toString(),
    name: 'WashAtHome',
    languages: ['javascript', 'react', 'sass', 'redux', 'all'],
    languagesIcons: ['fab fa-js', 'fab fa-react', 'fab fa-sass'],
    sourceCode: 'https://github.com/swann-martin/washathome',
    info: " This project was in group as an end of training project for my specialization in React.js with O'Clock School. It was made using Reactjs, Redux, Sass, react-leaflet, nodejs . ",
    picture: './media/project7.webp'
  },
  {
    id: Math?.random()?.toString(),
    name: 'Burgers Restaurant',
    deployedAt: 'https://moms-burgers.vercel.app/',
    languages: ['react', 'typescript', 'scss', 'all'],
    languagesIcons: ['fab fa-js', 'fab fa-react', 'fab fa-sass'],
    sourceCode: 'https://github.com/swann-martin/moms-burgers',
    info: 'Just a simple example of a burger shop build for fun using react with hooks for the cart. ',
    picture: './media/project1.webp'
  },

  {
    id: Math?.random()?.toString(),
    name: 'News App',
    deployedAt:
      'https://codeberg.org/swann-martin/flutter-news-app/src/branch/develop',
    languages: ['dart', 'flutter', 'newsapi', 'mobile', 'all'],
    languagesIcons: ['fa fa-code', 'fa-regular fa-rectangle-terminal'],
    sourceCode:
      'https://codeberg.org/swann-martin/flutter-news-app/src/branch/develop',
    info: 'This website was made in order to learn flutter and dart. It is an on going side project',
    picture: './media/project2.webp'
  },
  {
    id: Math?.random()?.toString(),
    name: 'Spotify Clone UI',
    deployedAt: 'https://vue-spotify-clone-two.vercel.app/',
    languages: ['javacript', 'vue', 'tailwind', 'all'],
    languagesIcons: ['fab fa-js', 'fab fa-css3-alt'],
    sourceCode: 'https://github.com/swann-martin/vue-spotify-clone',
    info: 'This project was made following a YouTube tutorial to learn Vue3, Pinia and tailwind.',
    picture: './media/project8.webp'
  },

  {
    id: Math?.random()?.toString(),
    name: 'jummmp créé ton cv',
    deployedAt: '',
    languages: ['javascript', 'php', 'css', 'symfony', 'all'],
    languagesIcons: [
      'fab fa-js',
      'fab fa-php',
      'fab fa-css3-alt',
      'fab fa-symfony'
    ],
    sourceCode: 'https://github.com/swann-martin/archive_jummmp',
    info: 'Web application delivered during the evaluation for the CNCP certification Web Integration Techniques & Web Development Techniques. Directed by Swann Martin, Michael Krysztofiak & Thomas Barnabé.',
    picture: './media/project3.webp'
  },
  {
    id: Math?.random()?.toString(),
    name: 'Quiz App',
    languages: ['typescript', 'css', 'opendb-api', 'all'],
    languagesIcons: ['fab fa-js', 'fab fa-css3-alt'],
    sourceCode: 'https://github.com/swann-martin/react-quiz',
    info: 'This project was made following a YouTube tutorial to learn React.js and TypeScript and material ui. Trivia API was used to generate the questions.',
    picture: './media/project5.webp'
  },

  {
    id: Math?.random()?.toString(),
    name: 'More projects on Github',
    languages: ['all'],
    languagesIcons: [],
    sourceCode: 'https://github.com/swann-martin/',
    info: ' More projects on Github',
    picture: ''
  }
];
