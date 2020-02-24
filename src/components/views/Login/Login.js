import React from 'react';
import styles from './Login.module.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Login = () => {
  return (
    <form noValidate autoComplete="off" className={styles.component}>
      <TextField required id="standard-required" label="Login" defaultValue="" />
      <TextField
        id="standard-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        required
      />
      <Button variant="contained" className={styles.buttom}>LOGIN</Button>
    </form>
  );
};

export default Login;
