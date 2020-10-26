import React, {useState} from "react"; 
import {useHistory} from "react-router-dom";
import HomeButtonIcon from "../../Assets/NavSvg/HomeButtonIcon";
import RandomIcon from "../../Assets/NavSvg/RandomIcon";
import SearchIcon from "../../Assets/NavSvg/SearchIcon";
import "./NavMobile.scss";

const NavMobile = ({requestRandomHero, requestSearch}) => {
    const [menuClicked, setMenuClicked] = useState(false)
    document.body.style.overflow = "visible";
    const history = useHistory();

      const showRandomHero = () => {
       requestRandomHero();
       setMenuClicked(!menuClicked);
       history.push("/hero");
     };

    let menu;
    if (menuClicked) {
       document.body.style.overflow = "hidden";
        menu = (
            <div className="active-mobile-menu">
                <div className="info">
                   <a
                     className="api"
                     href="https://developer.marvel.com/"
                     target="_blank"
                     rel="noopener noreferrer"
                   >
                    API
                   </a>
                   <a
                     href="https://github.com/JuliaKnaeble"
                     target="_blank"
                     rel="noopener noreferrer"
                   >
                    ABOUT
                  </a>
                </div>
                <div onClick={()=> setMenuClicked(!menuClicked) & history.push("/")}>
                    <HomeButtonIcon className="mobile-icons home-button"/>
                </div>
                <div onClick={() => setMenuClicked(!menuClicked) & requestSearch(true)}>
                    <SearchIcon className="mobile-icons"/>
                </div>
                <div onClick={showRandomHero}>
                    <RandomIcon className="mobile-icons"/>
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
                    menuClicked 
                    ? require(`../../Assets/mobile_x.png`) 
                    : require(`../../Assets/mobile_ham.png`)}
                alt="menu"
                onClick= {() => setMenuClicked(!menuClicked)}
              />
        </div>
    )
}


export default NavMobile;