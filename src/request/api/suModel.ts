import request from '../axios.ts';

export const req_suModelList = () => {
  return request.get('/api/suModel/list');
};
