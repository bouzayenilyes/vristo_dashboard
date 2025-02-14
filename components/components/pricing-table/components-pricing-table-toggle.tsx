'use client';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import React, { useState } from 'react';

const ComponentsPricingTableToggle = () => {
    const [yearlyPrice, setYearlyPrice] = useState<any>(false);
    return (
        <PanelCodeHighlight
            title="Toggle"
            codeHighlight={`<div className="mb-5">
    <div className="max-w-[320px] md:max-w-[1140px] mx-auto dark:text-white-dark">
        <div className="mt-5 md:mt-10 text-center flex justify-center space-x-4 rtl:space-x-reverse font-semibold text-base">
            <span className={\`\${!yearlyPrice ? 'text-primary' : 'text-white-dark'}\`}>Monthly</span>

            <label className="w-12 h-6 relative">
                <input
                    id="custom_switch_checkbox1"
                    type="checkbox"
                    className="custom_switch absolute ltr:left-0 rtl:right-0 top-0 w-full h-full opacity-0 z-10 cursor-pointer peer"
                    onChange={() => setYearlyPrice(!yearlyPrice)}
                />
                <span className="outline_checkbox bg-icon border-2 border-[#ebedf2] dark:border-white-dark block h-full rounded-full before:absolute ltr:before:left-1 rtl:before:right-1 before:bg-[#ebedf2] dark:before:bg-white-dark before:bottom-1 before:w-4 before:h-4 before:rounded-full before:bg-[url(/assets/images/close.svg)] before:bg-no-repeat before:bg-center ltr:peer-checked:before:left-7 rtl:peer-checked:before:right-7 peer-checked:before:bg-[url(/assets/images/checked.svg)] peer-checked:border-primary peer-checked:before:bg-primary before:transition-all before:duration-300"></span>
            </label>
            <span className={\`relative \${yearlyPrice ? 'text-primary' : ' text-white-dark'}\`}>
                Yearly
                <span className="badge bg-success rounded-full absolute ltr:left-full rtl:right-full whitespace-nowrap ltr:ml-2 rtl:mr-2 my-auto hidden">20% Off</span>
            </span>
        </div>
        <div className="md:flex space-y-4 md:space-y-0 mt-5 md:mt-16 text-white-dark">
            <div className="p-4 lg:p-9 border ltr:md:border-r-0 rtl:md:border-l-0 border-white-light dark:border-[#1b2e4b] rounded-md ltr:md:rounded-r-none rtl:md:rounded-l-none transition-all duration-300 hover:shadow-[0_0_15px_1px_rgba(113,106,202,0.20)]">
                <h3 className="text-xl mb-5 font-semibold text-black dark:text-white-light">Cloud Hosting</h3>
                <p>cPanel/WHM included. Intel Xeon E3 with guaranteed 2GB RAM.</p>
                <div className="my-7 p-2.5 text-center text-lg">
                    <strong className="text-[#3b3f5c] dark:text-white-light text-xl lg:text-3xl">$25</strong> / monthly
                </div>
                <div className="mb-6">
                    <strong className="text-black dark:text-white-light text-[15px] mb-3 inline-block">Cloud Hosting Features</strong>
                    <ul className="space-y-3">
                        <li>Single Domain</li>
                        <li>50 GB SSD</li>
                        <li>1 TB Premium Bandwidth</li>
                    </ul>
                </div>
                <button type="button" className="btn btn-dark w-full">
                    Buy Now
                </button>
            </div>
            <div className="relative p-4 pt-14 lg:p-9 border border-white-light dark:border-[#1b2e4b] transition-all duration-300 rounded-t-md">
                <div className="absolute top-0 md:-top-[30px] inset-x-0 bg-primary text-white h-10 flex items-center justify-center text-base rounded-t-md">Most Popular</div>
                <h3 className="text-xl mb-5 font-semibold text-black dark:text-white-light">VPS Hosting</h3>
                <p>cPanel/WHM included. Intel Xeon E5 with guaranteed 4GB RAM.</p>
                <div className="my-7 p-2.5 text-center text-lg">
                    <strong className="text-primary text-xl lg:text-4xl">$70</strong> / monthly
                </div>
                <div className="mb-6">
                    <strong className="text-black dark:text-white-light text-[15px]  mb-3 inline-block">VPS Hosting Features</strong>
                    <ul className="space-y-3">
                        <li>5 Domains</li>
                        <li>100 GB SSD</li>
                        <li>2 TB Premium Bandwidth</li>
                    </ul>
                </div>
                <button type="button" className="btn btn-primary w-full">
                    Buy Now
                </button>
            </div>
            <div className="p-4 lg:p-9 border ltr:md:border-l-0 rtl:md:border-r-0 border-white-light dark:border-[#1b2e4b] rounded-md ltr:md:rounded-l-none rtl:md:rounded-r-none transition-all duration-300 hover:shadow-[0_0_15px_1px_rgba(113,106,202,0.20)]">
                <h3 className="text-xl mb-5 font-semibold text-black dark:text-white-light">Business Hosting</h3>
                <p>cPanel/WHM included. Intel Xeon E5 with guaranteed 8GB RAM.</p>
                <div className="my-7 p-2.5 text-center text-lg">
                    <strong className="text-[#3b3f5c] dark:text-white-light text-xl lg:text-3xl">$115</strong> / monthly
                </div>
                <div className="mb-6">
                    <strong className="text-black dark:text-white-light text-[15px]  mb-3 inline-block">Business Hosting Features</strong>
                    <ul className="space-y-3">
                        <li>Unlimited Domains</li>
                        <li>1 TB SSD</li>
                        <li>5 TB Premium Bandwidth</li>
                    </ul>
                </div>
                <button type="button" className="btn btn-dark w-full">
                    Buy Now
                </button>
            </div>
        </div>
    </div>
</div>`}
        >
            <div className="mb-5">
                <div className="mx-auto max-w-[320px] dark:text-white-dark md:max-w-[1140px]">
                    <div className="mt-5 flex justify-center space-x-4 text-center text-base font-semibold rtl:space-x-reverse md:mt-10">
                        <span className={`${!yearlyPrice ? 'text-primary' : 'text-white-dark'}`}>Monthly</span>

                        <label className="relative h-6 w-12">
                            <input
                                id="custom_switch_checkbox1"
                                type="checkbox"
                                className="custom_switch peer absolute top-0 z-10 h-full w-full cursor-pointer opacity-0 ltr:left-0 rtl:right-0"
                                onChange={() => setYearlyPrice(!yearlyPrice)}
                            />
                            <span className="outline_checkbox bg-icon block h-full rounded-full border-2 border-[#ebedf2] before:absolute before:bottom-1 before:h-4 before:w-4 before:rounded-full before:bg-[#ebedf2] before:bg-[url(/assets/images/close.svg)] before:bg-center before:bg-no-repeat before:transition-all before:duration-300 peer-checked:border-primary peer-checked:before:bg-primary peer-checked:before:bg-[url(/assets/images/checked.svg)] ltr:before:left-1 ltr:peer-checked:before:left-7 rtl:before:right-1 rtl:peer-checked:before:right-7 dark:border-white-dark dark:before:bg-white-dark"></span>
                        </label>
                        <span className={`relative ${yearlyPrice ? 'text-primary' : ' text-white-dark'}  `}>
                            Yearly
                            <span className="badge absolute my-auto hidden whitespace-nowrap rounded-full bg-success ltr:left-full ltr:ml-2 rtl:right-full rtl:mr-2">20% Off</span>
                        </span>
                    </div>
                    <div className="mt-5 space-y-4 text-white-dark md:mt-16 md:flex md:space-y-0">
                        <div className="rounded-md border border-white-light p-4 transition-all duration-300 hover:shadow-[0_0_15px_1px_rgba(113,106,202,0.20)] dark:border-[#1b2e4b] ltr:md:rounded-r-none ltr:md:border-r-0 rtl:md:rounded-l-none rtl:md:border-l-0 lg:p-9">
                            <h3 className="mb-5 text-xl font-semibold text-black dark:text-white-light">Cloud Hosting</h3>
                            <p>cPanel/WHM included. Intel Xeon E3 with guaranteed 2GB RAM.</p>
                            <div className="my-7 p-2.5 text-center text-lg">
                                <strong className="text-xl text-[#3b3f5c] dark:text-white-light lg:text-3xl">$25</strong> / monthly
                            </div>
                            <div className="mb-6">
                                <strong className="mb-3 inline-block text-[15px] text-black dark:text-white-light">Cloud Hosting Features</strong>
                                <ul className="space-y-3">
                                    <li>Single Domain</li>
                                    <li>50 GB SSD</li>
                                    <li>1 TB Premium Bandwidth</li>
                                </ul>
                            </div>
                            <button type="button" className="btn btn-dark w-full">
                                Buy Now
                            </button>
                        </div>
                        <div className="relative rounded-t-md border border-white-light p-4 pt-14 transition-all duration-300 dark:border-[#1b2e4b] lg:p-9">
                            <div className="absolute inset-x-0 top-0 flex h-10 items-center justify-center rounded-t-md bg-primary text-base text-white md:-top-[30px]">Most Popular</div>
                            <h3 className="mb-5 text-xl font-semibold text-black dark:text-white-light">VPS Hosting</h3>
                            <p>cPanel/WHM included. Intel Xeon E5 with guaranteed 4GB RAM.</p>
                            <div className="my-7 p-2.5 text-center text-lg">
                                <strong className="text-xl text-primary lg:text-4xl">$70</strong> / monthly
                            </div>
                            <div className="mb-6">
                                <strong className="mb-3 inline-block text-[15px]  text-black dark:text-white-light">VPS Hosting Features</strong>
                                <ul className="space-y-3">
                                    <li>5 Domains</li>
                                    <li>100 GB SSD</li>
                                    <li>2 TB Premium Bandwidth</li>
                                </ul>
                            </div>
                            <button type="button" className="btn btn-primary w-full">
                                Buy Now
                            </button>
                        </div>
                        <div className="rounded-md border border-white-light p-4 transition-all duration-300 hover:shadow-[0_0_15px_1px_rgba(113,106,202,0.20)] dark:border-[#1b2e4b] ltr:md:rounded-l-none ltr:md:border-l-0 rtl:md:rounded-r-none rtl:md:border-r-0 lg:p-9">
                            <h3 className="mb-5 text-xl font-semibold text-black dark:text-white-light">Business Hosting</h3>
                            <p>cPanel/WHM included. Intel Xeon E5 with guaranteed 8GB RAM.</p>
                            <div className="my-7 p-2.5 text-center text-lg">
                                <strong className="text-xl text-[#3b3f5c] dark:text-white-light lg:text-3xl">$115</strong> / monthly
                            </div>
                            <div className="mb-6">
                                <strong className="mb-3 inline-block text-[15px]  text-black dark:text-white-light">Business Hosting Features</strong>
                                <ul className="space-y-3">
                                    <li>Unlimited Domains</li>
                                    <li>1 TB SSD</li>
                                    <li>5 TB Premium Bandwidth</li>
                                </ul>
                            </div>
                            <button type="button" className="btn btn-dark w-full">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsPricingTableToggle;
