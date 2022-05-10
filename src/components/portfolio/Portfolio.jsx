import "./portfolio.scss";
import * as React from 'react';
import PortfolioList from "../portfolioList/PortfolioList";
import { useState, useEffect, useRef, useContext } from "react";
import {  webPortfolio, mobilePortfolio, gamePortfolio, contentPortfolio } from "../../data";
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import { ThemeContext } from "../../context";


export default function Portfolio({videoDisplay, setVideoDisplay}) {
    const [selected,setSelected] = useState("featured");
    const [data,setData] = useState([]);
    /*const [videoDisplay,setVideoDisplay] = useState([false]);*/
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;
   

    const list = [
        
        {
            id: "web",
            title: "Web App",
        },
        {
            id: "mobile",
            title: "Mobile App",
        },
        {
            id: "game",
            title: "Games",
        },
        {
            id: "content",
            title: "Content",
        },
    ];

    useEffect(() => {

        switch(selected) {
            case "web": setData(webPortfolio);
            break;
            case "mobile": setData(mobilePortfolio);
            break;
            case "game": setData(gamePortfolio);
            break;
            case "content": setData(contentPortfolio);
            break;
            default: setData(webPortfolio);
        }

    },[selected]);
    

    const handleOnMouseOver = (e) => {
       /* x.style.display = "block";*/
      
        e.target.play();
        console.log("Hovering");
        
        
    }

    const handleOnMouseOut = (e) => {
        e.target.pause();
        console.log("Paused.");
        /*x.style.display = "none";*/
        /*setVideoDisplay(false);*/
        
    }




    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <ul>
                {list.map((item)=> (
                    <PortfolioList title={item.title} active={selected === item.id} key={item.id}
                    setSelected={setSelected}
                    id={item.id}
                    /*video={item.video}*/
                    />
                ))}
            </ul>
            <div className="container">
                {data.map((d) => (
                    <div className="item" key={d.id}>
                    <img src={process.env.PUBLIC_URL + d.img} alt="" />
                    <h3 style={{ color: darkMode && "white" }}>{d.title}</h3>
                    <div className="iconContainer" >
                                <a href={d.livesite} target="_blank"> <LanguageOutlinedIcon className="websiteIcon" style={{ color: darkMode && "white" }}/> </a>
                                <a href={d.repo} target="_blank"> <GitHubIcon className="gitHubIcon" style={{ color: darkMode && "white" }}/> </a>
                                </div>
                    {
                    <video className="video" loop preload="none" muted onMouseOver={handleOnMouseOver} onMouseOut={handleOnMouseOut}>
                        <source src={process.env.PUBLIC_URL + d.video} type="video/webm" />
                    </video> }
                </div>

                ))}
            </div>
    
        </div>
    )
}