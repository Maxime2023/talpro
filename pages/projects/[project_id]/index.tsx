import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { projects } from "../../components/data";
import {
  storeSelectedProject,
  selectProject,
  changeFavorites,
  storefavorites,
} from "../../components/Redux/Store";
import { useSelector, useDispatch } from "react-redux";
import Container from "@mui/material/Container";
import { Button, Link, Modal } from "@mui/material";
import hands from "../../../public/hands.png";
import FavoriteIcon from "@mui/icons-material/Favorite";

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
  textAlign: 'center',
};


export default function Projects() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const project = useSelector(storeSelectedProject);
  const favorites = useSelector(storefavorites);
  const addToFavorites = () => {
    let tmp = [...favorites];
    tmp.push(project);
    dispatch(changeFavorites(project));
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const mapConpetences = () => {
    console.log(project.competences);
    return project.competences.map((x) => (
    <Box sx={{ width: "100%", display: "flex" , pb:1}}>
        {x}
      </Box>
    ));
  };

  
  return (
    <div >
      <div style={{textAlign: "center"}}>
      <Typography
        component="h1"
        variant="h3"
        color="#274C77"
        textAlign="center">
        Détail du projets
      </Typography>

      <img style={{ width: "100px", height: "80px" }} src={hands.src} />
      <Typography component="p" variant="h6" color="#274C77" textAlign="center">
        Projet 1
      </Typography>
      </div>
      <Container maxWidth="sm">
        <Box
          sx={{
            bgcolor: "white",
            height: "50vh",
            borderRadius: "20px",
            padding: "30px",
            marginTop: "20px",
            backgroundColor: "whitesmoke",
          }}
        >
          <Box sx={{ margin: "20px" }}>
            <h3>Description du projet </h3>
            {project.description}
          </Box>
          <Box sx={{ margin: "20px" }}>
            <h3>Compétences associées</h3>
            {mapConpetences()}
          </Box>
          <Link sx={{ margin: "20px" }}>Lien du projet : www.google.com</Link>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            mt: 2,
            mb: 3,
          }}
        >
          <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Information
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Etes-vous sûr de vouloir contacter le candidat ?
          </Typography>
          <Button variant="contained" style={{backgroundColor: '#274c77', marginTop: '30px'}}>Suivant</Button>
        </Box>
      </Modal>
          <Button
            type="submit"
            variant="contained"
            sx={{ mb: 2, p: 2, backgroundColor: "#274c77" }}
            onClick={() => setOpen(true)}
          >
            Contacter le candidat
          </Button>
          <Typography>
            <FavoriteIcon color="error" fontSize="large" />
          </Typography>
        </Box>
      </Container>
    </div>
  );
}
