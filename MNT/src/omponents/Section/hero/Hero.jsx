import Navbar from "../../Navbar/navbar"
import TitleOfMnt from "../Tittle/Tittle"
import bgImage from "C:/Users/Dell/Desktop/MNT/MNT/public/images/mg_720 (1).png"
import "./hero.css"
const HeroSection=()=>{
    return(
        <div className="hero-Bg h-[900px] ">
          <div className="navBar px-[100px] pt-7">
            <Navbar/>
          </div>
          <div className="Headding flex justify-center items-center h-[700px] px-[100px] ">
            <TitleOfMnt/>
          </div>
        </div>
    )
}
export default HeroSection