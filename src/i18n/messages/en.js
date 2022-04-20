import { LOCALES } from '../constants';
import flatten from 'flat';

const strings = {
  username: 'Username',
  password: 'Password',
  navbar: {
    closeNavbar: 'Close Navbar Menu',
    openNavbar: 'Open Navbar Menu',
    login: 'Log in',
    signup: 'Sign Up'
  },
  login: {
    username: 'Username',
    password: 'Password',
    login: 'Log in',
    loading: 'Loading'
  },
  forms: {
    required: 'Required',
    max_length: 'Must be {length, number} characters or less'
  },
  errors: {
    server_error: 'Server error, try again later.',
    login: {
      unauthorized: 'Wrong password, try again.',
      not_found: 'User does not exist.'
    }
  }
};

const translation = {
  [LOCALES.ENGLISH]: flatten(strings)
};

export default translation;