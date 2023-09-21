import React, { useState } from "react";
import fullLogo from '../assets/logos/Xiinbal_full_logo.png'
import arrow from '../assets/home/arrow_square_down.svg'
import dotLine from '../assets/home/dot_line_track.svg'
import squareNav from '../assets/home/square_nav.svg'
import '../css/Home/Home.css'
import { useGlobal } from "../helpers/global/GlobalProvider";
import LogInOrSignUp from "../components/Login/logInOrSignUp";

export default function Home() {
    const { searchText, setSearchText } = useGlobal();
    const handleInput = (input) => {
        setSearchText(input.target.value)
    }
    const [showForms, setShowForms] = useState(false);
    const toggleForms = () => setShowForms(!showForms)

    return (
        <>
            {
                showForms && <LogInOrSignUp close={toggleForms} />
            }
            <img src={squareNav} alt="Xiinbal" width={100} height={100} className="home__square__nav" onClick={toggleForms} />
            <div className="home__color__container" >
                <img src={fullLogo} alt="Xiinbal" width={100} height={100} className="home__logo__image" />
                <img src={dotLine} alt="DotLine" width={100} height={100} className="home_dote_line" />
            </div>
            <div className="home__white__container" >
                <p>No salgas de casa sin Xíinbal, tu especialista en planes.</p>
                <p>Buen@s días/tardes/noches</p>
                <input type="text" value={searchText} onChange={handleInput} />
                <img src={arrow} alt="Xiinbal" height={100} width={100} className="home__arrow__image" />
            </div>
        </>
    )
}