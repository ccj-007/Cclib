import React from 'react';
export function useWatch<T>(dep: T, callback: any) {
  React.useEffect(() => {
    callback();
  }, [dep]);
}
