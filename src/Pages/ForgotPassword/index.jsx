import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";
import bg from "../../assets/images/background.jpg";
import { IoMdLogIn } from "react-icons/io";
import Button from "@mui/material/Button";
import { FaCircleUser } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import logo2 from "../../assets/images/logo2.jpg";

const ForgotPassword = () => {
  return (
    <section className="bg-[#f1f1f1] w-full ">
      <header className="w-full bg-none fixed top-0 left-0 z-50 px-4 py-3 flex items-center justify-between">
        <Link to="/">
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
          Having trouble signing in?
          <br />
          Reset your password
        </h1>
        <br />
        <form className="w-full px-8 mt-3">
          <div className="form-group mb-4 w-full">
            <h4 className="text-[14px] font-[500] mb-1">Email</h4>
            <input
              type="email"
              className="w-full h-[50px] border-2 border-[rgba(0,0,0,0.1)] rounded-md
             focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3"
              placeholder="Enter your email"
            />
          </div>

          <Button className="btn-blue w-full !text-[20px] !mb-4">
            Reset Password
          </Button>
          <div className="text-center flex items-center justify-center gap-2 my-3">
            <span>Dont's want to reset?</span>
            <Link
              to="/login"
              className="text-[#3872fa] text-[15px] font-[700] hover:underline hover:text-[#000]"
            >
              Sign in?
            </Link>
          </div>
        </form>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </section>
  );
};

export default ForgotPassword;
