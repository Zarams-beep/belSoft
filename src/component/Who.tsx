import IMG_28571 from "/IMG_28571.png";
import Line_1 from "/Line_1.png";
import Money_Bag from "/Money_Bag.svg";
import Vector from "/Vector.svg";
const Who = () => {
  return (
    <>
      <section className="who-sec flex items-center gap-16 max-lg:flex-col relative z-[2] mt-[14rem]">
        <div className="img-container">
          <img src={IMG_28571} alt="IMG_28571" className="w-[698px] h-[564px] rounded-[20px] object-cover"/>
        </div>
       
        <div className="who-details w-[847px] h-[100%] relative max-lg:w-full">
        <img src={Line_1} alt="Line_1" className=" h-[95%] w-[30px] absolute left-[-2rem] top-5 bottom-[0px]"/>
          <div className="who-details2 flex relative max-lg:w-full">
          
            <div className="">
            <h3 className="text-[45px] font-[700] leading-[56.25px] h-auto max-sss:text-[35px]">Who Are We?</h3>
          <p className="text-[#8E8E93] font-[400] text-[18px] leading-[28.8px] text-justify pt-4 pb-16 max-sss:text-[15px]">
            Born from the vibrant startup ecosystem of Abuja, we recognized the
            need for a consistent, high-quality networking platform where
            founders, innovators, and tech enthusiasts could connect, share
            ideas, and foster collaboration.<br/> <br/> Join us at the next Founder's
            Friday and be part of Abuja's most dynamic startup community.
            Together, we're not just sharing ideas—we're shaping the future of
            tech in our city.
          </p>
            </div>
          </div>

          <div className="btn-container flex items-center gap-[36px] flex-wrap">
            <button className="bg-[#A649FF] px-[60px] py-[15px] gap-[10px] flex items-center rounded-[40px] text-[20px] text-[#FDF7FF] max-sss:text-[15px]">
              Register <img src={Vector} alt="Vector" className="max-sss:w-[20px]"/>
            </button>
            <button className="flex items-center px-[60px] py-[12px] gap-[10px] border-[3px] border-[#A649FF] rounded-[40px] text-[20px] text-[#A649FF] max-sss:text-[15px]">
              Donate <img src={Money_Bag} alt="Money Bag" className="max-sss:w-[20px]"/>
            </button>
          </div>
          <h6 className="font-[700] leading-[28.8px] pt-[5rem] text-[18px] ">
            Founder's Friday is more than just a meetup — it's a movement.
          </h6>
        </div>
      </section>
    </>
  );
};
export default Who;
