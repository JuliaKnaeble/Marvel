import React, {useState} from "react"; 
import {useHistory} from "react-router-dom";
import HomeButtonIcon from "../../Assets/NavSvg/HomeButtonIcon";
import RandomIcon from "../../Assets/NavSvg/RandomIcon";
import SearchIcon from "../../Assets/NavSvg/SearchIcon";
import "./NavMobile.scss";

const NavMobile = ({requestRandomHero, requestSearch}) => {
    const [mobileMenuClicked, setMobileMenuClicked] = useState(false)
    document.body.style.overflow = "visible";
    const history = useHistory();

      const showRandomHero = () => {
       requestRandomHero();
       history.push("/hero");
     };

    let menu;
    if (mobileMenuClicked) {
       document.body.style.overflow = "hidden";
        menu = (
            <div className="active-mobile-menu">
                <div onClick={()=> history.push("/")}>
                    <HomeButtonIcon/>
                </div>
                <div onClick={() => requestSearch(true)}>
                    <SearchIcon />
                </div>
                <div onClick={showRandomHero}>
                    <RandomIcon />
                </div>
            </div>
          )
        }

    return (
        <div className="NavMobile">
            {menu}
            <img
                className="menu-icon"
                src={ 
                    mobileMenuClicked 
                    ? require(`../../Assets/mobile_x.png`) 
                    : require(`../../Assets/mobile_ham.png`)}
                alt="menu"
                onClick= {() => setMobileMenuClicked(!mobileMenuClicked)}
              />
        </div>
    )
}


export default NavMobile;