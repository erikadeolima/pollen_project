import React, { useState } from 'react';
import storage from './Context';

function Provider({ children }) {

  const context = {

  };

  return (
    <storage.Provider
      value={context}
    >
      {children}
    </storage.Provider>
  );
};

export default Provider;