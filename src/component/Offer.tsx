import Ellipse_308 from "/Ellipse_308.png";
import Vector_2 from "/Vector_2.png";
import Vector_bottom from "/Vector_bottom.png";
const Offer = () => {
  return (
    <>
      <section className="offer-section mt-[8rem] relative">
        <h3 className="text-center font-[600] text-[45px] leading-[56.25px] mb-[1.5rem] max-mdd:text-[35px]">
          What We Offer
        </h3>

        <section className="offer-details relative z-[2]">
          <ul className="flex flex-col">
            {/* 1 */}
            <li className="border-b-[1px] border-b-[#3C3641]">
              
              <div className="flex items-center">
              <img src={Ellipse_308} alt="Ellipse 308" className="ellipse" />
                <h1 className="font-[600] text-[32px] w-[461.8px] max-mdd:w-[200px] text-wrap max-mdd:text-[28px]">
                  Monthly Meetups
                </h1>
              </div>
              <div className="flex items-center justify-between w-full">
                <div className="details">
                  <p>
                    Our cornerstone event, held on the last Friday of every
                    month, featuring keynote speakers, panel discussions, and
                    ample networking opportunities.
                  </p>
                </div>
                <div className="vector-div">
                  <img src={Vector_2} alt="Vector 2" className="vector" />
                </div>
              </div>
            </li>

            {/* 2 */}
            <li className="border-b-[1px] border-b-[#3C3641]">
              
              <div className="flex items-center">
              <img src={Ellipse_308} alt="Ellipse 308" className="ellipse" />
                <h1 className="font-[600] text-[32px] w-[461.8px] max-mdd:w-[200px] text-wrap max-mdd:text-[28px]">
                  Diverse Network
                </h1>
              </div>
              <div className="flex items-center justify-between w-full">
                <div className="details">
                  <p>
                    Connect with a wide range of professionals, from early-stage
                    founders to seasoned entrepreneurs, investors, and industry
                    experts.
                  </p>
                </div>
                <div className="vector-div">
                  <img src={Vector_2} alt="Vector 2" className="vector" />
                </div>
              </div>
            </li>

            {/* 3 */}

            <li className="border-b-[1px] border-b-[#3C3641]">
              
              <div className="flex items-center">
              <img src={Ellipse_308} alt="Ellipse 308" className="ellipse" />
                <h1 className="font-[600] text-[32px] w-[461.8px] max-mdd:w-[200px] text-wrap max-mdd:text-[28px]">
                  Knowledge Sharing
                </h1>
              </div>
              <div className="flex items-center justify-between w-full">
                <div className="details">
                  <p>
                    Connect with a wide range of professionals, from early-stage
                    founders to seasoned entrepreneurs, investors, and industry
                    experts.
                  </p>
                </div>
                <div className="vector-div">
                  <img src={Vector_2} alt="Vector 2" className="vector" />
                </div>
              </div>
            </li>

            {/* 4 */}
            <li className="border-b-[1px] border-b-[#3C3641]">
              
              <div className="flex items-center">
              <img src={Ellipse_308} alt="Ellipse 308" className="ellipse" />
                <h1 className="font-[600] text-[32px] w-[461.8px] max-mdd:w-[200px] text-wrap max-mdd:text-[28px]">
                  Collaboration Opportunities
                </h1>
              </div>
              <div className="flex items-center justify-between w-full">
                <div className="details">
                  <p>
                  Find potential co-founders, mentors, or partners for your next big venture.
                  </p>
                </div>
                <div className="vector-div">
                  <img src={Vector_2} alt="Vector 2" className="vector" />
                </div>
              </div>
            </li>

            {/* 5 */}
            <li className="border-b-[1px] border-b-[#3C3641]">
              
              <div className="flex items-center">
              <img src={Ellipse_308} alt="Ellipse 308" className="ellipse" />
                <h1 className="font-[600] text-[32px] w-[461.8px] max-mdd:w-[200px] text-wrap max-mdd:text-[28px]">
                  Community Support
                </h1>
              </div>
              <div className="flex items-center w-full justify-between">
                <div className="details">
                  <p>
                    Be part of a supportive ecosystem that celebrates successes
                    and provides guidance through challenges..
                  </p>
                </div>
                <div className="vector-div">
                  <img src={Vector_2} alt="Vector 2" className="vector" />
                </div>
              </div>
            </li>
          </ul>
        </section>
      </section>
      <img src={Vector_bottom} alt="Vector_bottom" className="absolute top-[140rem] left-[-5px] h-[1100px]"/>
    </>
  );
};
export default Offer;
