import {AcademicCapIcon, CalendarIcon, DownloadIcon, MapIcon, SparklesIcon} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Payne Kerz',
  description: ``,
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hi, I'm Payne.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I’m a Full Stack Software Engineer currently based in Kansas City, Missouri. I am currently looking for career
        opportunities in the field of software engineering. In my free time, you can catch me in the gym, hiking
        wilderness trails, taking street photography, and playing video games.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me in the gym, hiking wilderness trails, taking street photography, and
        playing video games.
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://drive.google.com/file/d/1FlRIpYF4vu6YT_yX9zOKLw3IR8jgvL4k/view',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I’m an athlete at heart with an entrepreneurial spirit, a knack for communication, and a passion for programming. Born in the land of Lincoln, Springfield, Illinois, I made my move to Kansas City to pursue my career in full stack software development.
  Outside of work I am an avid gym enthusiast, photographer, nature lover, and gamer. I am naturally curious and have an obsessive drive to learn, discover, and improve. I developed the much of my early work while hiking the mountain ranges of Arizona and dream of taking my work along as I explore the world.
  `,
  aboutItems: [
    {label: 'Location', text: 'Kansas City, MO', Icon: MapIcon},
    {label: 'Age', text: '27', Icon: CalendarIcon},
    {label: 'Interests', text: 'Hiking, Photography, Video Games, Boxing', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Kansas', Icon: AcademicCapIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Programming Languages',
    skills: [
      {
        name: 'Typescript',
      },
      {
        name: 'HTML',
      },
      {
        name: 'CSS',
      },
      {
        name: 'PHP',
      },
      {
        name: 'C#',
      },
      {
        name: 'C++',
      },
      {
        name: 'Python',
      },
      {
        name: 'Java',
      },
    ],
  },
  {
    name: 'Frameworks',
    skills: [
      {
        name: 'React.js',
      },
      {
        name: 'Angular.js',
      },
      {
        name: '.NET',
      },
      {
        name: 'Node.js',
      },
      {
        name: 'Next.js',
      },
      {
        name: 'Nest.js',
      },
      {
        name: 'Express.js',
      },
    ],
  },
  {
    name: 'Tools and Other Technologies',
    skills: [
      {
        name: 'Microsoft Office Suite',
      },
      {
        name: 'Visual Studio',
      },
      {
        name: 'Azure Cloud Services',
      },
      {
        name: 'Azure Devops',
      },
      {
        name: 'AWS',
      },
      {
        name: 'GraphQL',
      },
      {
        name: 'Docker',
      },
      {
        name: 'LaunchDarkly',
      },
      {
        name: 'WorkCenter',
      },
      {
        name: 'Insomnia',
      },
      {
        name: 'Postman',
      },
      {
        name: 'Git',
      },
      {
        name: 'Unreal 5',
      },
      {
        name: 'Unity',
      },
    ],
  },
  {
    name: 'Databases',
    skills: [
      {
        name: 'MySQL',
      },
      {
        name: 'SQL',
      },
      {
        name: 'MongoDB',
      },
    ],
  },
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English - Native',
      },
    ],
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    title: 'My Website',
    description: 'The code to this website!',
    url: 'https://github.com/paynekerz/Payne-Kerz-Personal-Website',
    imageUrl: 'https://raw.githubusercontent.com/paynekerz/Payne-Kerz-Personal-Website/master/personal-website.PNG',
  },
  {
    title: 'Music Player',
    description: 'A music player application coded entirely in C#.',
    url: 'https://github.com/paynekerz/MusicPlayerApp',
    imageUrl:
      'https://raw.githubusercontent.com/paynekerz/MusicPlayerApp/master/images/good_times_with_bad_music_1050x700.webp',
  },
  {
    title: 'Large Language Model',
    description: 'A pet project of mine; a large language model built out of Jupyter Notebook and Python.',
    url: 'https://github.com/paynekerz/PythonLLM',
    imageUrl: 'https://raw.githubusercontent.com/paynekerz/PythonLLM/master/960x0.webp',
  },
  {
    title: 'Obstacle Runner',
    description:
      'My first Unreal project. An incredibly simple 3D platform Runner. I plan on expanding this to include more levels. Coded with C++.',
    url: 'https://github.com/paynekerz/ObstacleRunner',
    imageUrl:
      'https://raw.githubusercontent.com/paynekerz/ObstacleRunner/main/Runner.PNG?token=GHSAT0AAAAAACNGSLR35VXQMQC6KV34V2MMZNT2OKQ',
  },
  {
    title: 'Tic Tac Toe',
    description: 'A Tic Tac Toe app coded in C#.',
    url: 'https://github.com/paynekerz/TicTacToe',
    imageUrl:
      'https://raw.githubusercontent.com/paynekerz/TicTacToe/master/apps.2005.14057826194083709.67242c47-4fd7-4f1a-9dd6-5d93f6cc10df.png',
  },
  {
    title: 'Note Taker',
    description: 'A Note Taker I build uitlizing React and SASS',
    url: 'https://dazzling-narwhal-0eaca7.netlify.app/',
    imageUrl: 'https://raw.githubusercontent.com/paynekerz/New-Note-Taker/master/note-taker.PNG',
  },
  {
    title: 'C++ Calculator',
    description: 'A Calculator that functions as a normal and scientific calculator. Coded in C++',
    url: 'https://github.com/paynekerz/CPPCalculator',
    imageUrl:
      'https://raw.githubusercontent.com/paynekerz/CPPCalculator/master/images/istockphoto-603187710-612x612.jpg',
  },
  {
    title: 'C# Note Taker',
    description: 'Another note taker this time coded with C#',
    url: 'https://github.com/paynekerz/ScribeNoteTaker',
    imageUrl: 'https://raw.githubusercontent.com/paynekerz/ScribeNoteTaker/master/s-l1200.jpg',
  },
  {
    title: 'Weather Dashboard',
    description: 'A react weather dashboard that utilizes GeoDB Cities and Open Weather APIs',
    url: 'https://6328a47aca3f131e6ad73ae3--sage-zuccutto-fea31d.netlify.app/',
    imageUrl: 'https://raw.githubusercontent.com/paynekerz/React-Weather-App/master/weather.PNG',
  },
];

/**
 * Resume section
 */
export const education: TimelineItem[] = [
  {
    date: 'August 2015 - December 2019',
    location: 'University of Kansas',
    title: 'Computer Science and Communications',
    content: <p>Bachelor of Arts</p>,
  },
  {
    date: 'March 2023',
    location: 'Microsoft Azure',
    title: 'AZ-900 Microsoft Azure Fundamentals',
    content: <p>Certificate of Completion</p>,
  },
  {
    date: 'May 2021 - August 2021',
    location: 'University of Arizona',
    title: 'Full Stack Web Development Program',
    content: <p>Certificate of Completion</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'January 2023 - Present',
    location: 'H&R Block',
    title: 'Software Engineer',
    content: (
      <p>
        In my role as a software engineer at H&R Block, I am a pivotal part of the development of an enterprise-level
        application that facilitates connections between customers and tax professionals. My multifaceted
        responsibilities encompass proficiently working across the front and back ends using Angular.js, Typescript, and
        Python. I excel in crafting and upholding REST APIs within .NET Core, champion the implementation of
        standardized unit testing, and adeptly maneuver through CloudDB's database schema using SQL. Beyond technical
        contributions, I actively address bugs, enthusiastically engage in corporate hackathons, and provide mentorship
        to college students, all while seamlessly collaborating within an agile, international team environment. In
        essence, my journey at H&R Block enriches my skill set and enables me to make enduring contributions to a
        sophisticated project.
      </p>
    ),
  },
  {
    date: 'September 2022 - January 2023',
    location: 'Blade and Timber',
    title: 'Coach',
    content: (
      <p>
        When was a Coach for Blade and Timber, I instructed customers on safety measures and how to throw axes for a
        safe and enjoyable evening. Prior to each event, I exhibited my public speaking skills by explaining the rules
        and basics of the activity. I accurately took customers' food and drink orders in a prompt and professional
        manner, while also demonstrating the ability to juggle multiple tasks, such as attending to customers, taking
        down and setting up wooden targets, and cleaning tables. Additionally, I mixed cocktails with accuracy using
        provided recipes, ensuring a delightful experience for all patrons.
      </p>
    ),
  },
  {
    date: 'February 2022 - September 2022',
    location: 'Generation Esports',
    title: 'Full Stack Engineer',
    content: (
      <p>
        As a Full Stack Software Engineer for Generation Esports, I worked on both the front and back end using
        Angular.js, TypeORM, GraphQL, Nest.js, Node.js, and MongoDB to add components to the platform. I employed
        various languages such as Typescript, C#, and MySQL to contribute to the codebase. Additionally, I refactored a
        service to include better security checks and runtimes, and improved the single elimination tournament system by
        adding a proper consolation bracket and enhancing match flow. I participated in daily stand-up meetings and
        bi-weekly sprint retrospective and planning meetings, both on-site and remotely, in a pod structure alongside
        the CTO and Competitive Experience teams. Throughout, I established and maintained excellent communication and
        working relationships with the engineering team, cross-functional departments, and end-users to ensure the
        highest level of productivity and effectiveness.
      </p>
    ),
  },
  {
    date: 'September 2020 - February 2022',
    location: 'Starbucks',
    title: 'Barista',
    content: (
      <p>
        During my time as a Lead Barista at Starbucks, I demonstrated great teamwork by assisting co-workers and helping
        with new partner training by positively reinforcing alarms or changes in partner morale and performance. I
        responded to customer questions efficiently and effectively, serving as an advocate of selling techniques by
        establishing good communication and assisting in the buying decision-making process. Additionally, I contributed
        to a positive team environment by recognizing alarms or changes in partner morale and performance and
        communicating them to the store manager. I met with the manager upon arrival to discuss shift set-up and checked
        out with a manager before leaving to ensure all duties were completed, including assisting in daily food and
        beverage inventory management and control. As a trainer, I shared my skills and trained aspiring baristas in the
        art of making coffee drinks and customer service. Overall, I performed all pre-shift and post-shift duties, side
        work, and related paperwork with a focus on excellence.
      </p>
    ),
  },
  {
    date: 'Summer 2020',
    location: 'Casino KC formerly Isle of Capri',
    title: 'Cage Cashier',
    content: (
      <p>
        As a cage cashier at a casino, I maintained a cash drawer of more than $50k while providing prompt, friendly
        service to customers. I was responsible for cashing out chips, vouchers, and jackpots to patrons, promoting a
        positive interaction with them and other team members while on the floor. I operated the cage window, performing
        all transactions while providing a high level of customer service. Additionally, I worked in a bank of $24
        million providing other cashiers with the requested money, maintained zero overages or shortages while managing
        the cash cage, and obtained a Gaming License after passing all background checks.
      </p>
    ),
  },
  {
    date: 'Spring 2019',
    location: 'First Management Inc.',
    title: 'Leasing Consultant',
    content: (
      <p>
        During my time, I interacted with current and prospective tenants in person, by phone, or online. I was
        responsible for all activities related to apartment rentals, move-ins, lease agreements, and renewals. This
        included qualifying prospects and preparing lease documents while following company policies and procedures. I
        ensured that any needs or concerns of residents were handled in a timely and professional manner while providing
        a high degree of customer service in a fast-paced environment.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Nate Pruessner - Senior Software Engineer Team Lead at Generation Esports',
      text: "If you're looking for a developer that doesn't quit, that keeps learning, and keeps asking questions to improve, Payne is your guy.",
    },
    {
      name: 'Holly Gray - Human Resources Manager at Generation Esports',
      text: 'From his positive can do attitude to openness to feedback Payne would make an excellent asset to any team.',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Reach Out.',
  description:
    'Have a project for me? Looking to integrate my skills into your team? Feel free to give me a shout by email! Thank you for stopping by my site and I look forward to connecting with you!',
  items: [
    {
      type: ContactType.Email,
      text: 'paynekerz@gmail.com',
      href: 'mailto:paynekerz@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Kansas City, MO',
      href: 'https://goo.gl/maps/kB3BtEBxY7SohERv6',
    },
    {
      type: ContactType.Instagram,
      text: '@payne_kerz',
      href: 'https://www.instagram.com/payne_kerz/',
    },
    {
      type: ContactType.Github,
      text: 'paynekerz',
      href: 'https://github.com/paynekerz',
    },
  ],
};

/**
 * Socials
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/paynekerz'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/paynekerz/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/payne_kerz/'},
];
