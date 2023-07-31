"use client"
import styles from './header.module.css'
import {useState} from "react";
import Links from "@/components/Header/Links";
const HeaderButton = () => {
    const [isNavActive, setIsNavActive] = useState(false)
    return (
        <>
            <button className={styles.nav__toggle} aria-expanded={isNavActive ? 'true' : 'false'}
                    type={"button"}
                    onClick={() => setIsNavActive(!isNavActive)}>
                {isNavActive ? 'Close' : 'Menu'}
            </button>
            <ul className={styles.nav__wrapper}
                style={isNavActive ? {opacity: "1", visibility: "visible", transform: "translateY(-10px)", backgroundColor: "#023a56"} : {}}
            >
                <Links/>
            </ul>
        </>
    );

};

export default HeaderButton;