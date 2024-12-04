import { createTheme } from '@mui/material/styles';
import palette from './pallete.jsx';
import typography from './typography';
import components from './components';

const theme = createTheme({
  palette, // Kolory
  typography, // Typografia
  components, // Style komponentów
});

export default theme;
