import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";
import { RiDashboard3Fill } from "react-icons/ri";
import Button from "@mui/material/Button";
import { IoLogOut } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { FaProductHunt } from "react-icons/fa6";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { IoBagHandle } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { Collapse } from "react-collapse";
import { useState, useContext } from "react";
import { MyContext } from "../../App";

const SideBar = () => {
  const [subMenuIndex, setSubMenuIndex] = useState(null);
  const isOpenSubMenu = (index) => {
    if (subMenuIndex === index) {
      setSubMenuIndex(null);
    } else {
      setSubMenuIndex(index);
    }
  };

  const context = useContext(MyContext);
  return (
    <>
      <div
        className={`siderbar fixed top-0 left-0 bg-[#fff] h-full
       border-r border-[rgba(0,0,0,0.1)] py-2 px-4 ${
         context.isSidebarOpen ? "w-[16%]" : "w-0"
       } `}
      >
        <div className="w-full py-2">
          <Link to="/">
            <img src={logo} alt="" className="w-[200px] " />
          </Link>
        </div>

        <ul className="mt-4">
          <li>
            <Link to="/">
              <Button className="w-full !capitalize !justify-start flex gap-3 items-center text-[14px] !text-[rgba(0,0,0,0.8)] !font-[600] !py-2 hover:bg-[#f1f1f1]">
                <RiDashboard3Fill className="text-[20px]" />
                <span>DashBoard</span>
              </Button>
            </Link>
          </li>
          <li>
            <Button
              className="w-full !capitalize !justify-start flex gap-3 items-center text-[14px] !text-[rgba(0,0,0,0.8)] !font-[600] !py-2 hover:bg-[#f1f1f1]"
              onClick={() => isOpenSubMenu(1)}
            >
              <IoHome className="text-[20px]" />
              <span>Home Slides</span>
              <span className="ml-auto flex items-center w-[30px] h-[30px] justify-center ">
                <FaAngleDown
                  className={`transition-all ${
                    subMenuIndex === 1 ? "rotate-180" : ""
                  }`}
                />
              </span>
            </Button>
            <Collapse isOpened={subMenuIndex === 1 ? true : false}>
              <ul className="w-full ">
                <li className="w-full ">
                  <Link to="/homeBanner">
                    <Button className="!w-full !text-[rgba(0,0,0,0.7)] !capitalize !justify-start !text-[13px] !font-[500] !pl-9 flex gap-3">
                      <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)] "></span>
                      Home Banner List
                    </Button>
                  </Link>
                </li>
                <li className="w-full ">
                  <Link to="/homeBanner/add">
                    <Button className="!w-full !text-[rgba(0,0,0,0.7)] !capitalize !justify-start !text-[13px] !font-[500] !pl-9 flex gap-3">
                      <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)] "></span>
                      Add Home Banner Slide
                    </Button>
                  </Link>
                </li>
              </ul>
            </Collapse>
          </li>
          <li>
            <Link to="/users">
              <Button className="w-full !capitalize !justify-start flex gap-3 items-center text-[14px] !text-[rgba(0,0,0,0.8)] !font-[600] !py-2 hover:bg-[#f1f1f1]">
                <FaCircleUser className="text-[20px]" />
                <span>Users</span>
              </Button>
            </Link>
          </li>
          <li>
            <Button
              className="w-full !capitalize !justify-start flex gap-3 items-center text-[14px] !text-[rgba(0,0,0,0.8)] !font-[600] !py-2 hover:bg-[#f1f1f1]"
              onClick={() => isOpenSubMenu(2)}
            >
              <FaProductHunt className="text-[20px]" />
              <span>Products</span>
              <span className="ml-auto flex items-center w-[30px] h-[30px] justify-center ">
                <FaAngleDown
                  className={`transition-all ${
                    subMenuIndex === 2 ? "rotate-180" : ""
                  }`}
                />
              </span>
            </Button>
            <Collapse isOpened={subMenuIndex === 2 ? true : false}>
              <ul className="w-full ">
                <li className="w-full ">
                  <Link to="/products">
                    <Button className="!w-full !text-[rgba(0,0,0,0.7)] !capitalize !justify-start !text-[13px] !font-[500] !pl-9 flex gap-3">
                      <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)] "></span>
                      Product List
                    </Button>
                  </Link>
                </li>
                <li className="w-full ">
                  <Link to="/product/upload">
                    <Button className="!w-full !text-[rgba(0,0,0,0.7)] !capitalize !justify-start !text-[13px] !font-[500] !pl-9 flex gap-3">
                      <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)] "></span>
                      Product Upload
                    </Button>
                  </Link>
                </li>
              </ul>
            </Collapse>
          </li>
          <li>
            <Button
              className="w-full !capitalize !justify-start flex gap-3 items-center text-[14px] !text-[rgba(0,0,0,0.8)] !font-[600] !py-2 hover:bg-[#f1f1f1]"
              onClick={() => isOpenSubMenu(3)}
            >
              <BiSolidCategoryAlt className="text-[20px]" />
              <span>Category</span>
              <span className="ml-auto flex items-center w-[30px] h-[30px] justify-center ">
                <FaAngleDown
                  className={`transition-all ${
                    subMenuIndex === 3 ? "rotate-180" : ""
                  }`}
                />
              </span>
            </Button>
            <Collapse isOpened={subMenuIndex === 3 ? true : false}>
              <ul className="w-full ">
                <li className="w-full ">
                  <Link to="/categories">
                    <Button className="!w-full !text-[rgba(0,0,0,0.7)] !capitalize !justify-start !text-[13px] !font-[500] !pl-9 flex gap-3">
                      <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)] "></span>
                      Category List
                    </Button>
                  </Link>
                </li>
                <li className="w-full ">
                  <Link to="/category/add">
                    <Button className="!w-full !text-[rgba(0,0,0,0.7)] !capitalize !justify-start !text-[13px] !font-[500] !pl-9 flex gap-3">
                      <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)] "></span>
                      Add a category
                    </Button>
                  </Link>
                </li>
                <li className="w-full ">
                  <Link to="/category/subCat">
                    <Button className="!w-full !text-[rgba(0,0,0,0.7)] !capitalize !justify-start !text-[13px] !font-[500] !pl-9 flex gap-3">
                      <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)] "></span>
                      Sub Category List
                    </Button>
                  </Link>
                </li>
                <li className="w-full ">
                  <Link to="/category/subCat/add">
                    <Button className="!w-full !text-[rgba(0,0,0,0.7)] !capitalize !justify-start !text-[13px] !font-[500] !pl-9 flex gap-3">
                      <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)] "></span>
                      Add a sub category
                    </Button>
                  </Link>
                </li>
              </ul>
            </Collapse>
          </li>
          <li>
            <Link to="/orders">
              <Button className="w-full !capitalize !justify-start flex gap-3 items-center text-[14px] !text-[rgba(0,0,0,0.8)] !font-[600] !py-2 hover:bg-[#f1f1f1]">
                <IoBagHandle className="text-[20px]" />
                <span>Orders</span>
              </Button>
            </Link>
          </li>
          <li>
            <Button className="w-full !capitalize !justify-start flex gap-3 items-center text-[14px] !text-[rgba(0,0,0,0.8)] !font-[600] !py-2 hover:bg-[#f1f1f1]">
              <IoLogOut className="text-[23px]" />
              <span>Logout</span>
            </Button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
