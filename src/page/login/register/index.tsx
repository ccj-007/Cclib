import React from 'react';
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TransitionProps } from '@mui/material/transitions';
import Slide from '@mui/material/Slide';
import styles from './index.module.css';
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
import TextField from "@mui/material/TextField";
import { useAlert } from '@/hooks'
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
  let alert = useAlert()
  let { registerDialog, close } = props
  const [open, setOpen] = React.useState(false);
  const [check, setCheck] = React.useState(false);
  const {
    handleSubmit,
    control,
    watch,
    trigger,
    formState: { errors },
    reset,
    getFieldState,
    setError
  } = useForm<IFormInput>({
    defaultValues: {
      password: "",
      username: "",
      nickname: "",
    }
  });

  //watch input
  const watchAllFields = watch();
  const watchFields = watch(["nickname", "username", "password"]);
  React.useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      //异步获取最新状态
      setTimeout(async () => {
        //检查是否校验通过
        const result = await trigger()
        setCheck(result)
      }, 0);
    });
    return () => subscription.unsubscribe();
  }, [watch]);


  //成功校验后submit
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setCheck(true)
    //先校验
    let res = await register(data)
    //检验通过
    if (res.success) {
      setOpen(false);
      close()
    }
    reset()
    return
  };

  //监听父组件的打开dialog事件
  React.useEffect(() => {
    if (registerDialog) {
      reset()
      setOpen(true)
    }
  }, [registerDialog])

  //失去焦点后校验密码input
  const handlePasswordBlur = () => {
    const fieldState: any = getFieldState('password');
    let type = fieldState?.error?.type
    if (type === 'minLength') {
      alert('error', '不能小于6位数')
    }
    if (type === 'maxLength') {
      alert('error', '不能大于11位数')
    }
    console.log("当前input最新状态", fieldState);
  }

  //打开或关闭dialog
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    reset()
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
                    required
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
                    required
                    type="password"
                    className={styles.input_text}
                    value={field.value}
                    onChange={field.onChange}
                    inputRef={field.ref}
                    onBlur={handlePasswordBlur}
                  />
                )}
                rules={{ required: true, minLength: 6, maxLength: 11 }}
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
                    required
                    value={field.value}
                    onChange={field.onChange}
                    inputRef={field.ref}
                  />
                )}
                rules={{ required: true }}
              />
            </div>
            <input type="submit" className={check ? `${styles.submit}` : `${styles.submit} ${styles.submit_error}`} />
          </form>
        </DialogContent>
      </Dialog>
    </div>

  )
}

export default Register
