import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { LoginAction } from "../../../store/actions/AuthActions.js";

export default function UserLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const isLogin = () => {
        dispatch(LoginAction(email, password))
    }

    return [setEmail, setPassword, isLogin]
}