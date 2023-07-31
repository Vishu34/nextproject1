"use client"
import { BsCheck } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

import { motion } from "framer-motion";
const Pricepack = () => {
  return (
    <>
      <section className="bg-gray-100 text-black">
        <div className="">
          <div className="container mx-auto w-[80%] py-12">
            <div className="text-center space-y-5 py-8">
              <h1 className={` head text-4xl`}>
                Price <span className="astrology">Packages</span>
              </h1>
              <p className="text-slate-600  md:w-[50%] mx-auto">
                Price Packages There are many variations of passages of Lorem
                Ipsum available, but the majority have suffered alteration in
                some form, by injected hummer.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-14 pb-14">
              <motion.div initial={{scale:0}}
              whileInView={{scale:1}}
              transition={{type:"spring", stiffness:"100", duration:"1"}} className="bg-white p-5 text-center space-y-8 ">
                <h1 className={` head text-xl  pb-10`}>Basic Package</h1>

                <div className="">
                  <hr className="text-black bg-black w-[100%] mt-20" />
                  <div className="bg-white shadow-lg text-orange-600 hover:shadow-slate-500 border-8 border-gray-100 hover:border-white hover:bg-orange-500 w-36 h-36 text-center hover:text-white p-5 text-lg rounded-full mx-auto -mt-20">
                    <h1>$ 1.99 </h1>
                    <p> PER MONTH</p>
                  </div>
                </div>
                <ul className="text-md space-y-5">
                  <li className="flex items-center justify-center"> <BsCheck className="text-green-600 text-xl mx-2"/> Full Customization </li>
                  <li className="flex items-center justify-center"><BsCheck className="text-green-600 text-xl mx-2"/> Ticketing System</li>
                  <li className="flex items-center justify-center"> <BsCheck className="text-green-600 text-xl mx-2"/> Data Security</li>
                  <li className="flex items-center justify-center"> <BsCheck className="text-green-600 text-xl mx-2"/>Advanced Reporting</li> 
                  <li className="flex items-center justify-center"> <BsCheck className="text-green-600 text-xl mx-2"/> Agent Groups</li>
                  <li className="flex items-center justify-center"> <RxCross2  className="text-red-600 text-xl mx-2"/> Multiple Brandings</li>
                  <li className="flex items-center justify-center"> <RxCross2  className="text-red-600 text-xl mx-2"/> Staffing Prediction</li>
                  <li className="flex items-center justify-center"> <RxCross2  className="text-red-600 text-xl mx-2"/>Work Scheduler</li>
                </ul>
                <button className="make-it py-2 px-4 text-white hover:bg-white rounded-sm">
                  Purchase Now
                </button>
              </motion.div>

              <motion.div initial={{scale:0}}
                whileInView={{scale:1}}
                transition={{type:"spring", stiffness:"100", duration:"1"}} className="bg-white scale-110 my-14 md:my-0">
                <h1 className="bg-orange-500 w-[100%] text-white p-2 text-center">
                  Most Popular
                </h1>
                <div className="p-5 text-center space-y-8">
                  <h1 className={` head text-xl  pb-10`}>Standard package</h1>
                  <div className="ra">
                    <hr className="text-black bg-black w-[100%] mt-20" />
                    <div className="bg-white shadow-lg text-orange-600 hover:shadow-slate-500 border-8 border-gray-100 hover:border-white hover:bg-orange-500  w-36 h-36 text-center hover:text-white p-5 text-lg rounded-full mx-auto -mt-20">
                      <h1>$ 1.99 </h1>
                      <p> PER MONTH</p>
                    </div>
                  </div>
                  <ul className="text-md space-y-5">
                  <li className="flex items-center justify-center"> <BsCheck className="text-green-600 text-xl mx-2"/> Full Customization </li>
                  <li className="flex items-center justify-center"><BsCheck className="text-green-600 text-xl mx-2"/> Ticketing System</li>
                  <li className="flex items-center justify-center"> <BsCheck className="text-green-600 text-xl mx-2"/> Data Security</li>
                  <li className="flex items-center justify-center"> <BsCheck className="text-green-600 text-xl mx-2"/>Advanced Reporting</li> 
                  <li className="flex items-center justify-center"> <BsCheck className="text-green-600 text-xl mx-2"/> Agent Groups</li>
                  <li className="flex items-center justify-center"> <RxCross2  className="text-red-600 text-xl mx-2"/> Multiple Brandings</li>
                  <li className="flex items-center justify-center"> <RxCross2  className="text-red-600 text-xl mx-2"/> Staffing Prediction</li>
                  <li className="flex items-center justify-center"> <RxCross2  className="text-red-600 text-xl mx-2"/>Work Scheduler</li>
                  </ul>
                  <button className="make-it py-2 px-4 text-white hover:bg-white rounded-sm">
                    Purchase Now
                  </button>
                </div>
              </motion.div>

              <motion.div initial={{scale:0}}
              whileInView={{scale:1}}
              transition={{type:"spring", stiffness:"100", duration:"1"}} className="bg-white p-5 text-center space-y-8 ">
                <h1 className={` head text-xl  pb-10`}>Pro Package</h1>
                <div className="">
                  <hr className="text-black bg-black w-[100%] mt-20 z-20" />
                  <div className="shadow-lg bg-white text-orange-600 hover:shadow-slate-500 border-8 border-gray-100 hover:border-white hover:bg-orange-500 w-36 h-36 text-center hover:text-white p-5 text-lg mx-auto rounded-full -mt-20 z-50">
                    <h1>$ 1.99 </h1>
                    <p> PER MONTH</p>
                  </div>
                </div>
                <ul className="text-md space-y-5">
                  <li className="flex items-center justify-center"> <BsCheck className="text-green-600 text-xl mx-2"/> Full Customization </li>
                  <li className="flex items-center justify-center"><BsCheck className="text-green-600 text-xl mx-2"/> Ticketing System</li>
                  <li className="flex items-center justify-center"> <BsCheck className="text-green-600 text-xl mx-2"/> Data Security</li>
                  <li className="flex items-center justify-center"> <BsCheck className="text-green-600 text-xl mx-2"/>Advanced Reporting</li> 
                  <li className="flex items-center justify-center"> <BsCheck className="text-green-600 text-xl mx-2"/> Agent Groups</li>
                  <li className="flex items-center justify-center"> <RxCross2  className="text-red-600 text-xl mx-2"/> Multiple Brandings</li>
                  <li className="flex items-center justify-center"> <RxCross2  className="text-red-600 text-xl mx-2"/> Staffing Prediction</li>
                  <li className="flex items-center justify-center"> <RxCross2  className="text-red-600 text-xl mx-2"/>Work Scheduler</li>
                </ul>
                <button className="make-it py-2 px-4 text-white hover:bg-white rounded-sm">
                  Purchase Now
                </button>
              </motion.div>
            </div>
          </div>

          <div className="daily-planetary  text-center ">
            <motion.div initial={{y:0}}
                whileInView={{y:-100}}
                transition={{type:"spring", stiffness:"100", duration:"1"}} className="pt-48 text-white space-y-8 px-4 sm:px-16">
              <h1 className={` head text-3xl`}>
                Daily Planetary <span className="astrology">Overview</span>
              </h1>
              <p className=" md:w-[50%] mx-auto">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      
    </>
  );
};
export default Pricepack;
