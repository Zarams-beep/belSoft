import Header from "../component/Header"
import Who from "../component/Who"
import Offer from "../component/Offer"
import Top from "../component/Top"
import Diagram from "../component/Diagram"
import FounderPage from "../component/FounderPage"
import Sponsor from "../component/Sponsor"
import Kaduna from "../component/Kaduna"
import IMG_2647_1 from "/IMG_2647_1.png";
import Community from "../component/Community"
const LandingPage =()=>{

    return(
        <>
            <Header/>
            <main className="pl-16 pr-16 pb-16 bg-[#FDF7FF] relative h-auto">
                <Top/>
                <Diagram/>
                <Who/>
                <Offer/>
                <FounderPage/>
                <Sponsor/>
            </main>
            <div className="bg-cover bg-no-repeat bg-center w-full h-auto pl-16 pr-16 pb-16 pt-8"

style={{ backgroundImage: `url(${IMG_2647_1})` }}>
                    <Kaduna/>
                    <Community/>
                </div>
            
        </>
    )
}
export default LandingPage