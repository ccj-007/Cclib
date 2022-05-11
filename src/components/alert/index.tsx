import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useSelector, useDispatch } from "react-redux";
import styles from './index.module.css'
import { setAlerts } from '@/redux/alerts/actions'

export default function Alerts() {
  const store = useSelector((state) => state);
  let { alertsReducers } = store
  const dispatch = useDispatch()

  //watching alert
  function useWatch<T>(dep: T, callback: any) {
    React.useEffect(() => {
      callback();
    }, [dep]);
  }

  useWatch(alertsReducers, () => {
    console.log('currentCount: ', alertsReducers);
    setTimeout(() => {
      dispatch(setAlerts(''))
    }, 1000);
  })

  return (
    <div className={styles.slidebottom} >
      <Stack sx={{ width: '100%' }} spacing={2}>
        {alertsReducers == 'error' &&
          <Alert variant="filled" severity="error">
            失败 ！！
          </Alert>
        }
        {alertsReducers == 'success' &&
          <Alert variant="filled" severity="success">
            成功 ！！
          </Alert>
        }

        {/* <Alert variant="filled" severity="warning">
        This is a warning alert — check it out!
      </Alert>
      <Alert variant="filled" severity="info">
        This is an info alert — check it out!
      </Alert> */}

      </Stack>
    </div >
  );
}