import MainNav from "./MainNav";
import HamCloseBtn from "./HamCloseBtn";

const Header = (props) => {
    return(
        <header className="main-header">
            <h2 className="logo">LOG<span>o</span></h2>
            <MainNav />
            <HamCloseBtn hider_={props.hide_}/>
        </header>
    )
}

export default Header;