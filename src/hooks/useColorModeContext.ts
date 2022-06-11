/**
 * 切换主题
 */
import React from 'react';
const useColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

export default useColorModeContext;
