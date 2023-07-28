"use client"
import Image from "next/image"
import Link from "next/link"

import { useEffect, useState } from "react"
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs"
import { FaList, FaTimes } from "react-icons/fa"
const Mobilenavbar=()=>{

    const [topnav,settopnav]=useState()
    const[homelist,sethomelist]=useState();
    const[bloglist,setbloglist]=useState()
    const[shoplist,setshoplist]=useState()
    const[pagelist,setpagelist]=useState()
   
    const[nav,setnav]=useState()
    const navbar=()=>{
        if(window.scrollY>200){
          setnav(true)
        }
        else{
            setnav(false)
        }
    }
    useEffect(()=>{
   window.addEventListener('scroll',navbar)
    },[])
    return(
        <>
 <section className="py-2 mobile cursor-pointer">
    <div className={`    ${nav ? 'fixed top-0  px-2 py-2 sm:px-20 w-[100%]  z-50 bg-gray-900   duration-75 transition-transform translate-y-0 ease-in' :'static container mx-auto'} `} >
        <div className="  flex justify-between items-center ">
            <Image src="/logo.png" width="180" height="150" alt="logo"/>
             <ul>
                <li className="bg-orange-500 p-2 rounded-sm" onClick={()=>settopnav(!topnav)}>{topnav ? <FaTimes className="text-white "/> : <FaList className="text-white "/>}</li>
                
             </ul>
              
             

        </div>
    </div>
     


     {
        topnav ? (<div className=" flex justify-between items-center transition-all">
              <ul className="flex-col items-center fixed top-0 left-0 mobilelist w-[50%] h-[100%] border-r-4">
                <li className="  homelist1"><div className=" navlist flex justify-between items-center  p-3 border-b border-slate-600 rounded-sm" onClick={()=>sethomelist(!homelist)}>Home { homelist ? <BsFillCaretUpFill/> : <BsFillCaretDownFill/>}</div>
                {
                    homelist ? (<ul className="homechild1  p-2 ">
                    <li className="border-b p-2 border-slate-600">Home</li>
                    <li className="border-b p-2 border-slate-600">Horoscope</li>
                    <li className="border-b p-2 border-slate-600">Tarot Card</li>
                    <li className="border-b p-2 border-slate-600">Palmistry</li>
                    <li className="border-b p-2 border-slate-600">Vastu Shastra</li>
                    <li className="border-b p-2 border-slate-600">Gemstones</li>
                    <li className="border-b p-2 border-slate-600">Numerology</li>
                </ul>) :null
                }</li>
                <li className="navlist p-3 border-b border-slate-600 rounded-sm"><Link href="/about">About</Link></li>
                <li className="navlist p-3 border-b border-slate-600 rounded-sm"><Link href="/services">Services</Link></li>
                <li className=" bloglist1"><div className=" navlist flex justify-between items-center p-3 border-b border-slate-600 rounded-sm" onClick={()=>setbloglist(!bloglist)}>Blog { bloglist ? <BsFillCaretUpFill/> : <BsFillCaretDownFill/>}</div>
                
                {
                    bloglist ? (<ul className="blogchild1  p-2 ">
                    <li className="border-b p-2 border-slate-600">Blog</li>
                    <li className="border-b p-2 border-slate-600">Blog Single</li>
                </ul>) :null
                }</li>
                <li className="navlist p-3 border-b border-slate-600 rounded-sm"><Link href="/appointment">Appointment</Link></li>
                <li className="  shoplist1"> <div className=" navlist flex justify-between items-center p-3 border-b border-slate-600 rounded-sm" onClick={()=>setshoplist(!shoplist)}>Shop { shoplist ? <BsFillCaretUpFill/> : <BsFillCaretDownFill/>}</div>
                
                {
                    shoplist ? (<ul className="shopchild1  p-2 ">
                    <li className="border-b p-2 border-slate-600">Shop</li>
                    <li className="border-b p-2 border-slate-600">Shop Single</li>
                    <li className="border-b p-2 border-slate-600">Cart</li>
                    <li className="border-b p-2 border-slate-600">Checkout</li>
                </ul>) :null
                }</li>
                <li className="  pagelist1"> <div className=" navlist flex justify-between items-center p-3 border-b border-slate-600 rounded-sm" onClick={()=>setpagelist(!pagelist)}>Pages { pagelist
                    
                 ? <BsFillCaretUpFill/> : <BsFillCaretDownFill/>}</div>
                {
                    pagelist ? (<ul className="pagechild1  p-2 ">
                    <li className="border-b p-2 border-slate-600">Astrologers</li>
                    <li className="border-b p-2 border-slate-600">Privacy Policy</li>
                    <li className="border-b p-2 border-slate-600">FAQ</li>
                    <li className="border-b p-2 border-slate-600">404 Error</li>
                </ul>) : null
                }</li>
                <li className="navlist p-3 border-b border-slate-600 rounded-sm"><Link href="/contact">Contact</Link></li>
            </ul>
              </div>) :null
     }
 </section>
        </>
    )
}

export default Mobilenavbar