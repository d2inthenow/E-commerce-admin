import { useState, useContext } from "react";
import DashBoardBoxes from "../../Components/DashboardBoxes";
import { IoMdHand } from "react-icons/io";
import logo1 from "../../assets/images/logo1.jpg";
import Button from "@mui/material/Button";
import { AiOutlinePlus } from "react-icons/ai";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import Badge from "../../Components/Badge";
import image from "../../../../d2project/src/assets/images/ProductItem/product1.jpg";
import product from "../../assets/images/product/product1.jpg";
import product1 from "../../assets/images/product/product.jpg";
import product2 from "../../assets/images/product/product2.jpg";
import product3 from "../../assets/images/product/product3.jpg";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import ProgressBar from "../../Components/ProgressBar";
import { CiEdit } from "react-icons/ci";
import { TbEyeSearch } from "react-icons/tb";
import { FaRegTrashCan } from "react-icons/fa6";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Pagination from "@mui/material/Pagination";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { FaCloudArrowDown } from "react-icons/fa6";
import { GrAdd } from "react-icons/gr";
import MyContext from "../../context/MyContext";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const columns = [
  { id: "product", label: "PRODUCT", minWidth: 150 },
  { id: "category", label: "CATEGORY", minWidth: 100 },
  { id: "subCategory", label: "SUB CATEGORY", minWidth: 150 },
  { id: "price", label: "PRICE", minWidth: 130 },
  { id: "sales", label: "SALES", minWidth: 130 },
  { id: "action", label: "ACTION", minWidth: 130 },
];

