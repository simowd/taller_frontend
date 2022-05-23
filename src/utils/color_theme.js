// theme.js

// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react';

// 2. Add your color mode config
const config = {
  initialColorMode: window.localStorage.getItem('chakra-ui-color-mode') ? window.localStorage.getItem('chakra-ui-color-mode') : 'light',
  useSystemColorMode: false,
};

// 3. extend the theme
const color_theme = extendTheme({ config });

export default color_theme;