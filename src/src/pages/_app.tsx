import React from 'react'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { AppProps } from 'next/app'
import Head from 'next/head'

import { CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'

import { useStore } from '../state/store';
import theme from '../theme'


const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    jssStyles?.parentElement?.removeChild(jssStyles)
  }, [])
  const store = useStore()
  const persistor = persistStore(store)

  return (
    <>
      <Head>
        <title>IFT-Any</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <CssBaseline />
          <PersistGate persistor={persistor}>
            <Component {...pageProps} />
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </>
  )
}

export default MyApp;
