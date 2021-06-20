import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import UserLogin from './UserLogin';
import SignUp from '../signup/Signup';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function SellLogin() {
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();
    const [setEmail, setPassword, isLogin] = UserLogin();
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button style={{borderRadius: '50px', padding: '12px 25px', border: 'Solid 6px'}} variant="outlined" color="secondary" onClick={handleClickOpen}>
                +SELL
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
                                <Button variant="outlined" color="primary" autoFocus onClick={isLogin}>
                                    Log in
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                OR
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <SignUp />
                            </td>
                        </tr>
                    </table>
                </form>
            </Dialog>
        </div >
    );
}
