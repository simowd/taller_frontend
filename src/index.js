import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './providers';
import { startAxios } from './utils/axios.conf';
import { ChakraProvider } from '@chakra-ui/react';
import { I18nProvider, LOCALES } from './i18n';

//Start Axios configuration
startAxios();

//Setup App render
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nProvider locale={LOCALES.ENGLISH}>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </I18nProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

