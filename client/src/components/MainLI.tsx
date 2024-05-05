import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Pagination } from "swiper/modules"
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import { ServiceData } from "../constants/slide"


const MainLI = () => {
  return (
    <div className="flex items-center justify-center flex-col bg-[url('/lobg.jpg')] bg-center bg-cover h-screen">
        <Swiper
            breakpoints={{
                340: {
                    slidesPerView: 2,
                    spaceBetween: 15
                },
                700: {
                    slidesPerView: 3,
                    spaceBetween: 15
                }
            }} 
            
            freeMode={true}
            pagination={{
                clickable: true
            }}
            modules={[FreeMode, Pagination]}
            className="max-w-[90%] lg:max-w-[80%] margin-top-10"
            
        >
            {ServiceData.map((item) => (
                <SwiperSlide key={item.title}>
                    <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-full px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px]">
                        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url(${item.backgroundImage})`}}/>
                        <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50"/>
                        <div className="relative flex flex-col gap-3">
                            <h1 className="text-xl lg:text-2xl">{item.title}</h1>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
  )
}

export default MainLI