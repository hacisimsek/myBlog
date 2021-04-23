import '../styles/globals.css'
import {Header} from '../components/Header'


function MyApp({ Component, pageProps }) {
  return (
    <div className="antialiased text-gray-800">
    <Header/>
      <main className="my-6">
        <Component {...pageProps} />
      </main>
    </div>
  )
}

export default MyApp
