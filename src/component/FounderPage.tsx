import arrow_white from "/arrow_white.svg";
import IMG_2501_3 from "/IMG_2501_3.png";
import IMG_2519_2 from "/IMG_2519_2.png";

const FounderPage = ()=>{

    return(
        <>
            <section className="founder-section flex items-top gap-[194px] mt-[8rem] relative z-[2] max-xl:flex-col max-xl:gap-[50px]">
                <div className="founder-section1 w-[690px] max-xl:w-full">
                    <h6 className="text-[30px] font-[700] leading-[37.5px] text-[#5C00B3] max-xl:w-full max-xl:text-center">Founders Friday</h6>
                    <h3 className="text-[55px] leading-[68.75px] font-[700] text-[#000000] w-[603px] mt-4 max-xl:w-full max-xl:text-center">What Happens At Founders Friday</h3>
                    <p className="mt-8 text-[20px] leading-[28.8px] font-[400] w-[690px] text-[#4C4452] text-justify mb-8 max-xl:w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac rutrum felis. Nulla nibh lorem, facilisis vel est at, vehicula dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo suscipit id. Maecenas ut ante quis quam lobortis consequat eu id turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                    <div className="max-xl:w-full max-xl:flex max-xl:justify-center">
                    <button className="flex items-center w-[235px] gap-[11px] bg-[#9524FF] h-[70px] py-[15px] px-[30px] rounded-[10px] border-[2px] text-[24px]leading-[28.8px] font-[500] text-[#FFFFFF] justify-center">Learn More <img src={arrow_white} alt="arrow white"/></button>
                    </div>
                    
                </div>

                <div className="founder-section2 w-[533px] relative max-xl:flex max-xl:items-center max-xl:gap-[2rem] max-xl:w-full max-mdd:flex-wrap">
                    <img src={IMG_2501_3} alt="IMG_2501_3" className="rounded-[15px] w-[380px] h-[400px] object-cover absolute max-xl:relative max-xl:w-full" />
                    <img src={IMG_2519_2} alt="IMG_2519_2" className="rounded-[15px] w-[361px] h-[390px] object-cover absolute top-[12rem] right-[9rem] max-xl:relative max-xl:right-[0] max-xl:top-[0] max-xl:w-full"/>
                </div>

               
            </section>
        </>
    )
}
export default FounderPage