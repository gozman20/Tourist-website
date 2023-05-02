import React from "react";
import styles from "../style";
export default function Booking() {
  return (
    <section id="Contacts" className={`${styles.paddingX} ${styles.paddingY} `}>
      <div className="bookings relative ">
        <div className="bg-black/70 absolute h-full w-full z-2" />

        <div className={` z-20  absolute booking-grid ${styles.padding}`}>
          {/* left side */}
          <div className="">
            <h3 className="text-white">BOOKING</h3>
            <h3 className="text-white my-3 text-[40px] font-bold">
              Online Bookings
            </h3>
            <p className="text-white/90 text-[20px] mb-3">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit.
            </p>
            <p className="text-white/90 text-[20px] ">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo magna dolore erat amet
            </p>
            <button className="btn border border-white/90 px-5 py-3 text-white/90 text-[20px] mt-5">
              {" "}
              Read More
            </button>
          </div>

          {/* right side */}
          <div>
            <h3 className="text-white font-bold text-[40px] mb-3">
              Book a tour
            </h3>
            <form className="form-control hidden md:block">
              <div className="flex flex-row justify-between items-center h-[50px] gap-x-2 mb-5">
                {" "}
                <input
                  className="w-full h-full outline-none p-2 text-[20px]  "
                  placeholder="Your Name"
                  type="text"
                ></input>
                <input
                  className="h-full w-full outline-none p-2 text-[20px] "
                  placeholder="Your email"
                  type="email"
                ></input>
              </div>
              <div className="flex flex-row items-center h-[50px] gap-x-2 mb-5 gap-y-3">
                {" "}
                <input
                  className="w-full h-full outline-none p-2 text-[20px]  "
                  placeholder="Select a date"
                  type="date"
                ></input>
                <input
                  className="h-full w-full outline-none p-2 text-[20px]"
                  placeholder="Destination"
                  type="text"
                ></input>
              </div>
              <div className="mb-3">
                <textarea
                  className="resize-none outline-none w-full  h-[100px] p-2 text-[20px]"
                  placeholder="Special request"
                  defaultValue="Special request"
                ></textarea>
              </div>
              <button className="w-full h-[30px] md:h-[50px] text-white border border-white/90 text-[20px] md:text-[30px]">
                Book now
              </button>
            </form>
            <form className="md:hidden">
              <div className="flex flex-col gap-y-4">
                <div className="h-[35px]">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full h-full outline-none"
                  />
                </div>
                <div className="h-[35px]">
                  <input
                    type="text"
                    placeholder="Your email"
                    className="w-full h-full outline-none"
                  />
                </div>
                <div className="h-[35px]">
                  <input type="date" className="w-full h-full outline-none" />
                </div>
                <div className="h-[35px]">
                  <input
                    type="text"
                    placeholder="Destination"
                    className="w-full h-full outline-none"
                  />
                </div>
                <div className="h-[50px]">
                  <textarea className="w-full h-full resize-none outline-none"></textarea>
                </div>
              </div>
              <button className="w-full h-[35px] border border-white/90 mt-4 text-white">
                Book Now
              </button>
            </form>
          </div>
          {/* right side ends */}
        </div>
      </div>
    </section>
  );
}
