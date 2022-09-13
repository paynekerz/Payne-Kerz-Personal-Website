import dynamic from 'next/dynamic';
import {FC, memo} from 'react';

import Page from '../components/Layout/Page';

import Contact from '../components/Sections/Contact';
import Footer from '../components/Sections/Footer';
import Hero from '../components/Sections/Hero';
import Resume from '../components/Sections/Resume';

const Header = dynamic(() => import('../components/Sections/Header'), {ssr: false});

const Home: FC = memo(() => {
  const title = "Payne Kerz's Portfolio";
  const description = "";

  return (
    <Page title={title} description={description}>
      <Header />
      <Hero />
      <Resume />
      <Contact />
      <Footer />
    </Page>
  );
});

export default Home;
