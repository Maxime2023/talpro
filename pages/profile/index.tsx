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
const theme = createTheme();

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
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel onClick={() => setStatus("Recruteur")} value="Recruteur" defaultChecked={true} control={<Radio />} label="Recruteur" />
        <FormControlLabel onClick={() => setStatus("Candidat")} value="male" control={<Radio />} label="Candidat" />
      </RadioGroup>
    </FormControl>
    )
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
              label="Addresse de la soci??t??"
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
              label="Numero de t??l??phone professionnel"
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
              label="Numero de t??l??phone personnel"
              autoFocus
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
            name="addresse"
            required
            fullWidth
            id="addresse"
            label="addresse"
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="given-name"
            name="addresse"
            required
            fullWidth
            id="addresse"
            label="Num??ro de t??l??phone"
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
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Mon profile
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
             
                  fullWidth
                  id="firstName"
                  label="Solano"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
          
                  fullWidth
                  id="lastName"
                  label="Louis"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
             
                  fullWidth
                  id="email"
                  label="2 rue de paris"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
             
                  fullWidth
                  name="password"
                  label="06.10.03.35.31"
                
                  id="password"
                  autoComplete="new-password"
                />
                   </Grid>
                   <Grid item xs={12}>
                                <TextField
             
             fullWidth
             name="password"
             label="email@gmail.com"
         
             id="password"
             autoComplete="new-password"
           />
           </Grid>

              
            </Grid>

 
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}