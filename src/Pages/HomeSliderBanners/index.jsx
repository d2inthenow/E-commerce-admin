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
import MyContext from "../../context/MyContext";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const columns = [
  { id: "image", label: "IMAGE", minWidth: 250 },
  { id: "action", label: "ACTION", minWidth: 100 },
];

const HomeSliderBanners = () => {
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
          Home Slider Banners{" "}
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
                model: "Add Home Slide",
              })
            }
          >
            <GrAdd /> Add Home Slide
          </Button>
        </div>
      </div>

      <div className="card my-4 pt-5 shadow-md sm:rounded-lg bg-white">
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell width={60}>
                  <Checkbox {...label} size="small" />
                </TableCell>

                {columns.map((column) => (
                  <TableCell
                    width={column.minWidth}
                    key={column.id}
                    align={column.align}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Checkbox {...label} size="small" />
                </TableCell>

                <TableCell width={300}>
                  <div className="flex items-center gap-4 w-[300px]">
                    <div className="img w-full overflow-hidden rounded-md group">
                      <Link to="/product/1">
                        <img
                          src={product}
                          alt=""
                          className="w-full group-hover:scale-105 transition-all"
                        />
                      </Link>
                    </div>
                  </div>
                </TableCell>
                <TableCell width={100}>
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
              {/* <TableRow>
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
              </TableRow> */}
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

export default HomeSliderBanners;
