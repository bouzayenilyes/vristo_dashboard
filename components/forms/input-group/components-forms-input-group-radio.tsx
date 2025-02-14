import PanelCodeHighlight from '@/components/panel-code-highlight';
import React from 'react';

const ComponentsFormsInputGroupRadio = () => {
    return (
        <PanelCodeHighlight
            title="Radios"
            codeHighlight={`{/*left*/}
<div className="flex">
    <div className="bg-[#f1f2f3] dark:bg-[#1b2e4b] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c]">
        <input type="radio" className="form-radio text-info border-white-light dark:border-white-dark ltr:mr-0 rtl:ml-0" defaultChecked />
    </div>
    <input id="radioLeft" type="text" placeholder="Radio" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
</div>

{/*right*/}
<div className="flex">
    <input id="radioRight" type="text" placeholder="Radio" className="form-input ltr:rounded-r-none rtl:rounded-l-none" />
    <div className="bg-[#f1f2f3] dark:bg-[#1b2e4b] flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border ltr:border-l-0 rtl:border-r-0 border-white-light dark:border-[#17263c]">
        <input type="radio" className="form-radio text-danger border-white-light dark:border-white-dark ltr:mr-0 rtl:ml-0" defaultChecked />
    </div>
</div>`}
        >
            <div className="mb-5">
                <div className="mb-5">
                    <label htmlFor="radioLeft">Left</label>
                    <div className="flex">
                        <div className="flex items-center justify-center border border-white-light bg-[#f1f2f3] px-3 font-semibold ltr:rounded-l-md ltr:border-r-0 rtl:rounded-r-md rtl:border-l-0 dark:border-[#17263c] dark:bg-[#1b2e4b]">
                            <input type="radio" className="form-radio border-white-light text-info ltr:mr-0 rtl:ml-0 dark:border-white-dark" defaultChecked />
                        </div>
                        <input id="radioLeft" type="text" placeholder="Radio" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
                    </div>
                </div>
                <div>
                    <label htmlFor="radioRight">Right</label>
                    <div className="flex">
                        <input id="radioRight" type="text" placeholder="Radio" className="form-input ltr:rounded-r-none rtl:rounded-l-none" />
                        <div className="flex items-center justify-center border border-white-light bg-[#f1f2f3] px-3 font-semibold ltr:rounded-r-md ltr:border-l-0 rtl:rounded-l-md rtl:border-r-0 dark:border-[#17263c] dark:bg-[#1b2e4b]">
                            <input type="radio" className="form-radio border-white-light text-danger ltr:mr-0 rtl:ml-0 dark:border-white-dark" defaultChecked />
                        </div>
                    </div>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsFormsInputGroupRadio;
