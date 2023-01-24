import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import {projects} from '../components/data';
import { useRouter } from 'next/router';
import { storeSelectedProject, selectProject } from '../components/Redux/Store';
import { useSelector, useDispatch } from 'react-redux';

export default function Projects() {
  const theme = useTheme();
  const router = useRouter();
  const dispatch = useDispatch();

  const card = (x: any) => {
    return (
        <Card sx={{ display: 'flex', width: '800px', margin: '10px', cursor: 'pointer' }} onClick={() => {router.push(`/projects/${x.id}`); dispatch(selectProject(x))}}>
                    <CardMedia
          component="img"
          sx={{ width: 50, height: 50 }}
          image="https://cdn-icons-png.flaticon.com/512/148/148952.png"
          alt="Live from space album cover"
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography >
              {x.description}
            </Typography>
          </CardContent>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography >
              <FavoriteIcon color='error'/>
            </Typography>
          </CardContent>
        </Box>
      </Card>
    )
  }

  const mapCards = () => {
    return projects.map(x =>
        <Box sx={{width: '100%', display: 'flex', justifyContent: 'center'}}>
            {card(x)}
        </Box>
    )
  }

  return (
    <div>
    {mapCards()}
    </div>

  );
}