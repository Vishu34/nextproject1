"use client"
import {
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import Image from "next/image";
import CountUp from "react-countup";
import { useState } from "react";

import { motion } from "framer-motion";
import ScrollTrigger from "react-scroll-trigger";
const scrollmotion={
  offscreen:{y:0},
  onscreen:{y:-100},
  transition:{type:"spring", stiffness:"300" ,duration:"1"}
}

const Expert = () => {
  const [counteron,setcounteron]=useState(false)
  return (
    <>
      <section className="bg-white text-black">
        <div className="container mx-auto w-[80%] py-12">
          <div className="text-center space-y-3 py-8">
            <h1 className={`  text-4xl  font-bold`}>
              Our <span className=" head astrology">Expert</span>
            </h1>
            <p className="text-slate-600  md:w-[50%] mx-auto">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected hummer.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-24">
            <motion.div   initial={"offscreen"}
            whileInView={"onscreen"}
            variants={scrollmotion}
             className="text-center space-y-3 bg-gray-200 p-10 hoveroutline-8 border-8 border-slate-200  hover:bg-white expert-box">
              <Image
                src="/main/tm1.jpg"
                width="50"
                height="40"
                alt="image"
                className="mx-auto rounded-full w-28 h-28 border-8 border-white hover:shadow-xl hover:shadow-slate-300 expert-img my-2"
              />
              <h1 className={`  font-bold  text-lg`}>teamClarence Kissel</h1>
              <p className="text-slate-600 text-sm">strologer</p>

              <ul className="flex justify-center space-x-3 pt-5">
                <li className="">
                  <FaFacebookF className="fa-icon w-8 h-8 p-2 text-md" />
                </li>
                <li className="">
                  <FaInstagram className="fa-icon w-8 h-8 p-2 text-md" />
                </li>
                <li className="">
                  <FaTwitter className="fa-icon w-8 h-8 p-2 text-md" />
                </li>
              </ul>
            </motion.div>
            <motion.div   initial={"offscreen"}
            whileInView={"onscreen"}
            variants={scrollmotion}
             className="text-center space-y-3 bg-gray-200 p-10 hover:outline-8 border-8 border-slate-200  hover:bg-white expert-box">
            <Image src="/main/tm1.jpg" width='50' height="40" alt="image" className="mx-auto rounded-full w-28 h-28 border-8 border-white hover:shadow-xl hover:shadow-slate-300 expert-img my-2"/>
            <h1 className={`  font-bold  text-lg`}>Marie J.Vela</h1>
              <p className="text-slate-600 text-sm">Tarot Reader</p>

              <ul className="flex justify-center space-x-3 pt-5">
                <li className="">
                  <FaFacebookF className="fa-icon w-8 h-8 p-2 text-md" />
                </li>
                <li className="">
                  <FaInstagram className="fa-icon w-8 h-8 p-2 text-md" />
                </li>
                <li className="">
                  <FaTwitter className="fa-icon w-8 h-8 p-2 text-md" />
                </li>
              </ul>
            </motion.div>

            <motion.div   initial={"offscreen"}
            whileInView={"onscreen"}
            variants={scrollmotion}
             className="text-center space-y-3 bg-gray-200 p-10 hover:outline-8 border-8 border-slate-200  hover:bg-white expert-box">
            <Image src="/main/tm1.jpg" width='50' height="40" alt="image" className="mx-auto rounded-full w-28 h-28 border-8 border-white hover:shadow-xl hover:shadow-slate-300 expert-img my-2"/>
              <h1 className={`  font-bold  text-lg`}>Tim M.Hall</h1>
              <p className="text-slate-600 text-sm">Gemstonist</p>

              <ul className="flex justify-center space-x-3 pt-5">
                <li className="">
                  <FaFacebookF className="fa-icon w-8 h-8 p-2 text-md" />
                </li>
                <li className="">
                  <FaInstagram className="fa-icon w-8 h-8 p-2 text-md" />
                </li>
                <li className="">
                  <FaTwitter className="fa-icon w-8 h-8 p-2 text-md" />
                </li>
              </ul>
            </motion.div>

            <motion.div   initial={"offscreen"}
            whileInView={"onscreen"}
            variants={scrollmotion}
             className="text-center space-y-3 bg-gray-200 p-10 hover:outline-8 border-8 border-slate-200  hover:bg-white expert-box">
              <Image
                src="/main/tm1.jpg"
                width="50"
                height="40"
                alt="image"
                className="mx-auto rounded-full w-28 h-28 border-8 border-white hover:shadow-xl hover:shadow-slate-300 expert-img my-2"
              />
              <h1 className={`  font-bold  text-lg`}>Judith</h1>
              <p className="text-slate-600 text-sm">Astrologist</p>

              <ul className="flex justify-center space-x-3 pt-5">
                <li className="">
                  <FaFacebookF className="fa-icon w-8 h-8 p-2 text-md" />
                </li>
                <li className="">
                  <FaInstagram className="fa-icon w-8 h-8 p-2 text-md" />
                </li>
                <li className="">
                  <FaTwitter className="fa-icon w-8 h-8 p-2 text-md" />
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="have-img ">
        <div className="container mx-auto w-[80%] py-12">
          <div className="text-center space-y-5 py-8">
            <h1 className={`head font-bold text-3xl `}>
              Now <span className=" head astrology">We Have</span>
            </h1>
            <p className=" md:w-[50%] mx-auto">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected hummer.
            </p>
          </div>

          <ScrollTrigger onEnter={()=>setcounteron(true)} onExit={()=>setcounteron(false)}>   
          { 

            counteron ? ( <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 py-5 gap-8">
              
              <div className="text-center space-y-5">
              <Image src="/main/timer_1.png" width="40" height="40" alt="imag" className="mx-auto border-4 border-dotted rounded-full w-28 h-28 p-3"/>
                 <h1 className={`   head astrology text-4xl font-extrabold `} ><CountUp end={200} duration={2}/></h1>
                 <p className="font-bold">Offices Worldwide</p>
              </div>
              <div className="text-center space-y-5">
              <Image src="/main/timer_2.png" width="40" height="40" alt="imag" className="mx-auto border-4 border-dotted rounded-full w-28 h-28 p-3"/>
                 <h1 className={`   head astrology text-4xl font-extrabold `} ><CountUp end={500} duration={2}/></h1>
                 <p className="font-bold">Offices Worldwide</p>
              </div>
              <div className="text-center space-y-5">
              <Image src="/main/timer_3.png" width="40" height="40" alt="imag" className="mx-auto border-4 border-dotted rounded-full w-28 h-28 p-3"/>
                 <h1 className={`   head astrology text-4xl font-extrabold `} ><CountUp end={1000} duration={2}/></h1>
                 <p className="font-bold">Offices Worldwide</p>
              </div>
              <div className="text-center space-y-5">
              <Image src="/main/timer_3 (1).png" width="40" height="40" alt="imag" className="mx-auto border-4 border-dotted rounded-full w-28 h-28 p-3"/>
                 <h1 className={`   head astrology text-4xl font-extrabold `} ><CountUp end={800} duration={2}/></h1>
                 <p className="font-bold">Offices Worldwide</p>
              </div>
              
          </div>)  : null
          }
          
           </ScrollTrigger>
        </div>
      </section>
    </>
  );
};

export default Expert;
