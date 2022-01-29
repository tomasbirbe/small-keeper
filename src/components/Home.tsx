import { ListItem, Stack, Text, UnorderedList } from '@chakra-ui/react';
import React from 'react';

export default function Home() {
  return (
    <Stack as="section">
      <UnorderedList listStyleType={'none'}>
        <ListItem>
          <Text>Hola!</Text>
        </ListItem>
      </UnorderedList>
    </Stack>
  );
}
