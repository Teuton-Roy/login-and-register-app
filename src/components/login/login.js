import React, {useState} from "react";
import "./login.css";
import axios from "axios";

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
            <div className="button">Register</div>

        </div>
    );
}

export default Login;