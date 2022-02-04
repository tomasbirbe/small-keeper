import { Stack } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

const AccountCard = ({
  children,
  isEntryDataOpen,
}: {
  children: ReactNode;
  isEntryDataOpen: boolean;
}) => {
  return (
    <Stack
      as="form"
      background="secondary"
      borderTopRadius="30px"
      bottom={isEntryDataOpen ? '0' : '-350px'}
      height="350px"
      justify="space-between"
      maxWidth="700px"
      paddingBlock={5}
      paddingInline={10}
      position="absolute"
      spacing={0}
      transitionDuration="400ms"
      transitionProperty="all"
      transitionTimingFunction="ease-in-out"
      width="100%"
      zIndex={2}
    >
      {children}
    </Stack>
  );
};

export default AccountCard;
