import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

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
      I’m a Full Stack Software Engineer currently based in Kansas City, Missouri. I am currently looking for career opportunities in the field of software engineering.
In my free time, you can catch me in the gym, hiking wilderness trails, taking street photography, and playing video games.

      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me in the gym, hiking wilderness trails, taking street photography, and playing video games.
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
    {label: 'Age', text: '26', Icon: CalendarIcon},
    {label: 'Interests', text: 'Hiking, Photography, Video Games', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Kansas', Icon: AcademicCapIcon},
  ],
};

/**
 * Skills section
 */
 export const skills: SkillGroup[] = [
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
      },
      {
        name: 'Angular',
      },
      {
        name: 'Typescript',
      },
      {
        name: 'Next.js',
      },
      {
        name: 'JSX',
      },
      {
        name: 'HTML',
      },
      {
        name: 'CSS',
      },
      {
        name: 'jQuery',
      },
      {
        name: 'Sass',
      },
      {
        name: 'Bootstrap',
      },
      {
        name: 'Angular Material',
      },
      {
        name: 'Tailwind',
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
      },
      {
        name: 'Nest.js',
      },
      {
        name: 'Espress.js',
      },
      {
        name: 'MongoDB',
      },
      {
        name: 'MySQL',
      },
      {
        name: 'TypeORM',
      },
    ],
  },
  {
    name: 'Programming Languages',
    skills: [
      {
        name: 'Javascript',
      },
      {
        name: 'Python',
      },
      {
        name: 'PHP',
      },
      {
        name: 'C++',
      },
    ],
  },
  {
    name: 'Other Technologies',
    skills: [
      {
        name: 'AWS',
      },
      {
        name: 'REST API',
      },
      {
        name: 'GraphQL',
      },
      {
        name: 'Azure Devops',
      },
      {
        name: 'IDocker',
      },
    ],
  },
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English - Native',
      },
      {
        name: 'Japanese - Beginner',
      },
    ],
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    title: 'My website',
    description: 'The code to this website!',
    url: 'https://github.com/paynekerz/Payne-Kerz-Personal-Website',
    imageUrl: 'https://raw.githubusercontent.com/paynekerz/Payne-Kerz-Personal-Website/master/personal-website.PNG',
  },
  {
    title: 'Intents',
    description: '(Offline) A social media app for keeping track of and rating national parks you want to see.',
    url: 'https://github.com/paynekerz/i-n-t-e-n-t-s',
    imageUrl: 'https://raw.githubusercontent.com/paynekerz/i-n-t-e-n-t-s/main/image1.png',
  },
];

/**
 * Resume section 
 */
 export const education: TimelineItem[] = [
  {
    date: 'May 2021 - August 2021',
    location: 'University of Arizona',
    title: 'Full Stack Web Development Program',
    content: <p>Certificate of Completion</p>,
  },
  {
    date: 'August 2015 - January 2020',
    location: 'University of Kansas',
    title: 'General Studies with coursework in Computer Science and Mathematics',
    content: <p>106 Credit Hours. Bachelor of Arts</p>,
  },

];

export const experience: TimelineItem[] = [
  {
    date: 'February 2022 - September 2022',
    location: 'Generation Esports',
    title: 'Full Stack Engineer',
    content: (
      <p>
        As a full stack engineer, I performed front and Back-end programming of an esports tournament application that utilized Angular.js framework. I created components and contributed to the codebase using Typscript, Nest.js, Node.js, and MySQL. I also utilized other technologies like Amazon Web Services, GraphQL, and REST API, to name a few.

I personally coordinated with the CTO and other engineers to develop ideas that would provide business and user value to the platform. During my time at Generation Esports, my two most significant projects were refactoring a service to include better security checks, utilizing previously unused components in the codebase, and reformatting the single elimination tournaments to include proper scalable consolation brackets. I also worked alongside the Competitive Experiences team to create a better user experience. You can find more information on my skills and competencies below! 

      </p>
    ),
  },
  {
    date: 'September 2020 - February 2022',
    location: 'Starbucks',
    title: 'Barista',
    content: (
      <p>
        As barista, I demonstrated great teamwork by cooperating with and assisting co-workers, especially during peak periods. I also assisted in training new employees while providing a positive team environment. I also demonstrated best practice selling techniques to new baristas by establishing good communication with our customers and showing them how to help customers in their decision-making.
      </p>
    ),
  },
  {
    date: 'Summer 2020',
    location: 'Casino KC formerly Isle of Capri',
    title: 'Cage Cashier',
    content: (
      <p>
        While working as a cage cashier, I maintained a drawer of more than $50k while providing a prompt and friendly service to customers. I also utilized my skills in mathematics to quickly and accurately cash out chips, vouchers, and jackpots to patrons and maintained zero overages or shortages.
      </p>
    ),
  },
  {
    date: 'Spring 2019',
    location: 'First Management Inc.',
    title: 'Leasing Consultant',
    content: (
      <p>
        During my time as a leasing consultant I was responsible interacting directly with current and prospective tenants in person, by phone, or online, and renewals while providing a high degree of customer service in a fast-paced environment. 
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
      text: "From his positive can do attitude to openness to feedback Payne would make an excellent asset to any team.",
    },
  ],
};

/**
 * Contact section
 */

 export const contact: ContactSection = {
  headerText: 'Reach Out.',
  description: 'Have a project for me? Looking to integrate my skills into your team? Feel free to give me a shout by email! Thank you for stopping by my site and I look forward to connecting with you!',
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
