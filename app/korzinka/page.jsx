"use client";
import React, { useEffect, useState } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import Image from "next/image";
import { Input } from "antd";
import product from "@/service/product.service";

const Index = () => {
  const [num, setNum] = useState({});
  const [data, setData] = useState([]);
  const [itogo, setItogo] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const getData = async () => {
    try {
      const response = await product.get({ page: 1, limit: 10 });
      if (response.status === 200 && response.data.products !== null) {
        const ids = JSON.parse(localStorage.getItem("ids")) || [];
        setItogo(ids.length);
        const filteredData = response.data.products.filter((item) =>
          ids.includes(item.product_id)
        );
        setData(filteredData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      let a = data.reduce(
        (acc, item) => acc + item.cost * (num[item.product_id] || 1),
        0
      );
      setTotalPrice(a);
    }
  }, [data, num]);

  const handlePlus = (productId, productCost) => {
    setNum((prev) => {
      const newNum = prev[productId] ? prev[productId] + 1 : 2;
      return { ...prev, [productId]: newNum };
    });
    setTotalPrice((prev) => prev + productCost);
  };

  const handleMinus = (productId, productCost) => {
    setNum((prev) => {
      const newNum = prev[productId] > 1 ? prev[productId] - 1 : 1;
      return { ...prev, [productId]: newNum };
    });
    setTotalPrice((prev) => (prev > productCost ? prev - productCost : 0));
  };

  const handleDalet = () => {
    localStorage.removeItem("ids");
    setData([]);
    setItogo(0);
    setTotalPrice(0);
    setNum({});
  };

  const setCardDalet = (productId) => {
    const updatedData = data.filter((item) => item.product_id !== productId);
    setData(updatedData);
    const updatedIds = updatedData.map((item) => item.product_id);
    localStorage.setItem("ids", JSON.stringify(updatedIds));
    setItogo(updatedIds.length);
    setTotalPrice(
      updatedData.reduce(
        (acc, item) => acc + item.cost * (num[item.product_id] || 1),
        0
      )
    );
  };

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
            <div className="bg-[#fff] rounded-lg pt-5 px-7 max-w-[713px] pb-[66px]">
              <div className="flex items-center justify-between mb-[25px]">
                <h1 className="text-[24px] font-medium">Ваша корзина</h1>
                <p
                  onClick={handleDalet}
                  className="text-[#FF1313] cursor-pointer text-[12px]"
                >
                  Очистить все
                </p>
              </div>
              {data?.map((item) => (
                <div key={item.product_id} className="gap-y-3">
                  <div className="max-w-[655px] bg-[#F2F2F2] rounded-lg flex py-5 px-3 gap-y-2 mb-[10px]">
                    <img
                      className="block w-[145px]"
                      src={item?.image_url ? item.image_url[0] : ""}
                      alt={data?.product_name || "Product Image"}
                    />
                    <div className="flex gap-[150px] items-start ml-4">
                      <div className="w-[300px]">
                        <h1 className="text-[#1F1D14] text-[20px] mb-[30px]">
                          {item?.product_name}
                        </h1>
                        <div className="flex gap-[10px] items-center">
                          <Image
                            onClick={() =>
                              handleMinus(item.product_id, item.cost)
                            }
                            className="w-8 cursor-pointer"
                            src="/-.svg"
                            alt="Minus"
                            width={100}
                            height={100}
                          />
                          <p>{num[item.product_id] || 1}</p>
                          <Image
                            onClick={() =>
                              handlePlus(item.product_id, item.cost)
                            }
                            className="w-8 cursor-pointer"
                            src="/+.svg"
                            alt="Plus"
                            width={100}
                            height={100}
                          />
                          <p className="text-[#000] text-[22px] font-bold">
                            {item.cost * (num[item.product_id] || 1)}
                            <span className="text-[16px] ml-[5px] font-normal">
                              uzs
                            </span>
                          </p>
                        </div>
                      </div>
                      <Image
                        onClick={() => setCardDalet(item.product_id)}
                        className="w-8 cursor-pointer"
                        src="/dalet.svg"
                        alt="Delete"
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                </div>
              ))}
              <p className="text-[#06F] text-[20px] mt-[63px] mb-[18px]">
                Все информация о доставке
              </p>
              <p className="text-[20px] block w-[400px]">
                Если у вас имеются вопросы, позвоните по номеру:{" "}
                <span className="text-[#06F] text-[20px] mt-[63px]">
                  +998 (99) 995 55 65
                </span>
              </p>
            </div>
            <div className="bg-white w-[500px] rounded-lg p-10">
              <h1 className="text-[20px] font-semibold mb-[15px]">Итого</h1>
              <div>
                <div className="flex justify-between">
                  <p className="text-[20px] font-medium">Кол-во товаров:</p>
                  <p className="text-[20px] font-medium">Сумма:</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[24px] font-semibold">{itogo}</p>
                  <p className="text-[24px] font-semibold">
                    {totalPrice} <span>uzs</span>
                  </p>
                </div>
              </div>
              <h2 className="text-[20px] font-semibold mt-10 mb-6">
                Ваши данные
              </h2>
              <p className="text-[16px] mb-[10px]">Имя/Фамиля</p>
              <Input
                className="w-full text-[20px] block mb-[20px] py-3 bg-[#F2F2F2]"
                placeholder="Имя/Фамиля"
              />
              <p className="text-[16px] mb-[10px]">Ваш номер</p>
              <Input
                className="w-full text-[20px] block mb-[20px] py-3 bg-[#F2F2F2]"
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
              <div className="items-center flex w-full gap-3 flex-wrap">
                <button className="bg-[#F2F2F2] rounded-lg py-[17px] px-6">
                  <Image
                    className="w-20"
                    src="/pay.svg"
                    alt="Payment"
                    width={100}
                    height={100}
                  />
                </button>
                <button className="bg-[#F2F2F2] rounded-lg py-[17px] px-6">
                  <Image
                    className="w-20"
                    src="/click.svg"
                    alt="Click"
                    width={100}
                    height={100}
                  />
                </button>
                <button className="bg-[#F2F2F2] w-[130px] rounded-lg py-[24px] px-4 text-[16px] font-semibold">
                  Через карту
                </button>
                <button className="bg-[#F2F2F2] w-[130px] text-center rounded-lg py-[12px] px-6 text-[16px] font-semibold whitespace-normal">
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
