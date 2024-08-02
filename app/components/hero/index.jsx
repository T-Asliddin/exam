"use client";
import React from "react";
import Image from "next/image";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHeart } from "@fortawesome/free-regular-svg-icons";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Index = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="bg-white">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-10 max-[825px]:gap-1">
            <div>
              <button className="bg-[#1F1D14] text-white px-10 py-4 flex items-center gap-10 rounded-md max-[610px]:hidden">
                <div className="w-5">
                  <Image
                    src="/katolog.svg"
                    alt="Example Image"
                    width={10}
                    height={100}
                  />
                </div>
                Каталог
              </button>
              <button className="bg-[#1F1D14] text-white px-5 py-4 hidden items-center gap-10 rounded-md max-[610px]:flex ">
                <div className="w-5">
                  <Image
                    src="/katolog.svg"
                    alt="Example Image"
                    width={10}
                    height={100}
                  />
                </div>
              </button>
            </div>
            <div className="flex-1 ml-5 w-[400px] max-[980px]:w-[250px] max-[825px]:w-[150px]">
              <Input
                placeholder="Поиск"
                suffix={
                  <SearchOutlined
                    style={{ color: "rgba(0,0,0,.25)", opacity: 0.8 }}
                  />
                }
                className="bg-[#F2F2F2] pl-5 pr-4 rounded-md w-full h-[50px]"
              />
            </div>
          </div>
          <div className="flex gap-5">
            <button className="w-[50px] bg-[#F2F2F2] p-4 rounded-[3px]">
              <FontAwesomeIcon icon={faUser} />
            </button>
            <button className="w-[50px] bg-[#F2F2F2] p-4 rounded-[3px]">
              <FontAwesomeIcon icon={faHeart} />
            </button>

            <Link
              className={
                pathname !== "/korzinka"
                  ? "flex bg-[#F2F2F2]  p-3 items-center gap-5 rounded-[3px] px-3 py-1 max-[980px]:hidden"
                  : "flex bg-[#FBD029]  p-3 items-center gap-5 rounded-[3px] px-3 py-1 max-[980px]:hidden"
              }
              href="/korzinka"
            >
              {" "}
              <ShoppingCartOutlinedIcon /> Корзина
            </Link>

            <Link
              className={
                pathname !== "/korzinka"
                  ? "flex bg-[#F2F2F2]  p-4   rounded-[3px]  max-[980px]:flex"
                  : "hidden bg-[#FBD029]  p-4  rounded-[3px]  max-[980px]:hidden"
              }
              href="/korzinka"
            >
              {" "}
              <ShoppingCartOutlinedIcon />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
