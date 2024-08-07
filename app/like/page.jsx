"use client";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { Button, Input } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import like from "@/service/like.service";
import { useEffect, useState } from "react";

function valuetext(value) {
  return `${value}°C`;
}

const Index = () => {
  const [data, setData] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const getData = async () => {
    try {
      const response = await like.get({ page: 1, limit: 10 });
      if (response.status === 200 && response.data.products !== null) {
        // Filter out products with response.data set to false
        const filteredProducts = response.data.products.filter(
          (item) => item !== false
        );
        setData(filteredProducts);
      }
    } catch (error) {
      console.log(error);
    }
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
  useEffect(() => {
    getData();
    const savedCartItems = JSON.parse(localStorage.getItem("ids")) || [];
    setCartItems(savedCartItems);
  }, []);

  const handleClick = async (productId) => {
    try {
      const response = await like.post(productId);
      if (response.status === 200 && response.data !== false) {
        setData((prevData) =>
          prevData.map((item) =>
            item.product_id === productId
              ? { ...item, liked: !item.liked }
              : item
          )
        );
      } else {
        setData((prevData) =>
          prevData.filter((item) => item.product_id !== productId)
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <div className="container">
          <div className="flex mt-6 gap-[10px]">
            <HomeOutlinedIcon />
            <p className="text-[16px] opacity-[0.6]">Главная</p>
            <ArrowForwardIosOutlinedIcon className="w-4 opacity-[0.6]" />
            <p className="text-[16px] font-medium">like</p>
          </div>

          <div className="flex gap-8 max-[620px]:flex-none ">
            <div className="gap-x-6 gap-y-8 flex flex-wrap justify-center mt-5 mb-[50px]">
              {/* {data?.map((item, index) => {
                return (
                  <Link key={index} href={`/singl-page?id=${item.product_id}`}>
                    <div className="max-w-[280px] bg-[#FFF] rounded-md relative">
                      <div>
                        <div className="pt-[25px] pr-5 pb-[27px] pl-5 w-[290px] h-[416px]">
                          <img
                            className="mb-5 h-[194px]"
                            src={item?.image_url && item.image_url[0]}
                            alt=""
                          />
                          <div className="absolute right-3 top-[8px]">
                            <FontAwesomeIcon
                              icon={faHeartSolid}
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
                          <h2 className="mb-6 text-[20px] font-medium">
                            {item.product_name}
                          </h2>
                          <p className="text-[20px] font-bold">
                            {item.cost} uzs
                          </p>
                        </div>
                        <Link
                          className="bg-[#FBD029] block text-center py-3 w-full h-[54px]"
                          href={`korzinka?id=${item.product_id}`}
                        >
                          <ShoppingCartOutlinedIcon /> Корзина
                        </Link>
                      </div>
                    </div>
                  </Link>
                );
              })} */}
              {data?.map((item, index) => (
                <div
                  className="max-w-[292px] bg-[#FFF] rounded-md relative"
                  key={index}
                >
                  <div className="absolute right-3 top-[8px]">
                    <FontAwesomeIcon
                      icon={faHeartSolid}
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
              <div>
                <Button className="bg-[#FFF] text-[20px] font-medium h-[54px] max-[1100px]:hidden">
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
