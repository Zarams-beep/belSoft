import Ellipse_1 from "/Ellipse_1.png";
import Ellipse_2 from "/Ellipse_2.png";
import Ellipse_3 from "/Ellipse_3.png";
import Ellipse_4 from "/Ellipse_4.png";
import Ellipse_5 from "/Ellipse_5.png";
import BoxArrowUpRight from "/BoxArrowUpRight.png";
import Right_arrows from "/Right_arrows.png";

const Top = () => {
  return (
    <>
      <section className="top-section pt-16 h-auto justify-between relative z-[2] w-[602px] max-xl:w-full">
        <div className="section-top-1 mb-[8rem] ">
          <h6 className="font-[600] text-[18px] leading-[21.6px]">
            Join our premier monthly meetup for startup founders and tech
            visionaries
          </h6>
          <h3 className="font-[700] text-[35px] leading-[62.5px]  text-[#5C00B3] pb-6">
            Connect, Collaborate, Innovate!
          </h3>
          <p className="text-[18px] text-justify font-[400] leading-[36px] text-[#000000] pb-8 ">
            Every last Friday of the month, we bring together the brightest
            minds in our local tech ecosystem. Whether you're a seasoned
            entrepreneur or just starting your journey, Founder's Friday is your
            launchpad for new ideas, valuable connections, and game-changing
            opportunities.
          </p>

          <div className="mb-[5rem]">
            <button className="flex items-center gap-[10px] w-[450px] h-[80px] rounded-[40px] border-[2px] p-[15px] border-[#9524FF] text-[20px] font-[400] leading-[33.6px] text-[#9524FF] mb-2 justify-center">
              Register For Our Next Event
              <img src={Right_arrows} alt="Right arrows" className="w-[30px] h-[30px]"/>
            </button>

            <p className="text-[16px] text-[#6750A4] leading-[19.2px] font-[600]">Join Us for our next meetup on the 26th of July 2024</p>
          </div>

          <div className="social-container">
            <section className="section-social-container flex items-center gap-[32px] mb-8 flex-wrap">
              <img src={Ellipse_1} alt="Ellipse_1" />
              <img src={Ellipse_2} alt="Ellipse_2" />
              <img src={Ellipse_3} alt="Ellipse_3" />
              <img src={Ellipse_4} alt="Ellipse_4" />
              <img src={Ellipse_5} alt="Ellipse_5" />
            </section>

            <section className="join-section flex items-center gap-[15px]">
              <p className="leading-[16.8px] text-[14px] font-[700]">
                Become a collaborator today
              </p>
              <img src={BoxArrowUpRight} alt="BoxArrowUpRight" />
            </section>
          </div>
        </div>

      </section>
    </>
  );
};
export default Top;
