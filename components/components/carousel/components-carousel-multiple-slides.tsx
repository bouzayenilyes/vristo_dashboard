'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper';
import IconCaretDown from '@/components/icon/icon-caret-down';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import { IRootState } from '@/store';
import { useSelector } from 'react-redux';

const ComponentsCarouselMultipleSlides = () => {
    const items = ['carousel1.jpeg', 'carousel2.jpeg', 'carousel3.jpeg'];
    const themeConfig = useSelector((state: IRootState) => state.themeConfig);

    return (
        <PanelCodeHighlight
            title="Multiple Slides"
            className="lg:col-span-2"
            codeHighlight={`import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper';

const items = ['carousel1.jpeg', 'carousel2.jpeg', 'carousel3.jpeg'];
const themeConfig = useSelector((state: IRootState) => state.themeConfig);

<Swiper
    id="slider4"
    modules={[Navigation, Pagination]}
    navigation={{
        nextEl: '.swiper-button-next-ex5',
        prevEl: '.swiper-button-prev-ex5',
    }}
    pagination={{
        clickable: true,
    }}
    breakpoints={{
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
    }}
    dir={themeConfig.rtlClass}
    key={themeConfig.rtlClass === 'rtl' ? 'true' : 'false'}
>
    <div className="swiper-wrapper">
        {items.map((item, i) => {
            return (
                <SwiperSlide key={i}>
                    <img src={\`/assets/images/\${item}\`} className="w-full" alt="itemImg" />
                </SwiperSlide>
            );
        })}
        {items.map((item, i) => {
            return (
                <SwiperSlide key={i}>
                    <img src={\`/assets/images/\${item}\`} className="w-full" alt="itemImg" />
                </SwiperSlide>
            );
        })}
    </div>
    <button className="swiper-button-prev-ex5 absolute top-[44%] z-[999] grid -translate-y-1/2 place-content-center rounded-full border border-primary p-1  text-primary transition hover:border-primary hover:bg-primary hover:text-white ltr:left-2 rtl:right-2">
        <IconCaretDown className="h-5 w-5 rotate-90 rtl:-rotate-90" />
    </button>
    <button className="swiper-button-next-ex5 absolute top-[44%] z-[999] grid -translate-y-1/2 place-content-center rounded-full border border-primary p-1  text-primary transition hover:border-primary hover:bg-primary hover:text-white ltr:right-2 rtl:left-2">
        <IconCaretDown className="h-5 w-5 -rotate-90 rtl:rotate-90" />
    </button>
</Swiper>`}
        >
            <Swiper
                id="slider4"
                modules={[Navigation, Pagination]}
                navigation={{
                    nextEl: '.swiper-button-next-ex5',
                    prevEl: '.swiper-button-prev-ex5',
                }}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                }}
                dir={themeConfig.rtlClass}
                key={themeConfig.rtlClass === 'rtl' ? 'true' : 'false'}
            >
                <div className="swiper-wrapper">
                    {items.map((item, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <img src={`/assets/images/${item}`} className="w-full" alt="itemImg" />
                            </SwiperSlide>
                        );
                    })}
                    {items.map((item, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <img src={`/assets/images/${item}`} className="w-full" alt="itemImg" />
                            </SwiperSlide>
                        );
                    })}
                </div>
                <button className="swiper-button-prev-ex5 absolute top-[44%] z-[999] grid -translate-y-1/2 place-content-center rounded-full border border-primary p-1  text-primary transition hover:border-primary hover:bg-primary hover:text-white ltr:left-2 rtl:right-2">
                    <IconCaretDown className="h-5 w-5 rotate-90 rtl:-rotate-90" />
                </button>
                <button className="swiper-button-next-ex5 absolute top-[44%] z-[999] grid -translate-y-1/2 place-content-center rounded-full border border-primary p-1  text-primary transition hover:border-primary hover:bg-primary hover:text-white ltr:right-2 rtl:left-2">
                    <IconCaretDown className="h-5 w-5 -rotate-90 rtl:rotate-90" />
                </button>
            </Swiper>
        </PanelCodeHighlight>
    );
};

export default ComponentsCarouselMultipleSlides;