const DashBoard = () => {
  const [isOpenOrderProduct, setIsOpenOrderProduct] = useState(null);
  const [categoryFilterValue, setCategoryFilterValue] = useState("");

  const isShowOrderProduct = (index) => {
    if (isOpenOrderProduct === index) {
      setIsOpenOrderProduct(null);
    } else {
      setIsOpenOrderProduct(index);
    }
  };

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [chart1Data, setChart1Data] = useState([
    {
      name: "JAN",
      TotalUsers: 4000,
      TotalSales: 2400,
      amt: 2400,
    },
    {
      name: "FEB",
      TotalUsers: 3000,
      TotalSales: 1398,
      amt: 2210,
    },
    {
      name: "MAR",
      TotalUsers: 2000,
      TotalSales: 9800,
      amt: 2290,
    },
    {
      name: "APR",
      TotalUsers: 2780,
      TotalSales: 3908,
      amt: 2000,
    },
    {
      name: "MAY",
      TotalUsers: 1890,
      TotalSales: 4800,
      amt: 2181,
    },
    {
      name: "JUN",
      TotalUsers: 2390,
      TotalSales: 3800,
      amt: 2500,
    },
    {
      name: "JUL",
      TotalUsers: 3490,
      TotalSales: 4300,
      amt: 2100,
    },
    {
      name: "AUG",
      TotalUsers: 1890,
      TotalSales: 4800,
      amt: 2181,
    },
    {
      name: "SEP",
      TotalUsers: 2390,
      TotalSales: 3800,
      amt: 2500,
    },
    {
      name: "OCT",
      TotalUsers: 3490,
      TotalSales: 4300,
      amt: 2100,
    },
    {
      name: "NOV",
      TotalUsers: 1890,
      TotalSales: 4800,
      amt: 2181,
    },
    {
      name: "DEC",
      TotalUsers: 2390,
      TotalSales: 3800,
      amt: 2500,
    },
  ]);

  const context = useContext(MyContext);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleChangeCategoryFilter = (event) => {
    setCategoryFilterValue(event.target.value);
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
          <Button
            className="btn-blue !capitalize flex gap-1"
            onClick={() =>
              context.setIsOpenFullScreenPanel({
                open: true,
                model: "Add Product",
              })
            }
          >
            <AiOutlinePlus className="text-[20px]" />
            Add Product
          </Button>
        </div>

        <img src={logo1} alt="" className="w-[250px] h-[300px] rounded-md" />
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

      <div className="card my-4 shadow-md sm:rounded-lg bg-white">
        <div className="flex items-center justify-between px-5 py-5">
          <h3 className="text-[18px] font-[600]">Products (Tailwind CSS)</h3>
        </div>

        <div className="relative overflow-x-auto mt-5 ">
          <table className="w-full text-sm text-left ">
            <thead className="text-xs text-black uppercase bg-[#c0c0c0] ">
              <tr>
                <th scope="col" className="px-6 pr-0 py-3" width="10%">
                  <div className="w-[60px]">
                    <Checkbox {...label} size="small" />
                  </div>
                </th>
                <th scope="col" className="!px-0 !py-3 whitespace-nowrap">
                  PRODUCT
                </th>
                <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                  CATEGORY
                </th>
                <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                  SUB CATEGORY
                </th>

                <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                  PRICE
                </th>
                <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                  SALES
                </th>
                <th scope="col" className="!px-6 !py-3 whitespace-nowrap">
                  ACTION
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-[white] border-b ">
                <td className="px-6 py-3 pr-0">
                  <div className="w-[60px]">
                    <Checkbox {...label} size="small" />
                  </div>
                </td>
                <td className="px-0 py-3">
                  <div className="flex items-center gap-4 w-[300px]">
                    <div className="img w-[65px] h-[65px] overflow-hidden rounded-md group">
                      <Link to="/product/1">
                        <img
                          src={product}
                          alt=""
                          className="w-full group-hover:scale-105 transition-all"
                        />
                      </Link>
                    </div>

                    <div className="info w-[75%]">
                      <Link to="/product/1">
                        <h3 className="font-[600] text-[14px] leading-5 hover:text-[#3872fa]">
                          ABSOL:Ngầu và lạnh lùng là 2 từ để diễn tả về Absol.
                        </h3>
                      </Link>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-3">Electronics</td>
                <td className="px-6 py-3">Kid</td>
                <td className="px-6 py-3">
                  <div className="flex flex-col gap-1">
                    <span className="oldPrice line-through text-gray-500 text-[15px] font-[500]">
                      $2412
                    </span>
                    <span className="price text-[#3872fa] text-[15px] font-[600]">
                      $2003
                    </span>
                  </div>
                </td>
                <td className="px-6 py-3">
                  <p className="text-[14px] w-[100px]">
                    <span className="font-[600]">123</span> sales
                  </p>
                  <ProgressBar value={70} type="warning" />
                </td>
                <td className="px-6 py-3">
                  <div className="flex items-center gap-2">
                    <Button className="!w-[40px] !h[40px] !rounded-full hover:!bg-[#f1f1f1] !bg-[#f1f1f1] !min-w-[40px]">
                      <CiEdit className="text-[20px] !text-[rgba(0,0,0,0.7)]" />
                    </Button>

                    <Button className="!w-[40px] !h[40px] !rounded-full hover:!bg-[#f1f1f1] !bg-[#f1f1f1] !min-w-[40px]">
                      <TbEyeSearch className="text-[20px] !text-[rgba(0,0,0,0.7)]" />
                    </Button>

                    <Button className="!w-[40px] !h[40px] !rounded-full hover:!bg-[#f1f1f1] !bg-[#f1f1f1] !min-w-[40px]">
                      <FaRegTrashCan className="text-[20px] !text-[rgba(0,0,0,0.7)]" />
                    </Button>
                  </div>
                </td>
              </tr>
              <tr className="bg-[white] border-b ">
                <td className="px-6 py-3 pr-0">
                  <div className="w-[60px]">
                    <Checkbox {...label} size="small" />
                  </div>
                </td>
                <td className="px-0 py-3">
                  <div className="flex items-center gap-4 w-[300px]">
                    <div className="img w-[65px] h-[65px] overflow-hidden rounded-md group">
                      <Link to="/product/1">
                        <img
                          src={product1}
                          alt=""
                          className="w-full group-hover:scale-105 transition-all"
                        />
                      </Link>
                    </div>

                    <div className="info w-[75%]">
                      <Link to="/product/1">
                        <h3 className="font-[600] text-[14px] leading-5 hover:text-[#3872fa]">
                          Florges có nét pha lẫn giữa người cá và 1 bông hoa rực
                          rỡ. Thứ bao quanh cổ và màu sắc cơ thể sẽ thay đổi tùy
                          thuộc vào bông hoa mà Flabebe mang theo lúc chưa tiền
                          hóa
                        </h3>
                      </Link>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-3">Fashion</td>
                <td className="px-6 py-3">Women</td>
                <td className="px-6 py-3">
                  <div className="flex flex-col gap-1">
                    <span className="oldPrice line-through text-gray-500 text-[15px] font-[500]">
                      $2412
                    </span>
                    <span className="price text-[#3872fa] text-[15px] font-[600]">
                      $2003
                    </span>
                  </div>
                </td>
                <td className="px-6 py-3">
                  <p className="text-[14px] w-[100px]">
                    <span className="font-[600]">123</span> sales
                  </p>
                  <ProgressBar value={70} type="warning" />
                </td>
                <td className="px-6 py-3">
                  <div className="flex items-center gap-2">
                    <Button className="!w-[40px] !h[40px] !rounded-full hover:!bg-[#f1f1f1] !bg-[#f1f1f1] !min-w-[40px]">
                      <CiEdit className="text-[20px] !text-[rgba(0,0,0,0.7)]" />
                    </Button>

                    <Button className="!w-[40px] !h[40px] !rounded-full hover:!bg-[#f1f1f1] !bg-[#f1f1f1] !min-w-[40px]">
                      <TbEyeSearch className="text-[20px] !text-[rgba(0,0,0,0.7)]" />
                    </Button>

                    <Button className="!w-[40px] !h[40px] !rounded-full hover:!bg-[#f1f1f1] !bg-[#f1f1f1] !min-w-[40px]">
                      <FaRegTrashCan className="text-[20px] !text-[rgba(0,0,0,0.7)]" />
                    </Button>
                  </div>
                </td>
              </tr>
              <tr className="bg-[white] border-b ">
                <td className="px-6 py-3 pr-0">
                  <div className="w-[60px]">
                    <Checkbox {...label} size="small" />
                  </div>
                </td>
                <td className="px-0 py-3">
                  <div className="flex items-center gap-4 w-[300px]">
                    <div className="img w-[65px] h-[65px] overflow-hidden rounded-md group">
                      <Link to="/product/1">
                        <img
                          src={product2}
                          alt=""
                          className="w-full group-hover:scale-105 transition-all"
                        />
                      </Link>
                    </div>

                    <div className="info w-[75%]">
                      <Link to="/product/1">
                        <h3 className="font-[600] text-[14px] leading-5 hover:text-[#3872fa]">
                          Nơi có Xerneas xất hiện là nơi có sự sống vàt thiên
                          nhiên trù phú, Xerneas có thể có thể cứu rỗi cả một
                          cánh rừng đã bị hủy diệt bằng sức mạnh của mình.
                        </h3>
                      </Link>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-3">Beautiful</td>
                <td className="px-6 py-3">Men</td>
                <td className="px-6 py-3">
                  <div className="flex flex-col gap-1">
                    <span className="oldPrice line-through text-gray-500 text-[15px] font-[500]">
                      $2412
                    </span>
                    <span className="price text-[#3872fa] text-[15px] font-[600]">
                      $2003
                    </span>
                  </div>
                </td>
                <td className="px-6 py-3">
                  <p className="text-[14px] w-[100px]">
                    <span className="font-[600]">123</span> sales
                  </p>
                  <ProgressBar value={70} type="warning" />
                </td>
                <td className="px-6 py-3">
                  <div className="flex items-center gap-2">
                    <Button className="!w-[40px] !h[40px] !rounded-full hover:!bg-[#f1f1f1] !bg-[#f1f1f1] !min-w-[40px]">
                      <CiEdit className="text-[20px] !text-[rgba(0,0,0,0.7)]" />
                    </Button>

                    <Button className="!w-[40px] !h[40px] !rounded-full hover:!bg-[#f1f1f1] !bg-[#f1f1f1] !min-w-[40px]">
                      <TbEyeSearch className="text-[20px] !text-[rgba(0,0,0,0.7)]" />
                    </Button>

                    <Button className="!w-[40px] !h[40px] !rounded-full hover:!bg-[#f1f1f1] !bg-[#f1f1f1] !min-w-[40px]">
                      <FaRegTrashCan className="text-[20px] !text-[rgba(0,0,0,0.7)]" />
                    </Button>
                  </div>
                </td>
              </tr>
              <tr className="bg-[white] border-b ">
                <td className="px-6 py-3 pr-0">
                  <div className="w-[60px]">
                    <Checkbox {...label} size="small" />
                  </div>
                </td>
                <td className="px-0 py-3">
                  <div className="flex items-center gap-4 w-[300px]">
                    <div className="img w-[65px] h-[65px] overflow-hidden rounded-md group">
                      <Link to="/product/1">
                        <img
                          src={product3}
                          alt=""
                          className="w-full group-hover:scale-105 transition-all"
                        />
                      </Link>
                    </div>

                    <div className="info w-[75%]">
                      <Link to="/product/1">
                        <h3 className="font-[600] text-[14px] leading-5 hover:text-[#3872fa]">
                          Vẻ đẹp của Suicune hoang sơ như 1 dòng nước tự nhiên.
                          Nổi bật với một miếng pha lê tinh khiết ngay giữa
                          trán, chiếc bờm cơ bản là một dòng sông uốn lượn theo
                          chiều gió thổi và 2 dải ruy băng chạy dọc thân mình
                        </h3>
                      </Link>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-3">Electronics</td>
                <td className="px-6 py-3">Kid</td>
                <td className="px-6 py-3">
                  <div className="flex flex-col gap-1">
                    <span className="oldPrice line-through text-gray-500 text-[15px] font-[500]">
                      $2412
                    </span>
                    <span className="price text-[#3872fa] text-[15px] font-[600]">
                      $2003
                    </span>
                  </div>
                </td>
                <td className="px-6 py-3">
                  <p className="text-[14px] w-[100px]">
                    <span className="font-[600]">123</span> sales
                  </p>
                  <ProgressBar value={70} type="warning" />
                </td>
                <td className="px-6 py-3">
                  <div className="flex items-center gap-2">
                    <Button className="!w-[40px] !h[40px] !rounded-full hover:!bg-[#f1f1f1] !bg-[#f1f1f1] !min-w-[40px]">
                      <CiEdit className="text-[20px] !text-[rgba(0,0,0,0.7)]" />
                    </Button>

                    <Button className="!w-[40px] !h[40px] !rounded-full hover:!bg-[#f1f1f1] !bg-[#f1f1f1] !min-w-[40px]">
                      <TbEyeSearch className="text-[20px] !text-[rgba(0,0,0,0.7)]" />
                    </Button>

                    <Button className="!w-[40px] !h[40px] !rounded-full hover:!bg-[#f1f1f1] !bg-[#f1f1f1] !min-w-[40px]">
                      <FaRegTrashCan className="text-[20px] !text-[rgba(0,0,0,0.7)]" />
                    </Button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-end py-5 px-4">
          <Pagination count={10} color="primary" />
        </div>
      </div>

      <div className="card my-4 shadow-md sm:rounded-lg bg-white">
        <div className="flex items-center justify-between px-5 py-5 ">
          <h2 className="text-[18px] font-[600]">Products (Material UI CSS)</h2>
        </div>
        <div className="flex items-center w-full pl-5 justify-between pr-5">
          <div className="col w-[20%]">
            <h4 className="text-[15px] font-[600] mb-2 ">Category By</h4>

            <Select
              className="w-full mb-3"
              size="small"
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={categoryFilterValue}
              onChange={handleChangeCategoryFilter}
              label="Category"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Men</MenuItem>
              <MenuItem value={20}>Women</MenuItem>
              <MenuItem value={30}>Kid</MenuItem>
            </Select>
          </div>

          <div className="col flex items-center w-[25%] ml-auto gap-3 justify-end">
            <Button className="!py-2 !px-5 !text-[white] !bg-green-500 text-[13px] flex gap-x-2">
              <FaCloudArrowDown /> Export
            </Button>
            <Button className=" !text-[white] btn-blue !text-[13px] flex gap-x-2">
              <GrAdd /> Add Product
            </Button>
          </div>
        </div>

        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Checkbox {...label} size="small" />
                </TableCell>

                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <Checkbox {...label} size="small" />
                </TableCell>

                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex items-center gap-4 w-[300px]">
                    <div className="img w-[65px] h-[65px] overflow-hidden rounded-md group">
                      <Link to="/product/1">
                        <img
                          src={product}
                          alt=""
                          className="w-full group-hover:scale-105 transition-all"
                        />
                      </Link>
                    </div>

                    <div className="info w-[75%]">
                      <Link to="/product/1">
                        <h3 className="font-[00] text-[14px] leading-5 hover:text-[#3872fa]">
                          ABSOL:Ngầu và lạnh lùng là 2 từ để diễn tả về Absol.
                        </h3>
                      </Link>
                    </div>
                  </div>
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  Electronics
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  Kid
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex flex-col gap-1">
                    <span className="oldPrice line-through text-gray-500 text-[15px] font-[500]">
                      $2412
                    </span>
                    <span className="price text-[#3872fa] text-[15px] font-[600]">
                      $2003
                    </span>
                  </div>
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <p className="text-[14px] w-[100px]">
                    <span className="font-[600]">653</span> sales
                  </p>
                  <ProgressBar value={70} type="success" />
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex items-center gap-2">
                    <Button className="!w-[40px] !h[40px] !rounded-full hover:!bg-[#f1f1f1] !bg-[#f1f1f1] !min-w-[40px]">
                      <CiEdit className="text-[20px] !text-[rgba(0,0,0,0.7)]" />
                    </Button>

                    <Button className="!w-[40px] !h[40px] !rounded-full hover:!bg-[#f1f1f1] !bg-[#f1f1f1] !min-w-[40px]">
                      <TbEyeSearch className="text-[20px] !text-[rgba(0,0,0,0.7)]" />
                    </Button>

                    <Button className="!w-[40px] !h[40px] !rounded-full hover:!bg-[#f1f1f1] !bg-[#f1f1f1] !min-w-[40px]">
                      <FaRegTrashCan className="text-[20px] !text-[rgba(0,0,0,0.7)]" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <Checkbox {...label} size="small" />
                </TableCell>

                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex items-center gap-4 w-[300px]">
                    <div className="img w-[65px] h-[65px] overflow-hidden rounded-md group">
                      <Link to="/product/1">
                        <img
                          src={product1}
                          alt=""
                          className="w-full group-hover:scale-105 transition-all"
                        />
                      </Link>
                    </div>

                    <div className="info w-[75%]">
                      <Link to="/product/1">
                        <h3 className="font-[00] text-[14px] leading-5 hover:text-[#3872fa]">
                          Florges có nét pha lẫn giữa người cá và 1 bông hoa rực
                          rỡ. Thứ bao quanh cổ và màu sắc cơ thể sẽ thay đổi tùy
                          thuộc vào bông hoa mà Flabebe mang theo lúc chưa tiền
                          hóa
                        </h3>
                      </Link>
                    </div>
                  </div>
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  Fashion
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  Women
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex flex-col gap-1">
                    <span className="oldPrice line-through text-gray-500 text-[15px] font-[500]">
                      $2412
                    </span>
                    <span className="price text-[#3872fa] text-[15px] font-[600]">
                      $2003
                    </span>
                  </div>
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <p className="text-[14px] w-[100px]">
                    <span className="font-[600]">653</span> sales
                  </p>
                  <ProgressBar value={70} type="success" />
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex items-center gap-2">
                    <Button className="!w-[40px] !h[40px] !rounded-full hover:!bg-[#f1f1f1] !bg-[#f1f1f1] !min-w-[40px]">
                      <CiEdit className="text-[20px] !text-[rgba(0,0,0,0.7)]" />
                    </Button>

                    <Button className="!w-[40px] !h[40px] !rounded-full hover:!bg-[#f1f1f1] !bg-[#f1f1f1] !min-w-[40px]">
                      <TbEyeSearch className="text-[20px] !text-[rgba(0,0,0,0.7)]" />
                    </Button>

                    <Button className="!w-[40px] !h[40px] !rounded-full hover:!bg-[#f1f1f1] !bg-[#f1f1f1] !min-w-[40px]">
                      <FaRegTrashCan className="text-[20px] !text-[rgba(0,0,0,0.7)]" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <Checkbox {...label} size="small" />
                </TableCell>

                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex items-center gap-4 w-[300px]">
                    <div className="img w-[65px] h-[65px] overflow-hidden rounded-md group">
                      <Link to="/product/1">
                        <img
                          src={product2}
                          alt=""
                          className="w-full group-hover:scale-105 transition-all"
                        />
                      </Link>
                    </div>

                    <div className="info w-[75%]">
                      <Link to="/product/1">
                        <h3 className="font-[00] text-[14px] leading-5 hover:text-[#3872fa]">
                          Nơi có Xerneas xất hiện là nơi có sự sống vàt thiên
                          nhiên trù phú, Xerneas có thể có thể cứu rỗi cả một
                          cánh rừng đã bị hủy diệt bằng sức mạnh của mình.
                        </h3>
                      </Link>
                    </div>
                  </div>
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  Beautiful
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  Men
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex flex-col gap-1">
                    <span className="oldPrice line-through text-gray-500 text-[15px] font-[500]">
                      $2412
                    </span>
                    <span className="price text-[#3872fa] text-[15px] font-[600]">
                      $2003
                    </span>
                  </div>
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <p className="text-[14px] w-[100px]">
                    <span className="font-[600]">653</span> sales
                  </p>
                  <ProgressBar value={70} type="success" />
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex items-center gap-2">
                    <Button className="!w-[40px] !h[40px] !rounded-full hover:!bg-[#f1f1f1] !bg-[#f1f1f1] !min-w-[40px]">
                      <CiEdit className="text-[20px] !text-[rgba(0,0,0,0.7)]" />
                    </Button>

                    <Button className="!w-[40px] !h[40px] !rounded-full hover:!bg-[#f1f1f1] !bg-[#f1f1f1] !min-w-[40px]">
                      <TbEyeSearch className="text-[20px] !text-[rgba(0,0,0,0.7)]" />
                    </Button>

                    <Button className="!w-[40px] !h[40px] !rounded-full hover:!bg-[#f1f1f1] !bg-[#f1f1f1] !min-w-[40px]">
                      <FaRegTrashCan className="text-[20px] !text-[rgba(0,0,0,0.7)]" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <Checkbox {...label} size="small" />
                </TableCell>

                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex items-center gap-4 w-[300px]">
                    <div className="img w-[65px] h-[65px] overflow-hidden rounded-md group">
                      <Link to="/product/1">
                        <img
                          src={product3}
                          alt=""
                          className="w-full group-hover:scale-105 transition-all"
                        />
                      </Link>
                    </div>

                    <div className="info w-[75%]">
                      <Link to="/product/1">
                        <h3 className="font-[00] text-[14px] leading-5 hover:text-[#3872fa]">
                          Vẻ đẹp của Suicune hoang sơ như 1 dòng nước tự nhiên.
                          Nổi bật với một miếng pha lê tinh khiết ngay giữa
                          trán, chiếc bờm cơ bản là một dòng sông uốn lượn theo
                          chiều gió thổi và 2 dải ruy băng chạy dọc thân mình
                        </h3>
                      </Link>
                    </div>
                  </div>
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  Electronics
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  Kid
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex flex-col gap-1">
                    <span className="oldPrice line-through text-gray-500 text-[15px] font-[500]">
                      $2412
                    </span>
                    <span className="price text-[#3872fa] text-[15px] font-[600]">
                      $2003
                    </span>
                  </div>
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <p className="text-[14px] w-[100px]">
                    <span className="font-[600]">653</span> sales
                  </p>
                  <ProgressBar value={70} type="success" />
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex items-center gap-2">
                    <Button className="!w-[40px] !h[40px] !rounded-full hover:!bg-[#f1f1f1] !bg-[#f1f1f1] !min-w-[40px]">
                      <CiEdit className="text-[20px] !text-[rgba(0,0,0,0.7)]" />
                    </Button>

                    <Button className="!w-[40px] !h[40px] !rounded-full hover:!bg-[#f1f1f1] !bg-[#f1f1f1] !min-w-[40px]">
                      <TbEyeSearch className="text-[20px] !text-[rgba(0,0,0,0.7)]" />
                    </Button>

                    <Button className="!w-[40px] !h[40px] !rounded-full hover:!bg-[#f1f1f1] !bg-[#f1f1f1] !min-w-[40px]">
                      <FaRegTrashCan className="text-[20px] !text-[rgba(0,0,0,0.7)]" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>

      <div className="card my-4 shadow-md sm:rounded-lg bg-white">
        <div className="flex items-center justify-between px-5 py-5 pb-0">
          <h2 className="text-[18px] font-[600]">Total Users & Total Sales</h2>
        </div>
        <div className="flex items-center px-5 py-5 pt-0 gap-5">
          <span className="flex items-center gap-1">
            <span className="block w-[8px] h-[8px] rounded-full bg-green-500"></span>
            Total Users
          </span>
          <span className="flex items-center gap-1">
            <span className="block w-[10px] h-[10px] rounded-full bg-[#3872fa]"></span>
            Total Sales
          </span>
        </div>
        <LineChart
          width={1200}
          height={600}
          data={chart1Data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="none" />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="TotalSales"
            stroke="#3872fa"
            activeDot={{ r: 8 }}
            strokeWidth={3}
          />
          <Line
            type="monotone"
            dataKey="TotalUsers"
            stroke="#82ca9d"
            strokeWidth={3}
          />
        </LineChart>
      </div>
    </>
  );
};

export default DashBoard;
