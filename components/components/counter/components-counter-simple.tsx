'use client';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import React from 'react';
import CountUp from 'react-countup';

const ComponentsCounterSimple = () => {
    return (
        <PanelCodeHighlight
            title="Simple Counter"
            codeHighlight={`import CountUp from 'react-countup';

<div className="mb-5 grid grid-cols-3 justify-items-center gap-3 max-w-[900px] mx-auto">
    <div>
        <div className="w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col">
            <CountUp start={0} end={710} duration={7} className="text-primary text-xl sm:text-3xl text-center" />
        </div>
        <h4 className="text-[#3b3f5c] text-xs sm:text-[15px] mt-4 text-center dark:text-white-dark font-semibold">HOURS</h4>
    </div>
    <div>
        <div className="w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col">
            <CountUp start={0} end={915} duration={7} className="text-primary text-xl sm:text-3xl text-center" />
        </div>
        <h4 className="text-[#3b3f5c] text-xs sm:text-[15px] mt-4 text-center dark:text-white-dark font-semibold">TICKETS</h4>
    </div>
    <div>
        <div className="w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col">
            <CountUp start={0} end={580} duration={7} className="text-primary text-xl sm:text-3xl text-center" />
        </div>
        <h4 className="text-[#3b3f5c] text-xs sm:text-[15px] mt-4 text-center dark:text-white-dark font-semibold">CUSTOMERS</h4>
    </div>
</div>`}
        >
            <div className="mx-auto mb-5 grid max-w-[900px] grid-cols-3 justify-items-center gap-3">
                <div>
                    <div className="flex h-[70px] w-[70px] flex-col justify-center rounded border border-white-light shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] dark:border-[#1b2e4b] sm:h-[100px] sm:w-[100px]">
                        <CountUp start={0} end={710} duration={7} className="text-center text-xl text-primary sm:text-3xl" />
                    </div>
                    <h4 className="mt-4 text-center text-xs font-semibold text-[#3b3f5c] dark:text-white-dark sm:text-[15px]">HOURS</h4>
                </div>
                <div>
                    <div className="flex h-[70px] w-[70px] flex-col justify-center rounded border border-white-light shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] dark:border-[#1b2e4b] sm:h-[100px] sm:w-[100px]">
                        <CountUp start={0} end={915} duration={7} className="text-center text-xl text-primary sm:text-3xl" />
                    </div>
                    <h4 className="mt-4 text-center text-xs font-semibold text-[#3b3f5c] dark:text-white-dark sm:text-[15px]">TICKETS</h4>
                </div>
                <div>
                    <div className="flex h-[70px] w-[70px] flex-col justify-center rounded border border-white-light shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] dark:border-[#1b2e4b] sm:h-[100px] sm:w-[100px]">
                        <CountUp start={0} end={580} duration={7} className="text-center text-xl text-primary sm:text-3xl" />
                    </div>
                    <h4 className="mt-4 text-center text-xs font-semibold text-[#3b3f5c] dark:text-white-dark sm:text-[15px]">CUSTOMERS</h4>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsCounterSimple;
