import "./portfolio.scss";
import * as React from 'react';
import PortfolioList from "../portfolioList/PortfolioList";
import { useState, useEffect } from "react";
import { featuredPortfolio, webPortfolio, mobilePortfolio, designPortfolio, contentPortfolio } from "../../data";
import vid1 from "./vid1.gif";
import vid2 from "./vid2.webm";

export default function Portfolio({videoDisplay, setVideoDisplay}) {
    const [selected,setSelected] = useState("featured");
    const [data,setData] = useState([]);
    /*const [videoDisplay,setVideoDisplay] = useState([false]);*/
   

    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "web",
            title: "Web App",
        },
        {
            id: "mobile",
            title: "Mobile App",
        },
        {
            id: "design",
            title: "Design",
        },
        {
            id: "content",
            title: "Content",
        },
    ];

    useEffect(() => {

        switch(selected) {
            case "featured": setData(featuredPortfolio);
            break;
            case "web": setData(webPortfolio);
            break;
            case "mobile": setData(mobilePortfolio);
            break;
            case "design": setData(designPortfolio);
            break;
            case "content": setData(contentPortfolio);
            break;
            default: setData(featuredPortfolio);
        }

    },[selected]);
    

    const handleOnMouseOver = (e: React.MouseEvent<HTMLVideoElement>) => {
       /* x.style.display = "block";*/
      
        e.target.play();
        console.log("Hovering");
        
        
    }

    const handleOnMouseOut = (e: React.MouseEvent<HTMLVideoElement>) => {
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
                    <PortfolioList title={item.title} active={selected === item.id}
                    setSelected={setSelected}
                    id={item.id}
                    video={vid1}
                    />
                ))}
            </ul>
            <div className="container">
                {data.map((d) => (
                    <div className="item">
                    <img src={d.img} alt="" />
                    <h3>{d.title}</h3>
                    {
                    <video className="video" loop preload="none" muted onMouseOver={handleOnMouseOver} onMouseOut={handleOnMouseOut}>
                        <source src={vid2} type="video/webm" />
                    </video> }
                </div>

                ))}
            </div>
    
        </div>
    )
}