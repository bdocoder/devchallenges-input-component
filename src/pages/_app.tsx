import { AppProps } from 'next/dist/next-server/lib/router/router';
import Head from '../components/Head';
import '../style.scss';

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head />
    <Component {...pageProps} />
  </>
}
