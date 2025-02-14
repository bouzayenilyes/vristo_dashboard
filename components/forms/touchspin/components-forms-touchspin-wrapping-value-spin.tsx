'use client';
import IconMinus from '@/components/icon/icon-minus';
import IconPlus from '@/components/icon/icon-plus';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import React, { useState } from 'react';

const ComponentsFormsTouchspinWrappingValueSpin = () => {
    const [value3, setValue3] = useState<any>(0);
    return (
        <PanelCodeHighlight
            title="Wrapping value spin button"
            codeHighlight={`import { useState } from 'react';

const [value3, setValue3] = useState<any>(0);

<div className="flex">
    <button
        type="button"
        className="bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary"
        onClick={() => setValue3(value3 > 0 ? value3 - 1 : 0)}
    >
        <svg> ... </svg>
    </button>
    <input type="number" placeholder="_ _" className="form-input rounded-none text-center" min="0" max="20" readOnly value={value3} />
    <button
        type="button"
        className="bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary"
        onClick={() => setValue3(value3 < 20 ? value3 + 1 : 20)}
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
                            onClick={() => setValue3(value3 > 0 ? value3 - 1 : 0)}
                        >
                            <IconMinus className="h-5 w-5" />
                        </button>
                        <input type="number" placeholder="_ _" className="form-input rounded-none text-center" min="0" max="20" readOnly value={value3} />
                        <button
                            type="button"
                            className="flex items-center justify-center border border-l-0 border-primary bg-primary px-3 font-semibold text-white ltr:rounded-r-md rtl:rounded-l-md"
                            onClick={() => setValue3(value3 < 20 ? value3 + 1 : 20)}
                        >
                            <IconPlus />
                        </button>
                    </div>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsFormsTouchspinWrappingValueSpin;
