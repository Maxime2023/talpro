import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Logo from '../../public/LogoBlanc.png';
import { storeIslogged, changeLog } from './Redux/Store';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router'

function ResponsiveAppBar() {
  const router = useRouter()
  const pages = ['Les projets'];
  let settings = ['Profile', 'Se déconnecter'];
  const logInfo = useSelector(storeIslogged);
  if (logInfo === false)
    settings = ['Se connecter', 'S\'inscrire'];
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (page) => {
    console.log("dsfqsfsd", page)
    setAnchorElNav(null);
    if (page === "Les projets") {
      router.push('/projects')
    }
  };

  const handleCloseUserMenu = (setting) => {
    setAnchorElUser(null);
    if (setting === "Se connecter") {
      router.push('/login')
    }
    if (setting === "S'\inscrire") {
      router.push('/register')
    }
    if (setting === "Les projets") {
      router.push('/projects')
    }
  };

  return (
    <AppBar  position="static" style={{backgroundColor: "#274c77"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{width: "50px", height: "50px", cursor: "pointer"}} onClick={() =>router.push('/')}>
          <img style={{width: "50px", height: "50px"}} src={Logo.src}/>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', right: '0px', position: 'absolute' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleCloseNavMenu(page)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
