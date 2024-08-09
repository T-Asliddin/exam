"use client";
import { useParams } from "next/navigation";
import React from 'react';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { useState, useEffect } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Swiper, SwiperSlide } from "swiper/react";
import product from "@/service/product.service";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import comment from "@/service/comment.service";
import Link from "next/link";
import Modal from "@/app/components/ui/modal";
import { getAccessToken } from "@/helpers/auth-helpers";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./index.css";

const Index = () => {
  const [open, setOpen] = useState(false);
  const searchParams = useParams();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [data, setData] = useState([]);
  const [comments, setComments] = useState([]);
  const id = searchParams.get("id");
  const getData = async () => {
    try {
      const response = await product.get({ page: 1, limit: 100 });
      if (response.status === 200 && response.data.products !== null) {
        response?.data?.products?.map((item) => {
          if (item.product_id === id) {
            setData(item);
          }
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const getComment = async () => {
    try {
      const response = await comment.get({ page: 1, limit: 100, id });
      if (response.status === 200) {
        setComments(response.data.Comment);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getComment();
  }, []);
  const [text, setText] = useState("");
  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = async () => {
    const payload = {
      productID: id,
      message: text,
    };

    if (getAccessToken("access_token")) {
      try {
        const response = await comment.post(payload);
        if (response.status === 201) {
          window.location.reload();
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setOpen(true);
    }
  };
  return (
    <>
      <Modal open={open} toggle={() => setOpen(false)} />
      <div>
        <div className="container">
          <div className="flex mt-6 gap-[10px] mb-9">
            <HomeOutlinedIcon />
            <p className="text-[16px] opacity-[0.6]">Главная</p>
            <ArrowForwardIosOutlinedIcon className="w-4 opacity-[0.6]" />
            <p className="text-[16px] opacity-[0.6]">Продукты</p>
            <ArrowForwardIosOutlinedIcon className="w-4 opacity-[0.6]" />
            <p className="text-[16px] font-medium">{data.product_name}</p>
          </div>
          <div className="flex justify-between mb-[100px]">
            <div className="max-w-[690px] h-[500px] rounded-md bg-[#fff] ">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
              >
                {data?.image_url?.length > 0 ? (
                  data.image_url.map((item, index) => (
                    <SwiperSlide key={index}>
                      <img src={item} />
                    </SwiperSlide>
                  ))
                ) : (
                  <SwiperSlide>
                    <div className="flex items-center justify-center h-full">
                      <p className="text-[24px]">No image</p>
                    </div>
                  </SwiperSlide>
                )}
              </Swiper>
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
              >
                {data?.image_url?.length > 0 ? (
                  data.image_url.map((item, index) => (
                    <SwiperSlide key={index}>
                      <img src={item} />
                    </SwiperSlide>
                  ))
                ) : (
                  <SwiperSlide>
                    <div className="flex items-center justify-center h-full">
                      <p className="text-[24px]">No image</p>
                    </div>
                  </SwiperSlide>
                )}
              </Swiper>
            </div>
            <div className="bg-white w-[495px] py-[50px] pr-[80px] rounded-md pl-[50px] ">
              <div>
                <h1 className="text-[32px] mb-4 font-semibold">
                  {data.product_name}
                </h1>
              </div>
              <div className="text-[16px]">
                <p className=" mb-[10px] font-medium">{data.description}</p>
                <h1 className="text-[16px] inline mr-2">Color :</h1>
                <p className="text-[20px]  inline font-semibold">
                  {data?.color?.join(" ")}
                </p>
                <div className="flex mt-[10px] items-center">
                  <h1 className=" mr-2">Страна производства:</h1>
                  <p className="text-[20px] font-semibold">{data.made_in}</p>
                </div>
                <p className="text-[24px] mt-[36px] font-semibold">
                  {data.cost}{" "}
                  <span className="text-[20px] opacity-[0.8]">uzs</span>
                </p>
                <div className="mt-10 gap-5 flex">
                  <Link
                    className="bg-[#FBD029] px-[30px] py-[20px]  text-[20px] rounded-[5px] "
                    href={`korzinka?id=${data.product_id}`}
                  >
                    {" "}
                    <ShoppingCartOutlinedIcon /> Корзина
                  </Link>
                  <button className=" border-[#FBD029] border-solid border-[2px]  px-[30px] py-[20px]  text-[20px] rounded-[5px]">
                    Сравнить
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-20 flex gap-5">
            <div>
              <h1 className="text-[32px] font-medium mb-[30px]">Описание</h1>
              <div className="bg-white  max-w-[608px] rounded-lg pt-10 pr-[142px]  pb-[116px] pl-[70px]">
                <div>
                  <h1 className="text-[32px]   font-semibold">
                    {data.product_name}
                  </h1>
                </div>
                <div className="text-[16px]">
                  <p className=" mt-[28px] mb-[53px] font-medium">
                    {data.description}
                  </p>
                  <div className="flex gap-[60px] ">
                    <div>
                      <p className="text-[20px] font-medium"> Вес размер:</p>
                      <p className=" text-[16px]">{data?.size?.join(" ")}</p>
                    </div>
                    <div>
                      <p className="text-[20px] font-medium"> Цвета:</p>
                      <p className="text-[16px]  ">{data?.color?.join(" ")}</p>
                    </div>
                  </div>
                  <div className="flex gap-[110px] mt-[30px]">
                    <div>
                      <p className="text-[20px] font-medium">Count:</p>
                      <p className=" text-[16px]">{data.count}</p>
                    </div>
                    <div>
                      <p className="text-[20px] font-medium"> Discount:</p>
                      <p className="text-[16px]  ">{data.discount}</p>
                    </div>
                  </div>
                  <div className="flex gap-[65px] mt-[30px]">
                    <div>
                      <p className="text-[20px] font-medium">Age Range:</p>
                      <p className="text-[16px]  ">
                        {data.age_min} - {data.age_max}
                      </p>
                    </div>
                    <div>
                      <p className="text-[20px] font-medium">For Gender:</p>
                      <p className=" text-[16px]">{data.for_gender}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-[32px] font-medium mb-[30px]">Отзыви</h1>
              <div className="bg-white  w-[608px] rounded-lg pt-10 pr-[142px]  pb-[116px] pl-[70px]">
                {comments?.map((item, index) => {
                  if (item.Message !== "") {
                    return (
                      <div key={index}>
                        <h1 className="text-[20px] font-semibold mb-2">
                          {item?.OwnerID}
                        </h1>
                        <p className="mb-10">{item?.Message}</p>
                      </div>
                    );
                  }
                })}
                <label htmlFor="myTextarea">Your comment:</label>
                <textarea
                  id="myTextarea"
                  onChange={handleChange}
                  rows="4"
                  cols="50"
                  placeholder="comment"
                  className="border-[2px] border-solid border-[#FBD029]"
                />
                <button
                  onClick={handleSubmit}
                  className="bg-[#FBD029] px-[30px] py-[10px]  text-[20px] rounded-[5px]"
                >
                  Oтправлять
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
