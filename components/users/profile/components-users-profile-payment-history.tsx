'use client';
import Dropdown from '@/components/dropdown';
import IconHorizontalDots from '@/components/icon/icon-horizontal-dots';
import { IRootState } from '@/store';
import React from 'react';
import { useSelector } from 'react-redux';

const ComponentsUsersProfilePaymentHistory = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl';

    return (
        <div className="panel">
            <div className="mb-5 flex items-center justify-between">
                <h5 className="text-lg font-semibold dark:text-white-light">Payment History</h5>
            </div>
            <div>
                <div className="border-b border-[#ebedf2] dark:border-[#1b2e4b]">
                    <div className="flex items-center justify-between py-2">
                        <h6 className="font-semibold text-[#515365] dark:text-white-dark">
                            March
                            <span className="block text-white-dark dark:text-white-light">Pro Membership</span>
                        </h6>
                        <div className="flex items-start justify-between ltr:ml-auto rtl:mr-auto">
                            <p className="font-semibold">90%</p>
                            <div className="dropdown ltr:ml-4 rtl:mr-4">
                                <Dropdown
                                    offset={[0, 5]}
                                    placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                                    btnClassName="hover:text-primary"
                                    button={<IconHorizontalDots className="opacity-80 hover:opacity-100" />}
                                >
                                    <ul className="!min-w-[150px]">
                                        <li>
                                            <button type="button">View Invoice</button>
                                        </li>
                                        <li>
                                            <button type="button">Download Invoice</button>
                                        </li>
                                    </ul>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-b border-[#ebedf2] dark:border-[#1b2e4b]">
                    <div className="flex items-center justify-between py-2">
                        <h6 className="font-semibold text-[#515365] dark:text-white-dark">
                            February
                            <span className="block text-white-dark dark:text-white-light">Pro Membership</span>
                        </h6>
                        <div className="flex items-start justify-between ltr:ml-auto rtl:mr-auto">
                            <p className="font-semibold">90%</p>
                            <div className="dropdown ltr:ml-4 rtl:mr-4">
                                <Dropdown offset={[0, 5]} placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`} button={<IconHorizontalDots className="opacity-80 hover:opacity-100" />}>
                                    <ul className="!min-w-[150px]">
                                        <li>
                                            <button type="button">View Invoice</button>
                                        </li>
                                        <li>
                                            <button type="button">Download Invoice</button>
                                        </li>
                                    </ul>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex items-center justify-between py-2">
                        <h6 className="font-semibold text-[#515365] dark:text-white-dark">
                            January
                            <span className="block text-white-dark dark:text-white-light">Pro Membership</span>
                        </h6>
                        <div className="flex items-start justify-between ltr:ml-auto rtl:mr-auto">
                            <p className="font-semibold">90%</p>
                            <div className="dropdown ltr:ml-4 rtl:mr-4">
                                <Dropdown offset={[0, 5]} placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`} button={<IconHorizontalDots className="opacity-80 hover:opacity-100" />}>
                                    <ul className="!min-w-[150px]">
                                        <li>
                                            <button type="button">View Invoice</button>
                                        </li>
                                        <li>
                                            <button type="button">Download Invoice</button>
                                        </li>
                                    </ul>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComponentsUsersProfilePaymentHistory;
