import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';

import {
  ContactSection,
  ContactType,
  HomepageMeta,
  Social,
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
