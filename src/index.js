import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './reducers';
import { ChakraProvider } from '@chakra-ui/react';
import { I18nProvider } from './i18n';
import theme from './utils/customTheme';

//Import fonts
import '@fontsource/raleway';
import '@fontsource/roboto';
import '@fontsource/ubuntu-mono';
import '@fontsource/source-code-pro';
import '@fontsource/inconsolata';
import '@fontsource/fira-code';

//Setup App render
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nProvider>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </I18nProvider>
    </Provider>
  </React.StrictMode>,
);

