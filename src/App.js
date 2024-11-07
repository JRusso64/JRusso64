import * as React from 'react';
import AppBar from './components/CustomAppBar/CustomAppBar';
import SideBar from './components/CustomDrawer/ResponsiveDrawer';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';

function App() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid size={2}>
            <SideBar />
          </Grid>
          <Grid size={8}>
            <AppBar />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default App;