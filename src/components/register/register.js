import React , {useState} from "react";
import "./register.css";
//API Call package//
import axios from "axios";
//import useNavigate//
import { useNavigate } from "react-router-dom";

const Register = () => {

    //use state//
    const [user, setUser] = useState({
        Name:"",
        email:"",
        password:"",
        reEnterPassword:""
    })


    //handle change//
    const handleChange = (e) => {
        const {name, value} = e.target;
        setUser({
            ...user, 
            [name]:value
        })
    }

    //handle submit//
    const signup = () => {
        // e.preventDefault();
        const {Name, email, password,reEnterPassword} = user
        if(Name && email && password && (password === reEnterPassword)){
            axios.post("http://localhost:5000/signup", user)
            // alert("posted")
            .then(res => {
                alert(res.data.message)
                // setLoginUser(res.data.user)
                navigate("/login")
            })
        }
        else{
            alert("Invalid!")
        }
    }

    //useNavigate//
    const navigate = useNavigate();

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
            <div className="button" onClick={signup}>Signup</div>
            
            <div>Or</div>

            {/* button for Register */}
            <div className="button" onClick={(() => navigate("/login"))}>Login</div>

        </div>
    );
}

export default Register;
