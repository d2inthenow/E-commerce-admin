import { useState } from "react";
import DashBoardBoxes from "../../Components/DashboardBoxes";
import { IoMdHand } from "react-icons/io";
import logo1 from "../../assets/images/logo1.jpg";
import Button from "@mui/material/Button";
import { AiOutlinePlus } from "react-icons/ai";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import Badge from "../../Components/Badge";
import image from "../../../../d2project/src/assets/images/ProductItem/product1.jpg";
const DashBoard = () => {
  const [isOpenOrderProduct, setIsOpenOrderProduct] = useState(null);

  const isShowOrderProduct = (index) => {
    if (isOpenOrderProduct === index) {
      setIsOpenOrderProduct(null);
    } else {
      setIsOpenOrderProduct(index);
    }
  };
  return (
    <>
      <div className="w-full bg-white py-2 px-5 border border-[rgba(0,0,0,0.1)] flex items-center justify-between gap-8 mb-5 rounded-md">
        <div className="info">
          <h1 className="text-[35px] font-bold leading-12 mb-3">
            Good Morning, <br />
            D2 <IoMdHand className="text-yellow-400 text-[80px]" />
          </h1>
          <p>
            Here's What happening on your store today . See the statistics at
            once
          </p>
          <br />
          <Button className="btn-blue !capitalize flex gap-1">
            <AiOutlinePlus className="text-[20px]" />
            Add Product
          </Button>
        </div>

        <img src={logo1} alt="" className="w-[250px] h-[350px]" />
      </div>
      <DashBoardBoxes />

      <div className="card my-4 shadow-md sm:rounded-lg bg-white">
        <div className="flex items-center justify-between px-5 py-5">
          <h3 className="text-[18px] font-[600]">Recent Orders</h3>
        </div>

        <div className="relative overflow-x-auto mt-5 pb-5">
          <table className="w-full text-sm text-left ">
            <thead className="text-xs text-black uppercase bg-[#c0c0c0] ">
              <tr>
                <th scope="col" className="!px-6 !py-3">
                  &nbsp;
                </th>
                <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                  Order Id
                </th>
                <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                  Paymant Id
                </th>
                <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                  Name
                </th>
                <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                  Phone Number
                </th>
                <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                  Address
                </th>
                <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                  Pincode
                </th>
                <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                  Total Amount
                </th>
                <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                  Email
                </th>
                <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                  User Id
                </th>
                <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                  Order Status
                </th>
                <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="!bg-white border-b ">
                <td className="!px-6 !py-4 font-medium whitespace-nowrap">
                  <Button
                    className="!w-[35px] !h-[35px] !min-w-[35px]
                         !rounded-full !bg-[#f1f1f1]"
                    onClick={() => isShowOrderProduct(0)}
                  >
                    {isOpenOrderProduct === 0 ? (
                      <FaAngleUp className="text-[18px] text-[rgba(0,0,0,0.7)]" />
                    ) : (
                      <FaAngleDown className="text-[18px] text-[rgba(0,0,0,0.7)]" />
                    )}
                  </Button>
                </td>
                <td className="!px-6 !py-4 font-medium">
                  <span className="text-[#3872fa] font-[600]">
                    316768798132168v8a7534g
                  </span>
                </td>
                <td className="!px-6 !py-4 font-medium">
                  <span className="text-[#3872fa] font-[600]">
                    pay_T68f7T654Hjn
                  </span>
                </td>
                <td className="!px-6 !py-4 font-medium whitespace-nowrap">
                  Dong Duong dep trai
                </td>
                <td className="!px-6 !py-4 font-medium">0343546321</td>
                <td className="!px-6 !py-4 font-medium ">
                  <span className="block w-[300px]">
                    248 Truong Sa , Quan Phu Nhuan , Tp Ho Chi Minh
                  </span>
                </td>
                <td className="!px-6 !py-4 font-medium">11313</td>
                <td className="!px-6 !py-4 font-medium">100000$</td>
                <td className="!px-6 !py-4 font-medium">
                  duongneymar0023@gmail.com
                </td>
                <td className="!px-6 !py-4 font-medium">546F64q5q3af687z</td>
                <td className="!px-6 !py-4 font-medium">
                  <Badge status="delivered" />
                </td>
                <td className="!px-6 !py-4 font-medium whitespace-nowrap">
                  21-3-2025
                </td>
              </tr>

              {isOpenOrderProduct === 0 && (
                <tr>
                  <td className="!pl-20" colSpan="6">
                    <div className="relative overflow-x-auto ">
                      <table className="w-full text-sm text-left ">
                        <thead className="text-xs text-black uppercase bg-[#c0c0c0] ">
                          <tr>
                            <th
                              scope="col"
                              className="!px-6 !py-3 whitespace-nowrap"
                            >
                              Product Id
                            </th>
                            <th
                              scope="col"
                              className="!px-6 !py-3 whitespace-nowrap"
                            >
                              Product Title
                            </th>
                            <th
                              scope="col"
                              className="!px-6 !py-3 whitespace-nowrap"
                            >
                              Image
                            </th>
                            <th
                              scope="col"
                              className="!px-6 !py-3 whitespace-nowrap"
                            >
                              Quantity
                            </th>
                            <th
                              scope="col"
                              className="!px-6 !py-3 whitespace-nowrap"
                            >
                              Price
                            </th>
                            <th
                              scope="col"
                              className="!px-6 !py-3 whitespace-nowrap"
                            >
                              Sub Total
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="!bg-white border-b ">
                            <td className="!px-6 !py-4 font-medium">
                              <span className="text-[#3872fa] font-[600]">
                                621649asd319492sIAS5d6
                              </span>
                            </td>
                            <td className="!px-6 !py-4 font-medium">
                              The best Jacket with jeans
                            </td>
                            <td className="!px-6 !py-4 font-medium whitespace-nowrap">
                              <img
                                src={image}
                                alt=""
                                className="w-[60px] h-[60px] rounded-md object-cover"
                              />
                            </td>
                            <td className="!px-6 !py-4 font-medium">3</td>
                            <td className="!px-6 !py-4 font-medium ">100$</td>
                            <td className="!px-6 !py-4 font-medium">300$</td>
                          </tr>
                          <tr className="!bg-white border-b ">
                            <td className="!px-6 !py-4 font-medium">
                              <span className="text-[#3872fa] font-[600]">
                                621649asd319492sIAS5d6
                              </span>
                            </td>
                            <td className="!px-6 !py-4 font-medium">
                              The best Jacket with jeans
                            </td>
                            <td className="!px-6 !py-4 font-medium whitespace-nowrap">
                              <img
                                src={image}
                                alt=""
                                className="w-[60px] h-[60px] rounded-md object-cover"
                              />
                            </td>
                            <td className="!px-6 !py-4 font-medium">3</td>
                            <td className="!px-6 !py-4 font-medium ">100$</td>
                            <td className="!px-6 !py-4 font-medium">300$</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              )}

              <tr className="!bg-white border-b ">
                <td className="!px-6 !py-4 font-medium whitespace-nowrap">
                  <Button
                    className="!w-[35px] !h-[35px] !min-w-[35px]
                         !rounded-full !bg-[#f1f1f1]"
                    onClick={() => isShowOrderProduct(1)}
                  >
                    {isOpenOrderProduct === 1 ? (
                      <FaAngleUp className="text-[18px] text-[rgba(0,0,0,0.7)]" />
                    ) : (
                      <FaAngleDown className="text-[18px] text-[rgba(0,0,0,0.7)]" />
                    )}
                  </Button>
                </td>
                <td className="!px-6 !py-4 font-medium">
                  <span className="text-[#3872fa] font-[600]">
                    316768798132168v8a7534g
                  </span>
                </td>
                <td className="!px-6 !py-4 font-medium">
                  <span className="text-[#3872fa] font-[600]">
                    pay_T68f7T654Hjn
                  </span>
                </td>
                <td className="!px-6 !py-4 font-medium whitespace-nowrap">
                  Dong Duong dep trai
                </td>
                <td className="!px-6 !py-4 font-medium">0343546321</td>
                <td className="!px-6 !py-4 font-medium ">
                  <span className="block w-[300px]">
                    248 Truong Sa , Quan Phu Nhuan , Tp Ho Chi Minh
                  </span>
                </td>
                <td className="!px-6 !py-4 font-medium">11313</td>
                <td className="!px-6 !py-4 font-medium">100000$</td>
                <td className="!px-6 !py-4 font-medium">
                  duongneymar0023@gmail.com
                </td>
                <td className="!px-6 !py-4 font-medium">546F64q5q3af687z</td>
                <td className="!px-6 !py-4 font-medium">
                  <Badge status="delivered" />
                </td>
                <td className="!px-6 !py-4 font-medium whitespace-nowrap">
                  21-3-2025
                </td>
              </tr>

              {isOpenOrderProduct === 1 && (
                <tr>
                  <td className="!pl-20" colSpan="6">
                    <div className="relative overflow-x-auto ">
                      <table className="w-full text-sm text-left ">
                        <thead className="text-xs text-black uppercase bg-[#c0c0c0] ">
                          <tr>
                            <th
                              scope="col"
                              className="!px-6 !py-3 whitespace-nowrap"
                            >
                              Product Id
                            </th>
                            <th
                              scope="col"
                              className="!px-6 !py-3 whitespace-nowrap"
                            >
                              Product Title
                            </th>
                            <th
                              scope="col"
                              className="!px-6 !py-3 whitespace-nowrap"
                            >
                              Image
                            </th>
                            <th
                              scope="col"
                              className="!px-6 !py-3 whitespace-nowrap"
                            >
                              Quantity
                            </th>
                            <th
                              scope="col"
                              className="!px-6 !py-3 whitespace-nowrap"
                            >
                              Price
                            </th>
                            <th
                              scope="col"
                              className="!px-6 !py-3 whitespace-nowrap"
                            >
                              Sub Total
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="!bg-white border-b ">
                            <td className="!px-6 !py-4 font-medium">
                              <span className="text-[#3872fa] font-[600]">
                                621649asd319492sIAS5d6
                              </span>
                            </td>
                            <td className="!px-6 !py-4 font-medium">
                              The best Jacket with jeans
                            </td>
                            <td className="!px-6 !py-4 font-medium whitespace-nowrap">
                              <img
                                src={image}
                                alt=""
                                className="w-[60px] h-[60px] rounded-md object-cover"
                              />
                            </td>
                            <td className="!px-6 !py-4 font-medium">3</td>
                            <td className="!px-6 !py-4 font-medium ">100$</td>
                            <td className="!px-6 !py-4 font-medium">300$</td>
                          </tr>
                          <tr className="!bg-white border-b ">
                            <td className="!px-6 !py-4 font-medium">
                              <span className="text-[#3872fa] font-[600]">
                                621649asd319492sIAS5d6
                              </span>
                            </td>
                            <td className="!px-6 !py-4 font-medium">
                              The best Jacket with jeans
                            </td>
                            <td className="!px-6 !py-4 font-medium whitespace-nowrap">
                              <img
                                src={image}
                                alt=""
                                className="w-[60px] h-[60px] rounded-md object-cover"
                              />
                            </td>
                            <td className="!px-6 !py-4 font-medium">3</td>
                            <td className="!px-6 !py-4 font-medium ">100$</td>
                            <td className="!px-6 !py-4 font-medium">300$</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
