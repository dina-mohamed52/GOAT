import AdsItem from "../component/ads/AdsItem";
import s from "./OurWork.module.css"
function OurWork({id}) {
    return (
      <div  id={id} className={`${s.workcontainer}`}>
        <div className="flex justify-center mt-[-4rem]  ">
          <h1
            style={{ transform: "skewX(-18deg)" }}
            className={` ${s.sha} text-5xl  rounded-lg p-6 w-[24rem] md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-yellow-400 via-[#53b470d0] to-yellow-800 transform   text-transparent bg-clip-text shadow-xl`}
          >
            our campaigns
          </h1>
        </div>

        <AdsItem />
      </div>
    );
}

export default OurWork
