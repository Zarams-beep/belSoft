import VectorLine_1 from "/VectorLine_1.png";
import Frame1_17 from "/Frame1_17.png";
import Frame2_17 from "/Frame2_17.png";
import IMG_2501_1 from "/IMG_2501_1.png";
import IMG_2645_1 from "/IMG_2645_1.png";
const Diagram = ()=>{

    return(
        <>
             <div className="section-top-2">
            <img src={VectorLine_1} alt="VectorLine 1" className="absolute top-[-1rem] h-[1125.5px] w-997px left-[18rem]" />

            <div className="max-xl:flex max-xl:relative max-xl:items-center max-xl:justify-between max-xl:flex-wrap">
            <img src={IMG_2645_1} alt="IMG_2645_1" className="absolute top-[50px] right-[17rem] pt-[9px] w-[331.8px] h-[347.32px] max-xl:relative max-xl:right-0 max-xl:top-0" />
            <img src={Frame2_17} alt="Frame2_17" className="absolute top-[12rem] right-[2rem] pt-[9px] h-[387.3px] w-[361.8px] max-xl:relative max-xl:right-0 max-xl:top-0"/>
            <img src={IMG_2501_1} alt="IMG_2501_1" className="absolute top-[32rem] right-[25rem] pt-[9px] h-[215.01px] w-[201px] max-xl:relative max-xl:right-0 max-xl:top-0" />
            <img src={Frame1_17} alt="Frame1_17" className="absolute top-[42rem] right-[15rem] pt-[9px] h-[107.25px] w-[100.5px] max-xl:relative max-xl:right-0 max-xl:top-0"/>
            </div>
        </div>
        </>
    )
}
export default Diagram