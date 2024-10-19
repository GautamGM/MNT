import logo from "C:/Users/Dell/Desktop/MNT/MNT/public/images/Logo (1).png"
import user from "../../../public/images/cart.png"
const Navbar=()=>{
const navbarOption=["Equipment","About us","Blog"]

    return(
        <header>
            <nav className="flex justify-between items-center  h-[50px]  font-[ClashDisplay-Medium] text-white ">
                <div className="logo"><img src={logo} alt="" /></div>
                <div className="navlink">
                    <ul className="flex  max-w-[300px]  justify-between ">
                        {navbarOption.map((option)=>(
                            <li className="p-4" >{option}</li>
                        ))}
                    </ul>
                </div>
                <div className="Acount flex">
                    <span><img src={user} alt="user" className="mr-2" /></span> <span>Acount</span>
                </div>
            </nav>
        </header>
    )
}
export default Navbar