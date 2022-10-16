import "./intro.scss";
import { init } from 'ityped';
import { useEffect, useRef, useContext } from "react";
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';
import { ThemeContext } from "../../context";

export default function Intro() {

    const textRef = useRef();
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;

    const src1 = "https://images.chesscomfiles.com/uploads/game-gifs/90px/brown/neo/0/cc/0/1/bUNZUW5EWkpDSlFKbEIhVGd2NkVrczBTZkg1WnB4RU5vRU5VdktXT0h5WEh5a1pLREtUWmVnN0ZrVUZ3Z2gzVWR2P3g,.gif";

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Developer"],
        });

    }, []);

    return (
        <div className='intro' id='intro'>
            <div className="left">
                <div className="imgContainer">
                    {/* <img src={process.env.PUBLIC_URL + '/assets/chess1.svg'} alt="">
                    
			
	
                    </img> */}
                    {/* <video className="video1" controls width="100%" autoPlay>
                    <source src={src1} type="video/mp4" />

                    </video> */}
                    <div className="video1">
                    <iframe
                        src={src1}
                        title="Youtube Player"
                        frameBorder="0"
                        className="video1"
                        scrolling="no"
                        
                        />
                        </div>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Charles Callender</h1>
                    <h3> <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <ArrowDropDownCircleOutlinedIcon className="downArrow" style={{color: darkMode && "white" }} />
                </a>
            </div>
        </div>
    )
}