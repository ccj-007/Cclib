/**
 * @description  根据state的重复渲染和date的唯一性来实现数据的强制更新
 */

import { useState } from 'react';

const useUpdate = () => {
  let [flag, setFlag] = useState(0);
  const update = () => {
    setFlag(Date.now());
  };
};

export default useUpdate;
