import * as React from 'react';
import SideBar from './components/CustomDrawer/ResponsiveDrawer';
import MainContent from './components/MainContent/MainContent';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1'
    },
  },
})



function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>

        <Grid container spacing={2}>
          <Grid item xs={2}>
            <SideBar />
          </Grid>

          <Grid item xs={8}>
            <Box 
              display="flex" 
              justifyContent="center" 
              alignItems="center" 
              height="100vh"
            >
              <MainContent />
            </Box>
          </Grid>
          <Grid item xs={2} />
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default App;
