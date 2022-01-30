import React from 'react';
import { Stack } from '@chakra-ui/react';

import Home from './components/Home';

export default function App() {
  return (
    <Stack as="main" height="full" spacing="0" width="full">
      <Home />
    </Stack>
  );
}
