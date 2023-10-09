import { useState, useRef, useEffect, useMemo } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/Navigation/NavBar';
import { Box } from '@mui/material';
import { setScrollIcon } from '../Redux/slices/uiSlice';
import { useDispatch } from 'react-redux';
import MobileMenu from '../components/MobileMenu';

const Root = () => {
  const [navFixed, setNavFixed] = useState();
  const navBarRef = useRef();
  const dispatch = useDispatch();

  const options = useMemo(() => {
    return { root: null, threshold: 0.89, rootMargin: '0px' };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting) {
        setNavFixed(true);
        dispatch(setScrollIcon(false));
      } else {
        setNavFixed(false);
        dispatch(setScrollIcon(true));
      }
    }, options);
    if (navBarRef.current) observer.observe(navBarRef.current);
  }, [navBarRef, options, dispatch]);

  return (
    <div style={{}}>
      <NavBar navFixed={navFixed} />
      <MobileMenu />
      <Box ref={navBarRef} sx={{ height: '80vh' }}>
        <Outlet />
      </Box>
    </div>
  );
};

export default Root;
