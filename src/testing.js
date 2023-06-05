import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";


export function Testing() {
    return (
        <>
            <div className='w- h-96'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={0}
                    loop={false}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper w-5/12"
                >
                    <SwiperSlide><div className='border-4 border-red-600 w-44 h-44'>
                            testing2
                        </div></SwiperSlide>
                    <SwiperSlide>
                        <div className='border-4 boder-red-200 w-44 h-44'>
                            testing
                        </div></SwiperSlide>

                    <SwiperSlide> <div className='border-4 border-red-600 w-44 h-44'>
                            testing2
                        </div></SwiperSlide>
                    <SwiperSlide>aslina</SwiperSlide>
                    <SwiperSlide ><img src="https://akcdn.detik.net.id/visual/2022/10/12/anime-spy-x-family_169.png?w=650"  /></SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}