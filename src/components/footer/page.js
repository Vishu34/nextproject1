import { FaAt, FaFacebookF, FaGooglePlusG, FaHome, FaPaperPlane, FaPinterestP, FaSkype } from 'react-icons/fa';
import { MdCall } from 'react-icons/md';
import { BsTwitter } from 'react-icons/bs';
import Link from 'next/link';
import Image from 'next/image';
import { Cinzel_Decorative } from "next/font/google";
const cinzel=Cinzel_Decorative({
  weight:'700',
  variable:'--cinzel',
  subsets:['latin'],
  
})
const Footer = () => {
  return (
    <>
      <footer className=' px-2 sm:px-14 footer pt-20 font-serif static md:fixed bottom-0 -z-10'>
        <div className="">
            <div className="space-y-3">
             <Image src="/logo.png" alt="logo" width="130" height="130" className='mx-auto'/>
                <p className='text-center'>
                It is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout. The
                point of using Lorem Ipsum is that it has a more-or less normal
                distribution of letters, as opposed to using 'Content here,
                content here ', making it look like readable English.
                </p>
                <ul className='flex space-x-5 justify-center items-center'>
                    <li className='bg-gray-500  flex items-center p-2 rounded-full'><FaFacebookF className='text-lg '/></li>
                    <li className='bg-gray-500  flex items-center p-2 rounded-full'><FaGooglePlusG className='text-lg '/></li>
                    <li className='bg-gray-500  flex items-center p-2 rounded-full'><FaPinterestP className='text-lg '/></li>
                    <li className='bg-gray-500  flex items-center p-2 rounded-full'><BsTwitter className='text-lg '/></li>
                    <li className='bg-gray-500  flex items-center p-2 rounded-full'><FaSkype className='text-lg '/></li>
                </ul>
            </div>

          <div className=" grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 pb-10 ">
                    <div className="space-y-8 my-5">
                    <h1 className={` ${ cinzel.className} separator relative text-xl`}>Our Newsletter</h1>
                    <p>
                        Making it look like readable English.The point of using Lorem
                        Ipsum is that it has a more-or less normal distribution of
                        letters.
                    </p>
                    <div className="flex justify-between items-center rounded-sm border ">
                        <div className=' w-[100%]'><input type="email" className='w-[100%] p-2 input border-r'  placeholder='Email'/></div>
                        <button className=' icon-plan p-3 h-[100%]'><FaPaperPlane className='mx-auto '/></button>
                    </div>
                    </div>

                <div className="space-y-8 my-5">
                        <h1 className={` ${ cinzel.className} separator relative text-xl`}>
                            Our Services
                        </h1>
                        <ul className="space-y-3 ">
                            <li className="border-b border-b-zinc-500 p-2 hover:text-orange-500"><Link href="#">Horoscopes</Link></li>
                            <li className="border-b border-b-zinc-500 p-2 hover:text-orange-500"> <Link href="#">Gemstones</Link></li>
                            <li className="border-b border-b-zinc-500 p-2 hover:text-orange-500"> <Link href="#">Numerology</Link></li>
                            <li className="border-b border-b-zinc-500 p-2 hover:text-orange-500"> T<Link href="#">Tarot Cards</Link></li>
                            <li className="border-b border-b-zinc-500 p-2 hover:text-orange-500"><Link href="#">Birth Journal</Link>
                             </li>
                            
                        </ul>
                </div>

                <div className="space-y-8 my-5">
                        <h1 className={` ${ cinzel.className} separator relative text-xl`}>
                        Quick Links
                        </h1>
                        <ul className="space-y-3 ">
                            <li className="border-b border-b-zinc-500 p-2 hover:text-orange-500"><Link href="#">About</Link></li>
                            <li className="border-b border-b-zinc-500 p-2 hover:text-orange-500"><Link href="#">Blog</Link></li>
                            <li className="border-b border-b-zinc-500 p-2 hover:text-orange-500"><Link href="#">Astrologers</Link></li>
                            <li className="border-b border-b-zinc-500 p-2 hover:text-orange-500"><Link href="#">404 Error</Link></li>
                            <li className="border-b border-b-zinc-500 p-2 hover:text-orange-500"><Link href="#">Contact</Link>  </li>
                            
                        </ul>
                </div>
                <div className="space-y-8 my-5">
                        <h1 className={` ${ cinzel.className} separator relative text-xl`}>
                        Get In Touch
                        </h1>
                        <ul className="space-y-3 ">
                            <li className="flex p-1 items-baseline space-x-3 "><FaHome className='text-3xl icon-color'/> <div className=''>2794, Hayhurst Lane Bloomfield Township, MI 48302</div></li>
                            <li className="flex p-1 items-baseline space-x-3 "><div className=''><FaAt className='text-xl icon-color'/></div> 
                            <div className='flex-col'>
                            <Link  className="list" href='support@website.com' >support@website.com</Link><br/>
                            <Link  className="list" href='info@website.com'>info@website.com</Link>
                            </div>
                            </li>
                            <li className="flex p-1 items-baseline space-x-3 "> <MdCall className='text-2xl icon-color'/> 
                            <div className=''>
                            <Link  className="list" href='tel:+1800 326 3264' >+1800 326 3264</Link><br/>
                            <Link  className="list" href='tel:+1800 326 3234'>+1800 326 3234</Link></div></li>
                            
                            
                        </ul>
                </div>
          </div>
          <hr className="mt-5"/>
          <p className="text-center py-4">© Copyright 2022, All Rights Reserved, <span className={"astrology"}>Astrology</span></p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
