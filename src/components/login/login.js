import React, {useState} from "react";
import "./login.css";

const Login = () => {


    //use State//
    const [user, setUser] = useState({
        email:" ",
        password:" ",
    })

    //handel change//
    const handleChange = (e) => {
        const {name, value} = e.target;
        setUser({
            ...user,
            [name]:value
        })
    }







    return (
        <div className="login">

            {/* {console.log("User", user)} */}

            <h1>Login</h1>


            {/* input form for email */}
            {/* <label htmlFor="">Email</label> */}
            <input type="text" placeholder="Enter your Email" onChange={handleChange} name="email" value={user.email} />
            
            {/* input form for password  */}
            {/* <label htmlFor="">Password</label> */}
            <input type="password" placeholder="Enter your password" onChange={handleChange} name="password" value={user.password} />


            {/* button for login */}
            <div className="button">Login</div>
            
            <div>Or</div>

            {/* button for Register */}
            <div className="button">Register</div>

        </div>
    );
}

export default Login;