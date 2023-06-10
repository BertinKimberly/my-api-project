import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section className="about" id="about">
        <div className="row">
            <div className="image col">
                <div className="img-cont">
                    <h1>Read the bible</h1>
                    <p><span>On Bertin</span> so as to gain more skills about Jesus Christ</p>
                    <Link to="about" className="hello">More information</Link>
                </div>

       
            </div>
            <div className="about-info col">
                <h1>About Us</h1>
                <p>Bertin is website for Christians.The Christians are able to read the Bible and gain more skills.This website also contain Bibilical questions which the user can answer in order to gain a lot of skills.</p>
                <Link to="services" className="hello">Explore more</Link>
             </div>
        </div>
    </section>
  )
}

export default About
