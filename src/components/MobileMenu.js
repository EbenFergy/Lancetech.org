import * as React from 'react';
import Button from './Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenMenu } from '../Redux/slices/uiSlice';
import { Box, DialogContent, Dialog, Icon, IconButton, Slide } from '@mui/material';
import { useNavigate, NavLink } from 'react-router-dom';
import { COLORS } from '../styles/COLORS.ts';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const MobileMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const openMenuModal = useSelector(state => state.UIReducer.openMenu);

  const { MainBlue } = COLORS;

  const handleClose = () => {
    dispatch(setOpenMenu(false));
  };
  const handleNavigate = () => {
    navigate('/roles');
    handleClose();
  };

  return (
    <Box>
      <Dialog fullScreen open={openMenuModal} onClose={handleClose} TransitionComponent={Transition}>
        <IconButton sx={{ position: 'absolute', right: '2rem', top: '2rem' }} onClick={handleClose} aria-label="close">
          <Icon>close</Icon>
        </IconButton>
        <DialogContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '4rem',
            fontSize: '2rem',

            a: {
              textDecoration: 'none',
              color: MainBlue,

              ':hover': {
                fontSize: '2.5rem',
              },
            },

            '& .active': {
              textDecoration: 'underline',
              color: MainBlue,
              fontSize: '2.5rem',
            },
          }}
        >
          <NavLink to="" className={({ isActive }) => (isActive ? 'active' : undefined)} onClick={handleClose}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : undefined)} onClick={handleClose}>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : undefined)} onClick={handleClose}>
            Contact
          </NavLink>
          <Button onClick={handleNavigate}>See roles</Button>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default MobileMenu;
