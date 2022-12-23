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
    const [width, setWidth]   = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const updateDimensions = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    

    const gifSrcLarge = [
        "https://images.chesscomfiles.com/uploads/game-gifs/90px/brown/neo/0/cc/0/1/bUNZUW5EWkpDSlFKbEIhVGd2NkVrczBTZkg1WnB4RU5vRU5VdktXT0h5WEh5a1pLREtUWmVnN0ZrVUZ3Z2gzVWR2P3g,.gif",
        "https://images.chesscomfiles.com/uploads/game-gifs/90px/brown/neo/0/cc/0/0/bEIwU2NEWkptdSFUa3NZSWJsSUJ1QjVRZ3Y5UkR3UndwdzghZnQ3WWRtOTh2S1FLQktUQ2xDSkNtQzZaQzMhOTM_OTA_MllJMlQwOWg_.gif",
        "https://images.chesscomfiles.com/uploads/game-gifs/90px/green/vintage/0/cc/0/0/bEIhVGNEMFNtdVpKZ3Y5UkR3Undwdzcwa3M1WmJsU0tCS1pLdkswS2ZtNkxtdjg2ZHJZUWVjVENsQ0xDdkNLQ2hnM05ycU5GcVdGd253P3BXNDZZNEdZWnNBQ3VjYnVDYmFKQkdQWjZnZUNvZTA3WjA4.gif"
    ]

    const gifSrcSmall = [
        "/ReactPortfolio/assets/chessGifs/game1.webm",
        "/ReactPortfolio/assets/chessGifs/game2.webm",
        "/ReactPortfolio/assets/chessGifs/game3.webm"
    ]

    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    
    const myGifsLarge = gifSrcLarge.map((source) => 
    (
    <div className="video1">
                    <iframe
                        src={source}
                        // width="520"
                        // height="520"
                        title="Chwaa gif"
                        frameBorder="0"
                        allowFullScreen
                        className="gif"
                        width={520} 
                        height={520} 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full"
                        />
                        </div>
                
    )
    )
    console.log({myGifsLarge})


    const myGifsSmall = gifSrcSmall.map((source) => 
    (
    <div className="video1">
                    <iframe
                        src={source}
                        // width="520"
                        // height="520"
                        title="Chwaa gif"
                        frameBorder="0"
                        allowFullScreen
                        className="gif"
                        width={520} 
                        height={520} 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full"
                        />
                        </div>
                
    )
    )
    console.log({myGifsSmall})


    

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

    // const Frame = () => {
    //     componentDidMount() {
    //       document
    //         .querySelector("iframe")
    //         .contentWindow.document.querySelector("h1#firstHeading").style.color =
    //         "red";
    //     }

    const nextVid = () => {
        if (gifNumber < ((width < 800) ? gifSrcSmall.length - 1 : gifSrcLarge.length - 1)) {
            setGifNumber((prevState) => prevState + 1)
        } else {
            setGifNumber(0)
        }
        
        console.log(gifNumber)
    }

    const prevVid = () => {
        if (gifNumber > 0) {
        setGifNumber((prevState) => prevState - 1)
        } else {
            setGifNumber(width < 800 ? gifSrcSmall.length - 1 : gifSrcLarge.length - 1)
        }
        console.log(gifNumber)
    }

    return (
        <div className='intro' id='intro'>
            <div className="left">
                <div className="imgContainer">
                    
                <div className="prevBtn"
                
                onClick={prevVid}
            >
                <span>Prev</span>
                <i></i>
                </div>
                <div className="nextBtn"
                
                onClick={nextVid}
            >
                <span>Next</span>
                <i></i>
                </div>
            
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
                        {(width > 800) ? myGifsLarge[gifNumber] : myGifsSmall[gifNumber]}
                
                
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