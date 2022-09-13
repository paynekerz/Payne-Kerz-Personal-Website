import {NextPage} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {memo} from 'react';

interface PageProps {
  title: string;
  description: string;
}

const Page: NextPage<PageProps> = memo(({children, title, description}) => {
  const {asPath: pathname} = useRouter();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={description} name="description" />

        {/*making sure google uses this domain*/}
        <link href={`https://payneresume.com${pathname}`} key="canonical" rel="canonical" />

        <link href="/minilogo.ico" rel="icon" sizes="any" />
        <link href="/icon.svg" rel="icon" type="image/svg+xml" />
        <link href="/apple-touch-icon.png" rel="apple-touch-icon" />
        <link href="/site.webmanifest" rel="manifest" />

        {/* Open Graph : https://ogp.me/ */}
        <meta content={title} property="og:title" />
        <meta content={description} property="og:description" />
        <meta content={`https://payneresume.com${pathname}`} property="og:url" />

      </Head>
      {children}
    </>
  );
});

Page.displayName = 'Page';
export default Page;
