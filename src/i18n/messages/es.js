import { LOCALES } from '../constants';
import flatten from 'flat';

const strings = {
  username: 'Nombre de Usuario',
  password: 'Contraseña',
  navbar: {
    closeNavbar: 'Cerrar el Menú de Navegación',
    openNavbar: 'Abrir el Menú de Navegación',
    login: 'Iniciar Sesión',
    signup: 'Registro'
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
    upload_file: 'Actualizar carpeta'
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
    email: 'Tiene que ser un correo electrónico',
    repeat_password: 'Las contraseñas tienen que coincidir',
    cancel: 'Cancelar',
    delete: 'Eliminar',
    update: 'Actualizar',
    repeated: 'El nuevo nombre no puede ser el antiguo nombre',
    create: 'Crear',
    existed: 'Contenido ya existe',
    change_password: 'Cambiar contraseña',
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
  }
};

const translation = {
  [LOCALES.SPANISH]: flatten(strings)
};

export default translation;