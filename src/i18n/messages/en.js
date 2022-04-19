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
  }
};

const translation = {
  [LOCALES.ENGLISH]: flatten(strings)
};

export default translation;