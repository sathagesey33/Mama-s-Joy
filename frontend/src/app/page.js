import Image from "next/image";

export default function Page() {
  return (
    <main className="relative min-h-screen bg-[#461356] flex flex-col items-center justify-center px-6 md:px-0 py-[min(20vh,3rem)] md:flex-row md:gap-12">
      {/* Content Section */}
      <div className="text-white w-full md:w-[40%] md:pl-20 z-10">
        <h2 className="text-4xl font-bold tracking-wider leading-[1.2]">
          Welcome to Mama's Joy
        </h2>
        <p className="text-base leading-7 mt-2">
          A revolutionary initiative poised to transform maternal healthcare by
          ushering in a new era of digital efficiency.
        </p>
        <div className="flex flex-col gap-2 mt-2">
          <button className="bg-[#d51a6d] hover:bg-[#ae0a53] text-white py-3 px-5 rounded-md text-lg transition ease-in">
            Get Started <i className="fa-solid fa-arrow-right ml-3"></i>
          </button>
          <a href="/about" className="text-white no-underline">
            <button className="bg-[#d51a6d] hover:bg-[#ae0a53] text-white py-3 px-5 rounded-md text-lg transition ease-in">
              Learn More <i className="fa-solid fa-arrow-right ml-3"></i>
            </button>
          </a>
        </div>
      </div>

      {/* Swiper Section */}
      <div className="relative w-full md:w-[60%] -right-16">
        <div className="swiper relative w-full z-10">
          <div className="swiper-wrapper">
            <div className="swiper-slide bg-[linear-gradient(to_bottom,#2c536400,#203a4303,#0f2027cc),url('/static/images/12463949_4966443.jpg')] bg-cover bg-center rounded-xl shadow-lg opacity-40 hover:opacity-100 transition">
              <span className="absolute top-8 left-0 bg-[#0088FF] text-white py-3 px-5 rounded-tr-full rounded-br-full font-medium capitalize">
                Reminder
              </span>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-10 text-center">
                <h3 className="text-white text-2xl font-[Courgette] mb-2 tracking-wide">
                  Get Notified
                </h3>
                <p className="text-white text-sm">never miss an appointment</p>
              </div>
            </div>

            <div className="swiper-slide bg-[linear-gradient(to_bottom,#2c536400,#203a4303,#0f2027cc),url('/static/images/adorable-baby-lying-bed-smiling.jpg')] bg-cover bg-center rounded-xl shadow-lg opacity-40 hover:opacity-100 transition">
              <span className="absolute top-8 left-0 bg-[#0088FF] text-white py-3 px-5 rounded-tr-full rounded-br-full font-medium capitalize">
                Gallery
              </span>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-10 text-center">
                <h3 className="text-white text-2xl font-[Noto-Serif-Vithkuqi] mb-2 tracking-wide">
                  Keep tabs with
                </h3>
                <p className="text-white text-sm">pictorials</p>
              </div>
            </div>

            <div className="swiper-slide bg-[url('/static/images/planning-traveling-trip-notes-wanderkust.jpg')] bg-cover bg-center rounded-xl shadow-lg opacity-40 hover:opacity-100 transition">
              <span className="absolute top-8 left-0 bg-[#0088FF] text-white py-3 px-5 rounded-tr-full rounded-br-full font-medium capitalize">
                Journals
              </span>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-10 text-center">
                <h3 className="text-black text-2xl mb-2 tracking-wide">
                  Keep track
                </h3>
                <p className="text-black text-sm">by taking notes</p>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-pagination mt-9 text-center">
          <div className="swiper-pagination-bullet-active w-6 h-1 bg-white"></div>
          <div className="swiper-pagination-bullet w-6 h-1 bg-white"></div>
        </div>
      </div>

      {/* Circle Design */}
      <div className="absolute -bottom-20 -left-32 w-[clamp(150px,40vw,400px)] h-[clamp(150px,40vw,400px)] bg-black rounded-full opacity-70"></div>
    </main>
  );
}

