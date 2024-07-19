import {  extendTheme } from '@mui/joy/styles';

const darkTheme = extendTheme({
  colorSchemes: {
    dark: {
      palette: {
        background: {
          body: '#121212',
        },
      },
    },
  },
});

export default darkTheme;
