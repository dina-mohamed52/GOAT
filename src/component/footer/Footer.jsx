import { CiLocationOn } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { IoCallOutline } from "react-icons/io5";
import styles from "./Footer.module.css";
import Contacts from "../contacts/Contacts";


const Footer = () => {
  const handleLocationClick = () => {
    window.open("https://maps.app.goo.gl/i7uME11YN9x258RD6", "_blank");
  };

  const handleMailClick = () => {
    window.open("mailto:goatmarketing766@gmail.com", "_blank");
  };

  const handlePhoneClick = (phoneNumber) => {
    window.open(`tel:${phoneNumber}`, "_blank");
  };

  const handleWhatsappClick = () => {
    window.open("https://wa.me/+201098389230", "_blank");
  };

  return (
    <footer className="text-gray-600 font-medium bg-gray-200 py-2">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className={`${styles.contactContainer}`}>
            <h3 className="text-2xl text-[#53b470] font-bold mb-4">
              Contact Us
            </h3>

            <p
              className="ml-[-2rem]  mt-[-1rem] cursor-pointer mb-[-2rem] flex  items-center"
              onClick={handleMailClick}
            >
              {" "}
              <span className="pr-2">
                {" "}
                <TfiEmail size={40} color="green" />
              </span>
              goatmarketing766@gmail.com
            </p>
            <div className="ml-[-2.5rem]   mt-2 flex flex-col items-start pt-[-1rem]">
              <p
                className="ml-[0.3rem]   cursor-pointer flex  items-center "
                onClick={() => handlePhoneClick("+20 1556097775")}
              >
                <IoCallOutline size={40} color="green" />
                Phone: +20 1556097775
              </p>
              <p
                className="ml-[0.3rem] mt-[-0.5rem] cursor-pointer flex  items-center"
                onClick={() => handleWhatsappClick()}
              >
                <IoCallOutline size={40} color="green" />
                Phone:+20 1098389230
              </p>
            </div>
          </div>
          <div className={`${styles.servicesContainer}`}>
            <h3 className="text-2xl text-[#53b470] font-bold mb-4">Services</h3>
            <ul className="text-lg">
              <li>Market Research and Strategy</li>
              <li>Social Media and Content Management</li>
              <li>Design and Branding</li>
              <li>Advertising and Development</li>
            </ul>
          </div>
          <div className={`${styles.followContainer}`}>
            <h3 className="text-2xl text-[#53b470] font-bold mb-4">
              Follow Us
            </h3>
            <div className="mt-[8rem] mr-[14rem] flex flex-col items-center justify-center space-y-4">
              <Contacts />
            </div>
          </div>
        </div>
        <div
          className={`${styles.copyRight} text-lg mt-[4rem] border-t border-gray-700 flex items-center justify-between`}
        >
          <div className="mt-[0.7rem] flex items-center">
            <span className="text-[#53b470]">©</span> 2024 GOAT. All rights
            reserved.
          </div>
          <div className="mt-[0.7rem]">
            GOAT<span className=" text-[#53b470f8]">®</span>for Digital Markting
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
