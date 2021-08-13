// import Inconsolata from '../public/fonts/Inconsolata_Expanded-Light.ttf';
import { createTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#21232A',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: 'Inconsolata',
    // Customize the font style.
  },
});

export default theme;
