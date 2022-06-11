/**
 * @description 有状态的函数、useEffect的组件卸载，ref容器， 用于监听动态的scroll事件
 */
import React from 'react';

const useScroll = (scrollRef: any) => {
  const [pos, setPos] = React.useState([0, 0]);

  React.useEffect(() => {
    function handleScroll(e: any) {
      setPos([scrollRef.current.scrollLeft, scrollRef.current.scrollTop]);
    }
    scrollRef.current.addEventListener('scroll', handleScroll, false);

    //卸载状态
    return () => {
      scrollRef.current.removeEventListener('scroll', handleScroll, false);
    };
  }, []);

  return pos;
};

export default useScroll;
