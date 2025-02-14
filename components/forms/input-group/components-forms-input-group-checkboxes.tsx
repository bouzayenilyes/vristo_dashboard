import PanelCodeHighlight from '@/components/panel-code-highlight';
import React from 'react';

const ComponentsFormsInputGroupCheckboxes = () => {
    return (
        <PanelCodeHighlight
            title="Checkboxes"
            codeHighlight={`{/*left*/}
<div className="flex">
    <div className="bg-[#f1f2f3] dark:bg-[#1b2e4b] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c]">
        <input type="checkbox" className="form-checkbox border-white-light dark:border-white-dark ltr:mr-0 rtl:ml-0" defaultChecked />
    </div>
    <input id="checkLeft" type="text" placeholder="Checkbox" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
</div>

{/*right*/}
<div className="flex">
    <input id="checkRight" type="text" placeholder="Checkbox" className="form-input ltr:rounded-r-none rtl:rounded-l-none" />
    <div className="bg-[#f1f2f3] dark:bg-[#1b2e4b] flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border ltr:border-l-0 rtl:border-r-0 border-white-light dark:border-[#17263c]">
        <input type="checkbox" className="form-checkbox text-warning border-white-light dark:border-white-dark ltr:mr-0 rtl:ml-0" defaultChecked />
    </div>
</div>`}
        >
            <div className="mb-5">
                <div className="mb-5">
                    <label htmlFor="checkLeft">Left</label>
                    <div className="flex">
                        <div className="flex items-center justify-center border border-white-light bg-[#f1f2f3] px-3 font-semibold ltr:rounded-l-md ltr:border-r-0 rtl:rounded-r-md rtl:border-l-0 dark:border-[#17263c] dark:bg-[#1b2e4b]">
                            <input type="checkbox" className="form-checkbox border-white-light ltr:mr-0 rtl:ml-0 dark:border-white-dark" defaultChecked />
                        </div>
                        <input id="checkLeft" type="text" placeholder="Checkbox" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
                    </div>
                </div>
                <label htmlFor="checkRight">Right</label>
                <div className="flex">
                    <input id="checkRight" type="text" placeholder="Checkbox" className="form-input ltr:rounded-r-none rtl:rounded-l-none" />
                    <div className="flex items-center justify-center border border-white-light bg-[#f1f2f3] px-3 font-semibold ltr:rounded-r-md ltr:border-l-0 rtl:rounded-l-md rtl:border-r-0 dark:border-[#17263c] dark:bg-[#1b2e4b]">
                        <input type="checkbox" className="form-checkbox border-white-light text-warning ltr:mr-0 rtl:ml-0 dark:border-white-dark" defaultChecked />
                    </div>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsFormsInputGroupCheckboxes;
