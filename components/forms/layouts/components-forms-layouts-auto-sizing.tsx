import PanelCodeHighlight from '@/components/panel-code-highlight';
import React from 'react';

const ComponentsFormsLayoutsAutoSizing = () => {
    return (
        <PanelCodeHighlight
            title="Auto-sizing"
            className="lg:col-span-2"
            codeHighlight={`<form>
    <div className="flex flex-col md:flex-row gap-4 items-center max-w-[900px] mx-auto">
        <input type="email" placeholder="Jane Doe" className="form-input flex-1" />
        <div className="flex flex-1">
            <div className="bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
                @
            </div>
            <input type="text" placeholder="Username" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
        </div>
        <div>
            <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="form-checkbox" />
                <span className="text-white-dark">Remember me</span>
            </label>
        </div>
        <button type="submit" className="btn btn-primary py-2.5">
            Submit
        </button>
    </div>
</form>`}
        >
            <div className="mb-5">
                <form>
                    <div className="mx-auto flex max-w-[900px] flex-col items-center gap-4 md:flex-row">
                        <input type="email" placeholder="Jane Doe" className="form-input flex-1" />
                        <div className="flex flex-1">
                            <div className="flex items-center justify-center border border-white-light bg-[#eee] px-3 font-semibold ltr:rounded-l-md ltr:border-r-0 rtl:rounded-r-md rtl:border-l-0 dark:border-[#17263c] dark:bg-[#1b2e4b]">
                                @
                            </div>
                            <input type="text" placeholder="Username" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
                        </div>
                        <div>
                            <label className="flex cursor-pointer items-center">
                                <input type="checkbox" className="form-checkbox" />
                                <span className="text-white-dark">Remember me</span>
                            </label>
                        </div>
                        <button type="submit" className="btn btn-primary py-2.5">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsFormsLayoutsAutoSizing;
