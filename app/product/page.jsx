"use client";
import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Button, Input } from "antd";
import ProductList from "../components/product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Image from "next/image";
import Link from "next/link";

function valuetext(value) {
  return `${value}°C`;
}
const Index = () => {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div>
        <div className="container">
          <div className="flex mt-6 gap-[10px]">
            <HomeOutlinedIcon />
            <p className="text-[16px] opacity-[0.6]">Главная</p>
            <ArrowForwardIosOutlinedIcon className="w-4 opacity-[0.6]" />
            <p className="text-[16px] font-medium">Продукты</p>
          </div>

          <div className="flex gap-8 max-[620px]:flex-none ">
            <div>
              <div className="max-w-[280px] bg-white mt-5 rounded-lg px-[18px] pb-[38px]">
                <h1 className="text-[16px] font-medium pt-5  mb-5">Филтрь</h1>
                <p className="text-[12px] mb-[10px]">Цена</p>
                <div className="max-w-[256px] bg-[#F2F2F2] rounded-[5px] px-5 py-[15px] mb-4">
                  <Box sx={{ width: 200 }}>
                    <Slider
                      getAriaLabel={() => "Temperature range"}
                      value={value}
                      onChange={handleChange}
                      valueLabelDisplay="auto"
                      getAriaValueText={valuetext}
                    />
                  </Box>
                  <div className="flex gap-[52px] justify-center">
                    <p className="text-[14px]  font-medium">
                      {value[0]} 000 uzs
                    </p>
                    <p className="text-[14px] font-medium">
                      {value[1]} 000 uzs{" "}
                    </p>
                  </div>
                </div>
                <p className="text-[12px] mb-[10px]">Артикул:</p>
                <Input
                  className="w-[235px] block mb-[16px]  bg-[#F2F2F2]"
                  placeholder="аф566"
                />
                <p className="text-[12px] mb-[10px]">Выберите категорию:</p>
                <Input
                  className="w-[235px] block mb-[16px] bg-[#F2F2F2]"
                  placeholder="Все"
                />
                <p className="text-[12px] mb-[10px]">Новинка:</p>
                <Input
                  className="w-[235px] block mb-[16px]  bg-[#F2F2F2]"
                  placeholder="Все"
                />
                <p className="text-[12px] mb-[10px]">Акция:</p>
                <Input
                  className="w-[235px] block mb-[16px]  bg-[#F2F2F2]"
                  placeholder="Все"
                />
              </div>
              <Button className="bg-[#E4E4E4] w-[280px] font-semibold ">
                Показать результат
              </Button>
            </div>

            <div className="gap-x-6 gap-y-8 flex flex-wrap justify-center mt-5 mb-[50px]  ">
              {ProductList.map((item, index) => (
                <div
                  key={index}
                  className="max-w-[280px]  bg-[#FFF] rounded-md relative"
                >
                  <div>
                    <div className="pt-[25px] pr-5 pb-[27px] pl-5">
                      <Image
                        className="mb-5"
                        src={item.image}
                        alt="nimadir"
                      ></Image>
                      <FontAwesomeIcon
                        icon={faHeart}
                        className="w-[26px] absolute right-[14px] top-[10px] text-red-500 "
                      />
                      <h2 className="mb-6 text-[20px] font-medium">
                        {item.name}
                      </h2>
                      <p className="text-[20px] font-bold">{item.price} uzs</p>
                    </div>

                    <Link
                      className="bg-[#FBD029] px-[81px] py-[15px] rounded-b-md  text-[20px] "
                      href="/korzinka"
                    >
                      <ShoppingCartOutlinedIcon className="mr-[5px]" /> Корзина
                    </Link>
                  </div>
                </div>
              ))}

              <div>
                <Button className="bg-[#FFF]   text-[20px] font-medium h-[54px] max-[1100px]:hidden ">
                  Показать ещё
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
