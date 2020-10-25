import React from "react";

import NavDesk from "./NavDesk"
import NavMobile from "./NavMobile";

const Nav = ({ requestRandomHero, requestSearch }) => {
    return(
    <div>
    <NavDesk requestRandomHero={requestRandomHero} requestSearch={requestSearch}/>
    <NavMobile />
    </div>
    )
}


export default Nav;