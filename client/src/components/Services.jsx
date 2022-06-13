import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className=" lg:w-9/12 flex flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div
      className={`w-10 h-10 rounded-full flex justify-center items-center ${color} `}
    >
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1 ">
      <div className="text-xl text-white font-semibold text-gradient py-3">
        {title}
      </div>
      <div className="text-sm text-white text-lg py-3">{subtitle}</div>
    </div>
  </div>
);
const Services = () => {
  return (
    <div
      className="flex md:flex-row flex-col w-full justify-center items-center gradient-bg-services"
      id="Services"
    >
      <div className="flex md:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 flex-col justify-start items-start">
          <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient">
            Services that we <br />
            continue to improve
          </h1>
        </div>
      </div>
      <div className=" flex-1 flex-col justify-start items-center">
        <ServiceCard
          color="bg-[#2952E3]"
          title="Security Guaranteed"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="Security Is Guaranteed. We always Maintain privacy of Our customers without compromising in quality of out product"
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="Best Exchange Rate"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="We Try to provide the cheapest exchange rates with lowest gas fees"
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="Fastest Transactions"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle="Speed of our transactions are lightning fast"
        />
      </div>
    </div>
  );
};
export default Services;
