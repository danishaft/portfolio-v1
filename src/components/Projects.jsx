import ProjectCard from "./ProjectCard"
import { useContext } from "react"
import { Context } from "../context/projectContext"
import Utils from "../utils/Utility"
function Projects() {
    const {data} = useContext(Context)
    const elem = data.map(item => {
        return <ProjectCard key={item.id} position={Utils(item.id)} item={item} />
    })
    return(
        <div className="projects py-11" id="works">
            <h3 className="font-bold small-title"><span className="grey">Selected</span> Works</h3>
            <p className="intro-text grey py-4 sm:w-4/6">Here are a few of my projects giving an insight on how I think through product development</p>
            {elem}
        </div>
    )
}
export default Projects