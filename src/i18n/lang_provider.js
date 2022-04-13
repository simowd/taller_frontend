import React, { Fragment } from 'react';
import { IntlProvider } from 'react-intl';
import { LOCALES } from './constants';

import messages from './messages';

const LangProvider = ({ children, locale = LOCALES.ENGLISH }) => {
  return (
    <IntlProvider textComponent={Fragment} locale={locale} messages={messages[locale]}>
      {children}
    </IntlProvider>);
};

export default LangProvider;