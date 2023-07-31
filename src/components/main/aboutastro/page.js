"use client"
import { motion } from "framer-motion";


import Image from "next/image";

const Aboutastro = () => {
  return (
    <>
      <section className="bg-white text-black py-14 ">
        <div className="container mx-auto w-[80%]">
          <div className="text-center space-y-5 py-8">
            <h1 className={` head  text-3xl`}>
              About <span className="astrology">Astrology</span>
            </h1>
            <p className="text-slate-600  md:w-[50%] mx-auto">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected hummer.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 py-8 items-center ">
           
            <motion.div 
            initial={{x:-20}}
            whileInView={{x:0}}
            transition={{type:"spring", stiffness:"300" ,duration:"1"}} className="">
            <Image
              src="/main/about.png"
              width="380"
              height="200"
              alt="aboutearth"
              className=" mx-auto py-3"
            />
            </motion.div>
            <motion.div 
             initial={{x:20}}
            whileInView={{x:0}}
            transition={{type:"spring", stiffness:"300" ,duration:"1"}}
            className="space-y-5" >
              <h1 className={`  head text-xl`}>Know About Astrology</h1>
              <p className="text-slate-600">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </p>
              <p className="text-slate-600">
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
              </p>
              <button className="make-it py-2 px-4 rounded-sm text-white hover:bg-white">Know More</button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutastro;
