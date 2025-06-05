import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";
import { useState } from "react";
import bg from "../../assets/images/background.jpg";
import { IoMdLogIn } from "react-icons/io";
import Button from "@mui/material/Button";
import { FaCircleUser } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import OtpBox from "../../Components/OtpBox";
import shield from "../../assets/images/shield.jpg";

const VerifyAccount = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const [otp, setOtp] = useState("");
  const handleOtpChange = (value) => {
    setOtp(value);
  };
  return (
    <section className="bg-[#f1f1f1] w-full h-[100vh] ">
      <header className="w-full bg-none fixed top-0 left-0 z-50 px-4 py-3 flex items-center justify-between">
        <Link>
          <img src={logo} alt="" className="w-[200px] " />
        </Link>

        <div className="flex items-center gap-2">
          <NavLink to="/login" exact={true} activeClassName="active">
            <Button className="!bg-[white] !rounded-full !text-[rgba(0,0,0,0.8)] !px-5 flex gap-2">
              <IoMdLogIn className="text-[18px]" /> Login
            </Button>
          </NavLink>
          <NavLink to="/sign-up" exact={true}>
            <Button className="!bg-[white] !rounded-full !text-[rgba(0,0,0,0.8)] !px-5 flex gap-2">
              <FaCircleUser className="text-[18px]" /> Sign Up
            </Button>
          </NavLink>
        </div>
      </header>
      <img
        src={bg}
        alt=""
        className="w-full h-full fixed top-0 left-0 opacity-80"
      />

      <div className="loginBox bg-[#f1f1f1] border border-[rgba(0,0,0,0.8)] card w-[600px] h-[auto] mx-auto mt-20 relative z-50 ">
        <div className="">
          <img src={shield} className="w-[600px] h-[300px] m-auto" />
        </div>
        <h1 className="text-center text-[35px] font-[800] mt-3">
          Hey!!!!!
          <br />
          Please verify your account
        </h1>

        <p className="text-center text-[15px]">
          OTP send to{" "}
          <span className="text-[#3872fa] font-bold">duong0023@gmail.com</span>
        </p>

        <br />
        <div className="text-center flex items-center justify-center flex-col">
          <OtpBox length={6} onChange={handleOtpChange} />
        </div>

        <br />
        <div className="w-[300px] m-auto my-3">
          <Button className="btn-blue w-full">Verify OTP</Button>
        </div>
      </div>
    </section>
  );
};

export default VerifyAccount;
