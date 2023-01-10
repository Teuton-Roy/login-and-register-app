import React, {useState} from "react";
import "./login.css";
import axios from "axios";
//import useHistory react-dom v6//
// import {useHistory} from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {


    //use State//
    const [user, setUser] = useState({
        email:"",
        password:"",
    })

    //handel change//
    const handleChange = (e) => {
        const {name, value} = e.target;
        setUser({
            ...user,
            [name]:value
        })
    }

    //handel submit//
    const login = () => {
        axios.post("http://localhost:5000/login", user)
        .then(res => alert(res.data.message))
    }


    //useHistory//
    const navigate = useNavigate();



    return (
        <div className="login">

            {console.log("User", user)}

            <h1>Login</h1>


            {/* input form for email */}
            {/* <label htmlFor="">Email</label> */}
            <input type="text" placeholder="Enter college your email_id" onChange={handleChange} name="email" value={user.email} />
            
            {/* input form for password  */}
            {/* <label htmlFor="">Password</label> */}
            <input type="password" placeholder="Enter your password" onChange={handleChange} name="password" value={user.password} />


            {/* button for login */}
            <div className="button" onClick={login}>Login</div>
            
            <div>Or</div>

            {/* button for Register */}
            <div className="button" onClick={( () => navigate("/register"))}>Register</div>

        </div>
    );
}

export default Login;


/*
    In react-router-dom v6, useHistory is replaced by useNavigate.
    useNavigate is a hook that returns a function to navigate to a new location.
    It's a replacement for the history object that was passed to components in v5.
    //how to imoprt//
    import { useNavigate } from "react-router-dom";

    //syntax of useNavigate//
    const navigate = useNavigate();
    onclick{(() => navigate("/"))}
*/

