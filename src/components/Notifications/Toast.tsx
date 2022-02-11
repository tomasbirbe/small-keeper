import { Box } from '@chakra-ui/react';
import React from 'react';

const Toast = ({ msg }: { msg: string }) => {
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

export default Toast;
