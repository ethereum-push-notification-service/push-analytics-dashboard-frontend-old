import { lazy, useEffect } from 'react';
import { BaseOptionChartStyle } from 'components/chart';
import { ROUTES } from 'utils/constants';
import { Routes, Route, useLocation } from 'react-router-dom';
import ThemeProvider from './theme';

const Home = lazy(() => import('pages/home'));
const Page404 = lazy(() => import('pages/not-found'));
const Login = lazy(() => import('pages/Login/Login'));
const RequireAuth = lazy(() => import('./components/RequireAuth/RequireAuth'));

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default function App() {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <BaseOptionChartStyle />
      <Routes>
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route
          path={ROUTES.HOME}
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route path={ROUTES.ERROR} element={<Page404 />} />
      </Routes>
    </ThemeProvider>
  );
}
