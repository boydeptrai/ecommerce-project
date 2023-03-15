import React from 'react';
import { Layout } from '@component/components';
import '@component/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

