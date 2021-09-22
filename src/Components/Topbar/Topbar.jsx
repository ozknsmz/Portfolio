import "./topbar.scss"
import logo from "./logo.png"

export default function Topbar() {
    return (
        <header>
            <div className="Topbar" id="topbar">
                <div className="topleft">
                    ozknsmz.
                </div>
                <div className="topright">
                <div className="toprightList">
                        <li className="toprightListItem">HOMEPAGE</li>
                        <li className="toprightListItem">ABOUT</li>
                        <li className="toprightListItem">WORKS</li>
                        <li className="toprightListItem">BLOG</li>
                        <li className="toprightListItem">CONTACT</li>
                    </div>
                </div>
                <a href=""><i class="fas fa-bars"></i></a>
            </div>
        </header>
    )
}
