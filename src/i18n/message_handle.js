import React from 'react';
import { createIntl, createIntlCache, FormattedMessage, useIntl } from 'react-intl';
import { LOCALES } from './constants';
import language_messages from './messages';

const translate = (id, value = {}) => <FormattedMessage id={id} values={{ ...value }} />;

const stringTranslate = (id, value = {}) => { 
  const intl = useIntl();
  return(intl.formatMessage({ id: id }, { ...value }));
};

const cache = createIntlCache();
const intl = createIntl({
  locale: LOCALES.ENGLISH,
  messages: language_messages[LOCALES.ENGLISH]
}, cache);

export { translate, stringTranslate, intl };