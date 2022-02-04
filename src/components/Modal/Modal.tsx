import { Box } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

const Modal = ({ children, isOpen }: { children: ReactNode[] | ReactNode; isOpen: boolean }) => {
  return (
    <Box
      display="grid"
      height="100%"
      isolation="isolate"
      left="0"
      placeItems="center"
      position="absolute"
      visibility={isOpen ? 'visible' : 'hidden'}
      width="100%"
    >
      <Box height="full" maxWidth="700px" width="full">
        {children}
      </Box>
    </Box>
  );
};

export default Modal;
