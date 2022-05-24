import React, { useEffect, useState, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useToastHook } from '../../hooks/Toast';
import * as Yup from 'yup';
import { stringTranslate, translate } from '../../i18n';
import { Box, Button, Flex, Heading, HStack, Skeleton, StackDivider, useColorModeValue, useDisclosure, VStack } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import InputField from './InputField';
import CountrySelect from './CountrySelect';
import LanguageSelect from './LanguageSelect';
import GenderSelect from './GenderSelect';
import userService from '../../services/user';
import UpdatePassword from './UpdatePassword';
import focusActionble from '../../sounds/focus_actionable.ogg';
import useAccesibleSound from '../../hooks/Sound';
import windowState from '../../sounds/window_state.ogg';

const UserInformation = () => {
  const user = useSelector(state => state.user);
  const [userData, setUserData] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  // eslint-disable-next-line no-unused-vars
  const [state, newToast] = useToastHook();
  const dispatch = useDispatch();
  const [playSound] = useAccesibleSound(focusActionble);
  const [playSoundState] = useAccesibleSound(windowState);
  

  useEffect(() => {
    if (user) {
      const getData = async () => {
        const response = await userService.getUserInfo(user.user_id);
        setUserData(response.data);
      };
      getData();
    }
  }, [user]);

  const onSubmit = async (values, actions) => {
    try {
      const updateData = {
        language_id_language: values.language, country_id_country: values.country,
        gender_id_gender: values.gender,
        name: values.name,
        last_name: values.last_name,
        email: values.email,
      };

      await userService.updateUserInfo(updateData);
      await dispatch({
        type: 'CHANGE_LOCALE',
        data: values.language,
      });

      window.localStorage.setItem('user', JSON.stringify({...JSON.parse(window.localStorage.getItem('user')), locale: values.language}));

      playSoundState();

      //success message
      const success = {
        type: 'success',
        endpoint: 'account'
      };
      newToast(success);
    }
    catch (error) {
      //Setting up error data
      const error_data = {
        type: 'error',
        status: error.response.status,
        endpoint: 'signup'
      };
      newToast(error_data);

    }
    //Reset Form
    actions.setSubmitting(false);
  };

  const buildForm = () => {
    if (userData) {
      return (
        <Flex px={'7rem'} pt={'4rem'} justify={'center'} alignItems={'stretch'}>
          <UpdatePassword isOpen={isOpen} onClose={onClose}/>
          <Formik initialValues={{
            name: userData.name || '',
            last_name: userData.last_name || '',
            username: userData.username,
            email: userData.email,
            country: userData.country_id_country.toLowerCase(),
            language: userData.language_id_language.toLowerCase(),
            gender: userData.gender_id_gender
          }}
          validationSchema={yup_sign_up}
          onSubmit={onSubmit}
          >
            {(props) => {
              return (
                <Form>
                  <HStack w={'100%'} h={'100%'} divider={<StackDivider borderColor='gray.200' />} spacing={6} justifyContent={'center'} alignItems={'flex-start'}>
                    <Box h='100%' w={'50%'} display={'flex'} alignItems={'flex-start'} flexDirection={'column'}>
                      <Field name='username'>
                        {({ field, form }) => (
                          <InputField isDisabled={true} field={field} form={form} name={'username'} />
                        )}
                      </Field>
                      <Box py={'0.2rem'}></Box>
                      <Field name='name'>
                        {({ field, form }) => (
                          <InputField field={field} form={form} name={'name'} />
                        )}
                      </Field>
                      <Box py={'0.2rem'}></Box>
                      <Field name='last_name'>
                        {({ field, form }) => (
                          <InputField field={field} form={form} name={'last_name'} />
                        )}
                      </Field>
                      <Box py={'0.2rem'}></Box>
                      <Field name='email'>
                        {({ field, form }) => (
                          <InputField field={field} form={form} name={'email'} />
                        )}
                      </Field>
                    </Box>
                    <Box h='100%' w={'50%'} display={'flex'} alignItems={'flex-start'} flexDirection={'column'}>
                      <Box py={'0.2rem'}></Box>
                      <Field name='country' >
                        {({ field, form }) => (
                          <CountrySelect field={field} form={form} />
                        )}
                      </Field>
                      <Box py={'0.2rem'}></Box>
                      <Field name='language'>
                        {({ field, form }) => (
                          <LanguageSelect field={field} form={form} />
                        )}
                      </Field>
                      <Box py={'0.2rem'}></Box>
                      <Field name='gender'>
                        {({ field, form }) => (
                          <GenderSelect field={field} form={form} />
                        )}
                      </Field>
                      <Box py={'0.2rem'}></Box>
                      <Flex justifyContent={'space-around'} pt={'2rem'} width='100%'>
                        <Button onFocus={() => playSound()} colorScheme={'gray'} isLoading={props.isSubmitting} loadingText={stringTranslate('auth.loading')} type='submit' size={'md'}>
                          {translate('forms.update')}
                        </Button>
                        <Button onFocus={() => playSound()} colorScheme={'gray'} onClick={onOpen} size={'md'}>
                          {translate('forms.change_password')}
                        </Button>
                      </Flex>
                    </Box>
                  </HStack>
                </Form>
              );
            }}
          </Formik>

        </Flex>
      );
    }
  };

  const buildLoad = () => {
    return (
      <Flex px={'7rem'} pt={'4rem'} justify={'center'} alignItems={'stretch'} height={'100%'} width={'100%'}>
        <VStack>
          <Skeleton height={'20px'} width={'100%'} />
          <Skeleton height={'20px'} width={'100%'} />
          <Skeleton height={'20px'} width={'100%'} />
          <Skeleton height={'20px'} width={'100%'} />
        </VStack>
      </Flex>
    );
  };

  //Setting up yup schema
  const yup_sign_up = Yup.object({
    name: Yup.string().max(50, stringTranslate('forms.max_length', { length: 50 })),
    last_name: Yup.string().max(50, stringTranslate('forms.max_length', { length: 50 })),
    username: Yup.string().max(50, stringTranslate('forms.max_length', { length: 50 })),
    email: Yup.string().email(stringTranslate('forms.email')).max(100, stringTranslate('forms.max_length', { length: 100 })),
    password: Yup.string().max(255, stringTranslate('forms.max_length', { length: 255 })),
    gender: Yup.mixed(),
    country: Yup.mixed(),
    language: Yup.mixed(),
  });

  return (
    <Flex background={useColorModeValue('white', '35343F')} px={'5rem'} pb={'8rem'} pt={'5rem'} boxShadow='sm' borderRadius={'xl'} m={'5rem'} flexDirection={'column'}>
      <Flex justifyContent={'center'}>
        <Heading >
          {stringTranslate('account.my_account').toUpperCase()}
        </Heading>
      </Flex>
      {user && userData ? buildForm() : buildLoad()}
    </ Flex>
  );

};

export default UserInformation;