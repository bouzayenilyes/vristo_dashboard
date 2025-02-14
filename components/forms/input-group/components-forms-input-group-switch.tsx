import PanelCodeHighlight from '@/components/panel-code-highlight';
import React from 'react';

const ComponentsFormsInputGroupSwitch = () => {
    return (
        <PanelCodeHighlight
            title="Switch"
            codeHighlight={`{/*left*/}
<div className="flex">
    <div className="bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
        <label className="w-7 h-4 relative cursor-pointer mb-0">
            <input type="checkbox" className="peer absolute w-full h-full opacity-0 z-10 focus:ring-0 focus:outline-none cursor-pointer" id="custom_switch_checkbox1" />
            <span className="rounded-full border border-[#adb5bd] bg-white peer-checked:bg-primary peer-checked:border-primary dark:bg-dark block h-full before:absolute ltr:before:left-0.5 rtl:before:right-0.5 ltr:peer-checked:before:left-3.5 rtl:peer-checked:before:right-3.5 peer-checked:before:bg-white before:bg-[#adb5bd] dark:before:bg-white-dark before:bottom-[2px] before:w-3 before:h-3 before:rounded-full before:transition-all before:duration-300"></span>
        </label>
    </div>
    <input id="switchLeft" type="text" placeholder="Switch" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
</div>

{/*right*/}
<div className="flex">
    <input id="switchRight" type="text" placeholder="Switch" className="form-input ltr:rounded-r-none rtl:rounded-l-none" />
    <div className="bg-[#eee] flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border ltr:border-l-0 rtl:border-r-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
        <label className="w-7 h-4 relative cursor-pointer mb-0">
            <input type="checkbox" className="peer absolute w-full h-full opacity-0 z-10 focus:ring-0 focus:outline-none cursor-pointer" id="custom_switch_checkbox2" />
            <span className="rounded-full border border-[#adb5bd] bg-white peer-checked:bg-primary peer-checked:border-primary dark:bg-dark block h-full before:absolute ltr:before:left-0.5 rtl:before:right-0.5 ltr:peer-checked:before:left-3.5 rtl:peer-checked:before:right-3.5 peer-checked:before:bg-white before:bg-[#adb5bd] dark:before:bg-white-dark before:bottom-[2px] before:w-3 before:h-3 before:rounded-full before:transition-all before:duration-300"></span>
        </label>
    </div>
</div>`}
        >
            <div className="mb-5">
                <div className="mb-5">
                    <label htmlFor="switchLeft">Left</label>
                    <div className="flex">
                        <div className="flex items-center justify-center border border-white-light bg-[#eee] px-3 font-semibold ltr:rounded-l-md ltr:border-r-0 rtl:rounded-r-md rtl:border-l-0 dark:border-[#17263c] dark:bg-[#1b2e4b]">
                            <label className="relative mb-0 h-4 w-7 cursor-pointer">
                                <input type="checkbox" className="peer absolute z-10 h-full w-full cursor-pointer opacity-0 focus:outline-none focus:ring-0" id="custom_switch_checkbox1" />
                                <span className="block h-full rounded-full border border-[#adb5bd] bg-white before:absolute before:bottom-[2px] before:h-3 before:w-3 before:rounded-full before:bg-[#adb5bd] before:transition-all before:duration-300 peer-checked:border-primary peer-checked:bg-primary peer-checked:before:bg-white ltr:before:left-0.5 ltr:peer-checked:before:left-3.5 rtl:before:right-0.5 rtl:peer-checked:before:right-3.5 dark:bg-dark dark:before:bg-white-dark"></span>
                            </label>
                        </div>
                        <input id="switchLeft" type="text" placeholder="Switch" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
                    </div>
                </div>
                <div>
                    <label htmlFor="switchRight">Right</label>
                    <div className="flex">
                        <input id="switchRight" type="text" placeholder="Switch" className="form-input ltr:rounded-r-none rtl:rounded-l-none" />
                        <div className="flex items-center justify-center border border-white-light bg-[#eee] px-3 font-semibold ltr:rounded-r-md ltr:border-l-0 rtl:rounded-l-md rtl:border-r-0 dark:border-[#17263c] dark:bg-[#1b2e4b]">
                            <label className="relative mb-0 h-4 w-7 cursor-pointer">
                                <input type="checkbox" className="peer absolute z-10 h-full w-full cursor-pointer opacity-0 focus:outline-none focus:ring-0" id="custom_switch_checkbox2" />
                                <span className="block h-full rounded-full border border-[#adb5bd] bg-white before:absolute before:bottom-[2px] before:h-3 before:w-3 before:rounded-full before:bg-[#adb5bd] before:transition-all before:duration-300 peer-checked:border-primary peer-checked:bg-primary peer-checked:before:bg-white ltr:before:left-0.5 ltr:peer-checked:before:left-3.5 rtl:before:right-0.5 rtl:peer-checked:before:right-3.5 dark:bg-dark dark:before:bg-white-dark"></span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsFormsInputGroupSwitch;
