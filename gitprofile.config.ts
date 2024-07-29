// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Moustafa00', // Your GitHub org/user name. (This is the only required config)
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
          projects: ['Moustafa00/coursera-fewdwr','Moustafa00/Moustafa00.github.io'], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['Moustafa00/Organizational-Task-Management-System','HalcyonAbsedion/BilMant2a'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Reports/References & Demos',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'BilMant2a Documentation SRS',
          description:
            'Comprehensive blueprint detailing the development, management, requirements, design, implementation, testing, and future enhancements of an actualized and operational project.',
          // imageUrl:
          //   'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://docs.google.com/document/d/1Ltbm7t5RBtjpnkSASHKuxtlfPpZQdDACIExZYFOth1w/edit?usp=sharing',
        },
        {
          title: 'Diet Center System SRS ',
          description:
            'Holistic guide outlining the introduction, goals, feasibility, management, requirements, design, methodology, testing, and future work for a conceptual dietary management system',
          // imageUrl:
          //   'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://docs.google.com/document/d/1DR72UMBdY1DNnQRGHWmnO27x-jbCLDI31LvCsgfjHgU/edit',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Moustafa Jarjour',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'moustafa-jarjour-b44772210',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: 'moustafajarjour',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '+961 76936079',
    email: 'moustafajarjour0@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    
    
    
    
    'Java',
    'Algorithms',
    'Data Structures',
    'OOP',
    'Selenium',

   
    
    'Python',
    'Numpy',
    // 'PyTorch',
    'OpenCV',
    'Pandas',
    'Scikit-Learn',

   
    
   
    
    // 'Web Semantics',
    'SDLC',
    'Design Patterns',
     'SQL',
     'Data Modeling',
    'Html/Css',
    'Vue',
    'Laravel',
    'RESTful API',
    
    'Git',
   

    
    

    
    'Flutter',
    'Firebase',
  ],
  experiences: [
    {
      company: 'The Sparks Foundation',
      position: 'Data Science & Business Analytics Intern (Graduate Program)',
      from: 'June 2024',
      to: 'July 2024',
      companyLink: 'https://truecertificates.com/verified/L2L9GQ3SG6',
    },
    {
      company: 'Google Developer Groups',
      position: 'Devathon Competition',
      to: 'Dec 2023',
      companyLink: 'https://gdg.community.dev/',
    },
    {
      company: 'ICPC',
      position: 'LCPC Programming Competition',
      to: 'Sep 2023',
      companyLink: 'https://icpc.global/',
    },
    {
      company: 'XpertBot',
      position: 'Web Developer',
      from: 'July 2022',
      to: 'September 2022',
      companyLink: 'https://xpertbotacademy.online/',
    },
    
    
  ],
  certifications: [
    {
      name: 'LCPC Certificate of Achievement',
      body: 'International Collegiate Programming Contest',
      year: 'Sep 2023',
      // link: 'https://example.com',
    },  
    {
      name: 'Google Devathon Certificate',
      body: 'Google Developer Groups',
      year: 'Dec 2023',
      // link: 'https://example.com',
    },
    {
      name: 'Certificate of Completion',
      body: 'XpertBot',
      year: 'Sep 2022',
      // link: 'https://example.com',
    },
    {
      name: 'Digital Literacy Certification',
      body: 'IC3',
      year: 'Jan 2022',
      // link: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'Beirut Arab University',
      degree: 'Bsc Computer Science GPA:3.92/4',
      from: 'Sep 2021',
      to: 'June 2024',
    },
    
  ],
  publications: [
    {
      title: 'Chess Aficionado',
      // conferenceName: '',
      // journalName: 'Journal Name',
      // authors: 'John Doe, Jane Smith',
      // link: 'https://example.com',
      imageUrl:
            'https://i.pinimg.com/originals/3d/ee/25/3dee25d26678c4503cc40d4d91baae7d.jpg',
      description:
        'For me, chess is the perfect mix of intellect and strategy. It\'s a great way to exercise my problem-solving skills and think analytically, all while teaching patience and exploring new possibilities with every move.',
    },
    {
      title: 'Typing Virtuoso',
      imageUrl:
            'https://img.freepik.com/premium-photo/hand-typing-keyboard-with-blue-background_919772-29.jpg',
      // conferenceName: 'Conference Name',
      // journalName: '',
      // authors: 'John Doe, Jane Smith',
      // link: 'https://example.com',
      description:
        'To me, typing is an art form where precision meets rhythm. With a speed of over 100 wpm, I find joy in the flow of each keystroke, perfecting the harmony between speed and accuracy in a graceful dance with the keyboard.',
    },
    {
      title: 'Celestial Explorer',
      imageUrl:
            'https://t3.ftcdn.net/jpg/08/16/22/04/360_F_816220481_lyzP10vKSmwjiWaomtGvQWbJNkkYgWZH.jpg',
      // conferenceName: 'Conference Name',
      // journalName: '',
      // authors: 'John Doe, Jane Smith',
      // link: 'https://example.com',
      description:
        'Star gazing is my gateway to the cosmos, where wonder and discovery blend seamlessly. It sparks my imagination, fuels my curiosity, and offers a serene escape as I explore the mysteries of the night sky.',
    },
    {
      title: 'Avian Harmony Seeker',
      imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyA9kQJfDXYaJckadotOZROFo1gnYeR3iBuA&s',
      // conferenceName: 'Conference Name',
      // journalName: '',
      // authors: 'John Doe, Jane Smith',
      // link: 'https://example.com',
      description:
        'Bird watching is a journey into nature’s elegance. Watching birds navigate the sky with intuitive grace and fluidity brings a sense of tranquility and connection to the natural world, offering a continuous flow of inspiration and wonder.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'moustafajarjour', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
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
    defaultTheme: 'lofi',

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