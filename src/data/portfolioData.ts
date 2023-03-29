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
    name: 'Burgers Restaurant',
    deployedAt: 'https://moms-burgers.vercel.app/',
    languages: ['react', 'typescript', 'scss', 'all'],
    languagesIcons: ['fab fa-js', 'fab fa-react', 'fab fa-sass'],
    sourceCode: 'https://github.com/swann-martin/moms-burgers',
    info: 'Just a simple example of a burger shop build for fun using react with hooks for the cart. ',
    picture: './media/project1.png'
  },

  {
    id: Math?.random()?.toString(),
    name: 'Sofas shop',
    deployedAt: 'https://sofas-shop.vercel.app/',
    languages: ['react', 'typescript', 'tailwind', 'vite', 'all'],
    languagesIcons: ['fab fa-js', 'fab fa-react'],
    sourceCode: 'https://github.com/swann-martin/react-leSofa',
    info: 'A simple website using React, typescript, tailwind, react-router and vite. It is a mock website for a fake company very interested in sofas.',
    picture: './media/project4.png'
  },
  {
    id: Math?.random()?.toString(),
    name: "L'Anerie",
    languages: ['wordpress', 'php', 'all'],
    deployedAt: 'https://swannm.me/lanerie',
    languagesIcons: ['fa-brands fa-wordpress', 'fa-brands fa-elementor'],
    sourceCode: 'https://swannm.me/lanerie',
    info: 'This project was made using Wordpress with Elementor, it is hosted locally at the moment so if the link is broken it means I erased the project.',
    picture: './media/project9.png'
  },
  {
    id: Math?.random()?.toString(),
    name: 'WashAtHome',
    languages: ['javascript', 'react', 'sass', 'redux', 'all'],
    languagesIcons: ['fab fa-js', 'fab fa-react', 'fab fa-sass'],
    sourceCode: 'https://github.com/swann-martin/washathome',
    info: " This project was in group as an end of training project for my specialization in React.js with O'Clock School. It was made using Reactjs, Redux, Sass, react-leaflet, nodejs . ",
    picture: './media/project7.png'
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
    picture: './media/project10.png'
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
    picture: './media/project2.png'
  },
  {
    id: Math?.random()?.toString(),
    name: 'Spotify Clone UI',
    deployedAt: 'https://vue-spotify-clone-two.vercel.app/',
    languages: ['javacript', 'vue', 'tailwind', 'all'],
    languagesIcons: ['fab fa-js', 'fab fa-css3-alt'],
    sourceCode: 'https://github.com/swann-martin/vue-spotify-clone',
    info: 'This project was made following a YouTube tutorial to learn Vue3, Pinia and tailwind. ',
    picture: './media/project8.png'
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
    picture: './media/project3.png'
  },
  {
    id: Math?.random()?.toString(),
    name: 'Quiz App',
    languages: ['typescript', 'css', 'opendb-api', 'all'],
    languagesIcons: ['fab fa-js', 'fab fa-css3-alt'],
    sourceCode: 'https://github.com/swann-martin/react-quiz',
    info: 'This project was made following a YouTube tutorial to learn React.js and TypeScript and material ui. Trivia API was used to generate the questions.',
    picture: './media/project5.png'
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
