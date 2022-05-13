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
            icon: "assets/globe.png",
            title: "Retroland",
            desc: "",
            img: "assets/construction.JPG",
            livesite: "https://cj8355.github.io/Code_Quiz/",
            repo: "https://github.com/cj8355/Code_Quiz",
            techUsed: [ "three.js", ]
        },
        {
            id: "2",
            icon: "assets/globe.png",
            title: "Travel Map",
            desc: "Travel map app that lets users leave reviews of places they've been using pins on the map",
            img: "assets/travelMap.png",
            livesite: "https://powerful-retreat-67806.herokuapp.com/",
            repo: "https://github.com/cj8355/Tech-Blog",
            techUsed: [ "React", "React Map GL", "MongoDb", "Node", "Express", "Material UI"]
        },
        {
            id: "3",
            icon: "assets/globe.png",
            title: "Disney+",
            desc: "Disney+ clone that allows users to login and watch shows/movies",
            img: "assets/disneyPlus.png",
            livesite: "https://radiant-atoll-72923.herokuapp.com/stats",
            repo: "https://github.com/cj8355/Book-Search-Engine",
            techUsed: [ "React", "React Router", "React Player", "Styled Components", "Firebase"]
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
                                    <img src={process.env.PUBLIC_URL + "/" +  d.icon} alt="" />
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
                            <img src={process.env.PUBLIC_URL + "/" +  d.img} alt="" />
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