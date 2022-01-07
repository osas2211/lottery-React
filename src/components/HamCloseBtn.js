import hamburger from "../images/icon-hamburger.svg";
import closeImg from "../images/icon-close.svg";
import { useState } from "react";

const HamCloseBtn = () => {
    const [display, setDisplay] = useState(["close", "ham show"])
    const hamOpenHandler = ()=>{
        setDisplay(["ham show", "close"])
        document.querySelector(".mobile-nav").classList.toggle("hide-nav");
    } 
    const hamCloseHandler = ()=>{
        setDisplay(["close", "ham show"])
        document.querySelector(".mobile-nav").classList.toggle("hide-nav");
    }
    return (
        <>
            <a href="#" className={display[1]} onClick={hamOpenHandler}>
                <img src={hamburger} alt="" srcSet=""></img>
            </a>
            <a href="#" className={display[0]} onClick={hamCloseHandler}>
                <img src={closeImg} alt="" srcSet=""></img>
            </a>
        </>
    )
}

export default HamCloseBtn;