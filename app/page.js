"use client";
import Swiper from "@/app/components/swiper";
import Image from "next/image";
import ProductList from "./components/product";
import img from "../public/kiyim.png";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  const katolog = [
    {
      Name: "Тренажеры",
      img: "/myach.png",
    },
    {
      Name: "Мячи",
      img: "/myach.png",
    },
    {
      Name: "Спротивные обуви",
      img: "/myach.png",
    },
    {
      Name: "Спортивные одежды",
      img: "/myach.png",
    },
    {
      Name: "Водный спорт",
      img: "/myach.png",
    },
    {
      Name: "Горный спорт",
      img: "/myach.png",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="mb-[83px] ">
          <Swiper />
        </div>
      </div>
      <section>
        <div className="bg-[#FFF]">
          <div className="container pt-5 pb-20">
            <h1 className="mb-[31px] text-[32px] ">Катаолог</h1>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-6 place-items-center">
              {katolog.map((item, index) => (
                <div
                  key={index}
                  className="w-[185px]  h-[247px] bg-[#E2C6BE] pt-6 pr-10 pb-9 pl-5 rounded-lg "
                >
                  <h2 className="text-[20px] mb-[60px]"> {item.Name}</h2>
                  <Image src={item.img} alt="koylak" width={100} height={100} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h1 className="mt-[70px] mb-[36px] text-[32px] font-medium">
            Продукты
          </h1>
          <div className="grid  grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-x-[24px] gap-y-8 place-items-center">
            {ProductList.map((item, index) => (
              <div
                key={index}
                className="max-w-[292px] bg-[#FFF] rounded-md relative"
              >
                <div>
                  <div className="pt-[25px] pr-5 pb-[27px] pl-5   ">
                    <Image className="mb-5" src={img} alt="nimadir"></Image>
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="w-[26px] absolute right-[14px] top-[10px] text-red-500 "
                    />
                    <h2 className="mb-6 text-[20px] font-medium">
                      Бутса Nike Mercurial Superfly 8 FG
                    </h2>
                    <p className="text-[20px] font-bold">500 000 uzs</p>
                  </div>
                  <button className="bg-[#FBD029] px-[85px] py-[15px]  text-[20px] max-[1225px]:px-[90px]">
                    <ShoppingCartOutlinedIcon className="mr-[6px]" />
                    Корзина
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="container mt-[80px]">
          <h1 className="text-[32px] mb-[30px] font-medium">О нас</h1>
          <div className="bg-[#1F1D14] pt-[70px] pr-[400px] pb-[101px] pl-[80px] max-[950px]:p-20 max-[650px]:p-10">
            <p className="text-[#FFF] text-[20px] opacity-0.5 font-normal ">
              Интернет магазин спортивных товаров 7MARKETSPORT.UZ предлагает
              широкий ассортимент продукции с доставкой по Ташкенту, области и
              другим регионам Узбекистана. Ведется работа как с розничными
              покупателями, так и с оптовыми клиентами. Разнообразие форм оплаты
              заметно упрощает процесс приобретения товара. Действует гибкая
              система скидок. Разнообразие форм оплаты заметно упрощает процесс
              приобретения товара. Действует гибкая система скидок.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="slider-container container bg-white mt-[81px] mb-[80px] py-11 items-center">
          <Slider className="items-center " {...settings}>
            <div >
              <Image className="w-[74px]" src="/puma.png" alt="" width={100} height={100} />
            </div>
            <div>
            <Image className="w-[57px]" src="/chanel.png" alt="" width={100} height={100} />
            </div>
            <div>
            <Image className="w-[79px]" src="/nike.png" alt="" width={100} height={100} />
            </div>
            <div >
              <Image className="w-[83px]" src="/rebook.png" alt="" width={100} height={100} />
            </div>
            <div >
              <Image className="w-[74px]" src="/adidas.png" alt="" width={100} height={100} />
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
}
