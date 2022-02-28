import { Divider } from '@chakra-ui/react';
import Field from 'components/Modal/ModalForm/Field';
import React, { useEffect } from 'react';
import { Entry } from 'types/types';

interface Params {
  entry: Entry;
  inputRef: any;
}

const UpdateForm = ({ entry, inputRef }: Params) => {
  const { account, user, password } = entry;

  useEffect(() => {
    (document.getElementById('modifyAccount') as HTMLInputElement).value = account;
    (document.getElementById('modifyUser') as HTMLInputElement).value = user;
    (document.getElementById('modifyPassword') as HTMLInputElement).value = password;
  }, [account, user, password]);

  return (
    <>
      <Field id="modifyAccount" inputRef={inputRef} label="Nombre de la cuenta" />
      <Divider />
      <Field id="modifyUser" label="Usuario" />
      <Divider />
      <Field id="modifyPassword" label="Clave" type="password" />
    </>
  );
};

export default UpdateForm;
