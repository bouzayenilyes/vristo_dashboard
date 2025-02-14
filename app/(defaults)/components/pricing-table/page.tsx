import ComponentsPricingTableToggle from '@/components/components/pricing-table/components-pricing-table-toggle';
import IconArrowLeft from '@/components/icon/icon-arrow-left';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
    title: 'Pricing Table',
};

const PricingTable = () => {
    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link href="#" className="text-primary hover:underline">
                        Components
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Pricing Table</span>
                </li>
            </ul>
            <div className="space-y-8 pt-5">
                {/* Basic */}
                <PanelCodeHighlight
                    title="Basic"
                    codeHighlight={`<div className="mb-5">
    <div className="max-w-[320px] md:max-w-[990px] mx-auto">
        <div className="md:flex justify-between space-y-4 md:space-y-0 md:space-x-4 rtl:space-x-reverse">
            <div className="p-3 lg:p-5 border border-black dark:border-[#1b2e4b] text-center rounded group hover:border-primary">
                <h3 className="text-xl lg:text-2xl">Beginner Savers</h3>
                <div className="border-t border-black dark:border-white-dark w-1/5 mx-auto my-6 group-hover:border-primary"></div>
                <p className="text-[15px]">For people who are starting out in the water saving business</p>
                <div className="my-7 p-2.5 text-center text-lg group-hover:text-primary">
                    <strong className="text-[#3b3f5c] dark:text-white-dark text-3xl lg:text-5xl group-hover:text-primary">$19</strong> / monthly
                </div>
                <ul className="space-y-2.5 mb-5 font-semibold group-hover:text-primary">
                    <li className="flex justify-center items-center">
                        <svg>...</svg>
                        Free water saving e-book
                    </li>
                    <li className="flex justify-center items-center">
                        <svg>...</svg>
                        Free access to forums
                    </li>
                    <li className="flex justify-center items-center">
                        <svg>...</svg>
                        Beginners tips
                    </li>
                </ul>
                <button
                    type="button"
                    className="btn text-black shadow-none group-hover:text-primary group-hover:border-primary group-hover:bg-primary/10 dark:text-white-dark dark:border-white-dark/50 w-full"
                >
                    Buy Now
                </button>
            </div>
            <div className="p-3 lg:p-5 border border-black dark:border-[#1b2e4b] text-center rounded group hover:border-primary">
                <h3 className="text-xl lg:text-2xl">Advanced Savers</h3>
                <div className="border-t border-black dark:border-white-dark w-1/5 mx-auto my-6 group-hover:border-primary"></div>
                <p className="text-[15px] ">For experienced water savers who'd like to push their limits</p>
                <div className="my-7 p-2.5 text-center text-lg group-hover:text-primary">
                    <strong className="text-[#3b3f5c] dark:text-white-dark text-3xl lg:text-5xl group-hover:text-primary">$29</strong> / monthly
                </div>
                <ul className="space-y-2.5 mb-5 font-semibold group-hover:text-primary">
                    <li className="flex justify-center items-center">
                        <svg>...</svg>
                        Free water saving e-book
                    </li>
                    <li className="flex justify-center items-center">
                        <svg>...</svg>
                        Free access to forums
                    </li>
                    <li className="flex justify-center items-center">
                        <svg>...</svg>
                        Advanced saving tips
                    </li>
                </ul>
                <button
                    type="button"
                    className="btn text-black shadow-none group-hover:text-primary group-hover:border-primary group-hover:bg-primary/10 dark:text-white-dark dark:border-white-dark/50 w-full"
                >
                    Buy Now
                </button>
            </div>
            <div className="p-3 lg:p-5 border border-black dark:border-[#1b2e4b] text-center rounded group hover:border-primary">
                <h3 className="text-xl lg:text-2xl">Pro Savers</h3>
                <div className="border-t border-black dark:border-white-dark w-1/5 mx-auto my-6 group-hover:border-primary"></div>
                <p className="text-[15px] ">For all the professionals who'd like to educate others, too</p>
                <div className="my-7 p-2.5 text-center text-lg group-hover:text-primary">
                    <strong className="text-[#3b3f5c] dark:text-white-dark text-3xl lg:text-5xl group-hover:text-primary">$79</strong> / monthly
                </div>
                <ul className="space-y-2.5 mb-5 font-semibold group-hover:text-primary">
                    <li className="flex justify-center items-center">
                        <svg>...</svg>
                        Access to all books
                    </li>
                    <li className="flex justify-center items-center">
                        <svg>...</svg>
                        Unlimited board topics
                    </li>
                    <li className="flex justify-center items-center">
                        <svg>...</svg>
                        Beginners tips
                    </li>
                </ul>
                <button type="button"
                    className="btn text-black shadow-none group-hover:text-primary group-hover:border-primary group-hover:bg-primary/10 dark:text-white-dark dark:border-white-dark/50 w-full"
                >
                    Buy Now
                </button>
            </div>
        </div>
    </div>
</div>`}
                >
                    <div className="mb-5">
                        <div className="mx-auto max-w-[320px] md:max-w-[990px]">
                            <div className="justify-between space-y-4 rtl:space-x-reverse md:flex md:space-x-4 md:space-y-0">
                                <div className="group rounded border border-black p-3 text-center hover:border-primary dark:border-[#1b2e4b] lg:p-5">
                                    <h3 className="text-xl lg:text-2xl">Beginner Savers</h3>
                                    <div className="mx-auto my-6 w-1/5 border-t border-black group-hover:border-primary dark:border-white-dark"></div>
                                    <p className="text-[15px]">For people who are starting out in the water saving business</p>
                                    <div className="my-7 p-2.5 text-center text-lg group-hover:text-primary">
                                        <strong className="text-3xl text-[#3b3f5c] group-hover:text-primary dark:text-white-dark lg:text-5xl">$19</strong> / monthly
                                    </div>
                                    <ul className="mb-5 space-y-2.5 font-semibold group-hover:text-primary">
                                        <li className="flex items-center justify-center">
                                            <IconArrowLeft className="h-3.5 w-3.5 shrink-0 ltr:mr-1 rtl:ml-1 rtl:rotate-180" />
                                            Free water saving e-book
                                        </li>
                                        <li className="flex items-center justify-center">
                                            <IconArrowLeft className="h-3.5 w-3.5 shrink-0 ltr:mr-1 rtl:ml-1 rtl:rotate-180" />
                                            Free access to forums
                                        </li>
                                        <li className="flex items-center justify-center">
                                            <IconArrowLeft className="h-3.5 w-3.5 shrink-0 ltr:mr-1 rtl:ml-1 rtl:rotate-180" />
                                            Beginners tips
                                        </li>
                                    </ul>
                                    <Link
                                        href="#"
                                        target="_self"
                                        className="btn text-black shadow-none group-hover:border-primary group-hover:bg-primary/10 group-hover:text-primary dark:border-white-dark/50 dark:text-white-dark"
                                    >
                                        Buy Now
                                    </Link>
                                </div>
                                <div className="group rounded border border-black p-3 text-center hover:border-primary dark:border-[#1b2e4b] lg:p-5">
                                    <h3 className="text-xl lg:text-2xl">Advanced Savers</h3>
                                    <div className="mx-auto my-6 w-1/5 border-t border-black group-hover:border-primary dark:border-white-dark"></div>
                                    <p className="text-[15px] ">{`For experienced water savers who'd like to push their limits`}</p>
                                    <div className="my-7 p-2.5 text-center text-lg group-hover:text-primary">
                                        <strong className="text-3xl text-[#3b3f5c] group-hover:text-primary dark:text-white-dark lg:text-5xl">$29</strong> / monthly
                                    </div>
                                    <ul className="mb-5 space-y-2.5 font-semibold group-hover:text-primary">
                                        <li className="flex items-center justify-center">
                                            <IconArrowLeft className="h-3.5 w-3.5 shrink-0 ltr:mr-1 rtl:ml-1 rtl:rotate-180" />
                                            Free water saving e-book
                                        </li>
                                        <li className="flex items-center justify-center">
                                            <IconArrowLeft className="h-3.5 w-3.5 shrink-0 ltr:mr-1 rtl:ml-1 rtl:rotate-180" />
                                            Free access to forums
                                        </li>
                                        <li className="flex items-center justify-center">
                                            <IconArrowLeft className="h-3.5 w-3.5 shrink-0 ltr:mr-1 rtl:ml-1 rtl:rotate-180" />
                                            Advanced saving tips
                                        </li>
                                    </ul>
                                    <Link
                                        href="#"
                                        target="_self"
                                        className="btn text-black shadow-none group-hover:border-primary group-hover:bg-primary/10 group-hover:text-primary dark:border-white-dark/50 dark:text-white-dark"
                                    >
                                        Buy Now
                                    </Link>
                                </div>
                                <div className="group rounded border border-black p-3 text-center hover:border-primary dark:border-[#1b2e4b] lg:p-5">
                                    <h3 className="text-xl lg:text-2xl">Pro Savers</h3>
                                    <div className="mx-auto my-6 w-1/5 border-t border-black group-hover:border-primary dark:border-white-dark"></div>
                                    <p className="text-[15px] ">{`For all the professionals who'd like to educate others, too`}</p>
                                    <div className="my-7 p-2.5 text-center text-lg group-hover:text-primary">
                                        <strong className="text-3xl text-[#3b3f5c] group-hover:text-primary dark:text-white-dark lg:text-5xl">$79</strong> / monthly
                                    </div>
                                    <ul className="mb-5 space-y-2.5 font-semibold group-hover:text-primary">
                                        <li className="flex items-center justify-center">
                                            <IconArrowLeft className="h-3.5 w-3.5 shrink-0 ltr:mr-1 rtl:ml-1 rtl:rotate-180" />
                                            Access to all books
                                        </li>
                                        <li className="flex items-center justify-center">
                                            <IconArrowLeft className="h-3.5 w-3.5 shrink-0 ltr:mr-1 rtl:ml-1 rtl:rotate-180" />
                                            Unlimited board topics
                                        </li>
                                        <li className="flex items-center justify-center">
                                            <IconArrowLeft className="h-3.5 w-3.5 shrink-0 ltr:mr-1 rtl:ml-1 rtl:rotate-180" />
                                            Beginners tips
                                        </li>
                                    </ul>
                                    <Link
                                        href="#"
                                        target="_self"
                                        className="btn text-black shadow-none group-hover:border-primary group-hover:bg-primary/10 group-hover:text-primary dark:border-white-dark/50 dark:text-white-dark"
                                    >
                                        Buy Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </PanelCodeHighlight>

                {/*  Toggle */}
                <ComponentsPricingTableToggle />

                {/* Animated */}
                <PanelCodeHighlight
                    title="Animated"
                    codeHighlight={`<div className="mb-5">
    <div className="max-w-[1140px] mx-auto mt-20 dark:text-white-dark">
        <div className="md:flex justify-between space-y-14 md:space-y-0 md:space-x-4 rtl:space-x-reverse">
            <div className="border border-white-light dark:border-[#1b2e4b] rounded transition-all duration-300 group">
                <div className="border-b border-white-light dark:border-[#1b2e4b] p-5 pt-0">
                    <span className="bg-white dark:bg-black text-[#3b3f5c] dark:text-white-light border-2 border-primary w-[70px] h-[70px] lg:w-[100px] lg:h-[100px] rounded flex justify-center items-center text-xl lg:text-3xl font-bold -mt-[30px] shadow-[0_0_15px_1px_rgba(113,106,202,0.20)] transition-all duration-300 group-hover:-translate-y-[10px]">
                        $49
                    </span>
                    <h3 className="text-xl lg:text-2xl mt-4 mb-2.5">Freelancer</h3>
                    <p className="text-[15px] ">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                <div className="p-5">
                    <ul className="space-y-2.5 mb-5 font-semibold">
                        <li>Support forum</li>
                        <li>Free hosting</li>
                        <li>2 hours of support</li>
                        <li>5GB of storage space</li>
                    </ul>
                    <button type="button" className="btn btn-primary w-full">
                        Buy Now
                    </button>
                </div>
            </div>
            <div className="border border-white-light dark:border-[#1b2e4b] rounded transition-all duration-300 group">
                <div className="border-b border-white-light dark:border-[#1b2e4b] p-5 pt-0">
                    <span className="bg-white dark:bg-black text-[#3b3f5c] dark:text-white-light border-2 border-primary w-[70px] h-[70px] lg:w-[100px] lg:h-[100px] rounded flex justify-center items-center text-xl lg:text-3xl font-bold -mt-[30px] shadow-[0_0_15px_1px_rgba(113,106,202,0.20)] transition-all duration-300 group-hover:-translate-y-[10px]">
                        $89
                    </span>
                    <h3 className="text-xl lg:text-2xl mt-4 mb-2.5">Small business</h3>
                    <p className="text-[15px] ">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                <div className="p-5">
                    <ul className="space-y-2.5 mb-5 font-semibold">
                        <li>Unlimited calls</li>
                        <li>Free hosting</li>
                        <li>10 hours of support</li>
                        <li>10GB of storage space</li>
                    </ul>
                    <button type="button" className="btn btn-primary w-full">
                        Buy Now
                    </button>
                </div>
            </div>
            <div className="border border-white-light dark:border-[#1b2e4b] rounded transition-all duration-300 group">
                <div className="border-b border-white-light dark:border-[#1b2e4b] p-5 pt-0">
                    <span className="bg-white dark:bg-black text-[#3b3f5c] dark:text-white-light border-2 border-primary w-[70px] h-[70px] lg:w-[100px] lg:h-[100px] rounded flex justify-center items-center text-xl lg:text-3xl font-bold -mt-[30px] shadow-[0_0_15px_1px_rgba(113,106,202,0.20)] transition-all duration-300 group-hover:-translate-y-[10px]">
                        $129
                    </span>
                    <h3 className="text-xl lg:text-2xl mt-4 mb-2.5">Larger business</h3>
                    <p className="text-[15px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                <div className="p-5">
                    <ul className="space-y-2.5 mb-5 font-semibold">
                        <li>Unlimited calls</li>
                        <li>Free hosting</li>
                        <li>Unlimited hours of support</li>
                        <li>1TB of storage space</li>
                    </ul>
                    <button type="button" className="btn btn-primary w-full">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>`}
                >
                    <div className="mb-5">
                        <div className="mx-auto mt-20 max-w-[1140px] dark:text-white-dark">
                            <div className="justify-between space-y-14 rtl:space-x-reverse md:flex md:space-x-4 md:space-y-0">
                                <div className="group rounded border border-white-light transition-all duration-300 dark:border-[#1b2e4b]">
                                    <div className="border-b border-white-light p-5 pt-0 dark:border-[#1b2e4b]">
                                        <span className="-mt-[30px] flex h-[70px] w-[70px] items-center justify-center rounded border-2 border-primary bg-white text-xl font-bold text-[#3b3f5c] shadow-[0_0_15px_1px_rgba(113,106,202,0.20)] transition-all duration-300 group-hover:-translate-y-[10px] dark:bg-black dark:text-white-light lg:h-[100px] lg:w-[100px] lg:text-3xl">
                                            $49
                                        </span>
                                        <h3 className="mb-2.5 mt-4 text-xl lg:text-2xl">Freelancer</h3>
                                        <p className="text-[15px] ">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                    </div>
                                    <div className="p-5">
                                        <ul className="mb-5 space-y-2.5 font-semibold">
                                            <li>Support forum</li>
                                            <li>Free hosting</li>
                                            <li>2 hours of support</li>
                                            <li>5GB of storage space</li>
                                        </ul>
                                        <button type="button" className="btn btn-primary w-full">
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                                <div className="group rounded border border-white-light transition-all duration-300 dark:border-[#1b2e4b]">
                                    <div className="border-b border-white-light p-5 pt-0 dark:border-[#1b2e4b]">
                                        <span className="-mt-[30px] flex h-[70px] w-[70px] items-center justify-center rounded border-2 border-primary bg-white text-xl font-bold text-[#3b3f5c] shadow-[0_0_15px_1px_rgba(113,106,202,0.20)] transition-all duration-300 group-hover:-translate-y-[10px] dark:bg-black dark:text-white-light lg:h-[100px] lg:w-[100px] lg:text-3xl">
                                            $89
                                        </span>
                                        <h3 className="mb-2.5 mt-4 text-xl lg:text-2xl">Small business</h3>
                                        <p className="text-[15px] ">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                    </div>
                                    <div className="p-5">
                                        <ul className="mb-5 space-y-2.5 font-semibold">
                                            <li>Unlimited calls</li>
                                            <li>Free hosting</li>
                                            <li>10 hours of support</li>
                                            <li>10GB of storage space</li>
                                        </ul>
                                        <button type="button" className="btn btn-primary w-full">
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                                <div className="group rounded border border-white-light transition-all duration-300 dark:border-[#1b2e4b]">
                                    <div className="border-b border-white-light p-5 pt-0 dark:border-[#1b2e4b]">
                                        <span className="-mt-[30px] flex h-[70px] w-[70px] items-center justify-center rounded border-2 border-primary bg-white text-xl font-bold text-[#3b3f5c] shadow-[0_0_15px_1px_rgba(113,106,202,0.20)] transition-all duration-300 group-hover:-translate-y-[10px] dark:bg-black dark:text-white-light lg:h-[100px] lg:w-[100px] lg:text-3xl">
                                            $129
                                        </span>
                                        <h3 className="mb-2.5 mt-4 text-xl lg:text-2xl">Larger business</h3>
                                        <p className="text-[15px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                    </div>
                                    <div className="p-5">
                                        <ul className="mb-5 space-y-2.5 font-semibold">
                                            <li>Unlimited calls</li>
                                            <li>Free hosting</li>
                                            <li>Unlimited hours of support</li>
                                            <li>1TB of storage space</li>
                                        </ul>
                                        <button type="button" className="btn btn-primary w-full">
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </PanelCodeHighlight>
            </div>
        </div>
    );
};

export default PricingTable;
