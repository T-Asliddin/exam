"use client";
import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import Image from "next/image";
import { useState } from "react";
import { Input } from "antd";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";


const Index = () => {
  const [num, setNum] = useState(1);
  const [price, setPrice] = useState(300000);
  const initialPrice = 300000;
  const handlePlus = () => {
    setNum((prev) => prev + 1);
    setPrice((prev) => prev + initialPrice);
  };
  const handleMinus = () => {
    if (num > 1) {
      setNum((prev) => prev - 1);
      setPrice((prev) => prev - initialPrice);
    }
  };
  const product = [
    { title: "Гантель виниловая, 2 х 3 кг Гантель ", price: 300000 },
    { title: "Гантель виниловая, 2 х 3 кг Гантель ", price: 300000 },
  ];

  return (
    <>
      <div>
        <div className="container">
          <div className="flex mt-6 gap-[10px] mb-9">
            <HomeOutlinedIcon />
            <p className="text-[16px] opacity-[0.6]">Главная</p>
            <ArrowForwardIosOutlinedIcon className="w-4 opacity-[0.6]" />
            <p className="text-[16px] font-medium">Корзина</p>
          </div>
          <div className="mb-[100px] flex gap-3">
            <div className="bg-[#fff] rounded-lg  pt-5 px-7 max-w-[713px] pb-[66px]">
              <div className="flex items-center  justify-between mb-[25px]">
                <h1 className="text-[24px] font-medium ">Ваша корзина</h1>
                <p className="text-[#FF1313] text-[12px]">Очистить все</p>
              </div>
              <div className="gap-y-3 ">
                {product.map((item, index) => (
                  <div
                    key={index}
                    className="max-w-[655px] bg-[#F2F2F2] rounded-lg flex py-5 px-3 gap-y-2 mb-[10px]"
                  >
                    <Image
                      className="block w-[145px]"
                      src="/kiyim.png"
                      alt="koylak"
                      width={100}
                      height={100}
                    />
                    <div className="flex gap-[150px] items-start ">
                      <div>
                        <h1 className=" text-[#1F1D14] text-[20px] mb-[30px]">
                          {item.title}
                        </h1>
                        <div className="flex gap-[10px] items-center">
                          <Image
                            onClick={handleMinus}
                            className="w-8"
                            src="/-.svg"
                            alt="koylak"
                            width={100}
                            height={100}
                          />
                          <p>{num}</p>
                          <Image
                            onClick={() => setNum((prew) => prew + 1)}
                            className="w-8"
                            src="/+.svg"
                            alt="koylak"
                            width={100}
                            height={100}
                          />
                          <p className="text-[#000] text-[22px] font-bold">
                            {item.price}
                            <span className="text-[16px] ml-[5px] font-normal">
                              uzs
                            </span>
                          </p>
                        </div>
                      </div>
                      <Image
                        className="w-8 "
                        src="/dalet.svg"
                        alt=""
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[#06F] text-[20px] mt-[63px] mb-[18px] ">
                Все информация о доставке
              </p>
              <p className="text-[20px] block w-[400px] ">
                Если у вас имеется вопросы позаоните по номеру:{" "}
                <span className="text-[#06F] text-[20px] mt-[63px] ">
                  +998 (99) 995 55 65{" "}
                </span>{" "}
              </p>
            </div>
            <div className="bg-white w-[500px] rounded-lg  p-10">
              <h1 className="text-[20px] font-semibold mb-[15px]">Итого</h1>
              <div>
                <div className="flex justify-between ">
                  <p className="text-[20px] font-medium">Кол-во товаров:</p>
                  <p className="text-[20px] font-medium">Сумма:</p>
                </div>
                <div className="flex justify-between ">
                  <p className="text-[24px] font-semibold">2</p>
                  <p className="text-[24px] font-semibold">
                    2500 000 <span>uzs</span>
                  </p>
                </div>
              </div>
              <h2 className="text-[20px] font-semibold mt-10 mb-6">
                Ваши данные
              </h2>
              <p className="text-[16px] mb-[10px]">Имя/Фамиля</p>
              <Input
                className="w-full  text-[20px] block mb-[20px] py-3 bg-[#F2F2F2]"
                placeholder="Имя/Фамиля"
              />
              <p className="text-[16px] mb-[10px]">Ваш номер</p>
              <Input
                className="w-full  text-[20px] block mb-[20px] py-3 bg-[#F2F2F2]"
                placeholder="+998 __ ___ __ __"
              />
              <p className="text-[16px] mb-[10px]">Адрес доставки</p>
              <Input
                className="w-full text-[20px] block mb-[20px] py-3 bg-[#F2F2F2]"
                placeholder="Область/город/улица/дом"
              />
              <h2 className="text-[20px] font-semibold mt-5 mb-6">
                Тип оплаты
              </h2>
              <div className="items-center flex w-full gap-3 flex-wrap ">
                <button className="bg-[#F2F2F2] b rounded-lg py-[17px] px-6">
                  <Image
                    className="w-20 "
                    src="/pay.svg"
                    alt=""
                    width={100}
                    height={100}
                  />
                </button>
                <button className="bg-[#F2F2F2] rounded-lg py-[17px] px-6">
                  <Image
                    className="w-20 "
                    src="/click.svg"
                    alt=""
                    width={100}
                    height={100}
                  />
                </button>
                <button className="bg-[#F2F2F2] w-[130px]  rounded-lg py-[24px] px-4 text-[16px] font-semibold ">
                  Через карту
                </button>
                <button className="bg-[#F2F2F2] w-[130px] text-center rounded-lg py-[12px] px-6 text-[16px] font-semibold whitespace-normal ">
                  Банковский счёт
                </button>
              </div>
              <button className="bg-[#FBD029] px-10 py-3 rounded-[5px] mt-10 text-[20px] w-full">
                Купить
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
