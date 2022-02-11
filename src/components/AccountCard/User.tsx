import { Stack, Button, Icon, Text } from '@chakra-ui/react';
import useCopy from 'hooks/useCopy';
import React from 'react';
import { RiFileCopyLine } from 'react-icons/ri';

const User = ({ username }: { username: string }) => {
  const copyValue = useCopy();

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
