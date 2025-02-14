'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper';
import IconCaretDown from '@/components/icon/icon-caret-down';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import { IRootState } from '@/store';
import { useSelector } from 'react-redux';

const ComponentsCarouselAutoplay = () => {
    const items = ['carousel1.jpeg', 'carousel2.jpeg', 'carousel3.jpeg'];

    const themeConfig = useSelector((state: IRootState) => state.themeConfig);
    return (
        <PanelCodeHighlight
            title="Autoplay"
            codeHighlight={`import { Swiper, SwiperSlide } from 'swiper/react';
    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    import { Navigation, Pagination, Autoplay } from 'swiper';

    <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        navigation={{ nextEl: '.swiper-button-next-ex2', prevEl: '.swiper-button-prev-ex2' }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000 }}
        className="swiper max-w-3xl mx-auto mb-5"
        id="slider2"
        dir={themeConfig.rtlClass}
        key={themeConfig.rtlClass === 'rtl' ? 'true' : 'false'}
    >
        <div className="swiper-wrapper">
            {items.map((item, i) => {
                return (
                    <SwiperSlide key={i}>
                        <img src={\`/assets/images/\${item}\`} className="w-full max-h-80 object-cover" alt="itemImage" />
                        <div className="absolute z-[999] text-white top-1/4 ltr:left-12 rtl:right-12">
                            <div className="sm:text-3xl text-base font-bold">This is blog Image</div>
                            <div className="sm:mt-5 mt-1 w-4/5 text-base sm:block hidden font-medium">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                            </div>
                            <button type="button" className="mt-4 btn btn-primary">
                                Learn more
                            </button>
                        </div>
                    </SwiperSlide>
                );
            })}
        </div>
        <button className="swiper-button-prev-ex2 grid place-content-center ltr:left-2 rtl:right-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2">
            <svg>...</svg>
        </button>
        <button className="swiper-button-next-ex2 grid place-content-center ltr:right-2 rtl:left-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2">
            <svg>...</svg>
        </button>
    </Swiper>`}
        >
            <Swiper
                modules={[Navigation, Autoplay, Pagination]}
                navigation={{
                    nextEl: '.swiper-button-next-ex2',
                    prevEl: '.swiper-button-prev-ex2',
                }}
                pagination={{ clickable: true }}
                autoplay={{ delay: 2000 }}
                className="swiper mx-auto mb-5 max-w-3xl"
                id="slider2"
                dir={themeConfig.rtlClass}
                key={themeConfig.rtlClass === 'rtl' ? 'true' : 'false'}
            >
                <div className="swiper-wrapper">
                    {items.map((item, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <img src={`/assets/images/${item}`} className="max-h-80 w-full object-cover" alt="itemImage" />
                                <div className="absolute top-1/4 z-[999] text-white ltr:left-12 rtl:right-12">
                                    <div className="text-base font-bold sm:text-3xl">This is blog Image</div>
                                    <div className="mt-1 hidden w-4/5 text-base font-medium sm:mt-5 sm:block">
                                        {`Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard.`}
                                    </div>
                                    <button type="button" className="btn btn-primary mt-4">
                                        Learn more
                                    </button>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </div>
                <button className="swiper-button-prev-ex2 absolute top-1/2 z-[999] grid -translate-y-1/2 place-content-center rounded-full border border-primary p-1  text-primary transition hover:border-primary hover:bg-primary hover:text-white ltr:left-2 rtl:right-2">
                    <IconCaretDown className="h-5 w-5 rotate-90 rtl:-rotate-90" />
                </button>
                <button className="swiper-button-next-ex2 absolute top-1/2 z-[999] grid -translate-y-1/2 place-content-center rounded-full border border-primary p-1  text-primary transition hover:border-primary hover:bg-primary hover:text-white ltr:right-2 rtl:left-2">
                    <IconCaretDown className="h-5 w-5 -rotate-90 rtl:rotate-90" />
                </button>
            </Swiper>
        </PanelCodeHighlight>
    );
};

export default ComponentsCarouselAutoplay;
