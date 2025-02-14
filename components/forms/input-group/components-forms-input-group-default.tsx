import PanelCodeHighlight from '@/components/panel-code-highlight';
import React from 'react';

const ComponentsFormsInputGroupDefault = () => {
    return (
        <PanelCodeHighlight
            title="Default"
            className="lg:row-span-2"
            codeHighlight={`<form>
    <div className="mb-5">
        <div className="flex">
            <div className="bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
                @
            </div>
            <input type="text" placeholder="Username" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
        </div>
    </div>
    <div className="mb-5">
        <div className="flex">
            <input type="text" placeholder="Recipient's username" className="form-input ltr:rounded-r-none rtl:rounded-l-none" />
            <div className="bg-[#eee] flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border ltr:border-l-0 rtl:border-r-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
                @example.com
            </div>
        </div>
    </div>
    <div className="mb-5">
        <label htmlFor="url">Your vanity URL</label>
        <div className="flex">
            <div className="bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
                https://
            </div>
            <input id="url" type="text" placeholder="example.com/users/" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
        </div>
    </div>
    <div className="mb-5">
        <div className="flex">
            <div className="bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
                $
            </div>
            <input type="text" placeholder="" className="form-input rounded-none" />
            <div className="bg-[#eee] flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border ltr:border-l-0 rtl:border-r-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
                .00
            </div>
        </div>
    </div>
    <div>
        <div className="flex">
            <div className="bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b] whitespace-nowrap">
                With textarea
            </div>
            <textarea rows={4} className="form-textarea ltr:rounded-l-none rtl:rounded-r-none"></textarea>
        </div>
    </div>
</form>`}
        >
            <div className="mb-5">
                <form>
                    <div className="mb-5">
                        <div className="flex">
                            <div className="flex items-center justify-center border border-white-light bg-[#eee] px-3 font-semibold ltr:rounded-l-md ltr:border-r-0 rtl:rounded-r-md rtl:border-l-0 dark:border-[#17263c] dark:bg-[#1b2e4b]">
                                @
                            </div>
                            <input type="text" placeholder="Username" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
                        </div>
                    </div>
                    <div className="mb-5">
                        <div className="flex">
                            <input type="text" placeholder="Recipient's username" className="form-input ltr:rounded-r-none rtl:rounded-l-none" />
                            <div className="flex items-center justify-center border border-white-light bg-[#eee] px-3 font-semibold ltr:rounded-r-md ltr:border-l-0 rtl:rounded-l-md rtl:border-r-0 dark:border-[#17263c] dark:bg-[#1b2e4b]">
                                @example.com
                            </div>
                        </div>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="url">Your vanity URL</label>
                        <div className="flex">
                            <div className="flex items-center justify-center border border-white-light bg-[#eee] px-3 font-semibold ltr:rounded-l-md ltr:border-r-0 rtl:rounded-r-md rtl:border-l-0 dark:border-[#17263c] dark:bg-[#1b2e4b]">
                                https://
                            </div>
                            <input id="url" type="text" placeholder="example.com/users/" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
                        </div>
                    </div>
                    <div className="mb-5">
                        <div className="flex">
                            <div className="flex items-center justify-center border border-white-light bg-[#eee] px-3 font-semibold ltr:rounded-l-md ltr:border-r-0 rtl:rounded-r-md rtl:border-l-0 dark:border-[#17263c] dark:bg-[#1b2e4b]">
                                $
                            </div>
                            <input type="text" placeholder="" className="form-input rounded-none" />
                            <div className="flex items-center justify-center border border-white-light bg-[#eee] px-3 font-semibold ltr:rounded-r-md ltr:border-l-0 rtl:rounded-l-md rtl:border-r-0 dark:border-[#17263c] dark:bg-[#1b2e4b]">
                                .00
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex">
                            <div className="flex items-center justify-center whitespace-nowrap border border-white-light bg-[#eee] px-3 font-semibold ltr:rounded-l-md ltr:border-r-0 rtl:rounded-r-md rtl:border-l-0 dark:border-[#17263c] dark:bg-[#1b2e4b]">
                                With textarea
                            </div>
                            <textarea rows={4} className="form-textarea ltr:rounded-l-none rtl:rounded-r-none"></textarea>
                        </div>
                    </div>
                </form>
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsFormsInputGroupDefault;
