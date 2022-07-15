/* eslint-disable no-unused-vars */
import { Box, Grid, GridItem } from '@chakra-ui/react';
import { SkipNavLink } from '@chakra-ui/skip-nav';
import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import SideBarContainer from './SideBarContainer';
import { stringTranslate } from '../../../i18n';
import useKeypress from 'react-use-keypress';
import { createIntl, createIntlCache } from 'react-intl';
import { LOCALES } from '../../../i18n';
import language_messages from '../../../i18n/messages';
import Joyride, { STATUS } from 'react-joyride';
import userService from '../../../services/user';

const EditorSideBar = () => {
  const [tourState, setTourState] = useState(false);
  const navigate = useNavigate();
  const user = JSON.parse(window.localStorage.getItem('user'));

  let intl;
  const cache = createIntlCache();

  useEffect(() => {
    if (user) {
      if (user.user.tour_editor === 1) {
        setTourState(true);
      }
    }
  }, [user]);

  if (user) {
    intl = createIntl({
      locale: user.locale,
      messages: language_messages[user.locale]
    }, cache);
  }
  else {
    intl = createIntl({
      locale: LOCALES.SPANISH,
      messages: language_messages[LOCALES.SPANISH]
    }, cache);
  }

  useKeypress(['H', 'S', 'C'], () => {
    if (event.shiftKey && event.ctrlKey) {
      if (event.key === 'H') {
        navigate('/s/home');
      }
      if (event.key === 'S') {
        navigate('/s/settings');
      }
      if (event.key === 'C') {
        navigate('/s/account');
      }
    }
  });

  const steps = [
    {
      content: intl.formatMessage({ id: 'tour.welcome_editor' }),
      placement: 'center',
      target: 'body',
      styles: {
        options: {
          zIndex: 10000,
        },
      },
    },
    {
      content: intl.formatMessage({ id: 'tour.nav_editor' }),
      placement: 'right',
      target: '.nav_side_editor',
    },
    {
      content: intl.formatMessage({ id: 'tour.nav_create_button' }),
      placement: 'right',
      target: '.file_creation_editor',
    },
    {
      content: intl.formatMessage({ id: 'tour.nav_file_expl' }),
      placement: 'right',
      target: '.files_editor',
    },
    {
      content: intl.formatMessage({ id: 'tour.editor_editor' }),
      placement: 'right',
      target: '.actual_editor',
    },
    {
      content: intl.formatMessage({ id: 'tour.editor_run' }),
      placement: 'right',
      target: '.editor_run_button',
    },
    {
      content: intl.formatMessage({ id: 'tour.editor_console' }),
      placement: 'left',
      target: '.actual_console',
    },
    {
      content: intl.formatMessage({ id: 'tour.editor_end' }),
      placement: 'center',
      target: 'body',
      styles: {
        options: {
          zIndex: 10000,
        },
      },
    },
  ];

  const locales = {
    back: intl.formatMessage({ id: 'tour.back' }),
    close: intl.formatMessage({ id: 'tour.close' }),
    last: intl.formatMessage({ id: 'tour.last' }),
    next: intl.formatMessage({ id: 'tour.next' }),
    open: intl.formatMessage({ id: 'tour.open' }),
    skip: intl.formatMessage({ id: 'tour.skip' }),
  };

  const handleCallback = async (data) => {
    const { status, type } = data;
    const finishedStatuses = [STATUS.FINISHED, STATUS.SKIPPED];

    if (finishedStatuses.includes(status)) {
      await userService.updateUserInfo({ tour_editor: 0 });

      window.localStorage.setItem('user', JSON.stringify({ ...JSON.parse(window.localStorage.getItem('user')), user: { ...JSON.parse(window.localStorage.getItem('user')).user, tour_editor: 0 } }));

      setTourState(false);
    }
  };

  return (
    <>
      <Joyride showSkipButton continuous run={tourState} steps={steps} callback={handleCallback} locale={locales} />
      <Grid h='100vh' w='100%' templateColumns='72px 1fr'>
        <SkipNavLink> {stringTranslate('accesibility.skip_files')} </SkipNavLink>
        <SkipNavLink id={'skip-editor'}> {stringTranslate('accesibility.skip_editor')} </SkipNavLink>
        <GridItem>
          <SideBarContainer />
        </GridItem>
        <GridItem>
          <Box>
            <Outlet />
          </Box>
        </GridItem>
      </Grid>
    </>
  );
};

export default EditorSideBar;