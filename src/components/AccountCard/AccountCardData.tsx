import { Button, Icon, Stack, Text } from '@chakra-ui/react';
import { useCopy, useProtectPassword } from 'hooks';
import React from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { RiFileCopyLine } from 'react-icons/ri';

interface Params {
  title: string;
  username: string;
  password: string;
}

const AccountCardData = ({ title, username, password }: Params) => {
  const { isProtected, toggleProtection, protectedPassword } = useProtectPassword(password);
  const copyValue = useCopy();

  return (
    <>
      <Text variant="title">{title}</Text>
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
        <Text marginBlockStart={isProtected ? 2 : 0}>
          {isProtected ? protectedPassword : password}
        </Text>
        <Stack direction="row" spacing={0}>
          <Button variant="iconButton" onClick={toggleProtection}>
            <Icon as={isProtected ? AiOutlineEye : AiOutlineEyeInvisible} />
          </Button>
          <Button variant="iconButton" onClick={() => copyValue(password)}>
            <Icon as={RiFileCopyLine} />
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default AccountCardData;
