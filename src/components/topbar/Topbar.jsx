import "./topbar.scss";
import * as React from 'react';
import {Person, Mail, GitHub, LinkedIn} from "@material-ui/icons";
import { ThemeContext } from "../../context";
import { useState, useRef, useContext } from "react";
import  { ReactComponent as GitHubIcon } from './github-svg.svg';
import { ReactComponent as TableauIcon } from './tableau-icon.svg';
import  { ReactComponent as LinkedInIcon } from './linkedin-svg.svg';
import { ReactComponent as ExcelIcon } from './excel-svg.svg';
import  { ReactComponent as MySqlIcon } from './mysql-logo-svg.svg';


export default function Topbar({ menuOpen, setMenuOpen }) {
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;
    return (
        <div className={"topbar " + (menuOpen && "active")} style={{ backgroundColor: darkMode && "purple", color: darkMode && "white" }}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Portfolio</a>
                    
                    <div className="itemContainer">
                    <a href="https://github.com/cj8355" target="_blank"> <GitHubIcon className="gitHubIcon" style={{  backgroundColor: darkMode && "white" }}/> </a>
                    </div>
                    <div className="itemContainer">
                    <a href="https://www.linkedin.com/in/charles-callender-043b3886/" target="_blank"> <LinkedInIcon className="linkedInIcon" style={{  backgroundColor: darkMode && "white" }}/> </a>
                    </div>
                    <div className="itemContainer">
                    <a href="https://cj8355.github.io/ExcelProjects/" target="_blank"> <ExcelIcon className="excelIcon" style={{  backgroundColor: darkMode && "white" }}/> </a>
                    </div>
                    <div className="itemContainer">
                    <a href="https://cj8355.github.io/SqlProjects/" target="_blank"> <MySqlIcon className="mysqlIcon" style={{  backgroundColor: darkMode && "white" }}/> </a>
                    </div>
                    <div className="itemContainer">
                    <a href="https://public.tableau.com/app/profile/charles7048" target="_blank"> <TableauIcon className="tableauIcon" style={{  backgroundColor: darkMode && "white" }} /> </a>
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