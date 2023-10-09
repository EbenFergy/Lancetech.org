import NavStyle from './NavStyle';
import Logo from '../Logo';
import { Box, Icon, IconButton } from '@mui/material';
import NavButtonComponent from '../NavButtonComponent';
import { useDispatch } from 'react-redux';
import { setOpenMenu } from '../../Redux/slices/uiSlice';
import { COLORS } from '../../styles/COLORS.ts';

const NavBar = ({ navFixed }) => {
  const dispatch = useDispatch();

  const { MainBlue } = COLORS;

  const handleOpenSideMenu = () => {
    dispatch(setOpenMenu(true));
  };

  return (
    <NavStyle navFixed={navFixed}>
      <Box className="webNavLogo">
        <Logo />
      </Box>
      <Box sx={{ width: '100%' }} className="webNavButtons">
        <NavButtonComponent navFixed={navFixed} />
      </Box>

      <IconButton className="menuIcon" onClick={handleOpenSideMenu}>
        <Icon sx={{ fontSize: '2.5rem', color: MainBlue }}>menu_icon</Icon>
      </IconButton>
    </NavStyle>
  );
};

export default NavBar;
