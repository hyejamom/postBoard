import { Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <Box sx={{ mt: '20px' }}>
      <Link to="/basic">
        <Button sx={{ mr: '10px' }}>기본</Button>
      </Link>
      <Link to="/about">
        <Button>새창</Button>
      </Link>
    </Box>
  );
};
