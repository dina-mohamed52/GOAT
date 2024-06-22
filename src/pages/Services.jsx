import s from "./Services.module.css"
import {
  FaSearch,
 
  FaPencilAlt,
  FaBullhorn,

  FaChartLine,
} from "react-icons/fa";

const services = [
  {
    title: "Market Research and Strategy",
    details: [
      "Market Research for the Brand",
      "3-Month Marketing Plan for the Brand",
    ],
    icon: <FaSearch />,
  },
  {
    title: "Social Media and Content Management",
    details: [
      "Full Management of Social Media Platforms",
      "Monthly Content Plan",
      "Content Writing",
    ],
    icon: <FaPencilAlt />,
  },
  {
    title: "Design and Branding",
    details: [
      "Graphic Design",
      "Logo and Visual Identity Design",
      "Photography (Photos + Videos)",
      "Video Editing",
    ],
    icon: <FaChartLine />,
  },
  {
    title: "Advertising and Development",
    details: [
      "Advertising Campaign Analysis",
      "Creation of Advertising Campaigns",
      "Website and Mobile App Development",
    ],
    icon: <FaBullhorn />,
  },
];

const ServiceCard = ({ title, details, icon }) => {
  return (
    <div className={`${s.serviceCard} `}>
      <div className={`${s.icon}`}>{icon}</div>
      <h3 className="text-xl text-gray-600 font-semibold">{title}</h3>
      <ul>
        {details.map((detail, index) => (
          <li className="text-[0.85rem] mb-[-0.7rem] text-left font-sans text-gray-800  font font-medium" key={index}>
           {` \u2212 ${detail}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Services = ({id}) => {
  return (
    <div  id={id} className={`${s.scontainer}`}>
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          details={service.details}
          icon={service.icon}
        />
      ))}
    </div>
  );
};

export default Services;
