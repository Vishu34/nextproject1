"use client"
import Image from "next/image";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import { Cinzel_Decorative } from "next/font/google";
const cinzel=Cinzel_Decorative({
  weight:'700',
  variable:'--cinzel',
  subsets:['latin'],
  
})

const Clientsays = () => {
  return (
    <>
      <section className="bg-white text-black">
        <div className="container mx-auto w-[80%] py-12">
          <div className="text-center space-y-5 py-8">
            <h1 className={` ${ cinzel.className} text-3xl`}>
              What Client<span className="astrology">Says</span>
            </h1>
            <p className="text-slate-600  md:w-[50%] mx-auto">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected hummer.
            </p>
          </div>

          <div className="text-black">
          <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={3}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      
    </Swiper>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 text-black   md:mb-[680px] ">
        <div className="container mx-auto w-[80%] py-12">
          <div className="">
            <div className="text-center space-y-5 py-8">
              <h1 className={` ${ cinzel.className} text-3xl`}>
                Download <span className="astrology">Our Mobile App</span>
              </h1>
              <p className="text-slate-600  md:w-[50%] mx-auto">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected hummer.
              </p>
            </div>

            <div className="flex justify-center items-center space-x-5">
              <Image
                src="/main/download1.png"
                width="180"
                height="100"
                alt="imag"
                className=""
              />
              <Image
                src="/main/download2.png"
                width="180"
                height="100"
                alt="imag"
                className=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Clientsays;
