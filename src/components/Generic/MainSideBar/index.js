/* eslint-disable no-unused-vars */
import { Grid, GridItem } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import useKeypress from 'react-use-keypress';
import SideBarContainer from './SideBarContainer';
import { createIntl, createIntlCache } from 'react-intl';
import { LOCALES } from '../../../i18n';
import language_messages from '../../../i18n/messages';
import Joyride, { STATUS } from 'react-joyride';
import userService from '../../../services/user';

const MainSideBar = () => {

  const [tourState, setTourState] = useState(false);
  const navigate = useNavigate();
  const user = JSON.parse(window.localStorage.getItem('user'));

  let intl;
  const cache = createIntlCache();

  useEffect(() => {
    if (user) {
      if (user.user.tour_home === 1) {
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
      content: intl.formatMessage({ id: 'tour.welcome' }),
      placement: 'center',
      target: 'body',
      styles: {
        options: {
          zIndex: 10000,
        },
      },
    },
    {
      content: intl.formatMessage({ id: 'tour.main' }),
      placement: 'bottom',
      target: '.main_content_projects',
    },
    {
      content: intl.formatMessage({ id: 'tour.create_project' }),
      placement: 'bottom',
      target: '.create_project',
    },
    {
      content: intl.formatMessage({ id: 'tour.project_expl' }),
      placement: 'bottom',
      target: '.project_move',
    },
    {
      content: intl.formatMessage({ id: 'tour.project_opt' }),
      placement: 'left',
      target: '.project_options',
    },
    {
      content: intl.formatMessage({ id: 'tour.side_bar' }),
      placement: 'right',
      target: '.side_bar',
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
      await userService.updateUserInfo({ tour_home: 0 });

      window.localStorage.setItem('user', JSON.stringify({ ...JSON.parse(window.localStorage.getItem('user')), user: { ...JSON.parse(window.localStorage.getItem('user')).user, tour_home: 0 } }));

      setTourState(false);
    }
  };

  return (<>
    <Joyride showSkipButton continuous run={tourState} steps={steps} callback={handleCallback} locale={locales} />
    <Grid h='100vh' w='100%' templateColumns='15rem 1fr' >
      <GridItem>
        <SideBarContainer />
      </GridItem>
      <GridItem>
        <Outlet />
      </GridItem>
    </Grid>
  </>);
};

export default MainSideBar;