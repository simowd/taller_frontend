import React, { Fragment, useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from '../reducers/user_reducer';
import { LOCALES } from './constants';

import messages from './messages';

const LangProvider = ({ children, locale = LOCALES.ENGLISH }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (user === null || user === undefined) {
      dispatch(loadUser());
    }
  }, []);

  if (user)
    locale = user.locale;

  return (
    <IntlProvider textComponent={Fragment} locale={locale} messages={messages[locale]}>
      {children}
    </IntlProvider>);
};

export default LangProvider;