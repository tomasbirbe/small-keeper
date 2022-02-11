import { Box, FormLabel, Input } from '@chakra-ui/react';
import React from 'react';

interface params {
  value?: string;
  label: string;
  id: string;
  onChange?: (e: any) => void;
  type?: string;
  inputRef?: React.MutableRefObject<any>;
}

const Field = ({
  value = undefined,
  onChange = undefined,
  id,
  label,
  type,
  inputRef = undefined,
}: params) => {
  return (
    <Box>
      <FormLabel fontSize="1.2em" htmlFor={id}>
        {label}
      </FormLabel>
      <Input
        ref={inputRef}
        _focus={{}}
        bg="primaryDarker"
        border="none"
        borderRadius="15px"
        id={id}
        type={type}
        value={value}
        onChange={onChange}
      />
    </Box>
  );
};

export default Field;
