import { LOCALES } from '../constants';
import flatten from 'flat';

const strings = {
  username: 'Nombre de Usuario',
  password: 'Contraseña',
  navbar: {
    closeNavbar: 'Cerrar el Menú de Navegación',
    openNavbar: 'Abrir el Menú de Navegación',
    login: 'Iniciar Sesión',
    signup: 'Registrarse'
  },
  sidebar: {
    home: 'Pantalla de Inicio',
    files: 'Archivos',
    account: 'Mi cuenta',
    settings: 'Configuración',
    logout: 'Cerrar Sesión',
    help: 'Ayuda'
  },
  home: {
    edit: 'Editar las opciones de la carpeta',
    download: 'Descargar carpeta',
    delete: 'Eliminar Carpeta',
    my_projects: 'Mis Proyectos',
    delete_head: 'Eliminar Proyecto',
    delete_message: '¿Está seguro de querer eliminar el proyecto con el nombre: {name}?',
    update_head: 'Actualizar Proyecto',
    update_message: '¿Está seguro de querer actualizar el proyecto con el nombre: {name}?',
    create_message: 'Crear una nueva carpeta',
    create_head: 'Crear un nuevo proyecto',
    folder_name: 'Nombre del proyecto',
    private: 'Privado',
    update_success: 'Carpeta actualizada exitosamente',
    create_success: 'Carpeta creada exitosamente',
    create_folder: 'Crear una nueva carpeta',
    folder_not_found: 'Esta carpeta está vacía',
    upload_file: 'Subir carpeta',
    share: 'Compartir'
  },
  settings: {
    title: 'Configuración',
    dark_light: 'Activar Modo Oscuro',
    audio_feedback: 'Activar retroalimentación por audio',
    animations: 'Activar Animaciones',
    high_contrast: 'Activar el editor de alto contraste',
    font_size: 'Tamaño de letra del editor',
    font_type: 'Tipo de letra del editor'
  },
  auth: {
    username: 'Nombre de usuario',
    password: 'Contraseña',
    login: 'Iniciar Sesión',
    signup: 'Registro',
    create_account: 'Crear Cuenta',
    loading: 'Cargando',
    country: 'País',
    select_country: 'Selecciona un país',
    language: 'Idioma',
    select_language: 'Selecciona un idioma',
    gender: 'Género',
    select_gender: 'Selecciona un género',
    name: 'Nombre',
    last_name: 'Apellidos',
    email: 'Correo electrónico',
    repeat_password: 'Repite la contraseña',
    account_created: 'Cuenta creada exitosamente'
  },
  account: {
    account_success: 'Actualizado exitosamente',
    my_account: 'Mi cuenta',
    update_password: 'Cambiar contraseña actual',
    old_password: 'Antigua contraseña',
    new_password: 'Nueva contraseña',
    new_password_repeat: 'Repita la nueva contraseña',
    update_password_success: 'Contraseña actualizada correctamente'
  },
  forms: {
    required: 'Campo obligatorio',
    max_length: 'Tiene que tener {length, number} caracteres o menos',
    min_length: 'Tiene que tener {length, number} caracteres o más',
    email: 'Tiene que ser un correo electrónico',
    repeat_password: 'Las contraseñas tienen que coincidir',
    cancel: 'Cancelar',
    delete: 'Eliminar',
    update: 'Actualizar',
    repeated: 'El nuevo nombre no puede ser el antiguo nombre',
    create: 'Crear',
    existed: 'Contenido ya existe',
    change_password: 'Cambiar contraseña',
    alphanumeric: 'Solo se pueden usar caractéres alfanuméricos',
    not_empty: 'El nombre no puede contener solo espacios en blanco',
  },
  tour: {
    back: 'Atrás',
    close: 'Cerrar',
    last: 'Final',
    next: 'Siguiente',
    open: 'Abrir la ventana de dialogo',
    skip: 'Saltar',
    welcome: 'Bienvenido al sistema de desarrollo Python accesible. Esta es una pequeña guía de todas las funcionalidades con las que cuenta el sistema.',
    main: 'El sistema tiene una página principal en la que se encuentran todos tus proyectos. Aquí se pueden seleccionar y accesar los proyectos. Por defecto el proyecto Sketchbook existe.',
    create_project: 'Haz click en este botón para crear un nuevo proyecto. También se puede subir un archivo .zip para crear y subir el proyecto al sistema.',
    project_expl: 'Un proyecto contiene todos los archivos Python.',
    project_opt: 'Puedes descargar los proyectos, editarlos o eliminarlos. Todos los proyectos y archivos tienen el mismo formato.',
    side_bar: 'Para navegar a las otras páginas se puede usar la barra de navegación. Las opciones del editor y la información del usuario pueden ser editadas en estas páginas.',
    welcome_editor: 'Este es la página del editor. Aquí se pueden crear, editar y ejecutar software que es escrito en el editor de texto en el lenguaje de programación Python. Empecemos con un pequeño tour del sistema.',
    nav_editor: 'Puedes navegar a las pantallas anteriores por medio de la barra de navegación. Al hacer click en el primer link le permitirá ir a la pantalla principal del sistema.',
    nav_create_button: 'Estos botones permiten crear un archivo o subir un archivo ya existente al sistema.',
    nav_file_expl: 'Los archivos creados se encuentran después de los botones de creación de archivos. Al hacer click en uno le permitirá abrir el contenido del archivo en el editor. Los archivos se pueden descargar, editar o eliminar.',
    editor_editor: 'Este es el editor. Una vez que se ingresa al editor, presiona Control + M para permitir el movimiento con la tecla de tabulación. Para crear bloques de navegación se pueden crear comentarios con la estructura: "#B ".',
    editor_run: 'Para ejecutar el programa presione este botón.',
    editor_console: 'Esta es la consola de salida. En la consola se mostrarán los resultados del código escrito, En el caso de algún error, se mostrará el error y la línea en la que se encuentra.',
    editor_end: 'Este es el fin del tour. ¡Diviertete programando!',
  },
  editor: {
    title: 'Archivos',
    upload: 'Cargar un nuevo archivo',
    new_file: 'Crear un nuevo archivo',
    create_file: 'Nuevo archivo creado',
    create_head: 'Crear Archivo',
    file_name: 'Nombre del Archivo',
    update_head: 'Actualizar información del archivo',
    update_message: '¿Está seguro de actualizar la información del archivo con nombre {name}?',
    update_file_success: 'Archivo actualizado exitosamente',
    delete_head: 'Eliminar Archivo',
    delete_message: '¿Está seguro de eliminar el archivo con nombre {name}?',
    share_head: 'Compartir archivo',
    share_message: 'Copia el link para compartir con otras personas: \n',
    copy: 'Copiar',
    run:'Ejecutar el código',
    fejump: 'Saltar al siguiente bloque de código',
    bejump: 'Saltar al anterior bloque de código'
  },
  errors: {
    server_error: 'Error del servidor, intente de nuevo más tarde.',
    email: 'El correo electrónico no es válido',
    login: {
      unauthorized: 'Contraseña incorrecta. intente de nuevo.',
      not_found: 'Usuario no existe.'
    },
    signup: {
      already_exists: 'El nombre de usuario seleccionado ya existe'
    },
    password:{
      not_authorized: 'Antigua contraseña incorrecta'
    },
    generic: {
      not_allowed: 'No permitido',
      unauthorized: 'Sin autorización',
      not_found: 'No encontrado'
    }
  },
  accesibility: {
    skip_content: 'Ir al contenido principal',
    skip_files: 'Ir a los archivos del proyecto',
    skip_editor: 'Ir al editor de código',
  },
  skulpt: {
    name_error: 'NameError - Error de Nombre:\n nombre {var_name} no está definido en la línea {line}',
    attribute_error: 'AttributeError - Error de atributo:\n objeto{var_name} no tiene el atributo {function} en la línea {line}',
    value_error: 'ValueError - Error de Valor:\n {var_name} error de dominio en línea {line}',
    zerodivision_error: 'ZeroDivisionError - Error de División entre cero:\n {var_name} división o módulo entre cero en la línea {line}',
    assertion_error: 'AssertionError - Error de aserción:\n {var_name} en la línea {line}',
    import_error: 'ImportError - Error de Import:\n No existe un módulo llamado {var_name} en la línea {line}',
    index_error: 'IndexError - Error de Indice:\n Indice fuer de rango en la línea {line}',
    key_error: 'KeyError - Error de llave:\n {var_name} en la línea {line}',
    system_exit_error: 'SystemExitError - Error de Salida del Sistema:\n {var_name} en la línea {line}',
    overflow_error: 'OverflowError - Error de Overflow:\n Valor numérico fuera del rango en la línea {line}',
    recursion_error: 'RecursionError - Error de Recursión:\n Se excedió el tamaño máximo de la pila de llamadas en la línea {line}',
    syntax_error: 'SyntaxError - Error de Sintáxis:\n entrada mal planteada en la línea {line}',
    not_implemented_error: 'NotImplementedError - Error, aún no Implementado:\n {var_name} aún no fue implementado en el proyecto en la línea {line}',
  },
  help: {
    homepage: 'Ir a la pantalla principal',
    settings: 'Ir a la pantalla de configuración',
    account: 'Ir a la pantalla de cuenta',
    title: 'Ayuda con los atajos de teclado',
    run_code: 'Ejecutar el código',
    new_file: 'Crear un nuevo archivo',
    new_project: 'Crear un nuevo proyecto',
    save_file: 'Guardar archivo',
    help_title: 'Ayuda del sistema',
    help_intro: 'Introducción',
    help_intro_desc: 'En esta página se presentará la descripción de todos los aspectos funcionales del sistema.',
    help_projects: 'Pantalla de Proyectos',
    help_projects_desc: 'En la Página de Inicio se encuentran los proyectos creados y gestionados por el usuario. La primera opción en esta pantalla es la de creación del proyecto.\n Luego, se encuentran todos los proyectos creados por el usuario de manera secuencial en el orden de creación de los proyectos.',
    help_project_create: 'Creación de Proyectos',
    help_project_create_desc: 'Dentro del modal de creación del proyecto existen dos opciones:\n\t- Subir Carpeta: Permite subir un archivo zip con archivos Python para poder ser accesados y ejecutados dentro del sistema.\n\t- Crear Carpeta Vacía: Para crear una carpeta vacía se pide un nombre y el estado de privacidad para el proyecto.',
    help_project_state: 'Lista de Proyectos',
    help_project_state_desc: 'Cada proyecto muestra los primeros tres archivos dentro de un proyecto. Adenás, se cuentan con las siguientes opciones:\n\t- Edición de proyecto: Dentro de la edición del proyecto se observan las mismas opciones que con la creación de proyectos.\n\t- Descargar el proyecto: Permite descargar un archivo zip con todos los archivos del proyecto.\n\t- Eliminar proyecto: Elimina el proyecto permanentemente del sistema.\n\t- Compartir proyecto: Si el proyecto no es privado, el sistema provee la opción de compartir el proyecto por medio de un link generado por el sistema.',
    help_account: 'Pantalla de datos personales',
    help_account_desc: 'Dentro de la página de mi cuenta se pueden editar los datos personales del usuario. En esta pantalla también se puede cambiar el idioma del sistema.',
    help_settings: 'Pantalla de configuración.',
    help_settings_desc: 'En la pantalla de configuración existen seis opciones muy importantes:\n\t- Modo oscuro: Permite cambiar todo el sistema al modo oscuro.\n\t- Retroalimentación por audio: Activa la retroalimentación por audio de la misma manera que Google Talkback.\n\t- Activar animaciones: Activa las animaciones dentro del sistema.\n\t- Editor de alto contraste: Pone al editor de texto en el modo de alto contraste para mejor lectura.\n\t- Tamaño de letra: Cambia el tamaño de letra que tiene el editor.\n\t- Tipo de letra: Cambia el tipo de letra que tiene el editor.',
    help_editor_title: 'Editor',
    help_editor_desc: 'En la siguiente subsección se presentará la descripción de ayuda para la pantalla del editor.',
    help_editor_creation_files: 'Creación de Archivos',
    help_editor_creation_files_desc: 'Existen dos botónes importantes\n\t- Crear archivo: Permite crear un nuevo archivo en la carpeta abierta. Tiene las mismas opciones que en la creación de un carpeta.\n\t- Subir archivo: Permite subir un archivo Python o un archivo de texto al sistema. Solo se debe seleccionar el archivo y el sistema automáticamente subirá el archivo.',
    help_editor_files: 'Archivos',
    help_editor_files_desc: 'En la sección de archivos, se listan todos los programas creados por Python. Cada archivo tiene las mismas opciones que con los proyectos en la página principal.',
    help_editor_code: 'Editor',
    help_editor_code_desc: 'En el editor existen muchas opciones. A continuación se mostrarán las funciones más importantes del mismo.\n\t- Tab Lock: Para evitar estar permanentemente bloqueado en el editor de texto, se puede presionar CTRL + M para desbloquear el uso de botón de tabulación.\n\t- Tabulación automática: Después crear un bloque de código (condicional, ciclo o función) la tabulación que prosigue es automática.\n\tEjecución: Para la ejecución de código se puede usar el atajo de teclado F4.\n\t- Funciones de accesibilidad: Para accesar a estas funciones presione ALT + F1 y se le presentará un menú con la explicación de ciertas funcionalidades propias del Editor Monaco'
  }
};

const translation = {
  [LOCALES.SPANISH]: flatten(strings)
};

export default translation;