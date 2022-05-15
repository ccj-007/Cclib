import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './index.module.css'
import { experimentalStyled as styled } from '@mui/material/styles';
import MainHeader from '../../components/mainHeader'

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import loginBgImg from '@/static/loginBg.jpg'

import { useSelector, useDispatch } from "react-redux";
import { increment, IINCREMENTAction } from '@/redux/count/actions'
import { getNetSiteCodeLinkList } from '@/request/api/code'

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

// @ts-ignore
const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
  // @ts-ignore
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

// @ts-ignore
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  boxShadow: 'none'
}));

type codeType = {
  detail: string,
  link: string,
  linkSum: number,
  netId: number,
  title: string,
  type: 'code' | 'design' | 'amuse',
  expanded: boolean,
  imgUrl: string
}

export default function Code() {
  const countState = useSelector((state) => state);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [linkList, setLinkList] = React.useState([]);
  React.useEffect(() => {
    const init = async () => {
      const res = await getNetSiteCodeLinkList()
      let getCodes = res.data.filter((item: codeType) => item.type === 'code')
      getCodes.forEach((codeLink: { expanded: boolean }) => { codeLink.expanded = false })
      setLinkList(getCodes) //filter out the type of code module
    }
    init()
  }, [])
  const handleExpandClick = (index: number) => {
    let linkCopy = JSON.parse(JSON.stringify(linkList))
    linkCopy[index].expanded = !linkCopy[index].expanded
    setLinkList(linkCopy);
  };

  //click on the jump code modules
  const jumpCodeSite = (url: any) => {
    window.open(url)
  }
  const incrementClick = () => {
    dispatch(increment())
  }

  return (
    <Box>
      <div>
        <MainHeader ></MainHeader>
      </div>
      <Grid container spacing={{ xs: 0, md: 0 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {linkList.map((link: codeType, index) => (
          <Grid item xs={2} sm={4} md={3} key={index}>
            <Item>
              <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      R
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={link.title}
                  subheader="September 14, 2016"
                />
                <CardMedia
                  component="img"
                  height="124"
                  image={link.imgUrl}
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    <div className={style.text}>{link.detail}</div>
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon onClick={() => { jumpCodeSite(link.link) }} />
                  </IconButton>
                  <ExpandMore
                    expand={link.expanded}
                    onClick={() => handleExpandClick(index)}
                    aria-expanded={link.expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>
                <Collapse in={link.expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph> {link.detail}</Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}