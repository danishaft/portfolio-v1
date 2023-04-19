import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import Card from "./Card"
function Footer(){
    return(
       <div className=" w-full bottom-nav mb-6" >
            <h3 className="  text-center tracking-wide"><span className="grey">Get</span> in Touch.</h3>
            <p className="text-center">So that we can talk more about...</p>
            <div className="w-full flex justify-center items-center gap-5 border-t-2 py-5 mt-4">
                <Card render={()=> <a href="https://www.linkedin.com/in/ejeh-daniel-482409190/"  target="_blank"><FaLinkedinIn /></a>} />
                <Card render={()=> <a href="https://twitter.com/EjehAy_Daniel" target="_blank" > <FaTwitter /></a>} />
                <Card render={()=> <a href="https://github.com/danishaft" target="_blank" > <FaGithub /></a>} />
                <Card render={()=> <a href="mailto:danielejeh2019@gmail.com?subject=subject text" target="_blank" > <FaEnvelope /></a>} />
            </div>
            <p className="text-center"><span className="grey">&copy; 2023</span> EJEH AYODELE DANIEL</p>
       </div>
    )
}
export default Footer