import { Divider, Text } from '@chakra-ui/react';
import Field from 'components/Modal/ModalForm/Field';
import React from 'react';

const CreateEntryForm = ({ account }: { account: string }) => {
  return (
    <>
      <Text fontSize="1.4em">{account}</Text>
      <Divider />
      <Field id="newUser" label="Usuario" />
      <Field id="newPassword" label="Clave" type="password" />
    </>
  );
};

export default CreateEntryForm;
