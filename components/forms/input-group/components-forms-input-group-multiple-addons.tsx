import PanelCodeHighlight from '@/components/panel-code-highlight';
import React from 'react';

const ComponentsFormsInputGroupMultipleAddons = () => {
    return (
        <PanelCodeHighlight
            title="Multiple addons"
            codeHighlight={`<form>
    <div className="mb-5">
        <div className="flex">
            <div className="bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
                $
            </div>
            <div className="bg-[#eee] flex justify-center items-center rounded-none px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
                0.00
            </div>
            <input type="text" placeholder="" className="form-input ltr:rounded-l-none rtl:rounded-r-none flex-1" />
        </div>
    </div>
    <div>
        <div className="flex">
            <input type="text" placeholder="" className="form-input ltr:rounded-r-none rtl:rounded-l-none flex-1 ltr:rounded-l-md rtl:rounded-r-md" />
            <div className="bg-[#eee] flex justify-center items-center rounded-none px-3 font-semibold border border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
                0.00
            </div>
            <div className="bg-[#eee] flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border ltr:border-l-0 rtl:border-r-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
                $
            </div>
        </div>
    </div>
</form>`}
        >
            <div className="mb-5">
                <form>
                    <div className="mb-5">
                        <div className="flex">
                            <div className="flex items-center justify-center border border-white-light bg-[#eee] px-3 font-semibold ltr:rounded-l-md ltr:border-r-0 rtl:rounded-r-md rtl:border-l-0 dark:border-[#17263c] dark:bg-[#1b2e4b]">
                                $
                            </div>
                            <div className="flex items-center justify-center rounded-none border border-white-light bg-[#eee] px-3 font-semibold ltr:border-r-0 rtl:border-l-0 dark:border-[#17263c] dark:bg-[#1b2e4b]">
                                0.00
                            </div>
                            <input type="text" placeholder="" className="form-input flex-1 ltr:rounded-l-none rtl:rounded-r-none" />
                        </div>
                    </div>
                    <div>
                        <div className="flex">
                            <input type="text" placeholder="" className="form-input flex-1 ltr:rounded-l-md ltr:rounded-r-none rtl:rounded-l-none rtl:rounded-r-md" />
                            <div className="flex items-center justify-center rounded-none border border-white-light bg-[#eee] px-3 font-semibold dark:border-[#17263c] dark:bg-[#1b2e4b]">0.00</div>
                            <div className="flex items-center justify-center border border-white-light bg-[#eee] px-3 font-semibold ltr:rounded-r-md ltr:border-l-0 rtl:rounded-l-md rtl:border-r-0 dark:border-[#17263c] dark:bg-[#1b2e4b]">
                                $
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsFormsInputGroupMultipleAddons;
