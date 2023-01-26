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
import {projects} from '../../components/data';
import { storeSelectedProject, selectProject, changeFavorites, storefavorites } from '../../components/Redux/Store';
import { useSelector, useDispatch } from 'react-redux';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';

export default function Projects() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const project = useSelector(storeSelectedProject)
  const favorites = useSelector(storefavorites)
  const addToFavorites = () => {
    let tmp = [...favorites];
    tmp.push(project)
    dispatch(changeFavorites(project))
  }

  const mapConpetences = () => {
    console.log(project.competences)
    return project.competences.map(x =>
        <Box sx={{width: '100%', display: 'flex', justifyContent: 'center'}}>
            {x}
        </Box>
    )
  }

  return (
    <div>
            <Container maxWidth="sm">
        <Box sx={{ bgcolor: 'white', height: '100vh', borderRadius: '20px', padding: '30px', marginTop: '20px', backgroundColor: 'whitesmoke' }}>
        <Box sx={{ margin: '20px' }}>
        <h2>Description :</h2>
          {project.description}
        </Box>
        <Box sx={{ margin: '20px' }}>
        <h2>Compétences :</h2>
          {mapConpetences()}
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Button variant="contained" onclick={() => addToFavorites()}>Ajouter aux favoris</Button>
        </Box>

        </Box>
      </Container>
    </div>

  );
}