"use client";
import Image from "next/image";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";


const Index = () => {
  return (
    <header className="bg-[#1F1D14]">
      <div className="flex items-center container justify-between p-3 max-[800px]:justify-between">
        <div className="flex items-center gap-[11px]">
          <div className="w-16">
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
        <div className="max-[1150px]:mr-[30px] max-[800px]:hidden">
          <nav>
            <ul className="text-white flex text-[16px] gap-[30px]">
              <li>Продукты</li>
              <li>Контакты</li>
              <li>Оплата и Доставка</li>
              <li>Новости</li>
              <li>О нас</li>
            </ul>
          </nav>
        </div>
        <div className="flex gap-[30px] max-[1150px]:hidden">
          <div className="flex items-center gap-1">
            <div className="w-5">
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
        <div className="text-white hidden max-[800px]:block">
          <MenuOutlinedIcon
            style={{ fontSize: 45 }}
            color="inherit"
          />
        </div>
      </div>
    </header>
  );
};

export default Index;
