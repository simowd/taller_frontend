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
      else if (info.status === 'error') {
        if (endpoint === 'login') {
          if (status === 404) {
            info.title = intl.formatMessage({ id: 'errors.login.not_found' });
          }
          else if (status === 401) {
            info.title = intl.formatMessage({ id: 'errors.login.unauthorized' });
          }
        }
        if (endpoint === 'signup') {
          if (status === 409) {
            info.title = intl.formatMessage({ id: 'errors.signup.already_exists' });
          }
        }
        if (endpoint === 'home') {
          if (status === 405) {
            info.title = intl.formatMessage({ id: 'errors.generic.not_allowed'});
          }
          if (status === 401) {
            info.title = intl.formatMessage({ id: 'errors.generic.unauthorized'});
          }
          if (status === 404) {
            info.title = intl.formatMessage({ id: 'errors.generic.not_found'});
          }
        }
      }
      else if (info.status === 'success') {
        if (endpoint === 'signup'){
          info.title = intl.formatMessage({ id: 'auth.account_created' });
        }
      }
      toast(info);
    }
  }, [state, toast]);

  return [state, setState];
};