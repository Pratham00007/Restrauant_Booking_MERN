import React, { useState } from 'react'
import {Link} from "react-scroll";
import {GiHamburgerMenu} from "react-icons/gi";
import {data} from "../restApi.json";
const Navbar = () => {
    const [show,setShow]=useState(false);

  return (
    <nav>
      <div className="logo">ResuuuDaDhaba</div>
      <div className={show? "navLinks showmenu":"navLinks"}>
        <div className="links">
            {data[0].navbarLinks.map((element)=>{
                return (
                    <Link to={element.link}
                    key={element.id}
                    dpy={true}smooth={true}duration={500}>
                        {element.title}
                    </Link>
                );
            })}
        </div>
        <button className='menuBtn'>OurMenu</button>
      </div>
      {/* change the value if true->false if false->true */}
      <div className="hamburger" onClick={()=>setShow(!show)}></div>
    </nav>
  )
}

export default Navbar
