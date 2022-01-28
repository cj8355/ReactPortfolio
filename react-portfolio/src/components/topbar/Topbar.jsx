import "./topbar.scss";
import * as React from 'react';
import {Person, Mail, GitHub, LinkedIn} from "@material-ui/icons";
import { ThemeContext } from "../../context";
import { useState, useRef, useContext } from "react";
import PinterestIcon from '@mui/icons-material/Pinterest';

export default function Topbar({ menuOpen, setMenuOpen }) {
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;
    return (
        <div className={"topbar " + (menuOpen && "active")} style={{ backgroundColor: darkMode && "purple", color: darkMode && "white" }}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Portfolio</a>
                    <div className="itemContainer">
                    <Person className="icon"/>
                        <span>206-765-8990</span>

                    </div>
                     <div className="itemContainer">
                       <Mail className="icon"/>
                        <span>charlescallender.cc@gmail.com</span>
                        
                    </div>
                    <div className="itemContainer">
                    <a href="https://github.com/cj8355" target="_blank"> <GitHub className="gitHubIcon" style={{  color: darkMode && "white" }}/> </a>
                    </div>
                    <div className="itemContainer">
                    <a href="https://www.linkedin.com/in/charles-callender-043b3886/" target="_blank"> <LinkedIn className="linkedInIcon" style={{  color: darkMode && "white" }}/> </a>
                    </div>
                    <div className="itemContainer">
                    <a href="https://pin.it/uCUV3xD" target="_blank"> <PinterestIcon className="pinterestIcon" style={{  color: darkMode && "white" }}/> </a>
                    </div>
                </div>
                <div className="right" >
                    <div className="hamburger" onClick={ () => setMenuOpen(!menuOpen)} >
                        <span className="line1" style={{  backgroundColor: darkMode && "white" }}></span>
                        <span className="line2" style={{  backgroundColor: darkMode && "white" }}></span>
                        <span className="line3" style={{  backgroundColor: darkMode && "white" }}></span>
                    </div>
                </div>
            </div>

        </div>
    )
}