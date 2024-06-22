import img1 from "../assets/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg"
import img2 from "../assets/john-schnobrich-FlPc9_VocJ4-unsplash.jpg"
import img3 from "../assets/firmbee-com-SpVHcbuKi6E-unsplash.jpg"
import "./About.css"
function AboutUs ( { id } )
{
    return (
      <div className="aboutcontainer ">
        <h1 className="  mt-[-1rem] bg-gradient-to-r from-yellow-400 via-[#53b470d0] to-yellow-800 text-transparent bg-clip-text text-4xl md:text-5xl font-bold mb-8 text-center">
          Your Digital Marketing Partner Since 2015: Elevate Your Brand with Us!
        </h1>

        <div
          id={id}
          className="  flex items-center justify-center sm:justify-around  py-20 px-6 md:px-0"
        >
          <div className="ml-[2rem] mt-[-3rem] text-center sm:ml-[-4rem] max-w-[40rem] sm:text-left ">
            <div className="sm:text-lg text-[1.4rem] md:text-xl font-semibold italic ">
              <p className="break-all mb-4">
                <span className="text-[1.4rem] ml-[-0.7rem] not-italic font-bold text-gray-800 block mb-2">
                  Since 2015, we've been experts in digital marketing
                </span>
                Offering services like brand market research, 3-month marketing
                plans, full social media management, and monthly content
                planning. We also provide graphic design, logo creation,
                photography, and video editing services.
              </p>
              <p>
                Additionally, we offer content writing, advertising campaign
                analysis, campaign creation, and website and mobile app
                development. Our goal is to help your brand shine in the digital
                world.
              </p>
            </div>
          </div>

          <div className="sm:w-[35rem] relative flex items-center justify-center">
            <img
              className="w-[24rem] h-[16rem] mt-[-10rem] ml-[-19rem] absolute shadow-2xl transform transition-transform hover:z-50 hover:border-4 hover:border-[#3dbd63]  hover:scale-110 cursor-pointer"
              src={img1}
              alt="img1"
            />
            <img
              className="w-[21rem] h-[15rem] z-10 mt-[8rem] ml-[-5rem] absolute shadow-2xl transform transition-transform hover:border-4 hover:border-[#3dbd63]  hover:z-50 hover:scale-110 cursor-pointer"
              src={img2}
              alt="img2"
            />
            <img
              className="  w-[22rem] h-[14rem] mt-[-2rem] ml-[15rem] absolute shadow-2xl transform transition-transform hover:border-4 hover:border-[#3dbd63] hover:z-50 hover:scale-110 cursor-pointer"
              src={img3}
              alt="img3"
            />
          </div>
        </div>
      </div>
    );
}

export default AboutUs;
