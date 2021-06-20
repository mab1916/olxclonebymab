import { LOGIN, LOGOUT } from '../types/type';
import { auth, db } from '../../config/firebase';

// Login
export const LoginAction = (email, password) => async(dispatch) => {
    try {
        const userCredential = await auth.signInWithEmailAndPassword(email, password);
        var user = userCredential.user;
        console.log('user', user.uid);
        dispatch({
            type: LOGIN,
            payload: user
        })
    } catch (error) {
        alert(JSON.stringify(error));
        console.log("error", error);
    }
}

// Logout
export const LogoutAction = () => async(dispatch) => {
    try {
        const out = await auth.signOut();
        console.log('user', out);
        dispatch({
            type: LOGOUT
        })
    } catch (error) {
        alert(JSON.stringify(error));
        console.log("error", error);
    }
}

// SignUp
export const SignUpAction = (user) => async(dispatch) => {
    try {
        const userCredential = await auth.createUserWithEmailAndPassword(user.email, user.password);
        var newUser = userCredential.user;
        await db.collection('users').add({
            ...user,
            uid: newUser.uid
        })
        dispatch({
            type: LOGIN,
            payload: newUser
        });
    } catch (error) {
        alert(JSON.stringify(error));
        console.log("error", error);
    }
}