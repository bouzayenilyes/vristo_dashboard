import ComponentsFormDatePickerBasic from '@/components/forms/date-picker/components-form-date-picker-basic';
import ComponentsFormDatePickerDateTime from '@/components/forms/date-picker/components-form-date-picker-date-time';
import ComponentsFormDatePickerRange from '@/components/forms/date-picker/components-form-date-picker-range';
import ComponentsFormDatePickerTime from '@/components/forms/date-picker/components-form-date-picker-time';
import ComponentsFormRangePickerBottomLeft from '@/components/forms/range-picker/components-form-range-picker-bottom-left';
import ComponentsFormRangePickerBottomRight from '@/components/forms/range-picker/components-form-range-picker-bottom-right';
import ComponentsFormRangePickerInputElement from '@/components/forms/range-picker/components-form-range-picker-input-element';
import ComponentsFormRangePickerLocking from '@/components/forms/range-picker/components-form-range-picker-locking';
import ComponentsFormRangePickerNonLinear from '@/components/forms/range-picker/components-form-range-picker-non-linear';
import ComponentsFormRangePickerTopLeft from '@/components/forms/range-picker/components-form-range-picker-top-left';
import ComponentsFormRangePickerTopRight from '@/components/forms/range-picker/components-form-range-picker-top-right';
import IconBell from '@/components/icon/icon-bell';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
    title: 'Date & Range Picker',
};

const DatePicker = () => {
    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link href="#" className="text-primary hover:underline">
                        Forms
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Date and Range Picker</span>
                </li>
            </ul>
            <div className="space-y-8 pt-5">
                <div className="space-y-8" id="date_time_picker">
                    <div className="inline-block rounded bg-[#009688]/[.26] px-2 py-1 text-base text-[#009688]">Date and Time Picker</div>
                    <div className="panel flex items-center overflow-x-auto whitespace-nowrap p-3 text-primary">
                        <div className="rounded-full bg-primary p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3">
                            <IconBell />
                        </div>
                        <span className="ltr:mr-3 rtl:ml-3">Documentation: </span>
                        <a href="https://www.npmjs.com/package/react-flatpickr" target="_blank" className="block hover:underline" rel="noreferrer">
                            https://www.npmjs.com/package/react-flatpickr
                        </a>
                    </div>
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                        {/*  Basic  */}

                        <ComponentsFormDatePickerBasic />

                        {/* Date & time */}
                        <ComponentsFormDatePickerDateTime />

                        {/*  range-calendar */}
                        <ComponentsFormDatePickerRange />

                        {/* preloading time */}
                        <ComponentsFormDatePickerTime />
                    </div>
                </div>

                <div className="space-y-8" id="js_range_slider">
                    {/*  range picker */}
                    <div className="inline-block rounded bg-[#009688]/[.26] px-2 py-1 text-base text-[#009688]">Javascript Range Slider</div>
                    <div className="grid gap-6 lg:grid-cols-2">
                        {/* Top-Left */}
                        <ComponentsFormRangePickerTopLeft />
                        {/* Top-right */}
                        <ComponentsFormRangePickerTopRight />

                        {/* bottom-left */}
                        <ComponentsFormRangePickerBottomLeft />

                        {/* Bottom-right */}
                        <ComponentsFormRangePickerBottomRight />
                    </div>
                </div>

                <div className="space-y-8" id="noui_sliders">
                    {/* Nouislider */}
                    <div className="inline-block rounded bg-[#009688]/[.26] px-2 py-1 text-base text-[#009688]">noUI Slider</div>
                    <div className="panel flex items-center overflow-x-auto whitespace-nowrap p-3 text-primary">
                        <div className="rounded-full bg-primary p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3">
                            <IconBell />
                        </div>
                        <span className="ltr:mr-3 rtl:ml-3">Documentation: </span>
                        <a href="https://www.npmjs.com/package/nouislider-react" target="_blank" className="block hover:underline" rel="noreferrer">
                            https://www.npmjs.com/package/nouislider-react
                        </a>
                    </div>
                    <div className="grid gap-6 lg:grid-cols-2">
                        {/* Using HTML5 input elements */}
                        <ComponentsFormRangePickerInputElement />
                        {/* Non linear slider */}
                        <ComponentsFormRangePickerNonLinear />

                        {/* Locking slider */}
                        <ComponentsFormRangePickerLocking />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DatePicker;
