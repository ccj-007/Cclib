import React from 'react';
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TransitionProps } from '@mui/material/transitions';
import Slide from '@mui/material/Slide';
import styles from './index.module.css';
import Select from "react-select";
import Input from "@mui/material/Input";
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
import TextField from "@mui/material/TextField";
import { register } from '@/request/api/login'
interface IFormInput {
  password: string;
  username: string;
  nickname: string;
}
//过渡组件
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Register: React.FC<any> = (props) => {
  const [open, setOpen] = React.useState(false);
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<IFormInput>();
  let { registerDialog, close } = props

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    //先校验
    let res = await register(data)
    //检验通过
    if (res.success) {
      setOpen(false);
      close()
    }
    return
  };

  React.useEffect(() => {
    if (registerDialog) {
      setOpen(true)
    }
  }, [registerDialog])


  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    close()
  };

  return (
    <div className='register'>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"注册"}</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.input}>
              <div className='mr20'>头像:</div>
              <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
            </div>
            <div className={styles.input}>
              <div className='mr20'>账号:</div>
              <Controller
                name="username"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    value={field.value}
                    onChange={field.onChange}
                    inputRef={field.ref}
                  />
                )}
                rules={{ required: true }}
              />
            </div>
            <div className={styles.input}>
              <div className='mr20'>密码:</div>
              <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    value={field.value}
                    onChange={field.onChange}
                    inputRef={field.ref}
                  />
                )}
                rules={{ required: true }}
              />
            </div>
            <div className={styles.input}>
              <div className='mr20'>昵称:</div>
              <Controller
                name="nickname"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    value={field.value}
                    onChange={field.onChange}
                    inputRef={field.ref}
                  />
                )}
                rules={{ required: true }}
              />
            </div>

            <input type="submit" className={styles.submit} />
          </form>
        </DialogContent>
      </Dialog>
    </div>

  )
}

export default Register
