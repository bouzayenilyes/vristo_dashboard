import PanelCodeHighlight from '@/components/panel-code-highlight';
import React from 'react';

const ComponentsFormsInputGroupSizes = () => {
    return (
        <PanelCodeHighlight
            title="Sizes"
            codeHighlight={`<form>
    <div className="mb-5">
        <div className="flex">
            <div className="bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
                Small
            </div>
            <input type="text" placeholder="Username" className="form-input ltr:rounded-l-none rtl:rounded-r-none py-2.5 text-base" />
        </div>
    </div>
    <div className="mb-5">
        <div className="flex">
            <div className="bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
                Small
            </div>
            <input type="text" placeholder="Username" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
        </div>
    </div>
    <div>
        <div className="flex">
            <div className="bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
                Small
            </div>
            <input type="text" placeholder="Username" className="form-input ltr:rounded-l-none rtl:rounded-r-none py-1.5 text-xs" />
        </div>
    </div>
</form>`}
        >
            <div className="mb-5">
                <form>
                    <div className="mb-5">
                        <div className="flex">
                            <div className="flex items-center justify-center border border-white-light bg-[#eee] px-3 font-semibold ltr:rounded-l-md ltr:border-r-0 rtl:rounded-r-md rtl:border-l-0 dark:border-[#17263c] dark:bg-[#1b2e4b]">
                                Large
                            </div>
                            <input type="text" placeholder="Username" className="form-input py-2.5 text-base ltr:rounded-l-none rtl:rounded-r-none" />
                        </div>
                    </div>
                    <div className="mb-5">
                        <div className="flex">
                            <div className="flex items-center justify-center border border-white-light bg-[#eee] px-3 font-semibold ltr:rounded-l-md ltr:border-r-0 rtl:rounded-r-md rtl:border-l-0 dark:border-[#17263c] dark:bg-[#1b2e4b]">
                                Default
                            </div>
                            <input type="text" placeholder="Username" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
                        </div>
                    </div>
                    <div>
                        <div className="flex">
                            <div className="flex items-center justify-center border border-white-light bg-[#eee] px-3 font-semibold ltr:rounded-l-md ltr:border-r-0 rtl:rounded-r-md rtl:border-l-0 dark:border-[#17263c] dark:bg-[#1b2e4b]">
                                Small
                            </div>
                            <input type="text" placeholder="Username" className="form-input py-1.5 text-xs ltr:rounded-l-none rtl:rounded-r-none" />
                        </div>
                    </div>
                </form>
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsFormsInputGroupSizes;
