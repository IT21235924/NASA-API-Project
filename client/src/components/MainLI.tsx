// import { Swiper, SwiperSlide } from "swiper/react"
// import { FreeMode, Pagination } from "swiper/modules"
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
// import { ServiceData } from "../constants/slide"
import { Link } from "react-router-dom";

import APOD from '/apod.jpg'
import MRP from'/mrp.jpg'
import EPIC from '/epic.jpg'


const MainLI = () => {
  return (
    // <div className="flex items-center justify-center flex-col bg-[url('/lobg.jpg')] bg-center bg-cover h-screen">
    //     <Swiper
    //         breakpoints={{
    //             340: {
    //                 slidesPerView: 2,
    //                 spaceBetween: 15
    //             },
    //             700: {
    //                 slidesPerView: 3,
    //                 spaceBetween: 15
    //             }
    //         }} 
            
    //         freeMode={true}
    //         pagination={{
    //             clickable: true
    //         }}
    //         modules={[FreeMode, Pagination]}
    //         className="max-w-[90%] lg:max-w-[80%] margin-top-10"
            
    //     >
    //         {ServiceData.map((item) => (
    //             <SwiperSlide key={item.title}>
    //                 <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-full px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px]">
    //                     <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url(${item.backgroundImage})`}}/>
    //                     <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50"/>
    //                     <div className="relative flex flex-col gap-3">
    //                         <h1 className="text-xl lg:text-2xl">{item.title}</h1>
    //                     </div>
    //                 </div>
    //             </SwiperSlide>
    //         ))}
    //     </Swiper>
    // </div>
    <div className="flex min-h-screen items-center justify-center bg-[url('/earth.jpg')]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
            <div className="group rounded-lg relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow">
                <div className="h-96 w-72">
                    <img className="h-full w-full object-cover group-hover:scale-125 transition-transform duration-500" src={APOD} alt="APOD"/>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all">
                    <h1 className="text-3xl font-bold text-white">A.P.O.D</h1>
                    <p className="text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">(Astronomy Picture of the Day)Each day a different image or photograph of our fascinating universe</p>
                    <Link to='/mrp'><button className="font-com rounded-full shadow shadow-black/60 bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white">
                        See more
                    </button></Link>
                </div>
            </div>
            <div className="group rounded-lg relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow">
                <div className="h-96 w-72">
                    <img className="h-full w-full object-cover group-hover:scale-125 transition-transform duration-500" src={MRP} alt="APOD"/>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all">
                    <h1 className="text-3xl font-bold text-white">M.R.P</h1>
                    <p className="text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">(Mars Rover Photos)images gathered by NASA's Curiosity, Opportunity, and Spirit rovers on Mars</p>
                    <Link to='/apod'><button className="font-com rounded-full shadow shadow-black/60 bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white">
                        See more
                    </button></Link>
                </div>
            </div>
            <div className="group rounded-lg relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow">
                <div className="h-96 w-72">
                    <img className="h-full w-full object-cover group-hover:scale-125 transition-transform duration-500" src={EPIC} alt="APOD"/>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all">
                    <h1 className="text-3xl font-bold text-white">E.P.I.C</h1>
                    <p className="text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">(Earth Polychromatic Imaging Camera)Imagery collected by DSCOVR's Earth Polychromatic Imaging Cam instrument.</p>
                    <button className="font-com rounded-full shadow shadow-black/60 bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white">
                        See more
                    </button>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default MainLI