import MainNav from "./MainNav";
import HamCloseBtn from "./HamCloseBtn";

const Header = () => {


    return(
        <header className="main-header">
            <h2 className="logo">LOG<span>o</span></h2>
            <MainNav />
            <HamCloseBtn />
        </header>
    )
}

export default Header;