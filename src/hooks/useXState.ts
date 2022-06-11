/**
 *@description setState 的写法可以变为  setState(() => 6, () => { console.log('更新')})  使用场景： cb回调可以监听state的变化，写入业务逻辑
 */
import { useEffect, useRef, useState } from 'react';

const useXState = (initState: any) => {
  const [state, setState] = useState(initState);
  //useRef的作用是完整生命周期的存储，不会像useState重复渲染
  let isUpdate: any = useRef();
  const setXState = (state: any, cb: any) => {
    isUpdate.current = cb;
    setState(state);
  };
  useEffect(() => {
    console.log('我在不断监听');
    if (isUpdate.current) {
      isUpdate.current();
      isUpdate.current = null;
    }
  }, [state]);

  return [state, setXState];
};

export default useXState;
