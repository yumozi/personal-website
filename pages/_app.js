import '../styles/globals.css'
import Layout from '../components/Layout'
import Loading from '../components/Loading'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }) {
  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 5000)
  // }, []);
  // return (
  //   <div>
  //     {loading ?
  //     <Loading/>
  //     :
  //     (<Layout>
  //       <Component {...pageProps} />
  //     </Layout>)}
  //   </div>
  // )

  return (
    <div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}

export default MyApp
