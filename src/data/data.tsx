import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import testimonialImage from '../images/testimonial.webp';
import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import profilepic from '../images/profilepic.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  TestimonialSection,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Payne Kerz',
  description: ``,
  ogImageUrl: ``,
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Testimonials: 'testimonials',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
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
        I'm a Kansas City based Full Stack Software Engineer, specialized in blah blah blah.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me in the gym, hiking wilderness trails, taking street photography, and playing video games.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
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
  description: `blah blah blah`,
  aboutItems: [
    {label: 'Location', text: 'Kansas City, MO', Icon: MapIcon},
    {label: 'Age', text: '26', Icon: CalendarIcon},
    {label: 'Interests', text: 'Hiking, Photography, Video Games', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Kansas', Icon: AcademicCapIcon},
  ],
};

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
  ],
};



export const experience: TimelineItem[] = [
  {
    date: 'February 2022 - September 2022',
    location: 'Generation Esports',
    title: 'Full Stack Engineer',
    content: (
      <p>
        blah blah blah also list skill learned
      </p>
    ),
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

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Reach Out.',
  description: 'blah blah blah.',
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
