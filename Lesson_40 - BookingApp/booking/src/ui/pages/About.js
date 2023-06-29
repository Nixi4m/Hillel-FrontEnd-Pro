import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function About() {
  return (
    <Box sx={{ paddingTop: '50px' }}>
      <Typography component="h5" variant="h5">About</Typography>
      <Typography component="p" sx={{ paddingTop: '30px' }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus excepturi explicabo iure maiores nam natus voluptatibus.
        Aliquam dolores excepturi, facere itaque modi nihil placeat repudiandae vitae. Dicta ducimus minus non.
      </Typography>
    </Box>
  );
}
