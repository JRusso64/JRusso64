import * as React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import SideBar from './components/CustomDrawer/ResponsiveDrawer';
import MainContent from './components/MainContent/MainContent';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ForumProject from './components/ForumProject/ForumProject';
import SignLanguageProject from './components/ASLingo/SignLanguageProject';
import TextMessenger from './components/TextMessenger/TextMessenger';
import Resume from './components/Resume/Resume';

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
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <SideBar />
            </Grid>

            <Grid item xs={8}>
              <Box 
                display="flex" 
                justifyContent="center" 
                alignItems="flex-start" 
                height="100vh"
              >
                <Routes>
                  <Route path="/" element={<MainContent />} />
                  <Route path="/forum-project" element={<ForumProject />} />
                  <Route path="/aslingo" element={<SignLanguageProject />} />
                  <Route path="/textmessenger" element={<TextMessenger />} />
                  <Route path="/resume" element={<Resume />} />
                </Routes>
              </Box>
            </Grid>

            <Grid item xs={2} />
          </Grid>
        </Box>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
