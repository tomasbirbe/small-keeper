import { Box } from '@chakra-ui/react';
import React from 'react';

const ToastCopy = () => {
  return (
    <Box
      bg="primaryDarker"
      borderRadius="15px"
      paddingBlock={2}
      paddingInline={6}
      textAlign="center"
      width="fit-content"
    >
      Copiado!
    </Box>
  );
};

export default ToastCopy;
