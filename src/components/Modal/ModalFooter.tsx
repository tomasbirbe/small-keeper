import { Stack, Button } from '@chakra-ui/react';
import React from 'react';

interface Params {
  primaryAction?: () => void;
  secondaryAction?: () => void;
}

const ModalFooter = ({ primaryAction, secondaryAction }: Params) => {
  return (
    <>
      <Stack flexDirection="row" justify="space-between" spacing={0}>
        <Button variant="secondaryAction" onClick={primaryAction}>
          Cancelar
        </Button>
        <Button form="createForm" type="submit" variant="primaryAction" onClick={secondaryAction}>
          Guardar
        </Button>
      </Stack>
    </>
  );
};

export default ModalFooter;
