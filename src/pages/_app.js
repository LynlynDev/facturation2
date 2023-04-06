import '../styles/konoha.css'
import { AppProps } from 'next/app'

import Layout from '../../components/Sidebar/Layout/Layout'

// export default function App({ Component, pageProps }: AppProps) {return <Component {...pageProps} />}

 function App({ Component, pageProps }) {
  return (
    <Layout>
        <Component {...pageProps} 
      />
    </Layout>

  ) 
}
export default App;