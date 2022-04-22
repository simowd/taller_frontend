import { useToast } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { intl } from '../i18n';

export const useToastHook = () => {
  const [state, setState] = useState(undefined);
  const toast = useToast();

  let info = {
    title: '',
    description: '',
    status: 'success',
    duration: 5000,
    isClosable: true,
    variant: 'left-accent',
    position: 'top'
  };

  useEffect(() => {
    if (state) {
      const { type, status, endpoint } = state;
      info.status = type;

      if (status === 500) {
        info.title = intl.formatMessage('errors.server_error');
      }
      if (endpoint === 'login') {
        if (status === 404) {
          info.title = intl.formatMessage({ id: 'errors.login.not_found' });
        }
        if (status === 401) {
          info.title = intl.formatMessage({ id: 'errors.login.unauthorized' });
        }
      }
      if (endpoint === 'signup') {
        if (status === 409) {
          info.title = intl.formatMessage({ id: 'errors.signup.already_exists' });
        }
      }

      toast(info);
    }
  }, [state, toast]);

  return [state, setState];
};