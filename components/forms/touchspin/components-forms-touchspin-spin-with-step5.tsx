'use client';
import IconMinus from '@/components/icon/icon-minus';
import IconPlus from '@/components/icon/icon-plus';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import React, { useState } from 'react';

const ComponentsFormsTouchspinSpinWithStep5 = () => {
    const [value2, setValue2] = useState<any>(0);
    return (
        <PanelCodeHighlight
            title="Spin button with step of 5"
            codeHighlight={`import { useState } from 'react';

const [value2, setValue2] = useState<any>(0);

<div className="flex">
    <button
        type="button"
        className="bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary"
        onClick={() => setValue2(value2 > 0 ? value2 - 5 : 0)}
    >
        <svg> ... </svg>
    </button>
    <input type="number" placeholder="5" step="5" min="0" max="50" readOnly className="form-input rounded-none text-center" value={value2} />
    <button
        type="button"
        className="bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary"
        onClick={() => setValue2(value2 < 100 ? value2 + 5 : 100)}
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
                            onClick={() => setValue2(value2 > 0 ? value2 - 5 : 0)}
                        >
                            <IconMinus className="h-5 w-5" />
                        </button>
                        <input type="number" placeholder="5" step="5" min="0" max="50" readOnly className="form-input rounded-none text-center" value={value2} />
                        <button
                            type="button"
                            className="flex items-center justify-center border border-l-0 border-primary bg-primary px-3 font-semibold text-white ltr:rounded-r-md rtl:rounded-l-md"
                            onClick={() => setValue2(value2 < 100 ? value2 + 5 : 100)}
                        >
                            <IconPlus />
                        </button>
                    </div>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsFormsTouchspinSpinWithStep5;
