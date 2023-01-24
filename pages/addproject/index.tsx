import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Container } from '@mui/material';
import TextField from '@mui/material/TextField';
import {projects} from '../components/data';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useRouter } from 'next/router';
import { storeSelectedProject, selectProject } from '../components/Redux/Store';
import { useSelector, useDispatch } from 'react-redux';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

export default function Projects() {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

  const theme = useTheme();
  const router = useRouter();
  const dispatch = useDispatch();
  const [skills, setSkills] = React.useState([])

  const deleteSkill = (skill) => {
    let tmp = [...skills]
        const index = tmp.indexOf(skill);
        if (index > -1) { 
        tmp.splice(index, 1);
        }
        setSkills(tmp)
  }

  const addSkill = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      skill: data.get('skill'),
    });
    let tmp = [...skills]
    tmp.push(data.get('skill'))
    setSkills(tmp)
  };

  const mapSkills = () => {
    return skills.map((x, i) =>
        <Grid item xs={2} sm={4} md={4} key={i} sx={{display: "flex", justifiyContent: 'center', alignItem: 'center'}}>
        <Item sx={{display: "flex", justifiyContent: 'center', alignItem: 'center'}}>{x}<DeleteIcon onClick={() => deleteSkill(x)}/></Item>
      </Grid>
    )
  }

  return (
    <Container component="main" maxWidth="xs">
        
                <Box
          sx={{
            height: "100vh",
            justifyContent: "center",
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
                  <Typography component="h1" variant="h5">
            Ajouter un projet
          </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="given-name"
              name="firstName"
              required
              fullWidth
              id="firstName"
              label="Nom du projet"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="given-name"
              name="firstName"
              required
              fullWidth
              id="firstName"
              label="Description du projet"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
          <Box component="form" noValidate onSubmit={addSkill} sx={{ mt: 1 }}>
             <TextField
                id="standard-name"
                label="Ajouter une compétence"
                name="skill"
                InputProps={{endAdornment: <Button  type="submit"><AddCircleIcon /></Button> }}
            />
            </Box>
          </Grid>




  
        </Grid>
        <Box sx={{ flexGrow: 1, marginTop: 2, marginBottom: 2 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
  {mapSkills()}
      </Grid>
      <Box sx={{ flexGrow: 1, marginTop: 2, marginBottom: 2 }}/>
      <Button variant='contained'>
        Créer le projet
      </Button>
    </Box>
    </Box>
        </Container>

  );
}