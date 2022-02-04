import { Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { entry } from 'types/types';

interface entryState {
  entry: entry | undefined;
  setEntry: React.Dispatch<entry>;
}

interface params {
  entryState: entryState;
}

const Title = ({ entryState }: params) => {
  const { entry } = entryState;

  return (
    <Stack align="center" flexDirection="row" justify="space-between" spacing={0}>
      <Text
        _disabled={{}}
        bg="transparent"
        border="none"
        fontSize="1.2em"
        padding="0"
        textAlign="center"
        transition="all 400ms ease-in-out"
        value={entry?.name}
        width="full"
      >
        {entry?.name}
      </Text>
    </Stack>
  );
};

export default Title;
