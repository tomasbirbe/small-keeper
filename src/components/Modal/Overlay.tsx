import { Box } from '@chakra-ui/react';
import React from 'react';

const Overlay = ({ hideModal }: { hideModal: () => void }) => {
  return (
    <Box height="100%" left="0" position="absolute" width="100%" zIndex={1} onClick={hideModal} />
  );
};

export default Overlay;
