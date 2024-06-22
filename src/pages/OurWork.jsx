import AdsItem from "../component/ads/AdsItem";
import s from "./OurWork.module.css"
function OurWork({id}) {
    return (
      <div  id={id} className={`${s.workcontainer}`}>
        <div className=" sm:mt-[-4rem] mt-[-15rem] sm:mb-0 mb-[2rem] flex justify-center   ">
          <h1
            style={{ transform: "skewX(-18deg)" }}
            className={` ${s.sha} text-3xl  sm:text-5xl rounded-lg p-6 w-[24rem] md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-yellow-400 via-[#53b470d0] to-yellow-800 transform   text-transparent bg-clip-text shadow-xl`}
          >
            our campaigns
          </h1>
        </div>

        <AdsItem />
      </div>
    );
}

export default OurWork
