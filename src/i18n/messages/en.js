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
    delete_message: 'Are you sure you want to delete the project named {name}?',
    update_head: 'Update Project',
    update_message: 'Are you sure you want to update the project named {name}?',
    create_message: 'Create a new folder',
    create_head: 'Create a project',
    folder_name: 'Project Name',
    private: 'Private',
    update_success: 'Updated folder successfully',
    create_success: 'Created folder successfully',
    create_folder: 'Create new folder',
    folder_not_found: 'Folder does not have any content',
    upload_file: 'Upload Folder'
  },
  settings: {
    title: 'Settings',
    dark_light: 'Enable Dark Mode',
    audio_feedback: 'Enable Audio Feedback',
    animations: 'Enable Animations',
    high_contrast: 'Enable Editor High Contrast',
    font_size: 'Editor Font Size',
    font_type: 'Editor Font Family'
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
  account: {
    account_success: 'Updated successfully',
    my_account: 'My account',
    update_password: 'Change current password',
    old_password: 'Old password',
    new_password: 'New password',
    new_password_repeat: 'Repeat New Password',
    update_password_success: 'Updated password successfully'
  },
  forms: {
    required: 'Required',
    max_length: 'Must be {length, number} characters or less',
    email: 'Must be an email',
    repeat_password: 'Password must match',
    cancel: 'Cancel',
    delete: 'Delete',
    update: 'Update',
    repeated: 'New name can\'t be old name',
    create: 'Create',
    existed: 'Folder name already exists',
    change_password: 'Change Password'
  },
  editor: {
    title: 'Files',
    upload: 'Upload File',
    new_file: 'Create New File',
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
    password:{
      not_authorized: ' Old password is wrong'
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