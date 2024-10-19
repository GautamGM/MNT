
import leftImage from "../.../../../../../public/images/01.png"
import Line from "../../../../public/images/Rectangle 2.1.png"
import RightArrow from "C:/Users/Dell/Desktop/MNT/MNT/public/images/right-arrow.png"
const Card = ({data}) => {
  console.log(data)
  const {subtittle,para,image,tittle,cardClass}=data
  return (
    <div className={`flex ${cardClass}`} >
      <div className="tittle flex  justify-center items-center  w-[50%]  h-[550px]  ">
            {/* here we go */}
          <div className="heaing  h-[360px] flex flex-col justify-between">
            <div className="sub-heading h-[30px]   flex  items-center">
              <div>
                {" "}
                <img src={Line} alt="" />
              </div>
              <span className="uppercase text-[#FBD784] font-[ClashDisplay-Medium] tracking-[3px]  ml-3 ">
              {subtittle}
              </span>
            </div>
            <div className="main-heading text-[60px] font-[600] leading-[60px] font-[chronical-display] text-white ">
              <h1>{tittle}</h1>
            </div>
            <div className="paraGraph text-white font-[ClashDisplay-Medium] ">
                <p>{para}</p>
            </div>
            <div className="scroll-down flex w-[120px] items-center text-[#FBD784] justify-between font-[ClashDisplay-Medium] ">
              <span>read more </span>{" "}
              <a href="#">
                <img src={RightArrow} alt="" />
              </a>
            </div>
          </div>
      </div>
      {/* the end */}
      <div className={`${cardClass?"flex flex-start w-[50%] h-[440px] ":"image h-[440px] w-[50%] flex justify-end"}`}>
        
        <img src={image} className={`w-[80%] h-[590px] object-cover pt-[40px]`}  alt="" />
      </div>
    </div>
  );
};
export default Card
