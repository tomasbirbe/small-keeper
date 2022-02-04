import { Box } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

const Modal = ({
  children,
  isOpen,
  zIndex,
}: {
  children: ReactNode[] | ReactNode;
  isOpen: boolean;
  zIndex?: string;
}) => {
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
      zIndex={zIndex}
    >
      {children}
    </Box>
  );
};

export default Modal;
