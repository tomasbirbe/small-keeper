import { Divider, Text } from '@chakra-ui/react';
import Field from 'components/ModalForm/Field';
import React from 'react';

const CreateEntryForm = ({ title }: { title: string }) => {
  return (
    <>
      <Text fontSize="1.4em">{title}</Text>
      <Divider />
      <Field id="newUser" label="Usuario" />
      <Field id="newPassword" label="Clave" type="password" />
    </>
  );
};

export default CreateEntryForm;
