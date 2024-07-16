// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Garicore01', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], 
        },
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'PlayBeat',
          description:
            'PlayBeat is a colaborative project that has a music player app that allows you to play music from your device. It is built with Express.js, Astro and PostgreSQL. ',
          imageUrl:
            'https://raw.githubusercontent.com/Garicore01/Garicore01.github.io/main/public/logo_negro.svg',
          link: 'https://github.com/Garicore01/PlayBeat-Backend',
        },
        {
          title: 'OrderBD',
          description:
            'OrderBd is a small project that allows you to manage orders in a small business. It is built with Ruby on Rails and PostgreSQL. ',
          imageUrl: 
            'https://raw.githubusercontent.com/Garicore01/Garicore01.github.io/main/public/logo-orderbd.png',
          link: 'https://github.com/Garicore01/Order_bd',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Gari Arellano',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'gari-arellano',
    blogspot: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: 'gari_core01', 
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://iso-aso-gari.blogspot.com/',
    phone: '',
    email: 'gariiarellano01@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.canva.com/design/DAF0I_gqRjM/G_JaCJaDLlPNFDf407_l9A/view?utm_content=DAF0I_gqRjM&utm_campaign=designshare&utm_medium=link&utm_source=editor', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'JavaScript',
    'Node.js',
    'MySQL',
    'PostgreSQL',
    'Oracle',
    'Git',
    'Docker',
    'Ruby',
    'Python',
    'Kubernetes',
    'KVM',
    'VMWare',
    'Vagrant',
  ],
  experiences: [
    {
      company: 'NoLogin',
      position: 'Junior Threat Intelligence Engineer',
      from: 'June 2024',
      to: 'Present',
      companyLink: 'https://www.nologin.es/es/index',
    },
    {
      company: 'Congelados de Navarra',
      position: 'Information Systems Technician',
      from: 'June 2023',
      to: 'September 2023',
      companyLink: 'https://www.congeladosnavarra.com/es',
    },
    {
      company: 'Congelados de Navarra',
      position: 'Information Systems Technician',
      from: 'July 2022',
      to: 'September 2022',
      companyLink: 'https://www.congeladosnavarra.com/es',
    },
    {
      company: 'Congelados de Navarra',
      position: 'Information Systems Technician',
      from: 'April 2021',
      to: 'September 2021',
      companyLink: 'https://www.congeladosnavarra.com/es',
    },
  ],
  certifications: [
    {
      name: 'B1 - Score 156',
      body: 'Cambridge University Press & Assessment',
      year: 'November 2023',
      link: 'C4942793',
    },
    {
      name: 'Curso de Hacking Tools: Blue TeamCurso de Hacking Tools: Blue Team',
      body: 'OpenWebinars',
      year: 'March 2021',
      link: 'https://openwebinars.net/cert/QDZ7X',
    },
    {
      name: 'Curso de JavaScript para principiantes',
      body: 'OpenWebinars',
      year: 'March 2020',
      link: 'https://openwebinars.net/cert/Jmed0',
    },
    {
      name: 'Curso de Metasploit Framework',
      body: 'OpenWebinars',
      year: 'March 2020',
      link: 'https://openwebinars.net/cert/0202z',
    },
    {
      name: 'Curso de PowerShell para principiantes',
      body: 'OpenWebinars',
      year: 'March 2020',
      link: 'https://openwebinars.net/cert/3p4Xa',
    },
    {
      name: 'Curso de Triage informático',
      body: 'OpenWebinars',
      year: 'March 2020',
      link: 'https://openwebinars.net/cert/85pqO',
    },
    {
      name: 'Curso de analisis de malware',
      body: 'OpenWebinars',
      year: 'March 2020',
      link: 'https://openwebinars.net/cert/Armd7',
    },
    {
      name: 'Curso de Shell en Linux',
      body: 'OpenWebinars',
      year: 'March 2020',
      link: 'https://openwebinars.net/cert/QpRzy',
    },
  ],
  educations: [
    {
      institution: 'University of Zaragoza',
      degree: 'Computer Science',
      from: '2021',
      to: '2025',
    },
    {
      institution: 'CIP ETI Tudela',
      degree: 'Technician in Administration of Computer Systems in Network',
      from: '2019',
      to: '2021',
    },
  ],
  publications: [/*
    {
      title: 'Publication Title',
      conferenceName: '',
      journalName: 'Journal Name',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: '',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  */],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 0, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dracula',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
  enablePWA: true,
};

export default CONFIG;
