import React, { useRef, useMemo, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pages/about/About';
import ContactUs from './pages/contactUs/ContactUs';
import Home from './pages/HomePage/Home';
import Root from './routes/Root';
import RolesPage from './pages/roles/rolesPage.tsx';
import FooterPages from './routes/FooterPages';
import { Box } from '@mui/material';

const App = () => {
  const navBarRef = useRef();

  console.log('navBarRef', navBarRef.current);

  const options = useMemo(() => {
    return {
      root: null,
      threshold: 0.85,
      rootMargin: '0px ',
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting) console.log('I am intersecting');
    }, options);

    if (navBarRef.current) observer.observe(navBarRef.current);
  }, [options]);

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

        { path: '/contact', element: <ContactUs /> },
      ],
    },
  ]);
  return (
    <Box ref={navBarRef}>
      <RouterProvider router={router} />
    </Box>
  );
};

export default App;
