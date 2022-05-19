import '../styles/globals.css'
import Layout from '../components/Layout'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}

export default MyApp
