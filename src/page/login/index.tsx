import React from 'react';
import styles from './index.module.css';
import Card from '@mui/material/Card';
import Select from "react-select";
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from "react-hook-form";
import Input from "@mui/material/Input";
import Typography from '@mui/material/Typography';
import Button, { ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { grey } from '@mui/material/colors';
import styled from '@mui/material/styles/styled';
import { login } from '@/request/api/login'
import Alerts from '@/components/alert'
import { useSelector, useDispatch } from "react-redux";
import { setAlerts } from '@/redux/alerts/actions'
import { LoginInfoCreator } from '@/redux/loginInfo/actions'
import Storage from '@/utils/localStoage';

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: '#000',
  width: '100%',
  marginTop: '10px',
  backgroundColor: grey[200],
  '&:hover': {
    backgroundColor: grey[700],
    color: '#fff',
  },
}));

type storeType = {
  alertsReducers: string,
  count: number
}
export default function Login() {
  const Navigate = useNavigate()
  const store = useSelector((state) => state);
  const dispatch = useDispatch()

  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: '',
      password: '',
      select: {}
    }
  });

  React.useEffect(() => {
    Storage.remove('token')
  }, [])

  const onSubmit = async (data: any) => {
    let { username, password } = data
    //@ts-ignore
    let res = await dispatch(LoginInfoCreator({ username: username, password: password }))
    res.data.token && Storage.set('token', res.data.token)
    if (res.success) {
      dispatch(setAlerts({ type: 'success', content: '恭喜你，登录成功 ！！！' }))
      Navigate('/home/first')
    } else {
      dispatch(setAlerts({ type: 'error', content: '你的账号和密码存在错误 ！！！' }))
    }
  };
  const jumpHome = async () => {
    dispatch(setAlerts({ type: 'success', content: '恭喜你，登录成功 ！！！' }))
    Navigate('/home/first')
  }

  return (
    <div className={styles.wrap}>
      <Card sx={{ maxWidth: 600, maxHeight: 600 }}>
        <div className={styles.box} >
          <div className={styles.bg} >
            <div className={styles.bgTitle}>CCLIB</div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='mt10'>
              <Typography variant="h6" component="div" gutterBottom>
                账号
              </Typography>
            </div>
            <Controller
              name="username"
              control={control}
              render={({ field }) => <Input placeholder='输入您的账号' {...field} className={styles.input} />}
            />
            <div className='mt10'>
              <Typography variant="h6" component="div" gutterBottom>
                密码
              </Typography>
            </div>
            <Controller
              name="password"
              control={control}
              render={({ field }) => <Input placeholder='输入您的密码' {...field} className={styles.input} />}
            />

            <div className='mt10'>
              <Typography variant="h6" component="div" gutterBottom>
                账号配置
              </Typography>
            </div>
            <Controller
              name="select"
              control={control}
              render={({ field }) => <Select
                {...field}
                options={[
                  { value: "管理员权限", label: "管理员权限" },
                  { value: "默认权限", label: "默认权限" },
                  { value: "测试模式", label: "测试模式" }
                ]}
              />}
            />
            <input type="submit" className={styles.btn} />

            <Stack spacing={2} direction="row">
              <ColorButton variant="contained" onClick={jumpHome}>游客登录</ColorButton>
            </Stack>
            <Stack spacing={2} direction="row">
              <ColorButton variant="contained">立即注册</ColorButton>
            </Stack>
            <Stack spacing={2} direction="row">
              <ColorButton variant="contained">访问github</ColorButton>
            </Stack>
          </form>
        </div>
      </Card>
    </div>
  );
}
