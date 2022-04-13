import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

const translate = (id, value = {}) => <FormattedMessage id={id} values={{ ...value }} />;

const stringTranslate = (id, value = {}) => { 
  const intl = useIntl();
  return(intl.formatMessage({ id: id }, { ...value }));
};

export { translate, stringTranslate };