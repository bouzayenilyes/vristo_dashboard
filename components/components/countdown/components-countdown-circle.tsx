'use client';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import React, { useEffect, useState } from 'react';

const ComponentsCountdownCircle = () => {
    const [demo2, setDemo2] = useState<any>({ days: null, hours: null, minutes: null, seconds: null });
    const [timer2, setTimer2] = useState<any>(null);

    const setTimerDemo2 = () => {
        const date = new Date();
        date.setFullYear(date.getFullYear() + 1);
        const countDownDate = date.getTime();

        let updatedValue: any = {};

        setTimer2(
            setInterval(() => {
                const now = new Date().getTime();
                const distance = countDownDate - now;
                updatedValue.days = Math.floor(distance / (1000 * 60 * 60 * 24));
                updatedValue.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                updatedValue.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                updatedValue.seconds = Math.floor((distance % (1000 * 60)) / 1000);
                setDemo2((demo2: any) => ({
                    ...demo2,
                    ...updatedValue,
                }));

                if (distance < 0) {
                    clearInterval(timer2);
                }
            })
        );
    };

    useEffect(() => {
        setTimerDemo2();
    }, []);
    return (
        <PanelCodeHighlight
            title="Circle Countdown"
            codeHighlight={`import { useState, useEffect } from 'react';

const [demo2, setDemo2] = useState<any>({ days: null, hours: null, minutes: null, seconds: null });
const [timer2, setTimer2] = useState<any>(null);

const setTimerDemo2 = () => {
    const date = new Date();
    date.setFullYear(date.getFullYear() + 1);
    const countDownDate = date.getTime();

    let updatedValue: any = {};

    setTimer2(
        setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;
            updatedValue.days = Math.floor(distance / (1000 * 60 * 60 * 24));
            updatedValue.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            updatedValue.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            updatedValue.seconds = Math.floor((distance % (1000 * 60)) / 1000);
            setDemo2((demo2: any) => ({
                ...demo2,
                ...updatedValue,
            }));

            if (distance < 0) {
                clearInterval(timer2);
            }
        })
    );
};

useEffect(() => {
    setTimerDemo2();
}, []);

<div className="mb-5 grid grid-cols-4 justify-items-center gap-3">
    <div>
        <div className="w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded-full border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col">
            <h1 className="text-primary sm:text-3xl text-xl text-center">{demo2.days}</h1>
        </div>
        <h4 className="text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold">Days</h4>
    </div>
    <div>
        <div className="w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded-full border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col">
            <h1 className="text-primary sm:text-3xl text-xl text-center">{demo2.hours}</h1>
        </div>
        <h4 className="text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold">Hours</h4>
    </div>
    <div>
        <div className="w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded-full border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col">
            <h1 className="text-primary sm:text-3xl text-xl text-center">{demo2.minutes}</h1>
        </div>
        <h4 className="text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold">Mins</h4>
    </div>
    <div>
        <div className="w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded-full border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col">
            <h1 className="text-primary sm:text-3xl text-xl text-center">{demo2.seconds}</h1>
        </div>
        <h4 className="text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold">Sec</h4>
    </div>
</div>`}
        >
            <div className="mb-5 grid grid-cols-4 justify-items-center gap-3">
                <div>
                    <div className="flex h-16 w-16 flex-col justify-center rounded-full border border-white-light shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] dark:border-[#1b2e4b] sm:h-[100px] sm:w-[100px]">
                        <h1 className="text-center text-xl text-primary sm:text-3xl">{demo2.days}</h1>
                    </div>
                    <h4 className="mt-4 text-center text-[15px] font-semibold text-[#3b3f5c] dark:text-white-dark">Days</h4>
                </div>
                <div>
                    <div className="flex h-16 w-16 flex-col justify-center rounded-full border border-white-light shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] dark:border-[#1b2e4b] sm:h-[100px] sm:w-[100px]">
                        <h1 className="text-center text-xl text-primary sm:text-3xl">{demo2.hours}</h1>
                    </div>
                    <h4 className="mt-4 text-center text-[15px] font-semibold text-[#3b3f5c] dark:text-white-dark">Hours</h4>
                </div>
                <div>
                    <div className="flex h-16 w-16 flex-col justify-center rounded-full border border-white-light shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] dark:border-[#1b2e4b] sm:h-[100px] sm:w-[100px]">
                        <h1 className="text-center text-xl text-primary sm:text-3xl">{demo2.minutes}</h1>
                    </div>
                    <h4 className="mt-4 text-center text-[15px] font-semibold text-[#3b3f5c] dark:text-white-dark">Mins</h4>
                </div>
                <div>
                    <div className="flex h-16 w-16 flex-col justify-center rounded-full border border-white-light shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] dark:border-[#1b2e4b] sm:h-[100px] sm:w-[100px]">
                        <h1 className="text-center text-xl text-primary sm:text-3xl">{demo2.seconds}</h1>
                    </div>
                    <h4 className="mt-4 text-center text-[15px] font-semibold text-[#3b3f5c] dark:text-white-dark">Sec</h4>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsCountdownCircle;
