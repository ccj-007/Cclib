import { useState, useEffect, useRef } from 'react';

const useThrottle = (fn: any, wait: number = 1000, deps = []) => {
  let pre: any = useRef(0);
  let [time, setTime] = useState(wait);
  useEffect(() => {
    let now = Date.now();
    if (now - pre.current > time) {
      fn();
      pre.current = now;
    }
  }, deps);

  const cancel = () => {
    setTime(0);
  };

  return [cancel];
};

export default useThrottle;
