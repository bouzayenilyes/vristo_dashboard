'use client';
import IconMinus from '@/components/icon/icon-minus';
import IconPlus from '@/components/icon/icon-plus';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import React, { useState } from 'react';

const ComponentsFormsTouchspinSize = () => {
    const [value4, setValue4] = useState<any>(0);
    const [value5, setValue5] = useState<any>(0);
    const [value6, setValue6] = useState<any>(0);

    return (
        <PanelCodeHighlight
            title="Size"
            className="lg:row-span-2"
            codeHighlight={`import { useState } from 'react';

const [value4, setValue4] = useState<any>(0);
const [value5, setValue5] = useState<any>(0);
const [value6, setValue6] = useState<any>(0);

{/*large*/}
<div className="flex">
    <button
        type="button"
        className="bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary"
        onClick={() => setValue4(value4 > 0 ? value4 - 1 : 0)}
    >
        <svg> ... </svg>
    </button>
    <input id="sizeLarge" type="number" placeholder="55" className="form-input form-input-lg rounded-none text-center" min="0" max="25" readOnly value={value4} />
    <button
        type="button"
        className="bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary"
        onClick={() => setValue4(value4 < 100 ? value4 + 1 : 100)}
    >
        <svg> ... </svg>
    </button>
</div>

{/*default*/}
<div className="flex">
    <button
        type="button"
        className="bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary"
        onClick={() => setValue5(value5 > 0 ? value5 - 1 : 0)}
    >
        <svg> ... </svg>
    </button>
    <input type="number" placeholder="55" className="form-input rounded-none text-center" min="0" max="25" readOnly value={value5} />
    <button
        type="button"
        className="bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary"
        onClick={() => setValue5(value5 < 100 ? value5 + 1 : 100)}
    >
        <svg> ... </svg>
    </button>
</div>

{/*small*/}
<div className="flex">
    <button
        type="button"
        className="bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary"
        onClick={() => setValue6(value6 > 0 ? value6 - 1 : 0)}
    >
        <svg> ... </svg>
    </button>
    <input id="sizeSmall" type="number" placeholder="55" className="form-input form-input-sm rounded-none text-center" min="0" max="25" readOnly value={value6} />
    <button
        type="button"
        className="bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary"
        onClick={() => setValue6(value6 < 100 ? value6 + 1 : 100)}
    >
        <svg> ... </svg>
    </button>
</div>`}
        >
            <div className="mb-5">
                <div className="mb-5">
                    <label htmlFor="sizeLarge">Large size</label>
                    <div className="flex">
                        <button
                            type="button"
                            className="flex items-center justify-center border border-r-0 border-primary bg-primary px-3 font-semibold text-white ltr:rounded-l-md rtl:rounded-r-md"
                            onClick={() => setValue4(value4 > 0 ? value4 - 1 : 0)}
                        >
                            <IconMinus className="h-5 w-5" />
                        </button>
                        <input id="sizeLarge" type="number" placeholder="55" className="form-input-lg form-input rounded-none text-center" min="0" max="25" readOnly value={value4} />
                        <button
                            type="button"
                            className="flex items-center justify-center border border-l-0 border-primary bg-primary px-3 font-semibold text-white ltr:rounded-r-md rtl:rounded-l-md"
                            onClick={() => setValue4(value4 < 100 ? value4 + 1 : 100)}
                        >
                            <IconPlus />
                        </button>
                    </div>
                </div>

                {/* default */}
                <div className="mb-5">
                    <label htmlFor="sizeDefault">Default size</label>
                    <div className="flex">
                        <button
                            type="button"
                            className="flex items-center justify-center border border-r-0 border-primary bg-primary px-3 font-semibold text-white ltr:rounded-l-md rtl:rounded-r-md"
                            onClick={() => setValue5(value5 > 0 ? value5 - 1 : 0)}
                        >
                            <IconMinus className="h-5 w-5" />
                        </button>
                        <input type="number" placeholder="55" className="form-input rounded-none text-center" min="0" max="25" readOnly value={value5} />
                        <button
                            type="button"
                            className="flex items-center justify-center border border-l-0 border-primary bg-primary px-3 font-semibold text-white ltr:rounded-r-md rtl:rounded-l-md"
                            onClick={() => setValue5(value5 < 100 ? value5 + 1 : 100)}
                        >
                            <IconPlus />
                        </button>
                    </div>
                </div>

                {/* small */}
                <div>
                    <label htmlFor="sizeSmall">Small size</label>
                    <div className="flex">
                        <button
                            type="button"
                            className="flex items-center justify-center border border-r-0 border-primary bg-primary px-3 font-semibold text-white ltr:rounded-l-md rtl:rounded-r-md"
                            onClick={() => setValue6(value6 > 0 ? value6 - 1 : 0)}
                        >
                            <IconMinus className="h-5 w-5" />
                        </button>
                        <input id="sizeSmall" type="number" placeholder="55" className="form-input-sm form-input rounded-none text-center" min="0" max="25" readOnly value={value6} />
                        <button
                            type="button"
                            className="flex items-center justify-center border border-l-0 border-primary bg-primary px-3 font-semibold text-white ltr:rounded-r-md rtl:rounded-l-md"
                            onClick={() => setValue6(value6 < 100 ? value6 + 1 : 100)}
                        >
                            <IconPlus />
                        </button>
                    </div>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsFormsTouchspinSize;
