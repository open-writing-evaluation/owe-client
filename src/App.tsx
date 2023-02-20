import { useState } from 'react';
import NavBar from './components/NavBar';
import MainCard from './components/MainCard';
import Sidebar from './components/Sidebar';
import { Container, Typography } from '@mui/material';

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  }
  const [language, setLanguage] = useState("English");
  const selectLanguage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLanguage(event.target.value);
  }

  return (
    <div>
      <NavBar 
        toggleDrawer={toggleDrawer}
        language={language}
      />
      <Container sx={{ mt: 5}}>
        {/* <Typography
          align="center"
          variant="h2"
        >
          Get your AWE
        </Typography> */}
        <Typography
          align="center"
          variant="h5"
        >
          Write It Right: Automated Writing Evaluation with Corrective Feedback
        </Typography>
        {/* <Typography
          align="center"
          variant="body2"
          sx={{ mt: 5}}
        >
          Model: English
        </Typography> */}
        <MainCard />
      </Container>
      <Sidebar 
        open={drawerOpen}
        onClick={toggleDrawer}
        setLanguage={selectLanguage}
        defaultValue={language}
      />
    </div>
  );
}

export default App;
