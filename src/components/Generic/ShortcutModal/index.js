import { Kbd, List, ListItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react';
import React from 'react';
import { stringTranslate } from '../../../i18n';

const ShortcutModal = ({ isOpen, onClose }) => {

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{stringTranslate('help.title')}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <List>
            <ListItem>
              <Kbd>Ctrl</Kbd> + <Kbd>Shift</Kbd> + <Kbd>H</Kbd> - {stringTranslate('help.homepage')}
            </ListItem>
            <ListItem>
              <Kbd>Ctrl</Kbd> + <Kbd>Shift</Kbd> + <Kbd>S</Kbd> - {stringTranslate('help.settings')}
            </ListItem>
            <ListItem>
              <Kbd>Ctrl</Kbd> + <Kbd>Shift</Kbd> + <Kbd>C</Kbd> - {stringTranslate('help.account')}
            </ListItem>
            <ListItem>
              <Kbd>Ctrl</Kbd> + <Kbd>P</Kbd> + <Kbd>C</Kbd> - {stringTranslate('help.new_file')}
            </ListItem>
            <ListItem>
              <Kbd>Ctrl</Kbd> + <Kbd>S</Kbd> - {stringTranslate('help.save_file')}
            </ListItem>
            <ListItem>
              <Kbd>F4</Kbd> - {stringTranslate('help.run_code')}
            </ListItem>
          </List>
        </ModalBody>
        <ModalFooter>

        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ShortcutModal;