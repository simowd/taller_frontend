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
    logout: 'Cerrar Sesión'
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
    upload_file: 'Actualizar carpeta',
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
    run:'Ejecutar el código'
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
    save_file: 'Guardar archivo'
  }
};

const translation = {
  [LOCALES.SPANISH]: flatten(strings)
};

export default translation;