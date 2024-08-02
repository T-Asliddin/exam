"use client";
import Image from "next/image";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import React, { useState } from "react";
import { Drawer } from "antd";
import Link from "next/link";

const Index = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <header className="bg-[#1F1D14]">
      <div className="flex items-center container justify-between p-3 max-[800px]:justify-between">
        <Link href='/'>
          <div className="flex items-center gap-[11px]">
            <div className="w-16">
              <Image
                src="/logo.svg"
                alt="Example Image"
                width={100}
                height={100}
              />
            </div>
            <div>
              <h1 className="text-white text-[24px] w-[116px] font-sans font-normal">
                Sport Market
              </h1>
            </div>
          </div>{" "}
        </Link>
        <div className="max-[1150px]:mr-[30px] max-[800px]:hidden">
          <nav>
            <ul className="text-white flex text-[16px] gap-[30px]">
              <li>
                <Link href="/product">Продукты</Link>
              </li>
              <li>Контакты</li>
              <li>
                {" "}
                <Link href="/delivery">Оплата и Доставка</Link>
              </li>
              <li>
                <Link href="/news">Новости</Link>
              </li>
              <li className="mb-7">
                {" "}
                <Link href="/info">О нас</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex gap-[30px] max-[1150px]:hidden">
          <div className="flex items-center gap-1">
            <div className="w-5">
              <Image
                src="/phone.svg"
                alt="Example Image"
                width={100}
                height={100}
              />
            </div>

            <p className="text-white text-[16px] items-center">
              +998 (90) <span className="text-[20px]">565-85-85</span>
            </p>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-5">
              <Image
                src="/mail.svg"
                alt="Example Image"
                width={100}
                height={100}
              />
            </div>
            <p className="text-[16px] text-white">info@gmail.com</p>
          </div>
        </div>
        <div className="text-white hidden max-[800px]:block">
          <MenuOutlinedIcon
            onClick={showDrawer}
            style={{ fontSize: 45 }}
            color="inherit"
          />
          <Drawer
            className=" bg-black"
            title="Menu"
            onClose={onClose}
            open={open}
          >
            <div className="">
              <nav>
                <ul className="text-black  font-medium  text-[22px] gap-[30px] ">
                  <li>
                    <Link href="/product">Продукты</Link>
                  </li>
                  <li className="mb-3">Контакты</li>
                  <li>
                    {" "}
                    <Link href="/delivery">Оплата и Доставка</Link>
                  </li>
                  <li className="mb-3">
                    {" "}
                    <Link href="/news">Новости</Link>
                  </li>
                  <li className="mb-7">
                    {" "}
                    <Link href="/info">О нас</Link>
                  </li>
                </ul>
                <div className="gap-5">
                  <p className="text-black text-[18px] mb-3 font-medium ">
                    +998 (90) <span className="text-[20px]">565-85-85</span>
                  </p>
                  <p className="text-[18px] text-black font-medium">
                    info@gmail.com
                  </p>
                </div>
              </nav>
            </div>
          </Drawer>
        </div>
      </div>
    </header>
  );
};

export default Index;
