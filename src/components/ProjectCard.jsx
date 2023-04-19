import { Link } from "react-router-dom";
import {  BiChevronRight } from "react-icons/bi";
function ProjectCard({item, position}){
    return(
        <article className={`my-11 sm:flex ${position} gap-6 w-full`}>
            <div className="img mb-3 sm:mb-0 md:w-2/4">
                <img className="rounded-xl" src={item.img} alt={item.desc}/>
            </div>
            <div className="project-desc sm:flex sm:flex-col sm:items-start sm:justify-end gap-14 sm:gap-3 ">
                <h4 className="uppercase">{item.title}</h4>
                <p className="grey">{item.desc}</p>
                <h5>{item.type}</h5>
                <a href={item.link}><button className="flex justify-center gap-1 uppercase items-center grey rounded-2xl md:py-2">View work <BiChevronRight /></button></a>
            </div>
        </article>
    )
}
export default ProjectCard