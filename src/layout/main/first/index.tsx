import * as React from 'react';
import styled from '@mui/material/styles/styled';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import styles from './index.module.css';
import Skeleton from '@mui/material/Skeleton';
import { Bar } from '@antv/g2plot';
import { Column } from '@antv/g2plot';
import columnData from './columnData'
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
// @ts-ignore
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export default function First() {
  const [load, setLoad] = React.useState(false)
  const renderBar = () => {
    const data = [
      { year: '1951 年', value: 38 },
      { year: '1952 年', value: 52 },
      { year: '1956 年', value: 61 },
      { year: '1957 年', value: 145 },
      { year: '1958 年', value: 48 },
    ];

    const bar = new Bar('main_bar', {
      data,
      xField: 'value',
      yField: 'year',
      seriesField: 'year',
      legend: {
        position: 'top-left',
      },
    });
    bar.render();
  }
  const renderColumn = () => {
    const column = new Column('main_column', {
      data: columnData,
      xField: 'city',
      yField: 'value',
      seriesField: 'type',
      isGroup: true,
      columnStyle: {
        radius: [20, 20, 0, 0],
      },
    });

    column.render();
  }

  React.useEffect(() => {
    setTimeout(() => {
      setLoad(true)
    }, 2000);
  }, [])

  React.useEffect(() => {
    if (load) {
      renderBar()
      renderColumn()
    }
  }, [load])
  return (
    <div className={styles.box}>
      <Grid container spacing={2} columns={{ xs: 12, sm: 12, md: 12 }}>
        <Grid item xs={12} sm={6} md={4}>
          <Item className={`${styles.topBox} ${styles.grey}`}>
            {
              load ?
                <div>
                  <Typography variant="subtitle1" component="div">
                    网站访问量
                  </Typography>
                  <Divider light />
                  <Typography variant="h6" component="div" gutterBottom className={styles.subTitle}>
                    $20,0000 <CloudUploadIcon className='ml20'></CloudUploadIcon>
                  </Typography>
                </div>
                :
                <div>
                  <Skeleton />
                  <Skeleton animation="wave" />
                  <Skeleton animation={false} />
                </div>
            }
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Item className={`${styles.topBox} ${styles.grey}`} >
            {
              load ?
                <div>
                  <Typography variant="subtitle1" component="div">
                    模型下载量
                  </Typography>
                  <Divider light />
                  <Typography variant="h6" component="div" gutterBottom className={styles.subTitle}>
                    $20,0000 <CloudUploadIcon className='ml20'></CloudUploadIcon>
                  </Typography>
                </div>
                :
                <div>
                  <Skeleton />
                  <Skeleton animation="wave" />
                  <Skeleton animation={false} />
                </div>
            }
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Item className={`${styles.topBox} ${styles.grey}`}>
            {
              load ?
                <div>
                  <Typography variant="subtitle1" component="div">
                    成交总额
                  </Typography>
                  <Divider light />
                  <Typography variant="h6" component="div" gutterBottom className={styles.subTitle}>
                    $20,0000 <CloudUploadIcon className='ml20'></CloudUploadIcon>
                  </Typography>
                </div>
                :
                <div>
                  <Skeleton />
                  <Skeleton animation="wave" />
                  <Skeleton animation={false} />
                </div>
            }
          </Item>
        </Grid>

        {/* 最大的盒子 */}
        <Grid item xs={12} sm={12} md={8}>
          <Item className={`${styles.bottomBox} ${styles.grey}`}>
            <div id="main_column" style={{ display: load ? 'block' : 'none' }} />
            <div style={{ display: load ? 'none' : 'block' }} >
              <Skeleton />
              <Skeleton animation="wave" />
              <Skeleton animation={false} />
            </div>
          </Item>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Item className={`${styles.bottomBox} ${styles.grey}`}>
            <div id="main_bar" style={{ display: load ? 'block' : 'none' }} />
            <div style={{ display: load ? 'none' : 'block' }} >
              <Skeleton />
              <Skeleton animation="wave" />
              <Skeleton animation={false} />
            </div>
          </Item>
        </Grid>
      </Grid>
    </div >
  );
}
