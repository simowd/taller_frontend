import { intl } from '../i18n';

const builder = (data, type, endpoint) => {
  let info = {
    title: '',
    description: '',
    status: type,
    duration: 5000,
    isClosable: true,
    variant: 'left-accent',
    position: 'top'
  };
  if(data.status === 500) {
    info.title = intl.formatMessage('errors.server_error');
  }

  if(endpoint === 'login') {
    if(data.status === 404){
      info.title = intl.formatMessage({id: 'errors.login.not_found' });
    }
    if(data.status === 401){
      info.title = intl.formatMessage({id: 'errors.login.unauthorized' });
    }
  }

  return info;
};

export default builder;