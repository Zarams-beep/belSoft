import belsoft_Logo from "/belsoft_Logo.png";
import arrow_right from "/Vector_3.png";
import { useState, } from "react";
const Header = () => {
  const [highlightHeader, setHighlightHeader] = useState("home");

  const handleHighlightHeader = (name:string) => {
    setHighlightHeader(name);
  };
  return (
    <>
      <header className="belSoftHeader bg-[#FDF7FF] w-full h-auto border-b-[0.5px] border-b-[#75687E] flex items-center pb-2 pt-2 relative z-[2]">
        <div className="headerDiv flex items-center justify-between w-full max-lgg:flex-col flex-wrap pl-[16px] pr-[16px]">
          {/* section 1 */}
          <section className="header-section header-section1 gap-[5px] max-ss:pt-[5px] max-ss:pb-[5px]">
            <img
              src={belsoft_Logo}
              alt="belsoft_Logo"
              className="w-[81.14px] h-[80.63px] max-ss:w-[40px] max-ss:h-[40px]"
            />
            <h2 className="text-[28px] font-[700] leading-[33.6px] max-ss:text-[20px]">
              Founder's Friday
            </h2>
          </section>

          {/* section 2 */}
          <section className="header-section header-section2 gap-[100px] max-mdd:flex-col max-mdd:gap-[20px]">
            <nav className="flex items-center justify-between gap-[30px] font-[700] text-[18px] leading-[28.8px] max-ss:text-[13px] max-s:gap-[5px] max-s:flex-col">
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

            {/* 'section 3 */}
            <section className="header-section header-section3">
              <button className="flex items-center justify-center w-[196px] h-[50px] rounded-[29px] border-2 px-[20px] py-[10px] gap-[11px] border-[#9524FF] text-[20px] leading-[28.8px] text-[#9524FF] max-ss:text-[15px] max-ss:w-[150px] max-ss:[40px]">
                Register
                <img src={arrow_right} alt="Arrow Right" className="w-[23.52px] h-[23.52px] max-ss:w-[20px] max-ss:h-[20px]"/>
              </button>
            </section>
          </section>
        </div>
      </header>
    </>
  );
};
export default Header;
