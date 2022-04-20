import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './reducers';
import { ChakraProvider } from '@chakra-ui/react';
import { I18nProvider, LOCALES } from './i18n';
import theme from './utils/customTheme';

import '@fontsource/raleway';
import '@fontsource/roboto';

//Start Axios configuration

//Setup App render
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nProvider locale={LOCALES.ENGLISH}>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </I18nProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

