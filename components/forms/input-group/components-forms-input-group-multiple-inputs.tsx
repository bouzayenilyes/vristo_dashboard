import PanelCodeHighlight from '@/components/panel-code-highlight';
import React from 'react';

const ComponentsFormsInputGroupMultipleInputs = () => {
    return (
        <PanelCodeHighlight
            title="Multiple inputs"
            codeHighlight={`<form>
    <div className="flex">
        <div className="bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
            First and last name
        </div>
        <input type="text" placeholder="First Name" className="form-input ltr:border-r-0 rtl:border-l-0 focus:!border-r rounded-none flex-1" />
        <input type="text" placeholder="Last Name" className="form-input ltr:rounded-l-none rtl:rounded-r-none flex-1" />
    </div>
</form>`}
        >
            <div className="mb-5">
                <form>
                    <div className="flex">
                        <div className="flex items-center justify-center border border-white-light bg-[#eee] px-3 font-semibold ltr:rounded-l-md ltr:border-r-0 rtl:rounded-r-md rtl:border-l-0 dark:border-[#17263c] dark:bg-[#1b2e4b]">
                            First and last name
                        </div>
                        <input type="text" placeholder="First Name" className="form-input flex-1 rounded-none focus:!border-r ltr:border-r-0 rtl:border-l-0" />
                        <input type="text" placeholder="Last Name" className="form-input flex-1 ltr:rounded-l-none rtl:rounded-r-none" />
                    </div>
                </form>
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsFormsInputGroupMultipleInputs;
