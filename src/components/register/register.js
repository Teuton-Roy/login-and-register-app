import React , {useState} from "react";
import "./register.css";

const Register = () => {

    //use state//
    const [user, setUser] = useState({
        Name:" ",
        email:" ",
        password:" ",
        reEnterPassword:" "
    })


    //handle change//
    const handleChange = (e) => {
        const {name, value} = e.target;
        setUser({
            ...user, 
            [name]:value
        })
    }




    return (
        <div className="register">

            {/* {console.log("User", user)} */}

            <h1>SignUp</h1>
  

            {/* input form for name */}
            <input type="text" placeholder="Your name" onChange = {handleChange}  name="Name" value={user.Name}/>
            

            {/* input form for email */}
            <input type="text" placeholder="Your Email" onChange = {handleChange}  name="email" value={user.email}/>


            {/* input form for password  */}
            {/* <label htmlFor="">Password</label> */}
            <input type="password" placeholder="Your password" onChange = {handleChange}  name="password" value={user.password} />

            <input type="password" placeholder="Re-enter Password" onChange = {handleChange}  name="reEnterPassword" value={user.reEnterPassword}/>


            {/* button for login */}
            <div className="button">Signup</div>
            
            <div>Or</div>

            {/* button for Register */}
            <div className="button">Login</div>

        </div>
    );
}

export default Register;
