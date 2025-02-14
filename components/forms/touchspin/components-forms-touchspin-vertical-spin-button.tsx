'use client';
import IconMinus from '@/components/icon/icon-minus';
import IconPlus from '@/components/icon/icon-plus';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import React, { useState } from 'react';

const ComponentsFormsTouchspinVerticalSpinButton = () => {
    const [value8, setValue8] = useState<any>(0);

    return (
        <PanelCodeHighlight
            title="Vertical spin button"
            className="lg:row-span-2"
            codeHighlight={`import { useState } from 'react';

const [value8, setValue8] = useState<any>(0);

<div className="inline-flex flex-col w-[50px]">
    <button
        type="button"
        className="bg-primary text-white flex justify-center items-center rounded-t-md p-3 font-semibold border border-b-0 border-primary"
        onClick={() => setValue8(value8 > 0 ? value8 - 1 : 0)}
    >
        <svg> ... </svg>
    </button>
    <input type="text" placeholder="55" className="form-input rounded-none text-center px-2" min="0" max="25" readOnly value={value8} />
    <button
        type="button"
        className="bg-primary text-white flex justify-center items-center rounded-b-md p-3 font-semibold border border-t-0 border-primary"
        onClick={() => setValue8(value8 < 100 ? value8 + 1 : 100)}
    >
        <svg> ... </svg>
    </button>
</div>`}
        >
            <div className="mb-5">
                <div className="inline-flex w-[50px] flex-col">
                    <button
                        type="button"
                        className="flex items-center justify-center rounded-t-md border border-b-0 border-primary bg-primary p-3 font-semibold text-white"
                        onClick={() => setValue8(value8 > 0 ? value8 - 1 : 0)}
                    >
                        <IconMinus className="h-5 w-5" />
                    </button>
                    <input type="text" placeholder="55" className="form-input rounded-none px-2 text-center" min="0" max="25" readOnly value={value8} />
                    <button
                        type="button"
                        className="flex items-center justify-center rounded-b-md border border-t-0 border-primary bg-primary p-3 font-semibold text-white"
                        onClick={() => setValue8(value8 < 100 ? value8 + 1 : 100)}
                    >
                        <IconPlus />
                    </button>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsFormsTouchspinVerticalSpinButton;
