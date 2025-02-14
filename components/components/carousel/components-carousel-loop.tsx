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

const ComponentsCarouselLoop = () => {
    const items = ['carousel1.jpeg', 'carousel2.jpeg', 'carousel3.jpeg'];

    const themeConfig = useSelector((state: IRootState) => state.themeConfig);
    return (
        <PanelCodeHighlight
            title="Loop"
            codeHighlight={`import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper';

const items = ['carousel1.jpeg', 'carousel2.jpeg', 'carousel3.jpeg'];
const themeConfig = useSelector((state: IRootState) => state.themeConfig);

<Swiper
    className="mx-auto mb-5 max-w-3xl"
    id="slider4"
    modules={[Navigation, Pagination]}
    slidesPerView={1}
    spaceBetween={30}
    loop={true}
    pagination={{
        clickable: true,
        type: 'fraction',
    }}
    navigation={{
        nextEl: '.swiper-button-next-ex4',
        prevEl: '.swiper-button-prev-ex4',
    }}
    dir={themeConfig.rtlClass}
    key={themeConfig.rtlClass === 'rtl' ? 'true' : 'false'}
>
    <div className="swiper-wrapper">
        {items.map((item, i) => {
            return (
                <SwiperSlide key={i}>
                    <img src={\`\/assets/images/\${item}\`} className="w-full" alt={\`slide\${i + 1}\`} />
                    <div className="absolute bottom-8 left-1/2 z-[999] w-full -translate-x-1/2 px-11 text-center text-white sm:px-0">
                        <div className="text-3xl font-bold">Slide \${i + 1}</div>
                        <div className="mb-4 font-medium sm:text-base">Lorem Ipsum is simply dummy text of the printing.</div>
                    </div>
                </SwiperSlide>
            );
        })}
    </div>
    <button className="swiper-button-prev-ex4 absolute top-1/2 z-[999] grid -translate-y-1/2 place-content-center rounded-full border border-primary p-1  text-primary transition hover:border-primary hover:bg-primary hover:text-white ltr:left-2 rtl:right-2">
        <IconCaretDown className="h-5 w-5 rotate-90 rtl:-rotate-90" />
    </button>
    <button className="swiper-button-next-ex4 absolute top-1/2 z-[999] grid -translate-y-1/2 place-content-center rounded-full border border-primary p-1  text-primary transition hover:border-primary hover:bg-primary hover:text-white ltr:right-2 rtl:left-2">
        <IconCaretDown className="h-5 w-5 -rotate-90 rtl:rotate-90" />
    </button>
</Swiper>`}
        >
            <Swiper
                className="mx-auto mb-5 max-w-3xl"
                id="slider4"
                modules={[Navigation, Pagination]}
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                    type: 'fraction',
                }}
                navigation={{
                    nextEl: '.swiper-button-next-ex4',
                    prevEl: '.swiper-button-prev-ex4',
                }}
                dir={themeConfig.rtlClass}
                key={themeConfig.rtlClass === 'rtl' ? 'true' : 'false'}
            >
                <div className="swiper-wrapper">
                    {items.map((item, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <img src={`/assets/images/${item}`} className="w-full" alt={`slide${i + 1}`} />
                                <div className="absolute bottom-8 left-1/2 z-[999] w-full -translate-x-1/2 px-11 text-center text-white sm:px-0">
                                    <div className="text-3xl font-bold">Slide ${i + 1}</div>
                                    <div className="mb-4 font-medium sm:text-base">Lorem Ipsum is simply dummy text of the printing.</div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </div>
                <button className="swiper-button-prev-ex4 absolute top-1/2 z-[999] grid -translate-y-1/2 place-content-center rounded-full border border-primary p-1  text-primary transition hover:border-primary hover:bg-primary hover:text-white ltr:left-2 rtl:right-2">
                    <IconCaretDown className="h-5 w-5 rotate-90 rtl:-rotate-90" />
                </button>
                <button className="swiper-button-next-ex4 absolute top-1/2 z-[999] grid -translate-y-1/2 place-content-center rounded-full border border-primary p-1  text-primary transition hover:border-primary hover:bg-primary hover:text-white ltr:right-2 rtl:left-2">
                    <IconCaretDown className="h-5 w-5 -rotate-90 rtl:rotate-90" />
                </button>
            </Swiper>
        </PanelCodeHighlight>
    );
};

export default ComponentsCarouselLoop;
