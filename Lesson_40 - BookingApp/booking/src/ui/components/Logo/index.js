// Core
import Box from '@mui/material/Box';
// Engine
import { links } from '../../../engine/config/routers';
// Helpers
import { Wrapper } from './styles';

export default function Logo() {
  return (
    <Wrapper to={links.main}>
      <Box
        sx={{
          borderRadius: '50%',
          backgroundColor: 'orange',
          height: '30px',
          width: '30px',
        }}
      />
      LOGO
    </Wrapper>
  );
}
