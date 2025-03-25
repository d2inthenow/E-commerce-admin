import React from "react";
import Button from "@mui/material/Button";
import { CiMenuBurger } from "react-icons/ci";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material";
import { GoBellFill } from "react-icons/go";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import { IoLogOut } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { BsGearFill } from "react-icons/bs";
import { FaChartLine } from "react-icons/fa6";
import admin from "../../assets/images/admin.jpg";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = () => {
  const [anchorMyAcc, setAnchorMyAcc] = useState(null);
  const openMyAcc = Boolean(anchorMyAcc);
  const handleClickMyAcc = (event) => {
    setAnchorMyAcc(event.currentTarget);
  };
  const handleCloseMyAcc = () => {
    setAnchorMyAcc(null);
  };
  return (
    <header
      className="w-full h-[auto] py-2 pr-7 pl-64 bg-[#fff] flex items-center
     justify-between border-b  shadow-md"
    >
      <div className="part1">
        <Button className="!w-[40px] !h-[40px] !rounded-full !min-w-[40px] !text-[rgba(0,0,0,0.8)]">
          <CiMenuBurger className="text-[22px] text-[rgba(0,0,0,0.8)]" />
        </Button>
      </div>
      <div className="part2 w-[40%] flex items-center justify-end gap-4">
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={4} color="secondary">
            <GoBellFill className="text-[22px] text-[rgba(0,0,0,0.8)]" />
          </StyledBadge>
        </IconButton>

        <div
          className="rounded-full w-[35px] h-[35px] cursor-pointer overflow-hidden"
          onClick={handleClickMyAcc}
        >
          <img src={admin} alt="" className="w-full h-full object-cover" />
        </div>
        <Menu
          anchorEl={anchorMyAcc}
          id="account-menu"
          open={openMyAcc}
          onClose={handleCloseMyAcc}
          onClick={handleCloseMyAcc}
          slotProps={{
            paper: {
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&::before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem onClick={handleCloseMyAcc}>
            <div className="flex items-center gap-3">
              <div className="rounded-full w-[35px] h-[35px] cursor-pointer overflow-hidden">
                <img
                  src={admin}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="info">
                <h3 className="text-[16px] font-[500] leading-5">D2 Code</h3>
                <p className="text-[13px] font-[400] opacity-70">
                  admin@gmail.com
                </p>
              </div>
            </div>
          </MenuItem>
          <Divider />
          <MenuItem
            onClick={handleCloseMyAcc}
            className="flex items-center gap-3"
          >
            <FaUser className="text-[18px]" />
            <span className="text-[14px]">Profile</span>
          </MenuItem>

          <MenuItem
            onClick={handleCloseMyAcc}
            className="flex items-center gap-3"
          >
            <BsGearFill className="text-[18px]" />
            <span className="text-[14px]">Account Setting</span>
          </MenuItem>

          <MenuItem
            onClick={handleCloseMyAcc}
            className="flex items-center gap-3"
          >
            <FaChartLine className="text-[18px]" />
            <span className="text-[14px]">Activity Log</span>
          </MenuItem>

          <MenuItem
            onClick={handleCloseMyAcc}
            className="flex items-center gap-3"
          >
            <IoLogOut className="text-[18px]" />
            <span className="text-[14px]">Sign Out</span>
          </MenuItem>
        </Menu>
      </div>
    </header>
  );
};

export default Header;
