'use client';
import IconMinus from '@/components/icon/icon-minus';
import IconPlus from '@/components/icon/icon-plus';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import React, { useState } from 'react';

const ComponentsFormsTouchspinTextWithSpinButton = () => {
    const [value9, setValue9] = useState<any>(0);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const [day, setDay] = useState('');

    const dayFormatter = (day: number) => {
        setValue9(day);
        return setDay(days[day]);
    };

    return (
        <PanelCodeHighlight
            title="Text with spin button"
            codeHighlight={`import { useState } from 'react';
const [value9, setValue9] = useState<any>(0);
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const [day, setDay] = useState('');

const dayFormatter = (day: number) => {
    setValue9(day);
    return setDay(days[day]);
};

<div className="flex">
    <button
        type="button"
        className="bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary"
        onClick={() => dayFormatter(value9 > 0 ? value9 - 1 : 6)}
    >
        <svg> ... </svg>
    </button>
    <input type="text" placeholder="Sunday" className="form-input rounded-none text-center" min="0" max="6" readOnly value={day} />
    <button
        type="button"
        className="bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary"
        onClick={() => dayFormatter(value9 < 6 ? value9 + 1 : 0)}
    >
        <svg> ... </svg>
    </button>
</div>`}
        >
            <div className="mb-5">
                <div className="relative">
                    <div className="flex">
                        <button
                            type="button"
                            className="flex items-center justify-center border border-r-0 border-primary bg-primary px-3 font-semibold text-white ltr:rounded-l-md rtl:rounded-r-md"
                            onClick={() => dayFormatter(value9 > 0 ? value9 - 1 : 6)}
                        >
                            <IconMinus className="h-5 w-5" />
                        </button>
                        <input type="text" placeholder="Sunday" className="form-input rounded-none text-center" min="0" max="6" readOnly value={day} />
                        <button
                            type="button"
                            className="flex items-center justify-center border border-l-0 border-primary bg-primary px-3 font-semibold text-white ltr:rounded-r-md rtl:rounded-l-md"
                            onClick={() => dayFormatter(value9 < 6 ? value9 + 1 : 0)}
                        >
                            <IconPlus />
                        </button>
                    </div>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsFormsTouchspinTextWithSpinButton;
