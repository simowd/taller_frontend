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
    logout: 'Logout',
    help: 'Help'
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
    upload_file: 'Upload Folder',
    share: 'Share'
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
    min_length: 'Must be {length, number} characters or more',
    email: 'Must be an email',
    repeat_password: 'Password must match',
    cancel: 'Cancel',
    delete: 'Delete',
    update: 'Update',
    repeated: 'New name can\'t be old name',
    create: 'Create',
    existed: 'Resource name already exists',
    change_password: 'Change Password',
    alphanumeric: 'Only alphanumeric characters can be used',
    not_empty: 'The name can\' t be only spaces',
  },
  editor: {
    title: 'Files',
    upload: 'Upload File',
    new_file: 'Create New File',
    create_file: 'New file was created',
    create_head: 'Create File',
    file_name: 'File Name',
    update_head: 'Update File',
    update_message: 'Are you sure you want to update the file named {name}?',
    update_file_success: 'File updated successfully',
    delete_head: 'Delete File',
    delete_message: 'Are you sure you want to delete the file named {name}?',
    share_head: 'Share File',
    share_message: 'Copy the link to share it with people:\n',
    copy: 'Copy link',
    run: 'Run code',
    fejump: 'Jump to next block of code',
    bejump: 'Jump to previous block of code'
  },
  tour: {
    back: 'Back',
    close: 'Close',
    last: 'Last',
    next: 'Next',
    open: 'Open the dialog',
    skip: 'Skip',
    welcome: 'Welcome to this accessible Python Development Program. We will guide you through the different features that the system has.',
    main: 'The system has the main page where all the projects are located. Here you can select all the projects you created. By default the Sketchbook is enabled.',
    create_project: 'Click this button to create a new project. You can also upload a zip file to create and upload a project.',
    project_expl: 'A project contains all the files for Python. The first three files are shown and can be accessed directly.',
    project_opt: 'You can download, edit and delete the projects. All of the projects have the same exact format.',
    side_bar: 'To navigate to other pages use the sidebar. The settings and user information can be updated on the links on the sidebar.',
    welcome_editor: 'This is the editor. Here you can create, edit and run the software you\'ve written in Python. Let\'s take a small tour of the system.',
    nav_editor: 'You can navigate to the other pages of the system from this navigation bar. Clicking on the first link will go to the projects page.',
    nav_create_button: 'These buttons enable you to create a file or upload an already existing file.',
    nav_file_expl: 'Here you can see all the files created by you. Clicking on them will bring the program to the editor. You can also edit them, download them individually or deleting it.',
    editor_editor: 'This is the editor. Once you enter the editor, press Ctrl + M to enable movement with the tab key. To create blocks of code create a comment with the structure "#B ".',
    editor_run: 'To run the program press this button. It will run the code written by you.',
    editor_console: 'This is the console. It will show the output of the code written by you. In case of an error it will show the appropiate error and the line that connects the error.',
    editor_end: 'This ends the tour. Have fun coding!',

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
    skip_content: 'Skip to content',
    skip_files: 'Skip to project files',
    skip_editor: 'Skip to the editor',
  },
  skulpt: {
    name_error: 'NameError:\n name {var_name} is not defined on line {line}',
    attribute_error: 'AttributeError:\n {var_name} object has no attribute {function} on line {line}',
    value_error: 'ValueError:\n {var_name} domain error on line {line}',
    zerodivision_error: 'ZeroDivisionError:\n {var_name} division or modulo by zero on line {line}',
    assertion_error: 'AssertionError:\n {var_name} on line {line}',
    import_error: 'ImportError:\n No module named {var_name} on line {line}',
    index_error: 'IndexError:\n list index out of range on line {line}',
    key_error: 'KeyError:\n {var_name} on line {line}',
    system_exit_error: 'SystemExitError:\n {var_name} on line {line}',
    overflow_error: 'OverflowError:\n Numerical value out of range on line {line}',
    recursion_error: 'RecursionError:\n Maximum call stack size exceeded on line {line}',
    syntax_error: 'SyntaxError:\n bad input on line {line}',
    not_implemented_error: 'NotImplementedError:\n {var_name} is not yet implemented in the project on line {line}',
  },
  help: {
    homepage: 'Navigate to homepage',
    settings: 'Navigate to settings',
    account: 'Navigate to account',
    title: 'Shortcut Help Modal',
    run_code: 'Run Code',
    new_file: 'Create a new file',
    new_project: 'Create a new project',
    save_file: 'Save current file',
    help_title: 'System Help',
    help_intro: 'Introduction',
    help_intro_desc: 'In this page all the functional parts of the system will be shown.',
    help_projects: 'Projects Page',
    help_projects_desc: 'In the Home Page, all of the projects created by the user are shown. The first option on the page is to create a new project.\nThen, all the projects created by the user are listed in a sequential manner. This order is on a creation date basis.',
    help_project_create: 'Project Creation',
    help_project_create_desc: 'Inside of the modal of creation two options exist:\n\t- Upload Folder: It allows the user to upload a zip file with Python programs that can be accesed through the system.\n\t- Create Empty Folder: To create an empty folder a name and the privacy state should be input.',
    help_project_state: 'Project List',
    help_project_state_desc: 'For each project, the first three files are shown to the user. Also, each folder has the mex options:\n\t- Project edition: Within the project edition the same options are observed as with the creation of projects.\n\t- Download the project: Allows you to download a zip file with all the project files.\n\t- Delete project : Deletes the project permanently from the system.\n\t- Share project: If the project is not private, the system provides the option to share the project through a link generated by the system.',
    help_account: 'Personal Data Screen',
    help_account_desc: 'Within the my account page you can edit the user\'s personal data. The system language can also be changed on this screen.',
    help_settings: 'Settings Screen',
    help_settings_desc: 'There are six very important options on the settings screen:\n\t- Dark Mode: Allows you to switch the entire system to dark mode.\n\t- Audio Feedback: Enable audio feedback in the same way as Google Talkback. \n\t- Activate animations: Activates the animations within the system.\n\t- High contrast editor: Puts the text editor in high contrast mode for better reading.\n\t- Font size: Change the font size of the editor.\n\t- Font: Change the font of the editor.',
    help_editor_title: 'Editor',
    help_editor_desc: 'The help description for the editor screen will be presented in the next subsection.',
    help_editor_creation_files: 'File Creation',
    help_editor_creation_files_desc: 'There are two important buttons\n\t- Create File: Allows you to create a new file in the open folder. It has the same options as creating a folder.\n\t- Upload File: Allows you to upload a Python file or a text file to the system. Just select the file and the system will automatically upload the file.',
    help_editor_files: 'Files',
    help_editor_files_desc: 'In the files section, all the programs created by Python are listed. Each file has the same options as with the projects on the main page.',
    help_editor_code: 'Editor',
    help_editor_code_desc: 'There are many options in the editor. The most important functions of it will be shown below.\n\t- Tab Lock: To avoid being permanently locked in the text editor, you can press CTRL + M to unlock the use of the tab button.\n\t- Automatic tabulation: After creating a code block (conditional, loop or function) the tabulation that follows is automatic.\n\tExecution: For code execution you can use the keyboard shortcut F4.\n\t- Accessibility features : To access these functions press ALT + F1 and you will be presented with a menu with the explanation of certain features of the Monaco Editor'
  }
};

const translation = {
  [LOCALES.ENGLISH]: flatten(strings)
};

export default translation;