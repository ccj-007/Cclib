/**
 * alert
 */
import React from 'react';
import { useDispatch } from 'react-redux';
import { setAlerts } from '@/redux/alerts/actions';

const useAlert = () => {
  return (type: 'error' | 'success', content: string) => {
    const dispatch = useDispatch();
    dispatch(setAlerts({ type, content }));
  };
};

export default useAlert;
