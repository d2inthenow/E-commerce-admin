import "./App.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashBoard from "./Pages/Dashboard";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import { useState } from "react";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Products from "./Pages/Products";
import { IoMdClose } from "react-icons/io";

import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Slide from "@mui/material/Slide";
import AddProduct from "./Pages/Products/addProduct";
import HomeSliderBanners from "./Pages/HomeSliderBanners";
import AddHomeSlide from "./Pages/HomeSliderBanners/addHomeSlide";
import CategoryList from "./Pages/Category";
import AddCategory from "./Pages/Category/addCategory";
import MyContext from "./context/MyContext";
import SubCategoryList from "./Pages/Category/subCategoryList";
import AddSubCategory from "./Pages/Category/addSubCategory";
import Users from "./Pages/Users";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  const [isOpenFullScreenPanel, setIsOpenFullScreenPanel] = useState({
    open: false,
    model: "",
  });

  const router = createBrowserRouter([
    // Main Route
    {
      path: "/",
      exact: true,
      element: (
        <>
          <section className="main">
            <Header />
            <div className="contentMain flex">
              <div
                className={`sidebarWrapper overflow-hidden ${
                  isSidebarOpen === true ? "w-[16%]" : "w-0 opacity-0"
                } transition-all  duration-500`}
              >
                <SideBar />
              </div>
              <div
                className={`contentRight py-4 px-5 ${
                  isSidebarOpen === false ? "w-[100%]" : "w-[84%]"
                } transition-all duration-500`}
              >
                <DashBoard />
              </div>
            </div>
          </section>
        </>
      ),
    },
    // Login Route
    {
      path: "/login",
      exact: true,
      element: (
        <>
          <Login />
        </>
      ),
    },
    // Sign Up Route
    {
      path: "/sign-up",
      exact: true,
      element: (
        <>
          <SignUp />
        </>
      ),
    },
    // Products Route
    {
      path: "/products",
      exact: true,
      element: (
        <>
          <section className="main">
            <Header />
            <div className="contentMain flex">
              <div
                className={`sidebarWrapper overflow-hidden ${
                  isSidebarOpen === true ? "w-[16%]" : "w-0 opacity-0"
                } transition-all  duration-500`}
              >
                <SideBar />
              </div>
              <div
                className={`contentRight py-4 px-5 ${
                  isSidebarOpen === false ? "w-[100%]" : "w-[84%]"
                } transition-all duration-500`}
              >
                <Products />
              </div>
            </div>
          </section>
        </>
      ),
    },
    // Home Slider Banners Route
    {
      path: "/homeSlide/list",
      exact: true,
      element: (
        <>
          <section className="main">
            <Header />
            <div className="contentMain flex">
              <div
                className={`sidebarWrapper overflow-hidden ${
                  isSidebarOpen === true ? "w-[16%]" : "w-0 opacity-0"
                } transition-all  duration-500`}
              >
                <SideBar />
              </div>
              <div
                className={`contentRight py-4 px-5 ${
                  isSidebarOpen === false ? "w-[100%]" : "w-[84%]"
                } transition-all duration-500`}
              >
                <HomeSliderBanners />
              </div>
            </div>
          </section>
        </>
      ),
    },
    // Category Route
    {
      path: "/category/list",
      exact: true,
      element: (
        <>
          <section className="main">
            <Header />
            <div className="contentMain flex">
              <div
                className={`sidebarWrapper overflow-hidden ${
                  isSidebarOpen === true ? "w-[16%]" : "w-0 opacity-0"
                } transition-all  duration-500`}
              >
                <SideBar />
              </div>
              <div
                className={`contentRight py-4 px-5 ${
                  isSidebarOpen === false ? "w-[100%]" : "w-[84%]"
                } transition-all duration-500`}
              >
                <CategoryList />
              </div>
            </div>
          </section>
        </>
      ),
    },
    // Sub Category Route
    {
      path: "/subCategory/list",
      exact: true,
      element: (
        <>
          <section className="main">
            <Header />
            <div className="contentMain flex">
              <div
                className={`sidebarWrapper overflow-hidden ${
                  isSidebarOpen === true ? "w-[16%]" : "w-0 opacity-0"
                } transition-all  duration-500`}
              >
                <SideBar />
              </div>
              <div
                className={`contentRight py-4 px-5 ${
                  isSidebarOpen === false ? "w-[100%]" : "w-[84%]"
                } transition-all duration-500`}
              >
                <SubCategoryList />
              </div>
            </div>
          </section>
        </>
      ),
    },
    // Users Route
    {
      path: "/users",
      exact: true,
      element: (
        <>
          <section className="main">
            <Header />
            <div className="contentMain flex">
              <div
                className={`sidebarWrapper overflow-hidden ${
                  isSidebarOpen === true ? "w-[16%]" : "w-0 opacity-0"
                } transition-all  duration-500`}
              >
                <SideBar />
              </div>
              <div
                className={`contentRight py-4 px-5 ${
                  isSidebarOpen === false ? "w-[100%]" : "w-[84%]"
                } transition-all duration-500`}
              >
                <Users />
              </div>
            </div>
          </section>
        </>
      ),
    },
  ]);

  const values = {
    isSidebarOpen,
    setIsSidebarOpen,
    isLogin,
    setIsLogin,
    isOpenFullScreenPanel,
    setIsOpenFullScreenPanel,
  };
  return (
    <>
      <MyContext.Provider value={values}>
        <RouterProvider router={router} />

        <Dialog
          fullScreen
          open={isOpenFullScreenPanel.open}
          onClose={() =>
            setIsOpenFullScreenPanel({
              open: false,
            })
          }
          TransitionComponent={Transition}
        >
          <AppBar sx={{ position: "relative" }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={() =>
                  setIsOpenFullScreenPanel({
                    open: false,
                  })
                }
                aria-label="close"
              >
                <IoMdClose className="text-gray-800" />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                <span className="text-gray-800">
                  {isOpenFullScreenPanel?.model}
                </span>
              </Typography>
            </Toolbar>
          </AppBar>
          {isOpenFullScreenPanel?.model === "Add Product" && <AddProduct />}
          {isOpenFullScreenPanel?.model === "Add Home Slide" && (
            <AddHomeSlide />
          )}
          {isOpenFullScreenPanel?.model === "Add New Category" && (
            <AddCategory />
          )}
          {isOpenFullScreenPanel?.model === "Add New Sub Category" && (
            <AddSubCategory />
          )}
        </Dialog>
      </MyContext.Provider>
    </>
  );
}

export default App;
