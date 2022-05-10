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

export default function Login() {
  const Navigate = useNavigate()
  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: '',
      password: '',
      select: {}
    }
  });
  const onSubmit = (data: any) => {
    console.log(data)
  };
  const jumpHome = () => {
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
              render={({ field }) => <Input {...field} className={styles.input} />}
            />
            <div className='mt10'>
              <Typography variant="h6" component="div" gutterBottom>
                密码
              </Typography>
            </div>
            <Controller
              name="password"
              control={control}
              render={({ field }) => <Input {...field} className={styles.input} />}
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
                  { value: "chocolate", label: "Chocolate" },
                  { value: "strawberry", label: "Strawberry" },
                  { value: "vanilla", label: "Vanilla" }
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
