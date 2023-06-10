import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
   <section  className="header" id='header'>
              <div className='header-content'>
            <h1>Matthew 11:28-30</h1>
            <p>28 “Come to me, all you who are weary and burdened, and I will give you rest. 29 Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls. 30 For my yoke is easy and my burden is light.”</p>
            <Link to="header" className="hello">Welcome</Link>
        </div>
   </section>
  )
}

export default Header
