import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const UpdateNotification = ({ isEdit }: { isEdit: boolean }) => {
  return (
    <Box
      bg="danger"
      borderBottomRadius="15px"
      display="grid"
      height="30px"
      maxWidth="700px"
      placeItems="center"
      position="absolute"
      top={isEdit ? '0' : '-50px'}
      transitionDuration="400ms"
      transitionProperty="all"
      transitionTimingFunction="ease-in-out"
      width="full"
      zIndex={2}
    >
      <Text>Modo edicion</Text>
    </Box>
  );
};

export default UpdateNotification;
