'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper';
import PanelCodeHighlight from '@/components/panel-code-highlight';

const ComponentsCarouselVertical = () => {
    const items = ['carousel1.jpeg', 'carousel2.jpeg', 'carousel3.jpeg'];
    return (
        <PanelCodeHighlight
            title="Vertical"
            codeHighlight={`import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper';

<Swiper modules={[Pagination, Autoplay]} pagination={{ clickable: true }} autoplay={{ delay: 2000 }} direction="vertical" className="max-w-3xl mx-auto mb-5" id="slider3">
    <div className="swiper-wrapper">
        {items.map((item, i) => {
            return (
                <SwiperSlide key={i}>
                    <img src={\`/assets/images/\${item}\`} className="w-full" alt="itemImage" />
                    <div className="absolute z-[999] text-white top-1/2 left-1/2 w-full -translate-x-1/2 text-center">
                        <div className="sm:text-xl text-base font-medium">Lorem Ipsum is simply dummy text of the printing.</div>
                    </div>
                </SwiperSlide>
            );
        })}
    </div>
</Swiper>`}
        >
            <Swiper modules={[Pagination, Autoplay]} pagination={{ clickable: true }} autoplay={{ delay: 2000 }} direction="vertical" className="mx-auto mb-5 max-w-3xl" id="slider3">
                <div className="swiper-wrapper">
                    {items.map((item, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <img src={`/assets/images/${item}`} className="w-full" alt="itemImage" />
                                <div className="absolute left-1/2 top-1/2 z-[999] w-full -translate-x-1/2 text-center text-white">
                                    <div className="text-base font-medium sm:text-xl">Lorem Ipsum is simply dummy text of the printing.</div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </div>
            </Swiper>
        </PanelCodeHighlight>
    );
};

export default ComponentsCarouselVertical;
