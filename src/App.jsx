import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashBoard from "./Pages/Dashboard";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import { createContext, useState } from "react";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";

const MyContext = createContext();
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  const router = createBrowserRouter([
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
    {
      path: "/login",
      exact: true,
      element: (
        <>
          <Login />
        </>
      ),
    },
    {
      path: "/sign-up",
      exact: true,
      element: (
        <>
          <SignUp />
        </>
      ),
    },
  ]);

  const values = {
    isSidebarOpen,
    setIsSidebarOpen,
    isLogin,
    setIsLogin,
  };
  return (
    <>
      <MyContext.Provider value={values}>
        <RouterProvider router={router} key={isSidebarOpen} />
      </MyContext.Provider>
    </>
  );
}

export default App;
export { MyContext };
