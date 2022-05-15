import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.css'
import { experimentalStyled as styled } from '@mui/material/styles';
import MainHeader from '../../components/mainHeader'

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useSelector, useDispatch } from "react-redux";
import { increment, IINCREMENTAction } from '@/redux/count/actions'
import { req_suModelList } from '@/request/api/suModel'


interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

// @ts-ignore
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  boxShadow: 'none'
}));

type ModelType = {
  mid: string,
  modelname: string,
  mimg: string,
  loadUrl: string,
  detail: string
}

export default function ModelLibs() {
  const [modelList, setModelList] = React.useState([]);

  React.useEffect(() => {
    getModelList()
  }, [])

  const getModelList = async () => {
    let { data } = await req_suModelList()
    setModelList(data)
  }

  return (
    <Box>
      <div>
        <MainHeader ></MainHeader>
      </div>
      <Grid container spacing={{ xs: 0, md: 0 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {modelList.map((data: ModelType, index) => (
          <Grid item xs={2} sm={4} md={3} key={index}>
            <Item>
              <Card sx={{ maxWidth: 345 }} className={styles.pos}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={data.mimg}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {data.modelname}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {data.detail}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <a download href={data.loadUrl} className={styles.load}></a>
                  <Button size="small" color="primary">
                    下载  downLoad....
                  </Button>
                </CardActions>
              </Card>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}