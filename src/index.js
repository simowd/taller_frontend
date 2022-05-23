import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './reducers';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { I18nProvider } from './i18n';
import theme from './utils/customTheme';

//Import fonts
import '@fontsource/raleway';
import '@fontsource/roboto';
import '@fontsource/ubuntu-mono';
import '@fontsource/source-code-pro';
import '@fontsource/inconsolata';
import '@fontsource/fira-code';
import color_theme from './utils/color_theme';

//Setup App render
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nProvider>
        <ChakraProvider theme={theme}>
          <ColorModeScript initialColorMode={color_theme.config.initialColorMode} />
          <App />
        </ChakraProvider>
      </I18nProvider>
    </Provider>
  </React.StrictMode>,
);

