import { Stack, Button, Icon, Text, useToast } from '@chakra-ui/react';
import ToastCopy from 'components/Notifications/ToastCopy';
import React from 'react';
import { RiFileCopyLine } from 'react-icons/ri';

const User = ({ username }: { username: string }) => {
  const toast = useToast;

  function copyValue(value: string) {
    navigator.clipboard.writeText(value);
    toast({
      duration: 2000,
      position: 'top-right',
      render: () => <ToastCopy />,
    });
  }

  return (
    <>
      <Stack
        align="center"
        bg="primaryDarker"
        borderRadius="15px"
        direction="row"
        justify="space-between"
        paddingBlock={2}
        paddingInline={4}
        spacing={0}
      >
        <Text>{username}</Text>
        <Stack direction="row" spacing={0}>
          <Button variant="iconButton" onClick={() => copyValue(username)}>
            <Icon as={RiFileCopyLine} />
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default User;
