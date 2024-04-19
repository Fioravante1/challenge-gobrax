import React, { useState } from 'react';
import Context from './Context';

function Provider({ children }) {
  const [checkedId, setChecked] = useState(null);
  const [tabIndex, setTabIndex] = useState(0);


  return (
    <Context.Provider value={{ checkedId, setChecked, tabIndex, setTabIndex }}>
      {children}
    </Context.Provider>
  )
}

export default Provider