import Footer from "./Footer/Footer"
import CardList from "./omponents/cardCompont/CardList"
import Navbar from "./omponents/Navbar/navbar"
import HeroSection from "./omponents/Section/hero/Hero"
function App() {

  return (
  <div>
    <div className="herosection">
      <HeroSection/>
    </div>
    <div className="cardsection flex flex-col items-center justify-center">
      <div className="Card w-[70%]">
        <CardList/>
      </div>
      <div className="footerSection w-[70%]">
        <Footer/>
      </div>
    </div>
  </div>
  )
}

export default App
