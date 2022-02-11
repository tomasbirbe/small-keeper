import { useToast } from '@chakra-ui/react';
import ToastCopy from 'components/Notifications/ToastCopy';
import React from 'react';

const useCopy = () => {
  const toast = useToast();

  function copyValue(value: string) {
    navigator.clipboard.writeText(value);
    toast({
      duration: 2000,
      position: 'top-right',
      render: () => <ToastCopy />,
    });
  }

  return copyValue;
};

export default useCopy;
