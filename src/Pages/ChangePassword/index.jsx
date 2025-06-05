import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";
import { useState } from "react";
import bg from "../../assets/images/background.jpg";
import { IoMdLogIn } from "react-icons/io";
import Button from "@mui/material/Button";
import { FaCircleUser } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import logo2 from "../../assets/images/logo2.jpg";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
const ChangePassword = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowPassword2, setIsShowPassword2] = useState(false);

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
          <img src={logo2} alt="" className="h-[350px] w-full" />
        </div>
        <h1 className="text-center text-[35px] font-[800] mt-3">
          You can change your password here
        </h1>

        <br />

        <form className="w-full px-8 mt-3">
          <div className="form-group mb-4 w-full">
            <h4 className="text-[14px] font-[500] mb-1">New Password</h4>
            <div className="relative w-full">
              <input
                type={isShowPassword === false ? "password" : "text"}
                className="w-full h-[50px] border-2 border-[rgba(0,0,0,0.1)] rounded-md
             focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3 "
              />
              <Button
                className="!absolute top-[7px] right-[5px] z-50 !rounded-full
               !w-[35px] !h-[35px] !min-w-[35px] !text-[rgba(0,0,0,0.8)]"
                onClick={() => setIsShowPassword(!isShowPassword)}
              >
                {isShowPassword === false ? (
                  <IoIosEye className="text-[18px]" />
                ) : (
                  <IoIosEyeOff className="text-[18px]" />
                )}
              </Button>
            </div>
          </div>
          <div className="form-group mb-4 w-full">
            <h4 className="text-[14px] font-[500] mb-1">
              Confirm New Password
            </h4>
            <div className="relative w-full">
              <input
                type={isShowPassword2 === false ? "password" : "text"}
                className="w-full h-[50px] border-2 border-[rgba(0,0,0,0.1)] rounded-md
             focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3 "
              />
              <Button
                className="!absolute top-[7px] right-[5px] z-50 !rounded-full
               !w-[35px] !h-[35px] !min-w-[35px] !text-[rgba(0,0,0,0.8)]"
                onClick={() => setIsShowPassword2(!isShowPassword2)}
              >
                {isShowPassword2 === false ? (
                  <IoIosEye className="text-[18px]" />
                ) : (
                  <IoIosEyeOff className="text-[18px]" />
                )}
              </Button>
            </div>
          </div>

          <Button className="btn-blue w-full !text-[20px] !mb-4">
            Change Password
          </Button>
        </form>
      </div>
      <br />
      <br />

      <br />
    </section>
  );
};

export default ChangePassword;
