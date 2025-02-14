import IconDroplet from '@/components/icon/icon-droplet';
import IconEye from '@/components/icon/icon-eye';
import IconHeart from '@/components/icon/icon-heart';
import IconStar from '@/components/icon/icon-star';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
    title: 'Cards',
};

const Cards = () => {
    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link href="#" className="text-primary hover:underline">
                        Components
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Cards</span>
                </li>
            </ul>
            <div className="grid grid-cols-1 gap-6 pt-5 lg:grid-cols-2">
                {/* card 1 */}
                <PanelCodeHighlight
                    title="Card 1"
                    codeHighlight={`<div className="mb-5 flex items-center justify-center">
    <div className="max-w-[19rem] w-full bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] rounded border border-white-light dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none">
        <div className="py-7 px-6">
            <div className="bg-[#3b3f5c] mb-5 inline-block p-3 text-[#f1f2f3] rounded-full">
                <svg>...</svg>
            </div>
            <h5 className="text-[#3b3f5c] text-xl font-semibold mb-4 dark:text-white-light">Simple</h5>
            <p className="text-white-dark">Mauris nisi felis, placerat in volutpat id, varius et sapien.</p>
        </div>
    </div>
</div>`}
                >
                    <div className="mb-5 flex items-center justify-center">
                        <div className="w-full max-w-[19rem] rounded border border-white-light bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none">
                            <div className="px-6 py-7">
                                <div className="mb-5 inline-block rounded-full bg-[#3b3f5c] p-3 text-[#f1f2f3]">
                                    <IconDroplet />
                                </div>
                                <h5 className="mb-4 text-xl font-semibold text-[#3b3f5c] dark:text-white-light">Simple</h5>
                                <p className="text-white-dark">Mauris nisi felis, placerat in volutpat id, varius et sapien.</p>
                            </div>
                        </div>
                    </div>
                </PanelCodeHighlight>
                {/* card 2 */}
                <PanelCodeHighlight
                    title="Card 2"
                    codeHighlight={`<div className="mb-5 flex items-center justify-center">
    <div className="max-w-[19rem] w-full bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] rounded border border-white-light dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none">
        <div className="py-7 px-6">
            <div className="-mt-7 mb-7 -mx-6 rounded-tl rounded-tr h-[215px] overflow-hidden">
                <img src="/assets/images/profile-28.jpeg" alt="cover" className="w-full h-full object-cover" />
            </div>
            <h5 className="text-[#3b3f5c] text-xl font-semibold mb-4 dark:text-white-light">CLI Based</h5>
            <p className="text-white-dark">Etiam sed augue ac justo tincidunt posuere. Vivamus euismod eros, nec risus malesuada.</p>
            <button type="button" className="btn btn-primary mt-6">
                Explore More
            </button>
        </div>
    </div>
</div>`}
                >
                    <div className="mb-5 flex items-center justify-center">
                        <div className="w-full max-w-[19rem] rounded border border-white-light bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none">
                            <div className="px-6 py-7">
                                <div className="-mx-6 -mt-7 mb-7 h-[215px] overflow-hidden rounded-tl rounded-tr">
                                    <img src="/assets/images/profile-28.jpeg" alt="cover" className="h-full w-full object-cover" />
                                </div>
                                <h5 className="mb-4 text-xl font-semibold text-[#3b3f5c] dark:text-white-light">CLI Based</h5>
                                <p className="text-white-dark">Etiam sed augue ac justo tincidunt posuere. Vivamus euismod eros, nec risus malesuada.</p>
                                <button type="button" className="btn btn-primary mt-6">
                                    Explore More
                                </button>
                            </div>
                        </div>
                    </div>
                </PanelCodeHighlight>
                {/* card 3 */}
                <PanelCodeHighlight
                    title="Card 3"
                    codeHighlight={`<div className="mb-5 flex items-center justify-center">
    <div className="max-w-[18rem] w-full bg-[#3b3f5c] shadow-[4px_6px_10px_-3px_#bfc9d4] rounded border border-white-light dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none p-5">
        <div className="text-center text-black-light">
            <div className="mb-5 w-20 h-20 rounded-full overflow-hidden mx-auto">
                <img src="/assets/images/profile-34.jpeg" alt="profile" className="w-full h-full object-cover" />
            </div>
            <h5 className="text-white text-[15px] font-semibold mb-2">Luke Ivory</h5>
            <p>Manager</p>
            <div className="flex justify-center items-center text-[#e2a03f] my-4">
                <svg>...</svg>
                <svg>...</svg>
                <svg>...</svg>
                <svg>...</svg>
                <svg>...</svg>
            </div>
            <p className="font-semibold italic">Maecenas nec mi vel lacus condimentum rhoncus dignissim egestas orci. Integer blandit porta placerat. Vestibulum in ultricies.</p>
        </div>
    </div>
</div>`}
                >
                    <div className="mb-5 flex items-center justify-center">
                        <div className="w-full max-w-[18rem] rounded border border-white-light bg-[#3b3f5c] p-5 shadow-[4px_6px_10px_-3px_#bfc9d4] dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none">
                            <div className="text-center text-black-light">
                                <div className="mx-auto mb-5 h-20 w-20 overflow-hidden rounded-full">
                                    <img src="/assets/images/profile-34.jpeg" alt="profile" className="h-full w-full object-cover" />
                                </div>
                                <h5 className="mb-2 text-[15px] font-semibold text-white">Luke Ivory</h5>
                                <p>Manager</p>
                                <div className="my-4 flex items-center justify-center text-[#e2a03f]">
                                    <IconStar className="fill-warning" />
                                    <IconStar className="fill-warning" />
                                    <IconStar className="fill-warning" />
                                    <IconStar className="fill-warning" />
                                    <IconStar />
                                </div>
                                <p className="font-semibold italic">Maecenas nec mi vel lacus condimentum rhoncus dignissim egestas orci. Integer blandit porta placerat. Vestibulum in ultricies.</p>
                            </div>
                        </div>
                    </div>
                </PanelCodeHighlight>
                {/* card 4 */}
                <PanelCodeHighlight
                    title="Card 4"
                    codeHighlight={`<div className="mb-5 flex items-center justify-center">
    <div className="max-w-[30rem] w-full bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] rounded border border-white-light dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none">
        <div className="p-5 flex items-center flex-col sm:flex-row">
            <div className="mb-5 w-20 h-20 rounded-full overflow-hidden">
                <img src="/assets/images/profile-34.jpeg" alt="profile" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 ltr:sm:pl-5 rtl:sm:pr-5 text-center sm:text-left">
                <h5 className="text-[#3b3f5c] text-[15px] font-semibold mb-2 dark:text-white-light">Luke Ivory</h5>
                <p className="mb-2 text-white-dark">Manager</p>
                <span className="badge bg-primary rounded-full">4.5</span>
                <p className="font-semibold text-white-dark mt-4 sm:mt-8">
                    Maecenas nec mi vel lacus condimentum rhoncus dignissim egestas orci. Integer blandit porta placerat. Vestibulum in ultricies.
                </p>
            </div>
        </div>
    </div>
</div>`}
                >
                    <div className="mb-5 flex items-center justify-center">
                        <div className="w-full max-w-[30rem] rounded border border-white-light bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none">
                            <div className="flex flex-col items-center p-5 sm:flex-row">
                                <div className="mb-5 h-20 w-20 overflow-hidden rounded-full">
                                    <img src="/assets/images/profile-34.jpeg" alt="profile" className="h-full w-full object-cover" />
                                </div>
                                <div className="flex-1 text-center sm:text-left ltr:sm:pl-5 rtl:sm:pr-5">
                                    <h5 className="mb-2 text-[15px] font-semibold text-[#3b3f5c] dark:text-white-light">Luke Ivory</h5>
                                    <p className="mb-2 text-white-dark">Manager</p>
                                    <span className="badge rounded-full bg-primary">4.5</span>
                                    <p className="mt-4 font-semibold text-white-dark sm:mt-8">
                                        Maecenas nec mi vel lacus condimentum rhoncus dignissim egestas orci. Integer blandit porta placerat. Vestibulum in ultricies.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </PanelCodeHighlight>
                {/* card 5 */}
                <PanelCodeHighlight
                    title="Card 5"
                    codeHighlight={`<div className="mb-5 flex items-center justify-center">
    <div className="max-w-[20rem] w-full bg-secondary shadow-[4px_6px_10px_-3px_#bfc9d4] rounded border border-white-light dark:border-0 dark:bg-secondary-dark-light dark:shadow-none p-5">
        <div className="text-black-light">
            <p className="font-semibold mb-5">Maecenas nec mi vel lacus condimentum rhoncus dignissim egestas orci. Integer blandit porta placerat. Vestibulum in ultricies.</p>
            <div className="flex">
                <div className="mb-5 w-14 h-14 rounded-full overflow-hidden mx-auto">
                    <img src="/assets/images/profile-34.jpeg" alt="profile" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 ltr:pl-4 rtl:pr-4">
                    <h5 className="text-white text-[15px] font-semibold mb-1">Luke Ivory</h5>
                    <p>Manager</p>
                </div>
            </div>
        </div>
    </div>
</div>`}
                >
                    <div className="mb-5 flex items-center justify-center">
                        <div className="w-full max-w-[20rem] rounded border border-white-light bg-secondary p-5 shadow-[4px_6px_10px_-3px_#bfc9d4] dark:border-0 dark:bg-secondary-dark-light dark:shadow-none">
                            <div className="text-black-light">
                                <p className="mb-5 font-semibold">Maecenas nec mi vel lacus condimentum rhoncus dignissim egestas orci. Integer blandit porta placerat. Vestibulum in ultricies.</p>
                                <div className="flex">
                                    <div className="mx-auto mb-5 h-14 w-14 overflow-hidden rounded-full">
                                        <img src="/assets/images/profile-34.jpeg" alt="profile" className="h-full w-full object-cover" />
                                    </div>
                                    <div className="flex-1 ltr:pl-4 rtl:pr-4">
                                        <h5 className="mb-1 text-[15px] font-semibold text-white">Luke Ivory</h5>
                                        <p>Manager</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </PanelCodeHighlight>
                {/* card 6 */}
                <PanelCodeHighlight
                    title="Card 6"
                    codeHighlight={`<div className="mb-5 flex items-center justify-center">
    <div className="max-w-[20rem] w-full bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] rounded border border-white-light dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none p-5 ">
        <div className="text-[#515365] dark:text-white-light">
            <p className="font-semibold italic mb-5">
                Maecenas nec mi vel lacus condimentum rhoncus dignissim egestas orci. Integer blandit porta placerat. Vestibulum in ultricies.
            </p>
            <div className="flex">
                <div className="flex-1">
                    <h5 className="text-[#3b3f5c] text-[15px] font-bold mb-1.5 dark:text-white-light">Luke Ivory</h5>
                    <p className="text-white-dark mb-1.5">Manager</p>
                    <div className="flex justify-start items-center text-[#e2a03f]">
                        <svg>...</svg>
                        <svg>...</svg>
                        <svg>...</svg>
                        <svg>...</svg>
                        <svg>...</svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`}
                >
                    <div className="mb-5 flex items-center justify-center">
                        <div className="w-full max-w-[20rem] rounded border border-white-light bg-white p-5 shadow-[4px_6px_10px_-3px_#bfc9d4] dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none ">
                            <div className="text-[#515365] dark:text-white-light">
                                <p className="mb-5 font-semibold italic">
                                    Maecenas nec mi vel lacus condimentum rhoncus dignissim egestas orci. Integer blandit porta placerat. Vestibulum in ultricies.
                                </p>
                                <div className="flex">
                                    <div className="flex-1">
                                        <h5 className="mb-1.5 text-[15px] font-bold text-[#3b3f5c] dark:text-white-light">Luke Ivory</h5>
                                        <p className="mb-1.5 text-white-dark">Manager</p>
                                        <div className="flex items-center justify-start text-[#e2a03f]">
                                            <IconStar className="h-3 w-3 fill-warning" />
                                            <IconStar className="h-3 w-3 fill-warning" />
                                            <IconStar className="h-3 w-3 fill-warning" />
                                            <IconStar className="h-3 w-3 fill-warning" />
                                            <IconStar className="h-3 w-3" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </PanelCodeHighlight>
                {/* card 7 */}
                <PanelCodeHighlight
                    title="Card 7"
                    codeHighlight={`<div className="mb-5 flex items-center justify-center">
    <div className="max-w-[20rem] w-full bg-primary shadow-[4px_6px_10px_-3px_#bfc9d4] rounded border border-white-light dark:border-0 dark:bg-primary-dark-light dark:shadow-none p-5">
        <div className="text-center font-semibold">
            <h5 className="text-white text-xl font-bold mb-5 dark:text-white-light">Rating</h5>
            <p className="text-white mb-5 text-base">(4.3)</p>
            <div className="flex justify-center items-center gap-1 text-[#e2a03f]">
                <svg>...</svg>
                <svg>...</svg>
                <svg>...</svg>
                <svg>...</svg>
                <svg>...</svg>
                <span className="text-white ltr:ml-1 rtl:mr-1">(94)</span>
            </div>
        </div>
    </div>
</div>`}
                >
                    <div className="mb-5 flex items-center justify-center">
                        <div className="w-full max-w-[20rem] rounded border border-white-light bg-primary p-5 shadow-[4px_6px_10px_-3px_#bfc9d4] dark:border-0 dark:bg-primary-dark-light dark:shadow-none">
                            <div className="text-center font-semibold">
                                <h5 className="mb-5 text-xl font-bold text-white dark:text-white-light">Rating</h5>
                                <p className="mb-5 text-base text-white">(4.3)</p>
                                <div className="flex items-center justify-center gap-1 text-[#e2a03f]">
                                    <IconStar className="h-4.5 w-4.5 fill-warning" />
                                    <IconStar className="h-4.5 w-4.5 fill-warning" />
                                    <IconStar className="h-4.5 w-4.5 fill-warning" />
                                    <IconStar className="h-4.5 w-4.5 fill-warning" />
                                    <IconStar className="h-4.5 w-4.5" />
                                    <span className="text-white ltr:ml-1 rtl:mr-1">(94)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </PanelCodeHighlight>
                {/* card 8 */}
                <PanelCodeHighlight
                    title="Card 8"
                    codeHighlight={`<div className="mb-5 flex items-center justify-center">
    <div className="max-w-[24rem] w-full bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] rounded border border-white-light dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none p-5">
        <div className="flex justify-between mb-5">
            <h6 className="text-black font-semibold text-base dark:text-white-light">Placed Order</h6>
            <span className="badge bg-primary/10 text-primary py-1.5 dark:bg-primary dark:text-white">IN PROGRESS</span>
        </div>
        <div className="flex items-center justify-start -space-x-3 rtl:space-x-reverse mb-5">
            <img
                className="w-9 h-9 rounded-full overflow-hidden object-cover ring-2 ring-white dark:ring-[#515365] shadow-[0_0_15px_1px_rgba(113,106,202,0.30)] dark:shadow-none"
                src="/assets/images/profile-34.jpeg"
                alt="profile"
            />
            <img
                className="w-9 h-9 rounded-full overflow-hidden object-cover ring-2 ring-white dark:ring-[#515365] shadow-[0_0_15px_1px_rgba(113,106,202,0.30)] dark:shadow-none"
                src="/assets/images/profile-34.jpeg"
                alt="profile"
            />
            <img
                className="w-9 h-9 rounded-full overflow-hidden object-cover ring-2 ring-white dark:ring-[#515365] shadow-[0_0_15px_1px_rgba(113,106,202,0.30)] dark:shadow-none"
                src="/assets/images/profile-34.jpeg"
                alt="profile"
            />
            <span className="bg-white rounded-full px-2 py-1 text-primary text-xs shadow-[0_0_20px_0_#d0d0d0] dark:shadow-none dark:bg-black dark:text-white">+5 more</span>
        </div>
        <div className="text-right">
            <span className="text-primary font-semibold">60%</span>
            <div className="bg-[#ebedf2] dark:bg-black rounded-full w-full h-1.5 mt-1.5">
                <div className="rounded-full bg-primary h-full" style={{ width: '60%' }}></div>
            </div>
        </div>
    </div>
</div>`}
                >
                    <div className="mb-5 flex items-center justify-center">
                        <div className="w-full max-w-[24rem] rounded border border-white-light bg-white p-5 shadow-[4px_6px_10px_-3px_#bfc9d4] dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none">
                            <div className="mb-5 flex justify-between">
                                <h6 className="text-base font-semibold text-black dark:text-white-light">Placed Order</h6>
                                <span className="badge bg-primary/10 py-1.5 text-primary dark:bg-primary dark:text-white">IN PROGRESS</span>
                            </div>
                            <div className="mb-5 flex items-center justify-start -space-x-3 rtl:space-x-reverse">
                                <img
                                    className="h-9 w-9 overflow-hidden rounded-full object-cover shadow-[0_0_15px_1px_rgba(113,106,202,0.30)] ring-2 ring-white dark:shadow-none dark:ring-[#515365]"
                                    src="/assets/images/profile-34.jpeg"
                                    alt="profile"
                                />
                                <img
                                    className="h-9 w-9 overflow-hidden rounded-full object-cover shadow-[0_0_15px_1px_rgba(113,106,202,0.30)] ring-2 ring-white dark:shadow-none dark:ring-[#515365]"
                                    src="/assets/images/profile-34.jpeg"
                                    alt="profile"
                                />
                                <img
                                    className="h-9 w-9 overflow-hidden rounded-full object-cover shadow-[0_0_15px_1px_rgba(113,106,202,0.30)] ring-2 ring-white dark:shadow-none dark:ring-[#515365]"
                                    src="/assets/images/profile-34.jpeg"
                                    alt="profile"
                                />
                                <span className="rounded-full bg-white px-2 py-1 text-xs text-primary shadow-[0_0_20px_0_#d0d0d0] dark:bg-black dark:text-white dark:shadow-none">+5 more</span>
                            </div>
                            <div className="text-right">
                                <span className="font-semibold text-primary">60%</span>
                                <div className="mt-1.5 h-1.5 w-full rounded-full bg-[#ebedf2] dark:bg-black">
                                    <div className="h-full rounded-full bg-primary" style={{ width: '60%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </PanelCodeHighlight>
                {/* card 9 */}
                <PanelCodeHighlight
                    title="Card 9"
                    codeHighlight={`<div className="mb-5 flex items-center justify-center">
    <div className="max-w-[22rem] w-full bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] rounded border border-white-light dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none">
        <div className="py-7 px-6">
            <div className="-mt-7 mb-7 -mx-6 rounded-tl rounded-tr h-[260px] overflow-hidden">
                <img src="/assets/images/profile-28.jpeg" alt="profile" className="w-full h-full object-cover" />
            </div>
            <p className="text-primary text-xs mb-1.5 font-bold">25 Sep 2020</p>
            <h5 className="text-[#3b3f5c] text-[15px] font-bold mb-4 dark:text-white-light">How to Start a Blog in 5 Easy Steps.</h5>
            <p className="text-white-dark ">Vestibulum vestibulum tortor ut eros tincidunt, ut rutrum elit volutpat.</p>
            <div className="relative flex justify-between mt-6 pt-4 before:w-[250px] before:h-[1px] before:bg-white-light before:inset-x-0 before:top-0 before:absolute before:mx-auto dark:before:bg-[#1b2e4b]">
                <div className="flex items-center font-semibold">
                    <div className="w-9 h-9 rounded-full overflow-hidden inline-block ltr:mr-2 rtl:ml-2.5">
                        <span className="flex w-full h-full items-center justify-center bg-[#515365] text-white-light">AG</span>
                    </div>
                    <div className="text-[#515365] dark:text-white-dark">Luke Ivory</div>
                </div>
                <div className="flex font-semibold">
                    <div className="text-primary flex items-center ltr:mr-3 rtl:ml-3">
                        <svg>...</svg>
                        51
                    </div>
                    <div className="text-primary flex items-center">
                        <svg>...</svg>
                        250
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>  `}
                >
                    <div className="mb-5 flex items-center justify-center">
                        <div className="w-full max-w-[22rem] rounded border border-white-light bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none">
                            <div className="px-6 py-7">
                                <div className="-mx-6 -mt-7 mb-7 h-[260px] overflow-hidden rounded-tl rounded-tr">
                                    <img src="/assets/images/profile-28.jpeg" alt="profile" className="h-full w-full object-cover" />
                                </div>
                                <p className="mb-1.5 text-xs font-bold text-primary">25 Sep 2020</p>
                                <h5 className="mb-4 text-[15px] font-bold text-[#3b3f5c] dark:text-white-light">How to Start a Blog in 5 Easy Steps.</h5>
                                <p className="text-white-dark ">Vestibulum vestibulum tortor ut eros tincidunt, ut rutrum elit volutpat.</p>
                                <div className="relative mt-6 flex justify-between pt-4 before:absolute before:inset-x-0 before:top-0 before:mx-auto before:h-[1px] before:w-[250px] before:bg-white-light dark:before:bg-[#1b2e4b]">
                                    <div className="flex items-center font-semibold">
                                        <div className="inline-block h-9 w-9 shrink-0 overflow-hidden rounded-full ltr:mr-2 rtl:ml-2.5">
                                            <span className="flex h-full w-full items-center justify-center bg-[#515365] text-white-light">AG</span>
                                        </div>
                                        <div className="text-[#515365] dark:text-white-dark">Luke Ivory</div>
                                    </div>
                                    <div className="flex font-semibold">
                                        <div className="flex items-center text-primary ltr:mr-3 rtl:ml-3">
                                            <IconHeart className="h-4 w-4 ltr:mr-1 rtl:ml-1" />
                                            51
                                        </div>
                                        <div className="flex items-center text-primary">
                                            <IconEye className="h-4 w-4 ltr:mr-1 rtl:ml-1" />
                                            250
                                        </div>
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

export default Cards;
