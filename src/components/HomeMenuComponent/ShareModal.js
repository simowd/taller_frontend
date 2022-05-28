import { Button, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spacer } from '@chakra-ui/react';
import React, { useState } from 'react';
import { stringTranslate } from '../../i18n';

const ShareModal = ({ isOpen, onClose, folder }) => {
  const [isCopied, setIsCopied] = useState(false);
  const text = `${window.location.origin}/c/project/${folder.id_folder}`;

  async function copyTextToClipboard(text) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  }

  const handleCopyClick = () => {
    copyTextToClipboard(text).then(() => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
        onClose();
      }, 1500);
    })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{stringTranslate('editor.share_head')}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {stringTranslate('editor.share_message')}
          <Spacer />
          <HStack>
            <Input size='md' isReadOnly value={text} />
            <Button isLoading={isCopied} colorScheme='linkedin'  onClick={handleCopyClick} >{stringTranslate('editor.copy')}</Button>
          </HStack>
        </ModalBody>

        <ModalFooter>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ShareModal;