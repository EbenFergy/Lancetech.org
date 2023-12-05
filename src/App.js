import { createBrowserRouter, RouterProvider, useLocation } from 'react-router-dom';
import About from './pages/about/About';
import { useEffect } from 'react';
import ContactUs from './pages/contactUs/ContactUs';
import Home from './pages/HomePage/Home';
import Root from './routes/Root';
import RolesPage from './pages/roles/rolesPage';
import FooterPages from './routes/FooterPages';
import AppStyle from './AppStyle';

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const router = createBrowserRouter([
    {
      path: '',
      element: <Root />,
      children: [
        {
          path: '',
          element: <FooterPages />,
          children: [
            { path: '', element: <Home /> },
            { path: '/about', element: <About /> },
            { path: '/roles', element: <RolesPage /> },
          ],
        },
      ],
    },
    { path: '/contact', element: <ContactUs /> },
  ]);
  return (
    <AppStyle>
      <RouterProvider router={router} />
    </AppStyle>
  );
};

export default App;
