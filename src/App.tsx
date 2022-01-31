import React from 'react';
import { Box } from '@chakra-ui/react';

import Home from './components/Home';

export default function App() {
  return (
    <Box as="main" display="grid" height="full" overflow="hidden" placeItems="center" width="full">
      <Home />
    </Box>
  );
}
