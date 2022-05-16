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
  sidebar: {
    home: 'Homepage',
    files: 'Files',
    account: 'Account',
    settings: 'Settings',
    logout: 'Logout'
  },
  home: {
    edit: 'Edit folder options',
    download: 'Download folder',
    delete: 'Delete folder',
    my_projects: 'My projects',
    delete_head: 'Delete Project',
    delete_message: 'Are you sure you want to delete the project named {name}'
  },
  auth: {
    username: 'Username',
    password: 'Password',
    login: 'Log in',
    signup: 'Sign Up',
    create_account: 'Create Account',
    loading: 'Loading',
    country: 'Country',
    select_country: 'Select country',
    language: 'Language',
    select_language: 'Select language',
    gender: 'Gender',
    select_gender: 'Select gender',
    name: 'Name',
    last_name: 'Last Name',
    email: 'E-mail',
    repeat_password: 'Repeat Password',
    account_created: 'Account created successfully'
  },
  forms: {
    required: 'Required',
    max_length: 'Must be {length, number} characters or less',
    email: 'Must be an email',
    repeat_password: 'Password must match',
    cancel: 'Cancel',
    delete: 'Delete'
  },
  errors: {
    server_error: 'Server error, try again later.',
    email: 'The email provided is not valid',
    login: {
      unauthorized: 'Wrong password, try again.',
      not_found: 'User does not exist.'
    },
    signup: {
      already_exists: 'The selected username already exists'
    },
    generic: {
      not_allowed: 'Not Allowed',
      unauthorized: 'Unauthorized',
      not_found: 'Not found'
    }
  },
  accesibility: {
    skip_content: 'Skip to content'
  }
};

const translation = {
  [LOCALES.ENGLISH]: flatten(strings)
};

export default translation;