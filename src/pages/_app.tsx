import { TypeComponentsAuthFields } from '@/components/interface/page.interface'
import AuthProvider from '@/provider/AuthProvider'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'

type TypeApp = AppProps & TypeComponentsAuthFields

export default function App({ Component, pageProps }: TypeApp) {
  return (
    <AuthProvider Component={Component}>
      <Component {...pageProps} />
  </AuthProvider>
  )
}
