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
          if (status === 409) {
            info.title = intl.formatMessage({ id: 'forms.existed'});
          }
        }
        if (endpoint === 'change_password') {
          if (status === 403) {
            info.title = intl.formatMessage({ id: 'errors.password.not_authorized' });
          }
        }
      }
      else if (info.status === 'success') {
        if (endpoint === 'signup'){
          info.title = intl.formatMessage({ id: 'auth.account_created' });
        }
        if (endpoint === 'home'){
          info.title = intl.formatMessage({ id: 'home.update_success' });
        }
        if (endpoint === 'create_folder'){
          info.title = intl.formatMessage({ id: 'home.create_success' });
        }
        if (endpoint === 'account'){
          info.title = intl.formatMessage({ id: 'account.account_success' });
        }
        if (endpoint === 'update_password'){
          info.title = intl.formatMessage({ id: 'account.update_password_success' });
        }
        if (endpoint === 'create_file'){
          info.title = intl.formatMessage({ id: 'editor.create_file' });
        }
        if (endpoint === 'update_file'){
          info.title = intl.formatMessage({ id: 'editor.update_file_success' });
        }
      }
      toast(info);
    }
  }, [state, toast]);

  return [state, setState];
};