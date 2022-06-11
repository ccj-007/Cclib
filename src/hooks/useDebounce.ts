import { useEffect, useRef } from 'react';

const useDebounce = (fn: any, wait: number = 1000, deps = []) => {
  let timeout: any = useRef(null);
  useEffect(() => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    timeout.current = setTimeout(() => {
      fn();
    }, wait);
  }, deps);

  //返回一个取消防抖的api
  const cancel = () => {
    clearTimeout(timeout.current);
    timeout = null;
  };

  return [cancel];
};

export default useDebounce;
