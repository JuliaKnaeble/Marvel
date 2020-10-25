import React from "react"; 
import "./NavMobile.scss";

const NavMobile = () => {
    return (
        <div className="NavMobile">
            <img
                className="menu-icon"
                src={require(`../../Assets/mobile_ham.png`)}
                alt="menu"
              />
        </div>
    )
}


export default NavMobile;