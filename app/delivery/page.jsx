import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import Image from "next/image";

const Index = () => {
  return (
    <>
      <div>
        <div className="container">
          <div className="flex mt-6 gap-[10px] mb-9">
            <HomeOutlinedIcon />
            <p className="text-[16px] opacity-[0.6]">Главная</p>
            <ArrowForwardIosOutlinedIcon className="w-4 opacity-[0.6]" />
            <p className="text-[16px] font-medium">Оплата и Доставка</p>
          </div>
          <div className="flex gap-6 mb-[120px]">
            <div className="bg-white pt-5  pb-[184px] px-[18px] rounded-md h-[256px]">
              <div className="flex gap-1 items-center mb-4">
                <div className="w-[18px]">
                  <Image
                    className="w-18px"
                    src="/info.svg"
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>
                <h1 className="text-[16px] font-semibold">Оплата и Доставка</h1>
              </div>
            </div>
            <d iv className="bg-white pt-10 pr-[66px] pb-[74px] pl-[50px] max-w-[714px] rounded-[5px]">
              <h1 className="text-[24px] font-semibold mb-4">Способы оплаты</h1>
              <p className="text-[16px] mb-7">
                Для того, чтобы оплатить товар, Вам нужно перейти в «Корзину» и
                выбрать тот товар, который Вы хотите купить.
              </p>
              <p className="text-[16px] mb-7">
                После перехода в Корзину, откроется список товаров, которые Вы
                добавили. Далее, нажимаем кнопку «Оформить заказ». В окне,
                появится «Контактная информация» и «Способы доставки», которые
                Вам не обходимо заполнить.
              </p>
              <p className="text-[16px] mb-7">
                Вы можете выбрать более подходящий для Вас способ оплаты:
                <span className="block">-Оплата на месте;</span>
                -Оплата по терминалу;
                <span className="block">
                  -Оплата через платёжные системы, такие как CLICK, Payme.
                </span>
              </p>
              <p className="text-[16px] mb-7">
                Оплатить покупки можно наличными при получении. Убедительная
                просьба вначале ознакомиться с товаром, убедиться в отсутствии
                дефектов в присутствии курьера, после чего оплачивать сумму.
              </p>

              <h1 className="text-[24px] font-semibold mb-4">Доставка</h1>
              <p className="text-[16px] mb-7">
                Тарифы на доставку товаров по Ташкенту:
              </p>
              <span className="block">
                -20.000 сум для товаров до 150.000 сум
              </span>

              <span className="block mb-7">
                -Бесплатная доставка для всех товаров от 150.000 сум
              </span>
              <p className="text-[16px] mb-7">
                Тарифы на доставку товаров по всех регионов:
                <span className="block">
                  -Платная доставка для всех товаров по согласованной цене
                </span>
                <span className="block">
                  -Бесплатная установка для всех тренажеров
                </span>
              </p>
            </d>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
