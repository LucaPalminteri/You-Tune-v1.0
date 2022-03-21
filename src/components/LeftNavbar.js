import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome" 
import {faCompass} from "@fortawesome/free-solid-svg-icons"
import {faHome} from "@fortawesome/free-solid-svg-icons"
import {faSection} from "@fortawesome/free-solid-svg-icons"
import {faFolderOpen} from "@fortawesome/free-solid-svg-icons"
import {faCirclePlay} from "@fortawesome/free-solid-svg-icons"
import {faSheetPlastic} from "@fortawesome/free-solid-svg-icons"
import {faDownLong} from "@fortawesome/free-solid-svg-icons"
import {faPlay} from "@fortawesome/free-solid-svg-icons"

function LeftNavbar() {
    return (
        <div className="left-navbar">
            <div>
                <a className="left-navbar__icon" href="https://www.youtube.com/">
                    <FontAwesomeIcon className="icon" icon={faHome}/>
                    <span>Home</span>
                </a>
            </div>
            <div className="left-navbar__icon">
                <a className="left-navbar__icon" href="https://www.youtube.com/feed/explore">
                <FontAwesomeIcon className="icon" icon={faCompass}/>
                <span>Explore</span></a>
            </div>
            <div className="left-navbar__icon">
                <a className="left-navbar__icon" href="">
                <FontAwesomeIcon className="icon" icon={faSection}/>
                <span>Short</span></a>
            </div>
            <div className="left-navbar__icon">
            <a className="left-navbar__icon" href="https://www.youtube.com/feed/subscriptions">
                <FontAwesomeIcon className="icon" icon={faFolderOpen}/>
                <span>Subscriptions</span></a>
            </div>
            <div className="left-navbar__icon">
            <a className="left-navbar__icon" href="https://www.youtube.com/channel/UCqVDpXKLmKeBU_yyt_QkItQ">
                <FontAwesomeIcon className="icon" icon={faPlay}/>
                <span>Originals</span></a>
            </div>
            <div className="left-navbar__icon">
            <a className="left-navbar__icon" href="https://music.youtube.com/" target="_blank">
                <FontAwesomeIcon className="icon" icon={faCirclePlay}/>
                <span>YouTube Music</span></a>
            </div>
            <div className="left-navbar__icon">
            <a className="left-navbar__icon" href="https://www.youtube.com/feed/library">
                <FontAwesomeIcon className="icon" icon={faSheetPlastic}/>
                <span>Library</span></a>
            </div>
            <div className="left-navbar__icon">
            <a className="left-navbar__icon" href="https://www.youtube.com/feed/downloads">
                <FontAwesomeIcon className="icon" icon={faDownLong}/>
                <span>Downloads</span></a>
            </div>
        </div>
    )
}

export default LeftNavbar;