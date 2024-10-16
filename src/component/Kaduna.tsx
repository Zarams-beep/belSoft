
import belsoft_Logo from "/belsoft_Logo.png";
import Vector_3 from "/Vector_3.png";

const Kaduna = () => {
    return (
        <>
            <section
               className="h-auto flex items-center justify-center gap-[228px] max-xl:pt-16 max-xl:flex-wrap max-xl:gap-[100px]"

            
            >
                <div className="section-1 w-[804px] ">
                    <h3 className="text-[45px] font-[700] leading-[62.5px] text-[#EBE9ED] max-sm:text-[30px]">
                        Founders Friday is coming to <br/><span className="text-[128px] leading-[160px] text-[#A649FF] max-sm:text-[100px]">Kaduna</span>
                    </h3>
                    <p className="text-[#EBE9ED] text-[20px] leading-[28.8px]font-400 w-[704px] text-justify max-xl:w-full max-sm:text-[15px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac rutrum felis. Nulla nibh lorem, facilisis vel est at, vehicula dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo suscipit id. Maecenas ut ante quis quam lobortis consequat eu id turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    </p>
                   <div className="max-xl:w-full max-xl:flex max-xl:justify-center">
                   <button className="w-[289px] h-[75px] rounded-[40px] border-[2px] py-[20px] px-[70px] border-[#A649FF] text-[#A649FF] flex items-center gap-[10px] mt-8 max-sm:w-[200px] max-sm:px-[20px] max-sm:py-[10px] max-sm:justify-center">
                        Register <img src={Vector_3} alt="arrow purple" />
                    </button>
                   </div>
                </div>

                <div className="section-2 w-[695px] max-xl:w-full">
                    <img src={belsoft_Logo} alt="belsoft_Logo" className="w-[695px] max-xl:w-full"/>
                </div>
            </section>
        </>
    );
};

export default Kaduna;
