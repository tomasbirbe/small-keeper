import { Box, Text } from '@chakra-ui/react';
import React from 'react';

interface Params {
  isVisible: boolean;
  message: string;
}

const Notification = ({ isVisible, message }: Params) => {
  return (
    <Box
      bg="danger"
      borderBottomRadius="15px"
      display="grid"
      height="30px"
      maxWidth="700px"
      placeItems="center"
      position="absolute"
      top={isVisible ? '0' : '-50px'}
      transitionDuration="400ms"
      transitionProperty="all"
      transitionTimingFunction="ease-in-out"
      width="full"
      zIndex={2}
    >
      <Text>{message}</Text>
    </Box>
  );
};

export default Notification;
