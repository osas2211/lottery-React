const MobileNav = (props) => {
    return (
        <ul className="mobile-nav hide-nav">
            <li><a href="/">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="/#play" className="btn">Play Now</a></li>
        </ul>
    )
}

export default MobileNav;