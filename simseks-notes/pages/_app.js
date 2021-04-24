import '../styles/globals.css'
import { Header } from '../components/Header'
import { Auth0Provider } from '@auth0/auth0-react'

function MyApp({ Component, pageProps }) {
  return (
    <Auth0Provider
      domain="haci.us.auth0.com"
      clientId="52kCy7UIxT6WMwk1N7at99t95jEpQ2PO"
      redirectUri={process.env.NEXT_PUBLIC_URL}
    >
      <div className="antialiased text-gray-800">
        <Header />
        <main className="my-6">
          <Component {...pageProps} />
        </main>
      </div>
    </Auth0Provider>
  )
}

export default MyApp
