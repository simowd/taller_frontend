import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const theme = extendTheme({
  fonts: {
    heading: 'Roboto, sans-serif',
    body: 'Roboto, sans-serif'
  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode('#FAF7F7', 'gray.800')(props)
      }
    })
  }
});

export default theme;