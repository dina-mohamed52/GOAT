import Logo from "../component/Logo.jsx";

import s from "./Home.module.css"
import { Link, animateScroll as scroll } from "react-scroll";


function Home ()
{
  const scrollToSection = (id) => {
    scroll.scrollTo(id, {
      duration: 600,
      delay: 0,
      smooth: "easeInOut",
    });
    
  };
    return (
      <div className={`${s.container}`}>
        <div className="flex items-center justify-start gap-[6rem]  mb-[2rem] mt-[-2rem]">
          <Logo />
        </div>
        <div className="mt-[-4rem] mb-[3rem] ">
          <h1 className={`  ${s.title}`}>G.O.A.T</h1>
          <h2 className={`  ${s.subtitle}`}>
            greatest of all time .. digital markting
          </h2>
        </div>
        <div className="flex items-center justify-center">
          <Link
            to="services"
            smooth={true}
            duration={600}
            onClick={() => scrollToSection("services")}
            className={` cursor-pointer ${s.btn} ${s.Banimation} text-none uppercase py-4 px-12 inline-block rounded-full
  transition-all duration-[500ms] relative bg-white text-gray-500 text-[1.2rem]
  hover:shadow-lg hover:shadow-black/20
  active:translate-y-1 active:shadow-md active:shadow-black/20
  after:content-[''] after:w-full after:h-full after:left-0 after:top-0
  after:rounded-2xl after:absolute after:z-[-1] after:transition-all after:duration-[600ms]
  hover:after:bg-white  hover:after:opacity-0`}
          >
            discover our services
          </Link>
        </div>
      </div>
    );
}

export default Home
