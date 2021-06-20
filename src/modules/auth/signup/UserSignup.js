import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SignUpAction } from "../../../store/actions/AuthActions.js";

export default function UserSignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const newSignup = () => {
        let user = {
            email, 
            password
        }
        dispatch(SignUpAction(user));
    }

    return [setEmail, setPassword, newSignup];
}