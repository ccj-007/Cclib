import React from 'react';
import styles from './index.module.css';
import Card from '@mui/material/Card';
import { css, jsx } from '@emotion/react';
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
import Register from './register'

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
  const store: any = useSelector((state) => state);
  const dispatch = useDispatch()
  const color = store.themeReducers.primary.main || '#fff'
  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: '',
      password: '',
      select: {}
    }
  });
  const [openRegisterDialog, setOpenRegisterDialog] = React.useState(false);


  React.useEffect(() => {
    Storage.remove('token')
  }, [])

  const LoginWarpCSS = css`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${color};
`;

  const onSubmit = async (data: any) => {
    let { username, password } = data
    //@ts-ignore
    let res = await dispatch(LoginInfoCreator({ username: username, password: password }))
    res.data && res.data.token && Storage.set('token', res.data.token)
    if (res.success === true) {
      handleStatusTips('success', '???????????????????????? ?????????')
      Navigate('/home/first')
    }
    if (res.success === false) {
      handleStatusTips('error', '????????????????????????????????? ?????????')
    }
    if (res.code === 'ERR_NETWORK') {
      handleStatusTips('error', '????????????')
    }
  };
  const handleStatusTips = (type: 'error' | 'success', content: string) => {
    dispatch(setAlerts({ type, content }))
  }

  const jumpHome = async () => {
    dispatch(setAlerts({ type: 'success', content: '???????????????????????? ?????????' }))
    Navigate('/home/first')
  }
  const jumpGithub = () => {
    window.open("https://github.com/ccj-007")
  }

  //??????????????????
  const handleClickOpenRegister = () => {
    setOpenRegisterDialog(true)
  }
  //??????????????????
  const closeClickOpenRegister = () => {
    setOpenRegisterDialog(false)
  }

  return (
    <div css={LoginWarpCSS}>
      <Card >
        <Register registerDialog={openRegisterDialog} close={closeClickOpenRegister}></Register>
        <div className={styles.box} >
          <div className={styles.bg} >
            <div className={styles['bg-title-left']}>CCLIB</div>
            <div className={styles['bg-title-right']}>??????????????????</div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='mt10'>
              <Typography variant="h6" component="div" gutterBottom>
                ??????
              </Typography>
            </div>
            <Controller
              name="username"
              control={control}
              render={({ field }) => <Input placeholder='??????????????????' {...field} className={styles.input} />}
            />
            <div className='mt10'>
              <Typography variant="h6" component="div" gutterBottom>
                ??????
              </Typography>
            </div>
            <Controller
              name="password"
              control={control}
              render={({ field }) => <Input type="password" placeholder='??????????????????' {...field} className={styles.input} />}
            />
            <div className='mt10'>
              <Typography variant="h6" component="div" gutterBottom>
                ????????????
              </Typography>
            </div>
            <Controller
              name="select"
              control={control}
              render={({ field }) => <Select
                {...field}
                options={[
                  { value: "???????????????", label: "???????????????" },
                  { value: "????????????", label: "????????????" },
                  { value: "????????????", label: "????????????" }
                ]}
              />}
            />
            <input type="submit" className={styles.btn} />

            <Stack spacing={2} direction="row">
              <ColorButton variant="contained" onClick={jumpHome}>????????????</ColorButton>
            </Stack>
            <Stack spacing={2} direction="row">
              <ColorButton variant="contained" onClick={handleClickOpenRegister}>????????????</ColorButton>
            </Stack>
            <Stack spacing={2} direction="row">
              <ColorButton variant="contained" onClick={jumpGithub}>github</ColorButton>
            </Stack>
          </form>
        </div>
      </Card>


      {/* ???????????? */}
      <a href='https://beian.miit.gov.cn/' className={styles['beian-info']} target="_blank">??????ICP???2022014585???-1???</a>
    </div>
  );
}
