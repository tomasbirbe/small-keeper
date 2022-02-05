import { Stack, Box, FormLabel, Input, Divider, Button } from '@chakra-ui/react';
import React from 'react';

interface params {
  children: React.ReactNode;
  isEdit: boolean;
  onSubmit: (e: any) => void;
}

const UpdateForm = ({ children, isEdit, onSubmit }: params) => {
  return (
    <Stack
      as="form"
      bg="secondary"
      borderRadius="15px"
      // bottom={isEdit ? '0' : '0'}
      boxShadow="0px 1.1px 3.5px rgba(0, 0, 0, 0.051),
      0px 2.7px 8.3px rgba(41, 36, 36, 0.073),
      0px 5px 15.7px rgba(0, 0, 0, 0.09),
      0px 8.9px 27.9px rgba(0, 0, 0, 0.107),
      0px 16.7px 52.2px rgba(0, 0, 0, 0.129),
      0px 40px 125px rgba(0, 0, 0, 0.18)"
      height="550px"
      id="updateForm"
      justify="space-around"
      maxWidth="400px"
      minWidth="300px"
      opacity={isEdit ? '1' : '0'}
      paddingBlock={5}
      paddingInline={8}
      position="relative"
      // transition="all 1000ms cubic-bezier(.43,0,0,1.24)"
      transition="all 200ms ease-in-out"
      width="90%"
      onSubmit={(e) => onSubmit(e)}
    >
      {children}
    </Stack>
  );
};

export default UpdateForm;
