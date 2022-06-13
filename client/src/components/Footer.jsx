import logo from "../images/logo21.png";

const commanStyles2 = "text-white text-sm text-center";
const commanStyles = "text-white text-bas text-center mx-2 cursor-pointer";
const Footer = () => {
  return (
    <div className="flex w-full md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer  ">
      <div className="flex w-full sm:flex-row justify-between items-center mb-4 ">
        <div className="flex flex-[0.5] justify-center items-center ">
          <img src={logo} alt="Logo" className="w-32" />
        </div>
        <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
          <p className={commanStyles}>
            <a href="#Home">Home</a>
          </p>
          <p className={commanStyles}>
            <a href="#Exchange">Exchange</a>
          </p>
          <p className={commanStyles}>
            <a href="#Transactions">Transactions</a>
          </p>
          <p className={commanStyles}>
            <a href="#Services">Services</a>
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-2">
        <p className={commanStyles2}> Come Join Us </p>
        <p className={commanStyles2}> 19btrcs081@jainuniversity.in </p>
      </div>
      <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5  " />
      <div className="sm:w-[90%] w-full flex justify-between iems-center mt-5">
        <p className={commanStyles2}> @foxxx 2022 </p>
        <p className={commanStyles2}> all rights reserved </p>
      </div>
    </div>
  );
};
export default Footer;
