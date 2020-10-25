import React from "react";

import NavDesk from "./NavDesk"

const Nav = ({ requestRandomHero, requestSearch }) => {
    return(
    <div>
    <NavDesk requestRandomHero={requestRandomHero} requestSearch={requestSearch}/>
    </div>
    )
}


export default Nav;