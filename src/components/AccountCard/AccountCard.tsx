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
      bottom="-350px"
      boxShadow="
      0px 0px 0.9px -12px rgba(0, 0, 0, 0.138),
      0px 0px 2.2px -12px rgba(0, 0, 0, 0.198),
      0px 0px 4.1px -12px rgba(0, 0, 0, 0.245),
      0px 0px 7.4px -12px rgba(0, 0, 0, 0.292),
      0px 0px 13.8px -12px rgba(0, 0, 0, 0.352),
      0px 0px 33px -12px rgba(0, 0, 0, 0.49)"
      height="350px"
      justify="space-between"
      maxWidth="700px"
      paddingBlockEnd={5}
      paddingBlockStart={4}
      paddingInline={8}
      position="absolute"
      spacing={0}
      transform="auto"
      transitionDuration="400ms"
      transitionProperty="all"
      transitionTimingFunction="ease-in-out"
      translateY={isEntryDataOpen ? '-350px' : '0'}
      width="100%"
      zIndex={2}
    >
      {children}
    </Stack>
  );
};

export default AccountCard;
