import { Box, FormLabel, Input } from '@chakra-ui/react';
import React from 'react';

interface params {
  value?: string;
  label: string;
  id: string;
  onChange?: (e: any) => void;
}

const Field = ({ value = undefined, onChange = undefined, id, label, ...props }: params) => {
  return (
    <Box>
      <FormLabel fontSize="1.2em" htmlFor={id}>
        {label}
      </FormLabel>
      <Input
        _focus={{}}
        bg="primaryDarker"
        border="none"
        borderRadius="15px"
        id={id}
        value={value}
        onChange={onChange}
        {...props}
      />
    </Box>
  );
};

export default Field;
