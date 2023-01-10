import React from 'react'
import "./homepage.css"

const Homepage = ({setLoginUser}) => {

    return (

        <div className="mar">
            <marquee direction="lr"><a href="https://www.nitjsr.ac.in">Wellcome to NIT Jamshedpur</a></marquee>

            <div className="homepage">
                <h2>Wellcome to your account</h2>
                <div className="button" onClick={() => setLoginUser({})}>Logout</div>
            </div>

        </div>
    )
}

export default Homepage;
