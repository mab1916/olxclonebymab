import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import UserSignUp from "./UserSignup";
import Dialog from '@material-ui/core/Dialog';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function SignUp() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const [setEmail, setPassword, newSignup] = UserSignUp();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Create Account
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <form className={classes.root} noValidate autoComplete="off">
          <table>
            <tr>
              <td>
                <label>E-mail</label>
              </td>
              <td>
                <TextField
                  required
                  id="outlined-required"
                  type='text'
                  label="E-mail"
                  variant="outlined"
                  placeholder='Enter E-mail'
                  onChange={(e) => setEmail(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Password</label>
              </td>
              <td>
                <TextField
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  variant="outlined"
                  placeholder="Enter Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <Button variant="outlined" color="primary" onClick={newSignup}>
                  Sign up
                </Button>
              </td>
            </tr>
          </table>
        </form>
      </Dialog>
    </div >
  );
}

