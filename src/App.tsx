import NavBar from './components/NavBar';
import MainCard from './components/MainCard';
import { Container, Typography } from '@mui/material';

import { helloWorld } from './utils/request_utils';

function App() {
  helloWorld();
  
  return (
    <div>
      <NavBar />
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
          Multilingual Automated Writing Evaluation with Corrective Feedback
        </Typography>
        <MainCard />
      </Container>
    </div>
  );
}

export default App;
