import React from 'react'
import '../../App.css'
import HeaderStrip from "../../assets/HERO.png"
import '../BackgroundStrip/HeaderStrip.css'

const Header = () => {
    return (
        <img id="headerImage" src={HeaderStrip}/>
    );
};

export default Header;