import "./topbar.scss"
import {Person, Mail} from "@material-ui/icons"

export default function Topbar({ menuOpen, setMehuOpen }) {
    return (
        <div className={"topbar" + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">genius.</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>5555555555</span>

                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>email@email</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger">
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>

        </div>
    )
}