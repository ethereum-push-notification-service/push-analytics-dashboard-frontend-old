import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Paper,
  Grid,
  TextField,
  IconButton,
  InputAdornment,
  OutlinedInput,
  InputLabel,
  FormControl,
  Button,
  Typography,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useData } from '../../contexts/DataContext';
import { ROUTES, CREDENTIALS } from '../../utils/constants';

const Login = () => {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useData();
  const [values, setValues] = React.useState({
    username: '',
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const Login = (e) => {
    e.preventDefault();
    const { username, password } = e.target.elements;
    if (username.value === CREDENTIALS.USERNAME && password.value === CREDENTIALS.PASSWORD) {
      setIsLoggedIn(true);
      localStorage.setItem('userLogin', true);
      navigate(ROUTES.HOME);
    } else {
      setValues({ username: '', password: '' });
      alert('Please enter correct Username and Password');
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Paper>
        <Typography variant="h4" textAlign={'center'} mt={3}>
          Sign In
        </Typography>
        <form onSubmit={Login}>
          <Grid container spacing={2} direction={'column'} justify={'center'} alignItems={'center'} padding={5}>
            <Grid item xs={12} lg={6} md={6}>
              <TextField
                id="outlined-basic"
                name="username"
                value={values.username}
                onChange={handleChange('username')}
                label="Username"
                variant="outlined"
                style={{ width: 257 }}
              />
            </Grid>
            <Grid item xs={12} lg={6} md={6}>
              <FormControl sx={{ m: 1 }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>

                <OutlinedInput
                  id="outlined-adornment-password"
                  name="password"
                  type={values.showPassword ? 'text' : 'password'}
                  value={values.password}
                  onChange={handleChange('password')}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} lg={6} md={6}>
              <Button variant="outlined" type="submit">
                Sign In
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default Login;
