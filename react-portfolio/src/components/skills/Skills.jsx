import "./skills.scss"
import SkillsIcons from "./skillsIcons/JS.png"
import SkillsIcons2 from "./skillsIcons/css.png"

export default function Skills() {
    return (
        <div className="skills" id="skills">
           <img src={SkillsIcons} alt="skill Badge" />
           <img src={SkillsIcons2} alt="skill Badge" />
           
        </div>
    )
}