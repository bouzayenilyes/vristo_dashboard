import IconLoader from '@/components/icon/icon-loader';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import React from 'react';

const ComponentsFormsInputGroupSpinningIcon = () => {
    return (
        <PanelCodeHighlight
            title="Spinning Icon"
            codeHighlight={`{/*left*/}
<div className="flex">
    <div className="bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
        <svg> ... </svg>
    </div>
    <input id="spiLeft" type="text" placeholder="Spinners" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
</div>

{/*right*/}
<div className="flex">
    <input id="spiRight" type="text" placeholder="Spinners" className="form-input ltr:rounded-r-none rtl:rounded-l-none" />
    <div className="bg-[#eee] flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border ltr:border-l-0 rtl:border-r-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
        <svg> ... </svg>
    </div>
</div>`}
        >
            <div className="mb-5">
                <div className="mb-5">
                    <label htmlFor="spiLeft">Left</label>
                    <div className="flex">
                        <div className="flex items-center justify-center border border-white-light bg-[#eee] px-3 font-semibold ltr:rounded-l-md ltr:border-r-0 rtl:rounded-r-md rtl:border-l-0 dark:border-[#17263c] dark:bg-[#1b2e4b]">
                            <IconLoader className="animate-spin text-white-dark" />
                        </div>
                        <input id="spiLeft" type="text" placeholder="Spinners" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
                    </div>
                </div>
                <div>
                    <label htmlFor="spiRight">Right</label>
                    <div className="flex">
                        <input id="spiRight" type="text" placeholder="Spinners" className="form-input ltr:rounded-r-none rtl:rounded-l-none" />
                        <div className="flex items-center justify-center border border-white-light bg-[#eee] px-3 font-semibold ltr:rounded-r-md ltr:border-l-0 rtl:rounded-l-md rtl:border-r-0 dark:border-[#17263c] dark:bg-[#1b2e4b]">
                            <IconLoader className="animate-spin text-white-dark" />
                        </div>
                    </div>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsFormsInputGroupSpinningIcon;
