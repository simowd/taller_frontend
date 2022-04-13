import * as Yup from 'yup';

const yup_login = Yup.object({
  username: Yup.string().max(50, 'must be 50 characters or less').required('Required'),
  password: Yup.string().required('Required'),
});

export { yup_login };