import { createStandaloneToast } from '@chakra-ui/react';
import customTheme from '../utils/customTheme';
import builder from '../utils/toast_builder';

export const createToast = (data, type, endpoint) => {
  const toast = createStandaloneToast({theme: customTheme});
  const toast_data = builder(data, type, endpoint);
  toast({...toast_data});
};

const reducer = (state = null, action) => {
  switch (action.type) {
  case ('NOTIFICATION_ERROR'):
    return action.data;
  case ('NOTIFICATION_EMPTY'):
    return action.null;
  }

  return state;
};

export default reducer;