import Frame_682 from "/Frame_682.png";
import arrow_white from "/arrow_white.svg";
const Sponsor = ()=>{


    return(
        <>
            <section className="sponsor z-[2] mt-[15rem] max-xl:mt-[8rem] max-llg:mb-[20rem]">
                <section className="sponsor-section-1">
                    <h6 className="text-[25px] leading-[37.5px] font-[700] text-[#5C00B3] max-lg:[18px]">Sponsor The Next Friday</h6>
                    
                    <div className="flex items-center justify-between mb-8 max-md:flex-col max-md:gap-[10px]">
                        <h3 className="w-[603px] font-[700] text-[55px] leading-[68.75px] text-[#000000] max-lg:text-[45px] max-md:w-full">Why Sponsor Founders Friday?</h3>
                        <p className="w-[645px] font-[400] text-[#4C4452] text-[16px] leading-[19.2px] text-justify max-md:w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac rutrum felis. Nulla nibh lorem, facilisis vel est at, vehicula dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo suscipit id. Maecenas ut ante quis quam lobortis consequat eu id turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                    </div>
                </section>

                <section className="sponsor-section-2 flex items-top gap-[110px] max-lg:flex-col max-lg:gap-[40px]">
                    <div className="self-center">
                        <img src={Frame_682} alt="Frame_682" className="w-[600px]"/>
                    </div>

                    <div className="w-[647px] h-[323px] flex flex-col max-lg:w-full">
                        <h6 className="font-[700] text-[28px] leading-[33.6px] text-[#0A0A0B] mb-1">How To Sponsor</h6>
                        <p className="font-[400] text-[24px] leading-[28.8px] italic text-[#605668] mb-4">Ready to Make an Impact?</p>
                        <p className="text-[18px] font-[400] leading-[21.6px] text-[#2C2830] mb-4">Fill out the form below or contact us at [contact email/phone number] to learn more about how you can sponsor the next Founders Friday</p>

                        <form>
                            <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(13rem,1fr))] mb-8">
                            <div className="form-box">
                                <p>Name</p>
                                <input type="text" placeholder="Full name" className="py-[25px] px-[22px] border-[1px] border-[#121212]" required/>
                            </div>

                            <div className="form-box">
                                <p>Company [optional]</p>
                                <input type="text" placeholder="Company name" className="py-[25px] px-[22px] border-[1px] border-[#121212]"/>
                            </div>

                            <div className="form-box">
                                <p>Email</p>
                                <input type="text" placeholder="Email address" className="py-[25px] px-[22px] border-[1px] border-[#121212]" required/>
                            </div>

                            <div className="form-box">
                                <p>Phone</p>
                                <input type="text" placeholder="Phone number" className="py-[25px] px-[22px] border-[1px] border-[#121212]" required/>
                            </div>
                            </div>
                            <button className="bg-[#9524FF] w-[235px] h-[70px] rounded-[10px] border-[2px] py-[15px] px-[30px] flex items-center text-[#FFFFFF] font-[500] leading-[28.8px] text-[20px] gap-[11px] justify-center">Sponsor <img src={arrow_white} alt="arrow white" className="w-[23.52px] h-[23.52px]" /></button>
                        </form>
                    </div>
                </section>
            </section>
        </>
    )
}
export default Sponsor