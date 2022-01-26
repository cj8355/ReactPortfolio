import "./intro.scss";
import { init } from 'ityped';
import { useEffect, useRef, useContext } from "react";
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';
import { ThemeContext } from "../../context";

export default function Intro() {

    const textRef = useRef();
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Developer", "Designer"],
        });

    }, []);

    return (
        <div className='intro' id='intro'>
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/avatar.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Charles Callender</h1>
                    <h3>Freelance <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <ArrowDropDownCircleOutlinedIcon className="downArrow" style={{color: darkMode && "white" }} />
                </a>
            </div>
        </div>
    )
}