import { Suspense, lazy } from 'react'
import { ROUTES } from 'utils/constants'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import theme from 'utils/theme'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Home = lazy(() => import('pages/home'))

const App = () => {
  return (
    <Suspense fallback={<div />}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Suspense>
  )
}

export default App
