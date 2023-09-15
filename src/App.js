import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pages/about/About';
import ContactUs from './pages/contactUs/ContactUs';
import Home from './pages/HomePage/Home';
import Root from './routes/Root';
import RolesPage from './pages/roles/rolesPage.tsx';
import FooterPages from './routes/FooterPages';
import { Box } from '@mui/material';

const App = () => {
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
    <Box>
      <RouterProvider router={router} />
    </Box>
  );
};

export default App;
