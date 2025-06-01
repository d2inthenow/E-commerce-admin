import { Button } from "@mui/material";
import { IoMdAdd } from "react-icons/io";
import Select from "@mui/material/Select";
import { useContext, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import { FaCloudArrowDown } from "react-icons/fa6";
import { GrAdd } from "react-icons/gr";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import product from "../../assets/images/product/product1.jpg";
import product1 from "../../assets/images/product/product.jpg";
import product2 from "../../assets/images/product/product2.jpg";
import product3 from "../../assets/images/product/product3.jpg";
import ProgressBar from "../../Components/ProgressBar";
import { CiEdit } from "react-icons/ci";
import { TbEyeSearch } from "react-icons/tb";
import { FaRegTrashCan } from "react-icons/fa6";
import SearchBox from "../../Components/SearchBox";
import { MyContext } from "../../App";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const columns = [
  { id: "product", label: "PRODUCT", minWidth: 150 },
  { id: "category", label: "CATEGORY", minWidth: 100 },
  { id: "subCategory", label: "SUB CATEGORY", minWidth: 150 },
  { id: "price", label: "PRICE", minWidth: 130 },
  { id: "sales", label: "SALES", minWidth: 130 },
  { id: "action", label: "ACTION", minWidth: 130 },
];

const Products = () => {
  const [categoryFilterValue, setCategoryFilterValue] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const context = useContext(MyContext);

  const handleChangeCategoryFilter = (event) => {
    setCategoryFilterValue(event.target.value);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <>
      <div className="flex items-center justify-between px-2 py-0 mt-2 ">
        <h2 className="text-[18px] font-[600]">
          Products{" "}
          <span className="font-[400] text-[14px]">(Material UI CSS)</span>{" "}
        </h2>
        <div className="col flex items-center w-[25%] ml-auto gap-3 justify-end">
          <Button className="!py-2 !px-5 !text-[white] !bg-green-500 text-[13px] flex gap-x-2">
            <FaCloudArrowDown /> Export
          </Button>
          <Button
            className=" !text-[white] btn-blue !text-[13px] flex gap-x-2"
            onClick={() =>
              context.setIsOpenFullScreenPanel({
                open: true,
                model: "Add Product",
              })
            }
          >
            <GrAdd /> Add Product
          </Button>
        </div>
      </div>

      <div className="card my-4 pt-5 shadow-md sm:rounded-lg bg-white">
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
          <div className="col w-[20%]">
            <SearchBox />
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
    </>
  );
};

export default Products;
