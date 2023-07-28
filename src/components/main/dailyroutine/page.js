import Image from "next/image";
import { Cinzel_Decorative } from "next/font/google";
const cinzel=Cinzel_Decorative({
  weight:'700',
  variable:'--cinzel',
  subsets:['latin'],
  
})
const Dailyroutine = () => {
  return (
    <>
      <section className="bg-gray-100 text-black">
        <div className="container mx-auto w-[80%] py-12">
          <div className="text-center space-y-5 py-8">
            <h1 className={`${cinzel.className} text-3xl`}>
              Daily <span className="astrology">Routines</span>
            </h1>
            <p className="text-sm text-slate-600 md:w-[50%] mx-auto">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected hummer.
            </p>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 py-8
          "
          >
            <div className="">
              <div className="space-y-5 bg-white p-4 rounded-sm ">
                <h1 className={` ${cinzel.className} text-xl `}>Vedic Astrology</h1>
                <hr />
                <div className="flex items-start space-x-4 border-b-2 py-2">
                <Image
                    src="/main/sun.png"
                    width="100"
                    height="40"
                    alt="img"
                    className=""
                  />
                  <div className="">
                    <h1 className={` ${cinzel.className} text-lg`}>Sun Sign</h1>
                    <p className="text-sm text-slate-600">
                      On the other hand, we denounce with righteous indignation
                      and dislike men.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 border-b-2 py-2 ">
                  <Image
                    src="/main/sun.png"
                    width="100"
                    height="40"
                    alt="img"
                    className=""
                  />
                  <div className="">
                    <h1 className={` ${cinzel.className} text-lg`}>Moon Sign</h1>
                    <p className="text-sm text-slate-600">
                      On the other hand, we denounce with righteous indignation
                      and dislike men.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 border-b-2 py-2 ">
                  <Image
                    src="/main/sun.png"
                    width="100"
                    height="40"
                    alt="img"
                    className=""
                  />
                  <div className="">
                    <h1 className={` ${cinzel.className} text-lg`}>Planets</h1>
                    <p className="text-sm text-slate-600">
                      On the other hand, we denounce with righteous indignation
                      and dislike men.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 border-b-2 py-2 ">
                  <Image
                    src="/main/sun.png"
                    width="100"
                    height="40"
                    alt="img"
                    className=""
                  />
                  <div className="">
                    <h1 className={` ${cinzel.className} text-lg`}>Ascedant</h1>
                    <p className="text-sm text-slate-600">
                      On the other hand, we denounce with righteous indignation
                      and dislike men.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 border-b-2 py-2 ">
                  <Image
                    src="/main/sun.png"
                    width="100"
                    height="40"
                    alt="img"
                    className=""
                  />
                  <div className="">
                    <h1 className={` ${cinzel.className} text-lg`}>Twelve House</h1>
                    <p className="text-sm text-slate-600">
                      On the other hand, we denounce with righteous indignation
                      and dislike men.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 border-b-2 py-2 ">
                  <Image
                    src="/main/sun.png"
                    width="100"
                    height="40"
                    alt="img"
                    className=""
                  />
                  <div className="">
                    <h1 className={` ${cinzel.className} text-lg`}>Nakshatras</h1>
                    <p className="text-sm text-slate-600">
                      On the other hand, we denounce with righteous indignation
                      and dislike men.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-3 my-5 space-y-5">
                <h1 className={` ${cinzel.className} text-xl `}>Baby Names By Nakshatra</h1>
                <hr />
                <Image
                  src="/main/baby.jpg"
                  width="200"
                  height="40"
                  alt="img"
                  className="w-[100%]"
                />
                <p className="text-sm text-slate-600">
                  Daily Planetary OverviewIt is a long estable fact that a
                  reader will be distracted by the readable content of a page
                  when looking at its layout.
                </p>
                <button className="make-it py-2 px-4 rounded-sm hover:bg-white text-white flex justify-self-end justify-end items-end">
                  Search Now
                </button>
              </div>
            </div>

            <div className="space-y-5 bg-white p-4 rounded-sm sm:h-[75%] ">
              <h1 className={` ${cinzel.className} text-xl `}>Astrology Advice</h1>
              <hr />
              <div className="flex items-start space-x-4 border-b-2 py-2">
               <Image
                    src="/main/sun.png"
                    width="120"
                    height="40"
                    alt="img"
                    className=""
                  />
                <div className="">
                  <h1 className={` ${cinzel.className} text-lg`}>Career</h1>
                  <p className="text-sm text-slate-600">
                    Many desktop publishing packages and web page editors now
                    use Lorem Ipsum as their default model text.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 border-b-2 py-2">
               <Image
                    src="/main/sun.png"
                    width="120"
                    height="40"
                    alt="img"
                    className=""
                  />
                <div className="">
                  <h1 className={` ${cinzel.className} text-lg`}>Moon Sign</h1>
                  <p className="text-sm text-slate-600">
                    Many desktop publishing packages and web page editors now
                    use Lorem Ipsum as their default model text.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 border-b-2 py-2">
               <Image
                    src="/main/sun.png"
                    width="120"
                    height="40"
                    alt="img"
                    className=""
                  />
                <div className="">
                  <h1 className={` ${cinzel.className} text-lg`}>Planets</h1>
                  <p className="text-sm text-slate-600">
                    Many desktop publishing packages and web page editors now
                    use Lorem Ipsum as their default model text.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 border-b-2 py-2">
               <Image
                    src="/main/sun.png"
                    width="120"
                    height="40"
                    alt="img"
                    className=""
                  />
                <div className="">
                  <h1 className={` ${cinzel.className} text-lg`}>Ascedant</h1>
                  <p className="text-sm text-slate-600">
                    Many desktop publishing packages and web page editors now
                    use Lorem Ipsum as their default model text.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 border-b-2 py-2">
               <Image
                    src="/main/sun.png"
                    width="120"
                    height="40"
                    alt="img"
                    className=""
                  />
                <div className="">
                  <h1 className={` ${cinzel.className} text-lg`}>Twelve House</h1>
                  <p className="text-sm text-slate-600">
                    Many desktop publishing packages and web page editors now
                    use Lorem Ipsum as their default model text.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 border-b-2 py-2">
               <Image
                    src="/main/sun.png"
                    width="120"
                    height="40"
                    alt="img"
                    className=""
                  />
                <div className="">
                  <h1 className={` ${cinzel.className} text-lg`}>Nakshatras</h1>
                  <p className="text-sm text-slate-600 ">
                    Many desktop publishing packages and web page editors now
                    use Lorem Ipsum as their default model text.
                  </p>
                </div>
              </div>
            </div>

            <div className="">
              <div className="bg-white p-3 rounded-sm  space-y-5 relative ">
                <h1 className={` ${cinzel.className} text-xl `}>Vastu Shastra</h1>
                <hr />
                <Image
                  src="/main/baby.jpg"
                  width="200"
                  height="40"
                  alt="img"
                  className="w-[100%]"
                />

                <p className="text-sm text-slate-600">
                  Daily Planetary OverviewIt is a long estable fact that a
                  reader will be distracted by the readable content of a page
                  when looking at its layout.
                </p>
                <button className="make-it py-2 px-4 text-white text-center hover:bg-white rounded-sm">
                  Know More
                </button>
              </div>
              <div className="bg-white p-3 rounded-sm  space-y-5 relative my-5">
                <h1 className={` ${cinzel.className} text-xl `}>Birth Journal (Kundli)</h1>
                <hr />
                <Image
                  src="/main/baby.jpg"
                  width="200"
                  height="40"
                  alt="img"
                  className="w-[100%]"
                />

                <p className="text-sm text-slate-600">
                  Daily Planetary OverviewIt is a long estable fact that a
                  reader will be distracted by the readable content of a page
                  when looking at its layout.
                </p>
                <button className="make-it py-2 px-4 text-white text-right hover:bg-white rounded-sm">
                  Check Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dailyroutine;
