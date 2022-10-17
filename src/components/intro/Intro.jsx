import "./intro.scss";
import { init } from 'ityped';
import { useEffect, useRef, useContext } from "react";
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';
import { ThemeContext } from "../../context";
import { useState } from "react";

export default function Intro() {

    const textRef = useRef();
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;
    const [timePlaying, setTimePlaying] = useState(0)
    const [gifNumber, setGifNumber] = useState(0)

    

    const gifSrc = [
        "https://images.chesscomfiles.com/uploads/game-gifs/90px/brown/neo/0/cc/0/1/bUNZUW5EWkpDSlFKbEIhVGd2NkVrczBTZkg1WnB4RU5vRU5VdktXT0h5WEh5a1pLREtUWmVnN0ZrVUZ3Z2gzVWR2P3g,.gif",
        "https://images.chesscomfiles.com/uploads/game-gifs/90px/brown/neo/0/cc/0/0/bEIwU2NEWkptdSFUa3NZSWJsSUJ1QjVRZ3Y5UkR3UndwdzghZnQ3WWRtOTh2S1FLQktUQ2xDSkNtQzZaQzMhOTM_OTA_MllJMlQwOWg_.gif"
    ]

    const myGifs = gifSrc.map((source) => 
    (
    <div className="video1">
                    <iframe
                        src={source}
                        title="Youtube Player"
                        frameBorder="0"
                        className="video1"
                        scrolling="no"
                        
                        />
                        </div>
                
    )
    )
    console.log({myGifs})

    // const nextGif = () => {
    //     for (let i = 0; i < myGifs.length; i++)
            // setTimePlaying(myGifs[i]._owner.actualDuration)
    //     if (myGifs[i]._owner.actualDuration)
    // }

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Developer"],
        });

    }, []);

    const nextVid = () => {
        setGifNumber((prevState) => prevState + 1)
        console.log(gifNumber)
    }

    const prevVid = () => {
        setGifNumber((prevState) => prevState - 1)
        console.log(gifNumber)
    }

    return (
        <div className='intro' id='intro'>
            <div className="left">
                <div className="imgContainer">
                <button
                type="button"
                onClick={nextVid}
            >Next</button>
            <button
                type="button"
                onClick={prevVid}
            >Prev</button>
                    {/* <img src={process.env.PUBLIC_URL + '/assets/chess1.svg'} alt="">
                    
			
	
                    </img> */}
                    {/* <video className="video1" controls width="100%" autoPlay>
                    <source src={src1} type="video/mp4" />

                    </video> */}
                    {/* <div className="video1">
                    <iframe
                        src={src1}
                        title="Youtube Player"
                        frameBorder="0"
                        className="video1"
                        scrolling="no"
                        
                        />
                        </div> */}
                        {myGifs[gifNumber]}
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