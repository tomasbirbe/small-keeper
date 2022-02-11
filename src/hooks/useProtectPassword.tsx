import React, { useState } from 'react';

function useProtectPassword(password: string) {
  const [isPasswordProtected, setisPasswordProtected] = useState(false);

  const protectedPassword = password.replace(/./gi, '*');

  function toggleProtection() {
    setisPasswordProtected(!isPasswordProtected);
  }

  return { protectedPassword, isProtected: isPasswordProtected, toggleProtection };
}

export { useProtectPassword };
