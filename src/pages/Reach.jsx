import React, { useState, useEffect } from "react";
import s from "./Reach.module.css";

function Reach() {
  const [reachCount, setReachCount] = useState(2500);
  const [impressionsCount, setImpressionsCount] = useState(2500);
  const [ugiCount, setUgiCount] = useState(100000);
  const reachValue = 95874;
  const impressionsValue = 105359;
  const ugiValue = 3674;

  useEffect(() => {
    const reachInterval = setInterval(() => {
      setReachCount((prevCount) => {
        if (prevCount >= reachValue) {
          clearInterval(reachInterval);
          return prevCount;
        }
        return prevCount + 10;
      });
    }, 1);

    const impressionsInterval = setInterval(() => {
      setImpressionsCount((prevCount) => {
        if (prevCount >= impressionsValue) {
          clearInterval(impressionsInterval);
          return prevCount;
        }
        return prevCount + 10;
      });
    }, 1);

    const ugiInterval = setInterval(() => {
      setUgiCount((prevCount) => {
        if (prevCount >= ugiValue) {
          clearInterval(ugiInterval);
          return prevCount;
        }
        return prevCount + 1;
      });
    }, 1);

    return () => {
      clearInterval(reachInterval);
      clearInterval(impressionsInterval);
      clearInterval(ugiInterval);
    };
  }, []);

  return (
    <div className={`${s.Rcontainer}`}>
      <div className={` ${s.subcontainer} mt-[-10rem] grid grid-cols-1 sm:grid-cols-3 gap-4 `}>
        <div className="text-center">
          <h1 className="text-[3rem] sm:text-[5rem] text-[#53b470] font-bold">
            Reach
          </h1>
          <p className="text-[2rem] sm:text-[3rem] text-gray-200 font-semibold">
            {reachCount}
          </p>
        </div>
        <div className="text-center">
          <h1 className="text-[3rem] sm:text-[5rem] text-[#53b470] capitalize font-bold">
            Impressions
          </h1>
          <p className="text-[2rem] sm:text-[3rem] text-gray-200 font-semibold">
            {impressionsCount}
          </p>
        </div>
        <div className="text-center">
          <h1 className="text-[3rem] sm:text-[3rem] mt-[2rem] text-[#53b470] capitalize font-bold">
            amount spent
          </h1>
          <p className="text-[2rem] sm:text-[3rem] text-gray-200 font-semibold">
            {ugiCount}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Reach;
