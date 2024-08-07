import React from 'react'
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import Image from 'next/image';

const Index = () => {
  return (
    <>
    <div>
        <div className='container'>
        <div className="flex mt-6 gap-[10px] mb-9">
          <HomeOutlinedIcon />
          <p className="text-[16px] opacity-[0.6]">Главная</p>
          <ArrowForwardIosOutlinedIcon className="w-4 opacity-[0.6]" />
          <p className="text-[16px] font-medium">О нас</p>
        </div>
            <div className='flex gap-6 mb-[120px]'>
            <div className='bg-white pt-5 pr-[77px] pb-[184px] pl-[37px] rounded-md h-[256px]' >
                <div className='flex gap-1 items-center mb-4'>
               <div className='w-[18px]'>
               <Image
                className='w-18px'
                src="/info.svg"
                alt=''
                width={100}
                height={100}/>
               </div>
               <h1 className='text-[16px] font-semibold'>О нас</h1>
                </div>
                <h2 className='text-[16px] font-semibold'>
                Вканация
                </h2>
            </div>
            <div className='bg-white pt-10 pr-[66px] pb-[146px] pl-[50px] max-w-[714px] rounded-[5px]'>
                <h1 className='text-[24px] font-semibold mb-4'>
                7 SPORT MARKET
                </h1>
                <p className='text-[16px] mb-7'> 
                В составе томатов в большом количестве содержатся сахара, клетчатка, пектины, бета-каротин, витамины В1, В2, В5, В6, В9, С, К, Н и РР, а также нужные организму человека.
                </p>
                <p  className='text-[16px] mb-7'>
                Овощи содержат в себе много полезных витаминов, которые укрепляют здоровье и иммунитет и являются необходимым компонентом в рационе человека. Тепличный помидор - всегда доступен для вас и в сети супермаркетов “Makro” вы всегда можете найти его по выгодной цене и заказать их с доставкой в Ташкенте.
                </p>
                <p  className='text-[16px] mb-7'>
                В составе томатов в большом количестве содержатся сахара, клетчатка, пектины, бета-каротин, витамины В1, В2, В5, В6, В9, С, К, Н и РР, а также нужные организму человека.
                </p>
                <p  className='text-[16px] mb-7'>
                Овощи содержат в себе много полезных витаминов, которые укрепляют здоровье и иммунитет и являются необходимым компонентом в рационе человека. Тепличный помидор - всегда доступен для вас и в сети супермаркетов “Makro” вы всегда можете найти его по выгодной цене и заказать их с доставкой в Ташкенте.
                </p>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Index