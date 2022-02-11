import { Button, Icon, Stack, Text } from '@chakra-ui/react';
import useCopy from 'hooks/useCopy';
import useProtectPassword from 'hooks/useProtectPassword';
import React from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { RiFileCopyLine } from 'react-icons/ri';

const Password = ({ password }: { password: string }) => {
  const { isProtected, toggleProtection, protectedPassword } = useProtectPassword(password);
  const copyValue = useCopy();

  return (
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
  );
};

export default Password;
