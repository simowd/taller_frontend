import { Flex, Heading, HStack, Icon, IconButton, useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react';
import { RiDeleteBinLine, RiDownload2Line, RiEditLine, RiFileCodeLine } from 'react-icons/ri';
import { useToastHook } from '../../hooks/Toast';
import { stringTranslate } from '../../i18n';
import { downloadFile } from '../../services/file_managment';
import DeleteFileAlert from '../FileSideBar/DeleteFileAlert';
import UpdateFileAlert from '../FileSideBar/UpdateFileAlert';

const FileSpace = ({ file, projectData, setProjectData, setCurrentFile }) => {

  const [loadingD, setLoadingD] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isOpenU, onOpen: onOpenU, onClose: onCloseU } = useDisclosure();
  // eslint-disable-next-line no-unused-vars
  const [state, newToast] = useToastHook();

  const onDownload = async () => {
    try {
      setLoadingD(true);
      await downloadFile(file);
      setLoadingD(false);
    }
    catch (error) {
      setLoadingD(false);
      //Setting up error data
      const error_data = {
        type: 'error',
        status: error.response.status,
        endpoint: 'home'
      };

      newToast(error_data);
    }
  };
  
  const setFile = () => {
    setCurrentFile(file.id_file);
  };

  return (
    <Flex background={'#282C34'} height={'3rem'} width={'100%'} borderRightRadius={'3xl'} mt={'1rem'}>
      <DeleteFileAlert isOpen={isOpen} onClose={onClose} file={file} projectData={projectData} setProjectData={setProjectData} />
      <UpdateFileAlert isOpen={isOpenU} onClose={onCloseU} file={file} projectData={projectData} setProjectData={setProjectData} />
      <HStack pl={'0.5rem'} w={'100%'}>
        <Flex width={'55%'} as={'button'} onClick={setFile}>
          <HStack spacing={1}>
            <Icon color={'white'} as={RiFileCodeLine} w={5} h={5}></Icon>
            <Heading fontWeight={'light'} fontSize={'14'} size={'sm'} color={'white'} noOfLines={1}> {file.file_name} </Heading>
          </HStack>
        </Flex>
        <HStack width={'45%'} spacing={0.2}>
          <IconButton color={'white'} icon={<RiEditLine />} size={'md'} variant={'link'} aria-label={stringTranslate('home.edit')} onClick={onOpenU} />
          <IconButton color={'white'} icon={<RiDownload2Line />} size={'md'} variant={'link'} aria-label={stringTranslate('home.download')} onClick={onDownload} isLoading={loadingD} />
          <IconButton color={'white'} icon={<RiDeleteBinLine />} size={'md'} variant={'link'} aria-label={stringTranslate('home.delete')} onClick={onOpen} />
        </HStack>
      </HStack>
    </Flex>
  );
};

export default FileSpace;