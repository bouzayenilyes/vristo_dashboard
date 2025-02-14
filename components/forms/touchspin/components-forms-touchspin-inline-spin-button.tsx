'use client';
import IconMinus from '@/components/icon/icon-minus';
import IconPlus from '@/components/icon/icon-plus';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import React, { useState } from 'react';

const ComponentsFormsTouchspinInlineSpinButton = () => {
    const [value7, setValue7] = useState<any>(0);

    return (
        <PanelCodeHighlight
            title="Inline spin button"
            codeHighlight={`import { useState } from 'react';

const [value7, setValue7] = useState<any>(0);

<div className="inline-flex">
    <button
        type="button"
        className="bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary"
        onClick={() => setValue7(value7 > 0 ? value7 - 1 : 0)}
    >
        <svg> ... </svg>
    </button>
    <input type="number" placeholder="55" className="form-input rounded-none text-center" min="0" max="25" readOnly value={value7} />
    <button
        type="button"
        className="bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary"
        onClick={() => setValue7(value7 < 100 ? value7 + 1 : 100)}
    >
        <svg> ... </svg>
    </button>
</div>`}
        >
            <div className="mb-5">
                <div className="inline-flex">
                    <button
                        type="button"
                        className="flex items-center justify-center border border-r-0 border-primary bg-primary px-3 font-semibold text-white ltr:rounded-l-md rtl:rounded-r-md"
                        onClick={() => setValue7(value7 > 0 ? value7 - 1 : 0)}
                    >
                        <IconMinus className="h-5 w-5" />
                    </button>
                    <input type="number" placeholder="55" className="form-input rounded-none text-center" min="0" max="25" readOnly value={value7} />
                    <button
                        type="button"
                        className="flex items-center justify-center border border-l-0 border-primary bg-primary px-3 font-semibold text-white ltr:rounded-r-md rtl:rounded-l-md"
                        onClick={() => setValue7(value7 < 100 ? value7 + 1 : 100)}
                    >
                        <IconPlus />
                    </button>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsFormsTouchspinInlineSpinButton;
