// scroll bar
import 'simplebar/src/simplebar.css';

// lazy image
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';

import { ReactElement, ReactNode } from 'react';

// next
import { NextPage } from 'next';
import Head from 'next/head';
import { AppProps } from 'next/app';

// theme
import ThemeProvider from '../shared/theme';

// components
import { SettingsValueProps } from '../shared/components/settings/type';
import ProgressBar from '../shared/components/ProgressBar';
import Layout from 'src/core/layouts';
import { ProductsProvider } from 'src/core/store/useProductStore';

// ----------------------------------------------------------------------

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

interface MyAppProps extends AppProps {
  settings: SettingsValueProps;
  Component: NextPageWithLayout;
}

export default function MyApp(props: MyAppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <ThemeProvider>
        <ProductsProvider>
          <ProgressBar />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ProductsProvider>
      </ThemeProvider>
    </>
  );
}
