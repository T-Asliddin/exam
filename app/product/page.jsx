"use client";
import React, { useEffect, useState } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Button, Input } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";
import product from "@/service/product.service";
import like from "@/service/like.service";
import { getAccessToken } from "@/helpers/auth-helpers";
import Modal from "@/app/components/ui/modal";

function valuetext(value) {
  return `${value}°C`;
}

const Index = () => {
  const [value, setValue] = useState([20, 37]);
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const getData = async () => {
    try {
      const productResponse = await product.get({ page: 1, limit: 10 });
      let likedProducts = [];
      if (getAccessToken("access_token")) {
        const likeResponse = await like.get({ page: 1, limit: 10 });
        if (
          likeResponse.status === 200 &&
          likeResponse.data.products !== null
        ) {
          likedProducts = likeResponse.data.products;
        }
      }

      if (
        productResponse.status === 200 &&
        productResponse.data.products !== null
      ) {
        const productsWithLikes = productResponse.data.products.map((item) => {
          item.liked = likedProducts.some(
            (likedItem) => likedItem.product_id === item.product_id
          );
          return item;
        });
        setData(productsWithLikes);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
    const savedCartItems = JSON.parse(localStorage.getItem("ids")) || [];
    setCartItems(savedCartItems);
  }, []);

  const handleClick = async (productId) => {
    if (getAccessToken("access_token")) {
      try {
        const updatedData = data.map((item) => {
          if (item.product_id === productId) {
            item.liked = !item.liked;
          }
          return item;
        });
        setData(updatedData);

        const response = await like.post(productId);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    } else {
      setOpen(true);
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleCartToggle = (productId) => {
    setCartItems((prevItems) => {
      let updatedItems;
      if (prevItems.includes(productId)) {
        updatedItems = prevItems.filter((id) => id !== productId);
      } else {
        updatedItems = [...prevItems, productId];
      }
      localStorage.setItem("ids", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  return (
    <>
      <Modal open={open} toggle={() => setOpen(false)} />
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

            <div className="gap-x-6 gap-y-8 flex flex-wrap justify-center mt-5 mb-[50px]">
              {data?.map((item, index) => (
                <div
                  className="max-w-[292px] bg-[#FFF] rounded-md relative"
                  key={index}
                >
                  <div className="absolute right-3 top-[8px]">
                    <FontAwesomeIcon
                      icon={item.liked ? faHeartSolid : faHeartRegular}
                      style={{ fontSize: "26px" }}
                      className={`cursor-pointer ${
                        item.liked ? "text-red-500" : "text-gray-400"
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleClick(item.product_id);
                      }}
                    />
                  </div>

                  <div>
                    <Link href={`/singl-page?id=${item.product_id}`}>
                      <div className="pt-[25px] pr-5 pb-[27px] pl-5 h-[416px]">
                        <div className="w-[242px] h-[250px]">
                          <img
                            className="mb-5"
                            src={item?.image_url ? item.image_url[0] : ""}
                            alt={item.product_name}
                          />
                        </div>
                        <h2 className="mb-6 text-[20px] font-medium">
                          {item.product_name}
                        </h2>
                        <p className="text-[20px] font-bold">{item.cost} uzs</p>
                      </div>
                    </Link>
                    <button
                      className="bg-[#FBD029] block text-center py-3 w-full h-[54px]"
                      onClick={() => handleCartToggle(item.product_id)}
                    >
                      {cartItems.includes(item.product_id) ? (
                        <ShoppingCartIcon />
                      ) : (
                        <ShoppingCartOutlinedIcon />
                      )}{" "}
                      Корзина
                    </button>
                  </div>
                </div>
              ))}

              <div className="w-full flex justify-center mt-4">
                <Button className="bg-[#FFF] text-[20px] font-medium w-[924px] h-[54px]">
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
