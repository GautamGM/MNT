import logo from "C:/Users/Dell/Desktop/MNT/MNT/public/images/Logo (1).png";
import "./footer.css"
const Footer = () => {
  return (
    <footer>
      <div className="footer-container h-[350px] pb-[40px]   flex justify-between items-end ">
        {/* logo start */}
        <div class="  flex flex-col justify-between   h-[200px] w-[50%] ">
          <div className="  md:w-5/5 w-[300px]">
            <div class="flex  items-center mb-1 ">
              <img src={logo} alt="Logo" />
            </div>
            <p className="text-white  font-[ClashDisplay-Medium] mt-[30px]">
              Get out there & discover your next slope, mountain & destination!
            </p>
          </div>
          <div className="copywrite text-[#858E92] font-[ClashDisplay-Medium]">
            <p>Copyright 2023 MNTN, Inc. Terms & Privacy</p>
          </div>
        </div>
        {/* Logo end */}
        {/* ---------------------------------------------------------------> */}
        <div className="links  text-white h-[200px] w-[40%] flex justify-between">
          <div className="More-blog">
            <h5 className="font-[ClashDisplay-Medium] text-[18px] text-[#FBD784] " >More on The Blog</h5>
            <ul>
              <li>
                <a href="#">About MNTN </a>
              </li>
              <li>
                <a href="#">Contributors & Writers </a>
              </li>
              <li>
                <a href="#">Write For Us </a>
              </li>
              <li>
                <a href="#">Contact Us </a>
              </li>
              <li>
                <a href="#">Privacy Policy </a>
              </li>
            </ul>
          </div>
          {/* --------------------------------------------------------------------- */}
          {/* 2nd Link Tab */}
          <div className="More-MTN">
            <h5 className="text-[18px] font-[ClashDisplay-Medium] text-[#FBD784] " >More on MNTN</h5>
            <ul>
              <li>
                <a href="#">The Team </a>
              </li>
              <li>
                <a href="#">Jobs </a>
              </li>
              <li>
                <a href="#">Press </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
