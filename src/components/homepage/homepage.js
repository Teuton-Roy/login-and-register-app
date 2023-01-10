import React from 'react'
import "./homepage.css"

const Homepage = () => {
    return (
        <div className="mar">
            <marquee direction="lr"><a href="https://www.nitjsr.ac.in">Wellcome to NIT Jamshedpur</a></marquee>

            <div className="homepage">
                <h2>Wellcome to your account</h2>
                <div className="button">
                    Logout
                </div>
            </div>
        </div>
        // <marquee behavior="alternate"direction="ltr">copyright@ Teuton Roy</marquee>
        // <marquee>tjnjng</marquee>
    )
}

export default Homepage;
