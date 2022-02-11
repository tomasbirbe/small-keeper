import { useToast } from '@chakra-ui/react';
import Toast from 'components/Notifications/Toast';
import React from 'react';

const useCopy = () => {
  const toast = useToast();

  function copyValue(value: string) {
    navigator.clipboard.writeText(value);
    toast({
      duration: 2000,
      position: 'top-right',
      render: () => <Toast msg="Copiado!" />,
    });
  }

  return copyValue;
};

export { useCopy };
