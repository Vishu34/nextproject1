"use client"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
const Desktopnavbar=()=>{
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
 <section className="py-2 desktop cursor-pointer">
    <div className={`   p-3 ${nav ? 'fixed top-0 w-[100%] px-20 z-50 bg-gray-900   duration-75 transition-transform translate-y-0 ease-in' :'static w-[80%] px-0 container mx-auto'} `} style={{zIndex:'99999'}}>
        <div className="flex justify-between items-center">
            <Image src="/logo.png" width="180" height="150" alt="logo"/>
            <ul className="flex items-center space-x-6">
                <li className="navlist p-3 rounded-sm homelist">Home
                <ul className="homechild  w-32 ">
                    <li className="border-b p-2 border-slate-600">Home</li>
                    <li className="border-b p-2 border-slate-600">Horoscope</li>
                    <li className="border-b p-2 border-slate-600">Tarot Card</li>
                    <li className="border-b p-2 border-slate-600">Palmistry</li>
                    <li className="border-b p-2 border-slate-600">Vastu Shastra</li>
                    <li className="border-b p-2 border-slate-600">Gemstones</li>
                    <li className="border-b p-2 border-slate-600">Numerology</li>
                </ul></li>
                <li className="navlist p-3 rounded-sm"><Link href="/about">About</Link></li>
                <li className="navlist p-3 rounded-sm"><Link href="/services">Services</Link></li>
                <li className="navlist p-3 rounded-sm bloglist">Blog
                <ul className="blogchild  w-32 ">
                    <li className="border-b p-2 border-slate-600">Blog</li>
                    <li className="border-b p-2 border-slate-600">Blog Single</li>
                </ul></li>
                <li className="navlist p-3 rounded-sm"><Link href="/appointment">Appointment</Link></li>
                <li className="navlist p-3 rounded-sm shoplist">Shop
                <ul className="shopchild  w-32 ">
                    <li className="border-b p-2 border-slate-600">Shop</li>
                    <li className="border-b p-2 border-slate-600">Shop Single</li>
                    <li className="border-b p-2 border-slate-600">Cart</li>
                    <li className="border-b p-2 border-slate-600">Checkout</li>
                </ul></li>
                <li className="navlist p-3 rounded-sm pagelist">Pages
                <ul className="pagechild  w-32 ">
                    <li className="border-b p-2 border-slate-600">Astrologers</li>
                    <li className="border-b p-2 border-slate-600">Privacy Policy</li>
                    <li className="border-b p-2 border-slate-600">FAQ</li>
                    <li className="border-b p-2 border-slate-600">404 Error</li>
                </ul></li>
                <li className="navlist p-3 rounded-sm"><Link href="/contact">Contact</Link></li>
            </ul>
        </div>
    </div>
 </section>
        </>
    )
}

export default Desktopnavbar;