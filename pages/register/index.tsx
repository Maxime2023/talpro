import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useRouter } from 'next/router'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
const theme = createTheme({
  palette: {
    mode: 'light',
  },
});

export default function SignUp() {
  const [status, setStatus] = React.useState("Recruteur");
  const router = useRouter()
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  

  const radios = () => {
    return (
      <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Status</FormLabel>
      <RadioGroup sx={{display: 'flex', flexDirection: 'row'}}
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="Recruteur"
        name="radio-buttons-group"
      >
        <FormControlLabel onClick={() => setStatus("Recruteur")} value="Recruteur" defaultChecked={true} control={<Radio />} label="Recruteur" />
        <FormControlLabel onClick={() => setStatus("Candidat")} value="Candidat" control={<Radio />} label="Candidat" />
      </RadioGroup>
    </FormControl>
    )
  }

  const handleclick = () => {
    if(status === "Recruteur"){
      router.push('/projects')
    }
    else{
      router.push('/demands')
    }
  }

  const handleStatus = () => {
    if (status === "Recruteur") {
      return (
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="given-name"
              name="firstName"
              required
              fullWidth
              id="firstName"
              label="Raison sociale"
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
              label="Adresse de la société"
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
              label="Numero de téléphone professionnel"
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
              label="Numero de téléphone personnel"
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
              label="SIRET"
              autoFocus
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="given-name"
              name="firstName"
              fullWidth
              id="firstName"
              label="Lien société (facultatif)"
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
              label="Ma recherche"
              autoFocus
              multiline
              rows={5}
            />
          </Grid>
        </Grid>
      )
    }
    return (
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="given-name"
            name="adresse"
            required
            fullWidth
            id="adresse"
            label="Adresse"
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="given-name"
            name="adresse"
            required
            fullWidth
            id="adresse"
            label="Numéro de téléphone"
            autoFocus
          />
        </Grid>
        </Grid>
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h3" color="#274C77" >
            Inscription
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Nom"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Prénom"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Adresse Email"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Mot de passe"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Confirmer mot de passe"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            {radios()}
            {handleStatus()}
            <Grid container direction="column" justifyContent="center" alignItems="center" textAlign="center">
              <Grid item >
                <Typography component="p" variant="body2" sx={{ mt: 3, mb: 2,p:2}} >En cliquant sur S’inscrire, vous acceptez nos Conditions générales. Découvrez comment nous recueillons, utilisons et partageons vos données en lisant notre Politique de confidentialité et comment nous utilisons les cookies et autres technologies similaires en consultant notre Politique d’utilisation des cookies. Vous recevrez peut-être des notifications par texto de notre part et vous pouvez à tout moment vous désabonner.</Typography>
              </Grid>
            </Grid> 
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2,p:2, backgroundColor: "#274c77" }}
              onClick={handleclick}>
              Valider
            </Button>
            {/* <Grid container direction="column" justifyContent="center" alignItems="center">
              <Grid item>
                <Link href="#" variant="body2" onClick={() => router.push('/login')}>
                  Vous avez deja un compte ? Se connecter
                </Link>
              </Grid>
            </Grid> */}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}