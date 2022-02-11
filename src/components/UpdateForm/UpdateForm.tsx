import { Divider } from '@chakra-ui/react';
import Field from 'components/Modal/ModalForm/Field';
import React, { useEffect } from 'react';

interface Params {
  accountName: string;
  username: string;
  password: string;
  inputRef: any;
}

const UpdateForm = ({ accountName, username, password, inputRef }: Params) => {
  useEffect(() => {
    (document.getElementById('modifyAccountName') as HTMLInputElement).value = accountName;
    (document.getElementById('modifyUser') as HTMLInputElement).value = username;
    (document.getElementById('modifyPassword') as HTMLInputElement).value = password;
  }, [accountName, username, password]);

  // useEffect(() => {
  //   console.log('hola');
  //   (document.getElementById('modifyAccountName') as HTMLInputElement).focus();
  // }, []);

  return (
    <>
      <Field id="modifyAccountName" inputRef={inputRef} label="Nombre de la cuenta" />
      <Divider />
      <Field id="modifyUser" label="Usuario" />
      <Divider />
      <Field id="modifyPassword" label="Clave" type="password" />
    </>
  );
};

export default UpdateForm;
