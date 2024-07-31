"use client";
import React from "react";
import Image from "next/image";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
const Index = () => {
  const info = [
    {
      title: "Полезные информации",
      text: `Эллиптические тренажёры популярны среди людей любого возраста и с
            разным уровнем физической подготовкb Эллиптические тренажёры
            популярны среди людей любого возраста и с разным уровнем физической
            подготовки...`,
      data: "27.01.2022",
    },
    {
      title: "Полезные информации",
      text: `Эллиптические тренажёры популярны среди людей любого возраста и с
            разным уровнем физической подготовкb Эллиптические тренажёры
            популярны среди людей любого возраста и с разным уровнем физической
            подготовки...`,
      data: "27.01.2022",
    },
    {
      title: "Полезные информации",
      text: `Эллиптические тренажёры популярны среди людей любого возраста и с
            разным уровнем физической подготовкb Эллиптические тренажёры
            популярны среди людей любого возраста и с разным уровнем физической
            подготовки...`,
      data: "27.01.2022",
    },
    {
      title: "Полезные информации",
      text: `Эллиптические тренажёры популярны среди людей любого возраста и с
            разным уровнем физической подготовкb Эллиптические тренажёры
            популярны среди людей любого возраста и с разным уровнем физической
            подготовки...`,
      data: "27.01.2022",
    },
    {
      title: "Полезные информации",
      text: `Эллиптические тренажёры популярны среди людей любого возраста и с
            разным уровнем физической подготовкb Эллиптические тренажёры
            популярны среди людей любого возраста и с разным уровнем физической
            подготовки...`,
      data: "27.01.2022",
    },
    {
      title: "Полезные информации",
      text: `Эллиптические тренажёры популярны среди людей любого возраста и с
            разным уровнем физической подготовкb Эллиптические тренажёры
            популярны среди людей любого возраста и с разным уровнем физической
            подготовки...`,
      data: "27.01.2022",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="flex mt-6 gap-[10px]">
          <HomeOutlinedIcon />
          <p className="text-[16px] opacity-[0.6]">Главная</p>
          <ArrowForwardIosOutlinedIcon className="w-4 opacity-[0.6]" />
          <p className="text-[16px] font-medium">Новости</p>
        </div>
        <h1 className="text-[32px] font-medium  mt-14 mb-[30px]">
          Полезные информации
        </h1>
        <div className=" grid grid-cols-[repeat(auto-fit,minmax(450px,1fr))] gap-6 place-items-center">
          {info.map((item, index) => (
            <div
              key={index}
              className="max-w-[590px] bg-white pt-[38px] pr-[111px] pb-[45px] pl-[35px] gap-6 rounded-[8px] mb-[30px] max-[1160px]:pr-[35px]"
            >
              <h2 className="text-[#1F1D14]  font-medium text-[32px] mb-2">
                {item.title}
              </h2>
              <p className="mb-[123px] opacity-[0.7] text-[16px]">
                {item.text}
              </p>
              <div className="flex gap-1 ">
                <Image
                  className="w-4"
                  src="/calendar.svg"
                  alt="calendar"
                  width={100}
                  height={100}
                />
                <p>{item.data}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="text-[20px] border-2 border-yellow-500  border-solid py-4 px-10 rounded-[5px] mb-20 max-[963]:ml-[200px] ">
          Показать ещё
        </button>
      </div>
    </>
  );
};

export default Index;
