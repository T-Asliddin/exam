"use client";
import React from "react";
import { Button, Input } from "antd";
import Image from "next/image";

const Index = () => {
  return (
    <footer>
      <div className="bg-[#1F1D14] border-t-[24px] border-[#FBD029] pb-6">
        <div className="container">
          <div className="flex pt-[73px] justify-between items-start  gap-2">
            <div className="flex items-center gap-[11px]">
              <div className="w-[62px]">
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
            <div className="max-w-[220px] max-[760px]:hidden ">
              <h1 className="text-[18px] text-[#fff] mb-5">Контакты</h1>
              <div className="">
                <div className="flex items-center gap-1 mb-6">
                  <div className="w-5 ">
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
            </div>
            <div className="max-[585px]:hidden ">
              <h2 className="text-[16px] text-[#fff]">
                Tashkent Sh. Chilonzor 9 kvartal 12 uy
              </h2>
            </div>
            <div>
              <h2 className="text-[18px] text-[#fff] font-bold mb-6 ">
                Подписатся
              </h2>
              <Input
                className="w-[235px] block mb-[16px]"
                placeholder="support@figma.com"
              />
              <Button className="bg-[#FBD029] w-[235px]">Отправить</Button>
              <div className="flex mt-[49px] gap-5">
                <Image
                  className="w-[32px]"
                  src="/insta.svg"
                  alt="Example Image"
                  width={100}
                  height={100}
                />
                <Image
                  className="w-[32px]"
                  src="/teleg.svg"
                  alt="Example Image"
                  width={100}
                  height={100}
                />
                <Image
                  className="w-[32px]"
                  src="/facebook.svg"
                  alt="Example Image"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>
        </div>
        <span className="h-[1px] bg-[#F2F2F2] mb-5 block mt-11 opacity-0.3 "></span>
        <div className="container flex items-center justify-between gap-3 max-[640px]:justify-center ">
          <p className="text-[12px] text-[#fff] max-[640px]:hidden ">© 2022 All Rights Reserved</p>
          <ul className="flex text-[#7B7E86] gap-10 text-[14px] max-[640px]:gap-3">
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Refunds</li>
            <li>Legal</li>
            <li>Site </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Index;
