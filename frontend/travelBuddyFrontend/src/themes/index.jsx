import { createTheme } from '@mui/material/styles';
import palette from './pallete.jsx';
import typography from './typography';
import components from './components';

const theme = createTheme({
  palette,
  typography, 
  components, 
});

export default theme;
