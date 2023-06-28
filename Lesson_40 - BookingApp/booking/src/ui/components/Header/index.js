// Parts
import Stack from '@mui/material/Stack';
import Button from '../Button';
// Engine
import { links } from '../../../engine/config/routers';
import Wrapper from './styles';
import Logo from '../Logo';

export default function Header() {
  return (
    <Wrapper>
      <Logo />
      <Stack spacing={2} direction="row">
        <Button reactHref={links.main}>Home</Button>
        <Button reactHref={links.about}>About</Button>
      </Stack>
    </Wrapper>
  );
}
