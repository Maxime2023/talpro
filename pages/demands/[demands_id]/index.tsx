import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import DeleteIcon from '@mui/icons-material/Delete';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useRouter } from 'next/router'
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { demandsFake } from '../../components/data';
import hands from '../../../public/hands.png'
import Modal from '@mui/material/Modal';
import { storeRecruiter, changeRecruiter } from '../../components/Redux/Store';
import { useSelector, useDispatch } from 'react-redux';

const theme = createTheme();


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius: '20px',
    boxShadow: 24,
    p: 4,
  };

export default function SignInSide() {
    const dispatch = useDispatch()
    const recruiter = useSelector(storeRecruiter)
  const router = useRouter()
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const[demands, setDemands] = React.useState(demandsFake)

  const selectRecruiter = (x) => {
    dispatch(changeRecruiter(x))
    router.push(`/demands/${x.id}`)
  }

  const card = (x) => {
        return (
            <Card sx={{ display: 'flex', marginTop: '20px' }}>
                <CardMedia
                 onClick={() => selectRecruiter(x)}
                component="img"
                sx={{ width: 50, height: 50, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                image={hands.src}
                alt="hand"
              />
              
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1, justifyContent:"end" }}>
                  <IconButton aria-label="previous">
                  <DeleteIcon color='error' onClick={()=> setOpen(true)}/>
                  </IconButton> 
                  <IconButton aria-label="play/pause">
                    <DoneAllIcon color='success' onClick={()=> setOpen(true)}/>
                  </IconButton>
                </Box>
                <CardContent sx={{ flex: '1 0 auto' }} onClick={() => selectRecruiter(x)}>
                  <Typography component="div">
                    {x.message}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                  {x.societyName}
                  </Typography>
                </CardContent>
              </Box>

            </Card>
        )
  }

  const mapDemands = () => {
    return demands.map(x =>
        card(x)
        )
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img style={{width: "100px", height: "100px"}} src={hands.src}/>
            <Typography sx={{ margin: "20px" }} variant="h5" color="#274c77" component="div">
                  {recruiter.societyName}
                  </Typography>
            <Box sx={{backgroundColor: "whitesmoke", width: "100%", height: "300px", padding: "20px", borderRadius: "20px"}}>
            <Typography sx={{ margin: "20px" }}>
              <span style={{color: "#274c77"}}>Nom du recruteur : </span> {recruiter.recruiterName}
            </Typography>
            <Typography sx={{ margin: "20px" }}>
            <span style={{color: "#274c77"}}> Nom de la soci??t?? : </span> {recruiter.societyName}
            </Typography>
            <Typography sx={{ margin: "20px" }}>
            <span style={{color: "#274c77"}}> Ville : </span> {recruiter.city}
            </Typography>
            <Typography sx={{ml:"20px" }}>
            <span style={{color: "#274c77"}}> Description du projet </span>
            </Typography>
            <Typography sx={{ml:"20px", mb: "20px", mt:"5px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing el lorem ipsum dolor sit amet, consectetur
            </Typography>
            <Link sx={{ margin: "20px" }}>
              Lien : {recruiter.link}
            </Link>
            </Box>
            <Box sx={{ display: 'flex', pl: 1, pb: 1, m:2 }}>
            <Button
              type="submit" 
              variant="contained"
              sx={{ m:2,p:2, backgroundColor: "#274c77" }}
              >
              Accepter
            </Button>
            <Button
              type="submit"
              variant="contained"
              sx={{ m: 2,p:2, backgroundColor: "red" }}
              >
              refuser
            </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}