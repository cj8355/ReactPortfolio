import "./menu.scss";
import Resume from "../../Documents/Resume 11.22.22.pdf";
import AWSCCP from "../../Documents/AWS CCP.pdf";

export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={"menu "+(menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#works">Works</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#skills">Skills</a>
                </li>
                {/* <li onClick={()=>setMenuOpen(false)}>
                    <a href="#testimonials">Testimonials</a>
                </li> */}
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#contact">Contact</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href={Resume} target="_blank">Resume</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href={AWSCCP} target="_blank">AWS CCP</a>
                </li>
            </ul>
        
        </div>
    )
}