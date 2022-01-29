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
            icon: "assets/mobile.png",
            title: "Code Quiz",
            desc: "Code quiz application where users tet their coding knowledge.",
            img: "assets/codeQuiz.JPG",
            livesite: "https://cj8355.github.io/Code_Quiz/",
            repo: "https://github.com/cj8355/Code_Quiz",
            techUsed: [ "HTML", "CSS", "JS"]
        },
        {
            id: "2",
            icon: "assets/mobile.png",
            title: "Tech Blog",
            desc: "Tech Blog application using node, express and mongo",
            img: "assets/techBlog.JPG",
            livesite: "https://powerful-retreat-67806.herokuapp.com/",
            repo: "https://github.com/cj8355/Tech-Blog",
            techUsed: [ "MongoDb", "Express", "Node"]
        },
        {
            id: "3",
            icon: "assets/globe.png",
            title: "Google Book Search",
            desc: "Book search application using Google Book API",
            img: "assets/bookSearch.JPG",
            livesite: "https://radiant-atoll-72923.herokuapp.com/stats",
            repo: "https://github.com/cj8355/Book-Search-Engine",
            techUsed: [ "React", "Express", "Node", "MongoDb", "RRRR"]
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
                <div className="container" key={d.id}>
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon} alt="" />
                                </div>
                                <h2>{d.title}</h2>
                                <p>{d.desc}</p>
                                <div className="iconContainer">
                                <a href={d.livesite} target="_blank"> <LanguageOutlinedIcon className="websiteIcon" /> </a>
                                <a href={d.repo} target="_blank"> <GitHubIcon className="gitHubIcon" /> </a>
                                </div>
                                
                                {d.techUsed.length && (
                                    <ul className="techUsed">
                                        {d.techUsed.map((tech, i) => (
                                    <li key={i}>{tech}</li>
                                    ))}
                                    </ul>
                                    )}
                                    
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