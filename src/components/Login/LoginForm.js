import React from 'react';
import { useFormik } from 'formik';
import { Button, Input } from '@chakra-ui/react';
import { yup_login } from '../../utils/yup_schemas';

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: yup_login
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor='username'>Username: </label>
      <Input
        id='username'
        name='username'
        type='username'
        onChange={formik.handleChange}
        value={formik.values.username}
      />

      <label htmlFor='password'>Password: </label>
      <Input
        id='password'
        name='password'
        type='password'
        onChange={formik.handleChange}
        value={formik.values.password}
      />

      <Button type='submit'>Submit</Button>
    </form>
  );
};

export default LoginForm;