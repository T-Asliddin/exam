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
      <div className="flex items-center container justify-between p-3">
        <Link href="/">
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
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-[30px]">
          <nav>
            <ul className="text-white flex text-[16px] gap-[30px]">
              <li><Link href="/product">Продукты</Link></li>
              <li><Link href="/contacts">Контакты</Link></li>
              <li><Link href="/delivery">Оплата и Доставка</Link></li>
              <li><Link href="/news">Новости</Link></li>
              <li><Link href="/info">О нас</Link></li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-[30px] max-[1150px]:hidden">
          <div className="flex items-center gap-1">
            <Image
              src="/phone.svg"
              alt="Phone Icon"
              width={100}
              height={100}
              className="w-5"
            />
            <p className="text-white text-[16px]">
              +998 (90) <span className="text-[20px]">565-85-85</span>
            </p>
          </div>
          <div className="flex items-center gap-1">
            <Image
              src="/mail.svg"
              alt="Email Icon"
              width={100}
              height={100}
              className="w-5"
            />
            <p className="text-white text-[16px]">info@gmail.com</p>
          </div>
        </div>

        <div className="text-white block md:hidden">
          <MenuOutlinedIcon
            onClick={showDrawer}
            style={{ fontSize: 45 }}
            color="inherit"
          />
          <Drawer
            className="bg-black"
            title="Menu"
            onClose={onClose}
            open={open}
          >
            <nav>
              <ul className="text-black font-medium text-[22px] gap-[30px]">
                <li><Link href="/product">Продукты</Link></li>
                <li><Link href="/contacts">Контакты</Link></li>
                <li><Link href="/delivery">Оплата и Доставка</Link></li>
                <li><Link href="/news">Новости</Link></li>
                <li><Link href="/info">О нас</Link></li>
              </ul>
              <div className="mt-3">
                <p className="text-black text-[18px] font-medium">
                  +998 (90) <span className="text-[20px]">565-85-85</span>
                </p>
                <p className="text-black text-[18px] font-medium">info@gmail.com</p>
              </div>
            </nav>
          </Drawer>
        </div>
      </div>
    </header>
  );
};

export default Index;
