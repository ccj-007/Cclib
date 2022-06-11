/**
 * @description 监听数据，执行回调
 */
import React from 'react';
export default function useWatch<T>(dep: T, callback: any) {
  React.useEffect(() => {
    callback();
  }, [dep]);
}
