import "./skills.scss"
import JS from "./skillsIcons/JS.png"
import CSS from "./skillsIcons/css.png"
import HTML from "./skillsIcons/html.png"
import express from "./skillsIcons/express.png"
import mongo from "./skillsIcons/mongo.png"
import mysql from "./skillsIcons/mysql.png"
import react from "./skillsIcons/react.png"
import node from "./skillsIcons/node.png"
import JSsm from "./skillsIcons/JSsm.jpg"
import CSSsm from "./skillsIcons/csssm.png"
import HTMLsm from "./skillsIcons/htmlsm.jpg"
import expresssm from "./skillsIcons/expresssm.jpg"
import mongosm from "./skillsIcons/mongosm.jpg"
import mysqlsm from "./skillsIcons/mysqlsm.jpg"
import reactsm from "./skillsIcons/reactsm.jpg"
import nodesm from "./skillsIcons/nodesm.jpg"
import git from "./skillsIcons/github.png"
import reactLogo from "./skillsIcons/react-logo.svg"
import React2 from "./skillsIcons/react-transparent.png"
import cssLogo from "./skillsIcons/css-logo.svg"
import htmlLogo from "./skillsIcons/html-logo.svg"
import jsLogo from "./skillsIcons/js-logo.svg"
import mongodbLogo from "./skillsIcons/mongodb-logo.svg"
import mysqlLogo from "./skillsIcons/mysql-logo.svg"
import nodeLogo from "./skillsIcons/nodejs-logo.svg"
import expressLogo from "./skillsIcons/express-svgrepo-com.svg"
import insomniaLogo from "./skillsIcons/insomnia-svgrepo-com.svg"
import materialUiLogo from "./skillsIcons/material-ui-svgrepo-com.svg"
import npmLogo from "./skillsIcons/npm-svgrepo-com.svg"
import reactSvgLogo from "./skillsIcons/react-svgrepo-com.svg"
import sassLogo from "./skillsIcons/sass-svgrepo-com.svg"
import styledComponentsLogo from "./skillsIcons/styled-components-1.svg"

import { useContext, useState } from "react";
import { ThemeContext } from "../../context";
import { Gradient } from "@material-ui/icons"


export default function Skills() {
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;


    return ([
        <div className="skillsContainer">
        <h1>Some of the technologies I've worked with</h1>
        <div className="skills" id="skills">
           {/* <img src={JS} className="skillIcon" alt="skill Badge" />
           <img src={CSS} className="skillIcon" alt="skill Badge" />
           <img src={HTML} className="skillIcon" alt="skill Badge" /> */}
           {/* <img src={express} className="skillIcon" alt="skill Badge" /> */}
           {/* <img src={mongo} className="skillIcon" alt="skill Badge" />
           <img src={mysql} className="skillIcon" alt="skill Badge" />
           <img src={react} className="skillIcon" alt="skill Badge" />
           <img src={node} className="skillIcon" alt="skill Badge" />
           <img src={reactLogo} className="skillIcon" alt="skill Badge" /> */}
           <img src={cssLogo} className="skillIcon" alt="skill Badge" style={{ backgroundColor: darkMode && "white"}}/>
           <img src={htmlLogo} className="skillIcon" alt="skill Badge" style={{ backgroundColor: darkMode && "white" }}/>
           <img src={jsLogo} className="skillIcon" alt="skill Badge" style={{ backgroundColor: darkMode && "white" }}/>
           <img src={mongodbLogo} className="skillIcon" alt="skill Badge" style={{ backgroundColor: darkMode && "white" }}/>
           <img src={mysqlLogo} className="skillIcon" alt="skill Badge" style={{ backgroundColor: darkMode && "white" }}/>
           <img src={nodeLogo} className="skillIcon" alt="skill Badge" style={{ backgroundColor: darkMode && "white" }}/>
           <img src={expressLogo} className="skillIcon" alt="skill Badge" style={{ backgroundColor: darkMode && "white" }}/>
           <img src={insomniaLogo} className="skillIcon" alt="skill Badge" style={{ backgroundColor: darkMode && "white" }}/>
           <img src={materialUiLogo} className="skillIcon" alt="skill Badge" style={{ backgroundColor: darkMode && "white" }}/>
           <img src={npmLogo} className="skillIcon" alt="skill Badge" style={{ backgroundColor: darkMode && "white" }}/>
           <img src={reactSvgLogo} className="skillIcon" alt="skill Badge" style={{ backgroundColor: darkMode && "white" }}/>
           <img src={sassLogo} className="skillIcon" alt="skill Badge" style={{ backgroundColor: darkMode && "white" }}/>
           <img src={styledComponentsLogo} className="skillIcon" alt="skill Badge" style={{ backgroundColor: darkMode && "white" }}/>
           
        </div>
        </div>,

        // <div className="skillssm" id="skillssm">
        //     <h1>Skills</h1>
        // <div className="skills" id="skills">
        // <img src={JSsm} className="skillIconsm" alt="skill Badge" />
        // <img src={CSSsm} className="skillIconsm" alt="skill Badge" />
        // <img src={HTMLsm} className="skillIconsm" alt="skill Badge" />
        // <img src={expresssm} className="skillIconsm" alt="skill Badge" />
        // <img src={mongosm} className="skillIconsm" alt="skill Badge" />
        // <img src={mysqlsm} className="skillIconsm" alt="skill Badge" />
        // <img src={reactsm} className="skillIconsm" alt="skill Badge" />
        // <img src={nodesm} className="skillIconsm" alt="skill Badge" />
        // </div>
        // </div>
]);
}