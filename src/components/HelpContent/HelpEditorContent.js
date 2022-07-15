import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { stringTranslate } from '../../i18n';

const HelpEditorContent = () => {
  const mystyle = {
    whiteSpace: 'pre-wrap',
  };

  return (
    <Box>
      <Heading as='h2' size={'md'}> {stringTranslate('help.help_editor_title')} </Heading>
      <Text style={mystyle}> {stringTranslate('help.help_editor_desc')} </Text>
      <Box py={'0.2rem'} />
      <Heading as='h2' size={'md'}> {stringTranslate('help.help_editor_creation_files')} </Heading>
      <Text style={mystyle}> {stringTranslate('help.help_editor_creation_files_desc')} </Text>
      <Box py={'0.2rem'} />
      <Heading as='h2' size={'md'}> {stringTranslate('help.help_editor_files')} </Heading>
      <Text style={mystyle}> {stringTranslate('help.help_editor_files_desc')} </Text>
      <Box py={'0.2rem'} />
      <Heading as='h2' size={'md'}> {stringTranslate('help.help_editor_code')} </Heading>
      <Text style={mystyle}> {stringTranslate('help.help_editor_code_desc')} </Text>
    </Box>
  );
};

export default HelpEditorContent;