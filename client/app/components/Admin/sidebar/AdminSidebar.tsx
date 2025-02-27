/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { FC, JSX, useEffect, useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography } from "@mui/material";
import "react-pro-sidebar/dist/css/styles.css";
import {
  HomeOutlinedIcon,
  ArrowForwardIosIcon,
  ArrowBackIcoIcon,
  PeopleOutlinedIcon,
  MapOutlinedIcon,
  ReceiptOutlinedIcon,
  BarCharOutlinedIcon,
  QuizIcon,
  ExitToAppIcon,
  SettingIcon,
  OndemandVideoIcon,
  GroupIcon,
  VideoCallIcon,
  WysiwygIcon,
  ManageHistoryIcon,
  WebIcon,
} from "./Icon";
import avatarDefault from "../../../../public/images/default avatar.png";
import { useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";

interface itemProps {
  title: string;
  to: string;
  icon: JSX.Element;
  selected: string;
  setSelected: any;
}

const Item: FC<itemProps> = ({ title, to, icon, selected, setSelected }) => {
  return (
    <MenuItem
      active={selected === title}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography className="!text-[14px] !font-Josefin_Sans">
        {title}
      </Typography>
      <Link href={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const { user } = useSelector((state: any) => state.auth);
  const [logout, setLogout] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  const logoutHandler = () => {
    setLogout(true);
  };

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          backgroundColor: "#1d1d1d !important",
          borderRadius: "20px",
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item:hover": {
          color: "#fff !important",
        },
        "& .pro-menu-item.active": {
          color: "#C8EA80 !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 2px 1px !important",
          opacity: 1,
        },
      }}
    >
      <ProSidebar
        collapsed={isCollapsed}
        style={{
          position: "fixed",
          top: "10px",
          left: "7px",
          height: "calc(100vh - 20px)",
          width: isCollapsed ? "0%" : "16%",
          borderRadius: "12px",
          padding: "10px",
          backgroundColor: "#1d1d1d",
        }}
      >
        <Menu iconShape="square">
          {/* logo and menu icon  */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <ArrowForwardIosIcon /> : undefined}
            style={{ margin: "10px 0 20px 0" }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="1px"
              >
                <Link href="/">
                  <h3 className="text-[23px] font-bold font-Poppins uppercase text-[#FFB400]">
                    Edumeet
                  </h3>
                </Link>
                <IconButton
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  className="inline-block"
                >
                  <ArrowBackIcoIcon className="text-white" />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {/* User Profile Section */}
          {!isCollapsed && (
            <Box textAlign="left" mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <Image
                  alt="profile user"
                  width={70}
                  height={70}
                  src={user.avatar ? user.avatar.url : avatarDefault}
                  className="cursor-pointer rounded-full p-1 border-2 border-[#FFB400]"
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h4"
                  className="!text-[20px] text-white"
                  sx={{ m: "10px 0 0 0" }}
                >
                  {user?.name}
                </Typography>
                <Typography
                  variant="h6"
                  className="!text-[16px] text-white capitalize"
                  sx={{ m: "10px 0 0 0" }}
                >
                  - {user?.role}
                </Typography>
              </Box>
            </Box>
          )}

          {/* Menu Items */}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/admin"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            {/* Data Section */}
            <Typography
              variant="h5"
              className="!text-[20px] text-[#C78EEC]  capitalize !font-[400]"
              sx={{ m: "15px 0 5px 5px" }}
            >
              {!isCollapsed && "Data"}
            </Typography>

            <Item
              title="Users"
              to="/admin/users"
              icon={<GroupIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Invoices"
              to="/admin/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            {/* Content Section */}
            <Typography
              variant="h5"
              className="!text-[18px] text-[#C78EEC] capitalize !font-[400]"
              sx={{ m: "15px 0 5px 5px" }}
            >
              {!isCollapsed && "Content"}
            </Typography>
            <Item
              title="Create Course"
              to="/admin/create-course"
              icon={<VideoCallIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Live Course"
              to="/admin/courses"
              icon={<OndemandVideoIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            {/* Customization section  */}
            <Typography
              variant="h5"
              className="!text-[18px] text-[#C78EEC] capitalize !font-[400]"
              sx={{ m: "15px 0 5px 5px" }}
            >
              {!isCollapsed && "Customization"}
            </Typography>
            <Item
              title="Hero"
              to="/admin/hero"
              icon={<WebIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ"
              to="/admin/faq"
              icon={<QuizIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Categories"
              to="/admin/Categories"
              icon={<WysiwygIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            {/* Controllers sections  */}
            <Typography
              variant="h5"
              className="!text-[18px] text-[#C78EEC] capitalize !font-[400]"
              sx={{ m: "15px 0 5px 5px" }}
            >
              {!isCollapsed && "Controllers"}
            </Typography>
            <Item
              title="Manage Team"
              to="/admin/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            {/* Analytics section*/}
            <Typography
              variant="h5"
              className="!text-[18px] text-[#C78EEC] capitalize !font-[400]"
              sx={{ m: "15px 0 5px 5px" }}
            >
              {!isCollapsed && "Analytics"}
            </Typography>
            <Item
              title="Courses Analytics"
              to="/admin/courses-analytics"
              icon={<BarCharOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Order Analytics"
              to="/admin/orders-analytics"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Users Analytics"
              to="/admin/users-analytics"
              icon={<ManageHistoryIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            {/* Extras section  */}
            <Typography
              variant="h6"
              className="!text-[18px] text-[#C78EEC] capitalize !font-[400]"
              sx={{ m: "15px 0 5px 5px" }}
            >
              {!isCollapsed && "Extras"}
            </Typography>
            <Item
              title="Settings"
              to="/admin/settings"
              icon={<SettingIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <div onClick={logoutHandler}>
              <Item
                title="Logout"
                to="/"
                icon={<ExitToAppIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </div>
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
