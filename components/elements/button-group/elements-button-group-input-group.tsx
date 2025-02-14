import PanelCodeHighlight from '@/components/panel-code-highlight';
import React from 'react';

const ElementsButtonGroupInputGroup = () => {
    return (
        <PanelCodeHighlight
            title="Input Group"
            codeHighlight={`<div className="flex flex-wrap justify-center sm:justify-between items-center gap-2 w-full">
    <div className="relative inline-flex align-middle">
        <button type="button" className="btn btn-dark ltr:rounded-r-none rtl:rounded-l-none">
            1
        </button>
        <button type="button" className="btn btn-dark rounded-none">
            2
        </button>
        <button type="button" className="btn btn-dark rounded-none">
            3
        </button>
        <button type="button" className="btn btn-dark ltr:rounded-l-none rtl:rounded-r-none">
            4
        </button>
    </div>
    <div className="flex relative items-stretch flex-wrap">
        <div className="ltr:-mr-px rtl:-ml-px flex">
            <span className="border border-white-light dark:border-[#17263c] ltr:rounded-l rtl:rounded-r bg-[#f1f2f3] flex items-center justify-center text-black px-4 py-1.5 dark:bg-[#1a1c2d] dark:text-white-dark">
                @
            </span>
        </div>
        <input type="text" placeholder="Input group example" className="flex-1 form-input ltr:rounded-l-none rtl:rounded-r-none" />
    </div>
</div>;
`}
        >
            <div className="mb-5">
                <div className="flex w-full flex-wrap items-center justify-center gap-2 sm:justify-between">
                    <div>
                        <div className="relative inline-flex align-middle">
                            <button type="button" className="btn btn-dark ltr:rounded-r-none rtl:rounded-l-none">
                                1
                            </button>
                            <button type="button" className="btn btn-dark rounded-none">
                                2
                            </button>
                            <button type="button" className="btn btn-dark rounded-none">
                                3
                            </button>
                            <button type="button" className="btn btn-dark ltr:rounded-l-none rtl:rounded-r-none">
                                4
                            </button>
                        </div>
                    </div>
                    <div className="relative flex flex-wrap items-stretch">
                        <div className="flex ltr:-mr-px rtl:-ml-px">
                            <span className="flex items-center justify-center border border-white-light bg-[#f1f2f3] px-4 py-1.5 text-black ltr:rounded-l rtl:rounded-r dark:border-[#17263c] dark:bg-[#1a1c2d] dark:text-white-dark">
                                @
                            </span>
                        </div>
                        <input type="text" placeholder="Input group example" className="form-input flex-1 ltr:rounded-l-none rtl:rounded-r-none" />
                    </div>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ElementsButtonGroupInputGroup;
