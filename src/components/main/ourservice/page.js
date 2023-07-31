"use client"
import Image from "next/image";

import { motion } from "framer-motion";

const scrollmotion={
  offscreen:{y:0},
  onscreen:{y:-100},
  transition:{type:"spring", stiffness:"300" ,duration:"1"}
}

const Ourservice = () => {
  return (
    <>
      <section className="bg-white text-black">
        <div className="container mx-auto w-[80%] py-12">
          <div className="text-center space-y-5 py-8">
            <h1 className={`text-3xl head`}>Our <span className="astrology">Services</span></h1>
           <p className="text-slate-600  md:w-[50%] mx-auto">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected hummer.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-24">
            <motion.div     initial={"offscreen"}
            whileInView={"onscreen"}
            variants={scrollmotion}
 
            
             className="service-box text-center space-y-8 bg-white   border p-10  hover:shadow-slate-500 hover:shadow-md">
             <Image src="/main/sv6.png" width="90" height="60" alt="img" className="mx-auto service-img p-4 rounded-full"/>
              <h1 className={`head  service-head`}>Birth Journal</h1>
              <p>
                On the other hand, we denounce with righteous indignation and
                dislike men.
              </p>
              <button className="make-it py-2 px-4 text-white rounded-sm hover:bg-white ">Read More</button>
            </motion.div>
            <motion.div 
             initial={"offscreen"}
            whileInView={"onscreen"}
        variants={scrollmotion}
             className="service-box text-center space-y-8 bg-white   border  p-10 hover:shadow-slate-500 hover:shadow-md ">
             <Image src="/main/sv6.png" width="90" height="60" alt="img" className="mx-auto service-img p-4 rounded-full"/>
              <h1 className={`head  service-head`}>Vastu Shastra</h1>
              <p>
                On the other hand, we denounce with righteous indignation and
                dislike men.
              </p>
              <button className="make-it py-2 px-4 text-white rounded-sm hover:bg-white ">Read More</button>
            </motion.div>
            <motion.div 
             initial={"offscreen"}
            whileInView={"onscreen"}
        variants={scrollmotion}
             className="service-box text-center space-y-8 bg-white   border  p-10 hover:shadow-slate-500 hover:shadow-md ">
             <Image src="/main/sv6.png" width="90" height="60" alt="img" className="mx-auto service-img p-4 rounded-full"/>
              <h1 className={`head  service-head`}>Face Reading</h1>
              <p>
                On the other hand, we denounce with righteous indignation and
                dislike men.
              </p>
              <button className="make-it py-2 px-4 text-white rounded-sm hover:bg-white ">Read More</button>
            </motion.div>
            <motion.div 
             initial={"offscreen"}
            whileInView={"onscreen"}
        variants={scrollmotion}
             className="service-box text-center space-y-8 bg-white   border  p-10 hover:shadow-slate-500 hover:shadow-md ">
             <Image src="/main/sv6.png" width="90" height="60" alt="img" className="mx-auto service-img p-4 rounded-full"/>
              <h1 className={`head  service-head`}>Lal Kitab</h1>
              <p>
                On the other hand, we denounce with righteous indignation and
                dislike men.
              </p>
              <button className="make-it py-2 px-4 text-white rounded-sm hover:bg-white ">Read More</button>
            </motion.div>
            <motion.div 
             initial={"offscreen"}
            whileInView={"onscreen"}
        variants={scrollmotion}
             className="service-box text-center space-y-8 bg-white   border  p-10 hover:shadow-slate-500 hover:shadow-md ">
             <Image src="/main/sv6.png" width="90" height="60" alt="img" className="mx-auto service-img p-4 rounded-full"/>
              <h1 className={`head  service-head`}>Crystal Ball</h1>
              <p>
                On the other hand, we denounce with righteous indignation and
                dislike men.
              </p>
              <button className="make-it py-2 px-4 text-white rounded-sm hover:bg-white ">Read More</button>
            </motion.div>
            <motion.div 
             initial={"offscreen"}
            whileInView={"onscreen"}
        variants={scrollmotion}
             className="service-box text-center space-y-8 bg-white   border  p-10 hover:shadow-slate-500 hover:shadow-md ">
             <Image src="/main/sv6.png" width="90" height="60" alt="img" className="mx-auto service-img p-4 rounded-full"/>
              <h1 className={`head  service-head`}>Kundli Dosh</h1>
              <p>
              On the other hand, we denounce with righteous indignation and dislike men.
              </p>
              <button className="make-it py-2 px-4 text-white rounded-sm hover:bg-white ">Read More</button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ourservice;
