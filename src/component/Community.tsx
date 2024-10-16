import Vector_6 from "/Vector_6.png";
import pofile_4 from "/pofile_4.png";
import profile_5 from "/profile_5.png";
import Vector_3 from "/Vector_3.png";
import Frame_26 from "/Frame_26.png";
import Frame_603 from "/Frame_603.png";
import Frame_602 from "/Frame_602.png";
import arrow_white from "/arrow_white.svg";
import carousel_back from "/carousel_back.png";
import carousel_next from "/carousel_next.png";
import arrow_down from "/arrow_down.png";
import logo from "/logo.png";
import Right_arrows from "/Right_arrows.png";
import facebook_1 from "/facebook_1.png";
import insta_1 from "/insta_1.png";
import twitter_1 from "/twitter_1.png";
import { useState, } from "react";
const Community =()=>{
    const [highlightHeader, setHighlightHeader] = useState("home");

    const handleHighlightHeader = (name:string) => {
      setHighlightHeader(name);
    };
    return(
        <>
        <section className=" bg-[#ffff] h-auto">
            <section className="section-community pt-[6rem] mt-[5rem] flex flex-col justify-center pb-[5rem]">
                <header className="flex flex-col items-center justify-center">
                    <h3 className="text-[35px] font-[700] leading-[56.25px] text-center text-[#000000] mb-4">Register And Be Part of Our Community</h3>
                    <h6 className="text-[#8E8E93] text-[20px] leading-[28.8px] font-[400] w-[1000px] mb-32 max-xl:w-full max-sm:text-[15px]">Join our community of over 1000+ founders, developers, and tech junkies in general. Be inspired by people who live to inspire!</h6>
                </header>

                <div className="relative">
                    <img src={Vector_6} alt="Vector_6" className="relative w-[1743.5px] h-[279.62px]"/>
                    <div className=" flex absolute top-0 justify-between w-full">
                    <img src={Frame_602} alt="Frame_602" className="absolute top-[8rem] left-[2rem] w-[138px] h-[138px]"/>
                    <img src={Frame_603} alt="Frame_603" className="absolute top-[-1rem] left-[7rem] w-[138px] h-[138px]"/>
                    <img src={profile_5} alt="profile_5" className="absolute top-[-4rem] left-[18rem] w-[138px] h-[138px]"/>
                    <img src={pofile_4} alt="pofile_4" className="absolute top-[-4rem] right-[10rem] w-[138px] h-[138px]"/>
                    <img src={profile_5} alt="profile_5" className="absolute top-[4rem] right-[22rem] w-[138px] h-[138px]"/>
                    <img src={pofile_4} alt="pofile_4" className="absolute top-[6rem] right-[0rem] w-[138px] h-[138px]"/>
                    <img src={profile_5} alt="profile_5" className="absolute top-[6rem] right-[36rem] w-[138px] h-[138px]"/>
                    </div>
                    
                    
                </div>

                <div className="flex items-center justify-center">
                <button className="w-[289px] h-[75px] rounded-[40px] border-[2px] py-[20px] px-[70px] border-[#A649FF] text-[#A649FF] flex items-center gap-[10px] mt-8 max-sm:w-[200px] max-sm:px-[20px] max-sm:py-[10px] max-sm:justify-center">
                        Register <img src={Vector_3} alt="arrow purple" />
                    </button>
                </div>
            </section>

            <section className="flex items-center gap-[55px] pr-16 pl-16 max-xl:flex-wrap">
                <div className="">
                    <img src={Frame_26} alt="Frame_26" className="w-[795px]"/>
                </div>

                <div className="">
                    <h6 className="text-[#000000] font-[600] text-[24px] leading-[28.8px] mb-4">At Founder’s Friday, Every Friday Is a Learning Experience!</h6>
                    <p className="text-[18px] font-[600] leading-[21.6px] text-[#000000] mb-10">Join us in our mission to transform ideas into impact and shape the future of Nigeria’s startup landscape.</p>
                    <button className="bg-[#A649FF] w-[289px] h-[75px] rounded-[40px] py-[20px] px-[70px] gap-[10px] flex items-center text-[20px] text-[#FDF7FF] font-[600] leading-[28.8px]">Register <img src={arrow_white} alt="arrow_white" className="w-[35px] h-[35px]"/></button>
                </div>
            </section>

            <section className="pr-16 pl-16">
                <header className="flex justify-center mb-16 max-xl:flex-col">
                    <div className="mt-16">
                    <h3 className="font-[700] text-[25px] leading-[56.25px] text-[#000000] w-[590px]">What Do Our Attendees Have To Say?</h3>
                    <p className="text-center text-[#8E8E93]">Well See For Yourself!</p>
                    </div>
                    <div className="flex items-center gap-[30px] w-[97.92px]">
                        <img src={carousel_back} alt="carousel_back" className="w-[97.92px] h-[97.92px]"/>
                        <img src={carousel_next} alt="carousel_next" className="w-[97.92px] h-[97.92px]"/>
                    </div>
                </header>

                <div className="flex items-center gap-[100px] h-auto pb-16 max-mddd:flex-wrap">
                    <div className="short-profile">
                        <img src={Frame_602} alt="Frame_602" />
                        <h3 className="font-[600] text-[30px] leading-[37.5px]">Mr Belba Ngoy</h3>
                        <p className="text-[20px] font-[400] leading-[28.8px]">Always a remarkable experience for my team and myself</p>
                    </div>

                    <div className="short-profile">
                        <img src={Frame_602} alt="Frame_602" />
                        <h3 className="font-[600] text-[30px] leading-[37.5px]">Mr Belba Ngoy</h3>
                        <p className="text-[20px] font-[400] leading-[28.8px]">Always a remarkable experience for my team and myself</p>
                    </div>

                    <div className="short-profile">
                        <img src={Frame_602} alt="Frame_602" />
                        <h3 className="font-[600] text-[30px] leading-[37.5px]">Mr Belba Ngoy</h3>
                        <p className="text-[20px] font-[400] leading-[28.8px]">Always a remarkable experience for my team and myself</p>
                    </div>
                </div>
            </section>

            <section className="pr-16 pl-16">
                <h3 className="text-[45px] font-[700] leading-[56.25px]">FAQs</h3>

                <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(30rem,1fr))] mt-6 pl-20 max-mddd:pl-0">
                    <div className="flex items-center gap-[12px] max-smm:flex-col">
                    <p className="text-[#340066] text-[20px] font-[600] leading-[28.8px] max-md:text-[15px]">Lorem ipsum dolor sit amet, consectetur adi elit.</p>
                    <img src={arrow_down} alt="arrow_down" className="w-[17.34px] h-[8.6px]"/>
                    </div>

                    <div className="flex items-center gap-[12px] max-smm:flex-col">
                    <p className ="text-[#340066] text-[20px] font-[600] leading-[28.8px] max-md:text-[15px] ">Lorem ipsum dolor sit amet, consectetur adi elit.</p>
                    <img src={arrow_down} alt="arrow_down" className="w-[17.34px] h-[8.6px]"/>
                    </div>

                    <div className="flex items-center gap-[12px] max-smm:flex-col">
                    <p className ="text-[#340066] text-[20px] font-[600] leading-[28.8px] max-md:text-[15px] ">Lorem ipsum dolor sit amet, consectetur adi elit.</p>
                    <img src={arrow_down} alt="arrow_down" className="w-[17.34px] h-[8.6px]"/>
                    </div>

                    <div className="flex items-center gap-[12px] max-smm:flex-col">
                    <p className="text-[#340066] text-[20px] font-[600] leading-[28.8px]  max-md:text-[15px]">Lorem ipsum dolor sit amet, consectetur adi elit.</p>
                    <img src={arrow_down} alt="arrow_down" className="w-[17.34px] h-[8.6px]"/>
                    </div>

                    <div className="flex items-center gap-[12px] max-smm:flex-col">
                    <p className="text-[#340066] text-[20px] font-[600] leading-[28.8px]  max-md:text-[15px]">Lorem ipsum dolor sit amet, consectetur adi elit.</p>
                    <img src={arrow_down} alt="arrow_down" className="w-[17.34px] h-[8.6px]"/>
                    </div>

                    <div className="flex items-center gap-[12px] max-smm:flex-col">
                    <p className="text-[#340066] text-[20px] font-[600] leading-[28.8px]  max-md:text-[15px]">Lorem ipsum dolor sit amet, consectetur adi elit.</p>
                    <img src={arrow_down} alt="arrow_down" className="w-[17.34px] h-[8.6px]"/>
                    </div>
                </div>
            </section>
            
            <section className="pr-16 pl-16 mt-16 pt-6 border-t-[0.5px] border-t-[#75687E] pb-4">
                <img src={logo} alt="logo" className="w-[204px] h-[81px]"/>
                
                <section className="flex flex-col justify-center items-center mt-4">
                    <h3 className="text-[45px] font-[700] leading-[56.25px] text-[#000000] w-[945px] text-center mb-8 max-llg:text-[30px] max-llg:w-[80%]">Want To Be A Part Of Abuja’s Biggest Tech Community?</h3>
                    <button className="flex items-center w-[486.8px] h-[80px]gap-[10px] p-[20px] border-[2px] rounded-[40px] border-[#9524FF] text-[#9524FF] text-[24px] font-[400] leading-[33.6px] justify-center gap-[10px] max-llg:w-[300px] max-llg:text-[18px]max-llg:h-[40px] max-sss:text-[14px]">
                    Register For Our Next Event
                    <img src={Right_arrows} alt="Right_arrows" className="max-llg:w-[30px] max-ss:w-[20px]"/>
                    </button>
                </section>
            </section>

            <footer className="mt-16 mr-16 ml-16 border-t-[1px] border-t-[#B86DFF] pb-16 pt-8">

            <section className="flex items-center justify-between max-mddd:flex-wrap max-mddd:gap-4">
            <nav className="flex items-center gap-[20px]">
                <img src={facebook_1} alt="facebook_1" />
                <img src={insta_1} alt="insta_1" />
                <img src={twitter_1} alt="twitter_1" />
            </nav>

            <nav className="flex items-center justify-between gap-[30px] font-[700] text-[18px] leading-[28.8px] max-smm:flex-wrap ">
              <h6
                onClick={() => handleHighlightHeader("home")}
                className={`transition duration-300 ease-in-out hover:cursor-pointer hover:text-[#8300FF] ${
                  highlightHeader === "home" ? "text-[#8300FF]" : "text-black"
                }`}
              >
                Home
              </h6>

              <h6
                onClick={() => handleHighlightHeader("about")}
                className={`transition duration-300 ease-in-out hover:cursor-pointer hover:text-[#8300FF] ${
                  highlightHeader === "about" ? "text-[#8300FF]" : "text-black"
                }`}
              >
                About Us
              </h6>

              <h6
                onClick={() => handleHighlightHeader("gallery")}
                className={`transition duration-300 ease-in-out hover:cursor-pointer hover:text-[#8300FF] ${
                  highlightHeader === "gallery"
                    ? "text-[#8300FF]"
                    : "text-black"
                }`}
              >
                Gallery
              </h6>

              <h6
                onClick={() => handleHighlightHeader("contact")}
                className={`transition duration-300 ease-in-out hover:cursor-pointer hover:text-[#8300FF] ${
                  highlightHeader === "contact"
                    ? "text-[#8300FF]"
                    : "text-black"
                }`}
              >
                Contact Us
              </h6>
            </nav>

            </section>
            </footer>
            </section>
        </>
    )
}
export default Community