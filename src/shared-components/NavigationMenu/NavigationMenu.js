import React from "react";
import Hamburger from "./Hamburger/Hamburger.js";
import Menu from "./Menu/Menu.js";
import './NavigationMenu.scoped.css'
const NavigationMenu = () => {
    const [isActive, setIsActive] = React.useState(() => false);
    function toggleMenu() {
        return setIsActive(prevIsActive => !prevIsActive);
    }
    return (
        <div className="NavigationMenu">
            <Hamburger isActive={isActive} handleClick={toggleMenu} />
            {isActive && <Menu />}

        </div>
    )
}

export default NavigationMenu