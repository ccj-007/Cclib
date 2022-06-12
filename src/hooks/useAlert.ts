/**
 * alert hooks
 */
import React from 'react';
import { useDispatch } from 'react-redux';
import { setAlerts } from '@/redux/alerts/actions';

const useAlert = () => {
  const dispatch = useDispatch();
  return (type: 'error' | 'success', content: string) => {
    dispatch(setAlerts({ type, content }));
  };
};

export default useAlert;
