import { CgMail } from "react-icons/cg";

import { FaBehance, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Contacts() {
  const handleWhatsappClick = () => {
    window.open("https://wa.me/+20 1556097775", "_blank");
  };

  const handleFacebookClick = () => {
    window.open(
      "https://www.facebook.com/greatestofalltime.marketing/",
      "_blank"
    );
  };

  const handleBehanceClick = () => {
    window.open("https://www.behance.net/", "_blank");
  };

  const handleMailClick = () => {
    window.open("mailto:ibuild@ibuild-egy.com", "_blank");
  };

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/goatmarketing23/", "_blank");
  };

  return (
    <div className="mt-[-8rem] sm:ml-[8rem] ml-[13rem] flex items-center justify-end  space-x-4">
      <div
        onClick={handleWhatsappClick}
        className="bg-green-600 opacity-50 text-white rounded-full p-2 hover:opacity-100 cursor-pointer transition-all duration-500 transform translateZ(0)"
      >
        <FaWhatsapp className="text-[3rem]" />
      </div>
      <div
        onClick={handleFacebookClick}
        className="bg-blue-500 opacity-50 text-white rounded-full p-2 hover:opacity-100 cursor-pointer transition-all duration-500 transform translateZ(0)"
      >
        <FaFacebook className="text-[3rem]" />
      </div>
      <div
        onClick={handleBehanceClick}
        className="bg-black opacity-50 text-white rounded-full p-2 hover:opacity-100 cursor-pointer transition-all duration-500 transform translateZ(0)"
      >
        <FaBehance className="text-[3rem]" />
      </div>
      <div
        onClick={handleMailClick}
        className="bg-yellow-500 opacity-50 text-white rounded-full p-2 hover:opacity-100 cursor-pointer transition-all duration-500 transform translateZ(0)"
      >
        <CgMail className="text-[3rem]" />
      </div>
      <div
        onClick={handleInstagramClick}
        className="bg-pink-700 opacity-50 text-white rounded-full p-2 hover:opacity-100 cursor-pointer transition-all duration-500 transform translateZ(0)"
      >
        <FaInstagram className="text-[3rem]" />
      </div>
    </div>
  );
}

export default Contacts;
