import Image from "next/image";
const Whychoose = () => {
  return (
    <>
      <section className="bg-gray-100 text-black">
        <div className="container mx-auto w-[80%] py-12">
          <div className="text-center space-y-5 py-8">
            <h1 className="text-4xl font-bold">
              Why <span className="astrology">Choose Us</span>
            </h1>
            <p className="text-slate-600  md:w-[50%] mx-auto ">
              here are many variations of passages of Lorem Ipsum available, but
              the majority have suffered alteration in some form, by injected
              hummer.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-4">
            <div className="  flex items-center">
              <Image
                src="/main/ww_1.png"
                width="40"
                height="40"
                alt="img"
                className="  z-0 bg-orange-500 w-36 h-36 p-5 rounded-full border-8 border-white"
              />
              <p className="   text-right rounded-sm bg-white -ml-10 p-8 w-[100%]">
                90+ Expert Astrologers
              </p>
            </div>
            <div className="  flex items-center">
              <Image
                src="/main/ww_1.png"
                width="40"
                height="40"
                alt="img"
                className="  z-0 bg-orange-500 w-36 h-36 p-5 rounded-full border-8 border-white"
              />
              <p className="   text-right rounded-sm bg-white -ml-10 p-8 w-[100%]">
                24x7, 365 Days Availability
              </p>
            </div>
            <div className="  flex items-center">
              <Image
                src="/main/ww_1.png"
                width="40"
                height="40"
                alt="img"
                className="  z-0 bg-orange-500 w-36 h-36 p-5 rounded-full border-8 border-white"
              />
              <p className="   text-right rounded-sm bg-white -ml-10 p-8 w-[100%]">
                Instant Access Worldwide
              </p>
            </div>
            <div className="  flex items-center">
              <Image
                src="/main/ww_1.png"
                width="40"
                height="40"
                alt="img"
                className="  z-0 bg-orange-500 w-36 h-36 p-5 rounded-full border-8 border-white"
              />
              <p className="   text-right rounded-sm bg-white -ml-10 p-8 w-[100%]">
                Accurate Remedial Solutions
              </p>
            </div>
            <div className="  flex items-center">
              <Image
                src="/main/ww_1.png"
                width="40"
                height="40"
                alt="img"
                className="  z-0 bg-orange-500 w-36 h-36 p-5 rounded-full border-8 border-white"
              />
              <p className="   text-right rounded-sm bg-white -ml-10 p-8 w-[100%]">
                Privacy Guaranteed
              </p>
            </div>
            <div className="  flex items-center">
              <Image
                src="/main/ww_1.png"
                width="40"
                height="40"
                alt="img"
                className="  z-0 bg-orange-500 w-36 h-36 p-5 rounded-full border-8 border-white"
              />
              <p className="   text-right rounded-sm bg-white -ml-10 p-8 w-[100%]">
                Trusted by million clients
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Whychoose;
