import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { stringTranslate } from '../../i18n';

const HelpHomeContent = () => {
  const mystyle = {
    whiteSpace: 'pre-wrap',
  };

  return (
    <Box>
      <Heading as='h1' size={'lg'}> {stringTranslate('help.help_title')} </Heading>
      <Box py={'0.5rem'} />
      <Heading as='h2' size={'md'}> {stringTranslate('help.help_intro')} </Heading>
      <Text style={mystyle}> {stringTranslate('help.help_intro_desc')} </Text>
      <Box py={'0.2rem'} />
      <Heading as='h2' size={'md'}> {stringTranslate('help.help_projects')} </Heading>
      <Text style={mystyle}> {stringTranslate('help.help_projects_desc')} </Text>
      <Box py={'0.2rem'} />
      <Heading as='h2' size={'md'}> {stringTranslate('help.help_project_create')} </Heading>
      <Text style={mystyle}> {stringTranslate('help.help_project_create_desc')} </Text>
      <Box py={'0.2rem'} />
      <Heading as='h2' size={'md'}> {stringTranslate('help.help_project_state')} </Heading>
      <Text style={mystyle}> {stringTranslate('help.help_project_state_desc')} </Text>
      <Box py={'0.2rem'} />
      <Heading as='h2' size={'md'}> {stringTranslate('help.help_account')} </Heading>
      <Text style={mystyle}> {stringTranslate('help.help_account_desc')} </Text>
      <Box py={'0.2rem'} />
      <Heading as='h2' size={'md'}> {stringTranslate('help.help_settings')} </Heading>
      <Text style={mystyle}> {stringTranslate('help.help_settings_desc')} </Text>
      <Box py={'0.2rem'} />
    </Box>
  );
};

export default HelpHomeContent;