import { useState, useRef, useEffect, useMemo } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/Navigation/NavBar';
import { Box } from '@mui/material';

const Root = () => {
  const [navFixed, setNavFixed] = useState();

  const navBarRef = useRef();

  console.log('hello');

  const options = useMemo(() => {
    return { root: null, threshold: 0.89, rootMargin: '0px' };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting) {
        console.log('I am intersecting', entries[0].isIntersecting);
        setNavFixed(true);
      } else {
        console.log('...not intersecting', entries[0].isIntersecting);
        setNavFixed(false);
      }
    }, options);

    if (navBarRef.current) observer.observe(navBarRef.current);
  }, [navBarRef, options]);

  return (
    <div style={{}}>
      <NavBar navFixed={navFixed} />
      <Box ref={navBarRef} sx={{ height: '80vh' }}>
        <Outlet />
      </Box>
    </div>
  );
};

export default Root;
