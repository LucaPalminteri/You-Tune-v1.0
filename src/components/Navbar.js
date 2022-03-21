import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome" 
import {fasAlbumCollection} from "@fortawesome/free-brands-svg-icons"
import {faCompass, faRectangleAd} from "@fortawesome/free-solid-svg-icons"
import {faHome} from "@fortawesome/free-solid-svg-icons"
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"

function Navbar() {
    return (
        <div className="navbar">
            <img className="navbar__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/YouTube_Premium_logo.svg/2560px-YouTube_Premium_logo.svg.png"/>
            <input className="navbar__input" type="text" placeholder="Search"></input>
            <button className="navbar__btn"><FontAwesomeIcon className="icon" icon={faMagnifyingGlass}/></button>
        </div>
    )
}

export default Navbar;