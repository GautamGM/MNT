import instagram from "../../../../public/images/instagram.png";
import twitter from "../../../../public/images/twitter.png";
import follow from "C:/Users/Dell/Desktop/MNT/MNT/public/images/Follow us.png";
import line from "C:/Users/Dell/Desktop/MNT/MNT/public/images/Rectangle 2.1.png"
import  downArrow from "C:/Users/Dell/Desktop/MNT/MNT/public/images/arrow_downward_24px.png"
import slideBar from "C:/Users/Dell/Desktop/MNT/MNT/public/images/Slider.png"
import numberText from "C:/Users/Dell/Desktop/MNT/MNT/public/images/Text.png"
const TitleOfMnt = () => {
  return (
    <div className="tittle w-[100%] flex items-center justify-between">
      <div className="follow ">
        <div className="  flex flex-col justify-between items-center h-[170px]   ">
          <span>
            <a href="#"><img src={follow} alt="" /></a>
          </span>{" "}
          <a href="#">
          <img src={instagram} alt="follow" /> 
          </a>
          <a href="#"><img src={twitter} alt="" /></a>
        </div>
      </div>
      <div className="heaing w-[750px]">
        <div className="sub-heading h-[30px]  flex  items-center">
           <div> <img src={line} alt="" /></div>
           <span className="uppercase text-[#FBD784] font-[ClashDisplay-Medium] ml-3 " >A Hiking guide</span>
        </div>
        <div className="main-heading text-[70px] font-[chronical-display] text-white ">
            <h1>
            Be Prepared For The Mountains And Beyond!
            </h1>
        </div>
        <div className="scroll-down flex w-[120px] justify-between text-white font-[ClashDisplay-Medium] ">
            <span>scroll Down </span> <a href="#"><img src={downArrow} alt=""/></a>
        </div>
      </div>
      <div className="scrollBar flex h-[170px] w-[50px]  justify-between ">
        <img src={numberText} alt=" number" />
        <img src={slideBar} alt=" slide bar" />
      </div>
    </div>
  );
};
export default TitleOfMnt;
