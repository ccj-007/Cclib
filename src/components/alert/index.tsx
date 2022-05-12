import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useSelector, useDispatch } from "react-redux";
import styles from './index.module.css'
import { setAlerts } from '@/redux/alerts/actions'
import { clearTimeout } from 'timers';
import { useWatch } from '@/hooks/useWatch'

export default function Alerts() {
  const store = useSelector((state) => state);
  let { type, content } = store.alertsReducers
  const dispatch = useDispatch()

  // //watching alert
  useWatch(type, () => {
    const changeAlert = () => {
      setTimeout(() => {
        dispatch(setAlerts({ type: '', content: '' }))
      }, 1000);
    }
    if (type) {
      changeAlert()
    }
  })

  return (
    <div className={styles.slidebottom} style={{ top: type ? '2%' : '0%' }}>
      <Stack sx={{ width: '100%' }} spacing={2}>
        {
          <Alert variant="filled" severity={type}>
            {content}
          </Alert>
        }
      </Stack>
    </div >
  );
}