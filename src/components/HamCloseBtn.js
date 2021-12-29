import hamburger from "../images/icon-hamburger.svg";
import closeImg from "../images/icon-close.svg";
import { useState } from "react";

const HamCloseBtn = () => {
    const [display, setDisplay] = useState(()=> {
        return {close_: "close", ham: "ham show"}
    });
    const nav = () =>{
        setDisplay(()=>{
            const mobile = document.querySelector(".mobile-nav");
            mobile.classList.remove("hide-nav");
            return {close_: "close show", ham: "ham"}
        });
    }
    const nav_ = () => {
        setDisplay(()=> {
            const mobile = document.querySelector(".mobile-nav");
            mobile.classList.add("hide-nav");
            return {close_: "close", ham: "ham show"}
        })
    }
    return (
        <>
            <a href="#" className={display.ham} onClick={nav}>
                <img src={hamburger} alt="" srcSet=""></img>
            </a>
            <a href="#" className={display.close_} onClick={nav_}>
                <img src={closeImg} alt="" srcSet=""></img>
            </a>
        </>
    )
}

export default HamCloseBtn;