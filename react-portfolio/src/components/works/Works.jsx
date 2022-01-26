import "./works.scss"
import { useState, useContext } from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { ThemeContext } from "../../context";
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Works() {
    const [currentSlide,setCurrentSlide] = useState(0);
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;

    const data = [
        {
            id: "1",
            icon: "./assets/mobile.png",
            title: "Web Design",
            desc: "This is the description22",
            img: "./assets/img1.jfif"
        },
        {
            id: "2",
            icon: "./assets/globe.png",
            title: "Mobile app",
            desc: "This is the description77777",
            img: "./assets/img2.jfif"
        },
        {
            id: "3",
            icon: "./assets/mobile.png",
            title: "APPPPPPP",
            desc: "This is the description8888",
            img: "./assets/img3.jfif"
        },
    ];

    const handleClick = (way)=> {
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) :
        setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    };
    return (
        <div className='works' id='works'> 
        <h1>Works</h1>
            <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)` }}>
                {data.map((d) => (
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon} alt="" />
                                </div>
                                <h2>{d.title}</h2>
                                <p>{d.desc}</p>
                                <div className="iconContainer">
                                <a href="https://www.linkedin.com/in/charles-callender-043b3886/" target="_blank"> <LanguageOutlinedIcon className="websiteIcon" /> </a>
                                <a href="https://github.com/" target="_blank"> <GitHubIcon className="gitHubIcon" /> </a>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <img src={d.img} alt="" />
                        </div>
                    </div>
                    
                </div>
                ))}
            </div>
            <ArrowBackIosIcon className="arrow left" onClick={()=>handleClick("left")}/>
            <ArrowForwardIosIcon className="arrow right"  onClick={()=>handleClick("right")}/>
        </div>
    );
}