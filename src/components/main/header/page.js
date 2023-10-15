"use client"
import { MdCall, MdPeople } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import { BsFillCartFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import Desktopnavbar from "@/components/navbar/desktop/page";

import Mobilenavbar from "@/components/navbar/mobile/page";

import { motion } from "framer-motion";
const Header = () => {

  return (
    <>
      <section className=" z-50">
        <div className="  bg-white p-4 text-black ">
          <div className="container mx-auto w-[80%]">
            {/* desktop device */}
            <div className="main-sm">
              <div className="flex justify-between ">
                <div className="">
                  <ul className="flex space-x-4 ">
                    <li className="flex items-center space-x-2">
                      <MdCall className="icon-color" />{" "}
                      <span>+1800 326 3264</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <AiOutlineMail className="icon-color" />{" "}
                      <Link href="mail-to:support@website.com">
                        support@website.com
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="">
                  <ul className="flex space-x-4 ">
                    <li className="flex items-center space-x-2">
                      <BiLogIn className="icon-color" />
                      <span>Log in</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <MdPeople className="icon-color" /> <span>Sign Up</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <FaSearch className="icon-color" />
                    </li>
                    <li className="flex items-center space-x-2">
                      <BsFillCartFill className="icon-color" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* mobile device */}
            <div className="main">
              <div className="flex-col  justify-center space-y-5">
                <div className="main-after">
                  <ul className="flex space-x-4 justify-center">
                    <li className="flex items-center space-x-2">
                      <MdCall className="icon-color" />{" "}
                      <span>+1800 326 3264</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <AiOutlineMail className="icon-color" />{" "}
                      <Link href="mail-to:support@website.com">
                        support@website.com
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* mobilelessdevice */}
                <div className="main-before-453">
                  <ul className="flex-col space-x-4 justify-center i">
                    <li className="flex items-center space-x-2 justify-center">
                      <MdCall className="icon-color" />{" "}
                      <span>+1800 326 3264</span>
                    </li>
                    <li className="flex items-center space-x-2 justify-center">
                      <AiOutlineMail className="icon-color" />{" "}
                      <Link href="mail-to:support@website.com">
                        support@website.com
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="">
                  <ul className="flex space-x-4 justify-center">
                    <li className="flex items-center space-x-2">
                      <BiLogIn className="icon-color" />
                      <span>Log in</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <MdPeople className="icon-color" /> <span>Sign Up</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <FaSearch className="icon-color" />
                    </li>
                    <li className="flex items-center space-x-2">
                      <BsFillCartFill className="icon-color" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="header-image">
          <Desktopnavbar />
          <Mobilenavbar />

          <div className="space-y-10 text-center pt-40 pb-64 px-5 sm:px-12">
            <motion.h1
             initial={{scale:0 }}
             whileInView={{scale:0.7}} 
             transition={{ type:"spring", stiffness:"300" ,delay:0 }}
             className={`text-4xl sm:text-5xl line leading-relaxed head`}>
              Astrology Revels The Will Of God
            </motion.h1>
            <motion.ul 
            initial={{scale:0 }}
             whileInView={{scale:1}} 
             transition={{ type:"spring", stiffness:"300" ,delay:0.8 }}
            className="flex justify-center space-x-5 text-md sm:text-2xl">
              <li>Horoscopes *</li>
              <li>Gemstones</li>
              <li>* Numerology</li>
            </motion.ul>

            <motion.button 
            initial={{y:400 }}
             animate={{y:0}} 
             
             transition={{ type:"spring", stiffness:"300" ,delay:2 }}
              className="make-it py-2 px-4 rounded-sm">
              Make it Now
            </motion.button>
          </div>
        </div>
        
      </section>
    </>
  );
};

export default Header;
