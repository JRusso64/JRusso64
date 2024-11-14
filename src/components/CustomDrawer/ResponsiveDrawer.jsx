import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const location = useLocation();  // Get the current route
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
    <Toolbar />
    <List sx={{ textAlign: "center" }}>
      {/* Top Projects Link */}
      <ListItem button component={Link} to="top-projects" smooth={true} duration={500}>
        <ListItemText>
          <Typography variant="h6" sx={{ cursor: 'pointer', color: 'white' }}>
            Top Projects
          </Typography>
        </ListItemText>
      </ListItem>

      {/* Small Projects Link */}
      <ListItem button component={Link} to="small-projects" smooth={true} duration={500}>
        <ListItemText>
          <Typography variant="h6" sx={{ cursor: 'pointer', color: 'white' }}>
            Small Projects
          </Typography>
        </ListItemText>
      </ListItem>

      <Divider sx={{ my: 2 }} /> {/* Divider to separate sections */}

      {/* Add more links as needed */}
    </List>
  </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  // Conditionally render the sidebar based on the current path
  const isMainContentPage = location.pathname === '/';

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          {isMainContentPage && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h4" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
            John Russo
          </Typography>
        </Toolbar>
      </AppBar>
      
      {isMainContentPage && (
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* Temporary drawer for mobile */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onTransitionEnd={handleDrawerTransitionEnd}
            onClose={handleDrawerClose}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
          
          {/* Permanent drawer for larger screens */}
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
      )}

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: isMainContentPage ? `calc(100% - ${drawerWidth}px)` : '100%' },
          mt: { xs: 7, sm: 8 },
        }}
      >
        <Toolbar />
        {/* Main content goes here */}
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
