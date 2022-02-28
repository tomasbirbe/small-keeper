import { Button, Icon, Stack, Text } from '@chakra-ui/react';
import { useCopy, useProtectPassword } from 'hooks';
import React, { useEffect } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { RiFileCopyLine } from 'react-icons/ri';
import { Entry } from 'types/types';

const AccountCardData = ({ entry, modalIsOpen }: { entry: Entry; modalIsOpen: boolean }) => {
  const { account, user, password } = entry;
  const { isProtected, toggleProtection, protectedPassword } = useProtectPassword(password);
  const copyValue = useCopy();

  useEffect(() => {
    if (!isProtected && !modalIsOpen) {
      toggleProtection();
    }
  }, [isProtected, modalIsOpen, toggleProtection]);

  return (
    <>
      <Text variant="title">{account}</Text>
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
        <Text>{user}</Text>
        <Stack direction="row" spacing={0}>
          <Button variant="iconButton" onClick={() => copyValue(user)}>
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
