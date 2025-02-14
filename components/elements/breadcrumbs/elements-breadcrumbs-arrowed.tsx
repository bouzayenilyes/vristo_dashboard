import PanelCodeHighlight from '@/components/panel-code-highlight';
import React from 'react';

const ElementsBreadcrumbsArrowed = () => {
    return (
        <PanelCodeHighlight
            title="Arrowed"
            codeHighlight={`<ol className="flex text-primary font-semibold dark:text-white-dark">
    <li className="bg-[#ebedf2] ltr:rounded-l-md rtl:rounded-r-md dark:bg-[#1b2e4b]">
        <button className="p-1.5 ltr:pl-3 rtl:pr-3 ltr:pr-2 rtl:pl-2 relative  h-full flex items-center before:absolute ltr:before:-right-[15px] rtl:before:-left-[15px] rtl:before:rotate-180 before:inset-y-0 before:m-auto before:w-0 before:h-0 before:border-[16px] before:border-l-[15px] before:border-r-0 before:border-t-transparent before:border-b-transparent before:border-l-[#ebedf2] before:z-[1] dark:before:border-l-[#1b2e4b] hover:text-primary/70 dark:hover:text-white-dark/70">
            Home
        </button>
    </li>
    <li className="bg-[#ebedf2] dark:bg-[#1b2e4b]">
        <button className="bg-primary text-white-light p-1.5 ltr:pl-6 rtl:pr-6 ltr:pr-2 rtl:pl-2 relative  h-full flex items-center before:absolute ltr:before:-right-[15px] rtl:before:-left-[15px] rtl:before:rotate-180 before:inset-y-0 before:m-auto before:w-0 before:h-0 before:border-[16px] before:border-l-[15px] before:border-r-0 before:border-t-transparent before:border-b-transparent before:border-l-primary before:z-[1]">
            Components
        </button>
    </li>
    <li className="bg-[#ebedf2] dark:bg-[#1b2e4b]">
        <button className="p-1.5 px-3 ltr:pl-6 rtl:pr-6 relative  h-full flex items-center before:absolute ltr:before:-right-[15px] rtl:before:-left-[15px] rtl:before:rotate-180 before:inset-y-0 before:m-auto before:w-0 before:h-0 before:border-[16px] before:border-l-[15px] before:border-r-0 before:border-t-transparent before:border-b-transparent before:border-l-[#ebedf2] before:z-[1] dark:before:border-l-[#1b2e4b] hover:text-primary/70 dark:hover:text-white-dark/70">
            UI Kit
        </button>
    </li>
</ol>`}
        >
            <div className="mb-5">
                <ol className="flex font-semibold text-primary dark:text-white-dark">
                    <li className="bg-[#ebedf2] ltr:rounded-l-md rtl:rounded-r-md dark:bg-[#1b2e4b]">
                        <button className="relative flex h-full items-center p-1.5 before:absolute  before:inset-y-0 before:z-[1] before:m-auto before:h-0 before:w-0 before:border-[16px] before:border-l-[15px] before:border-r-0 before:border-b-transparent before:border-l-[#ebedf2] before:border-t-transparent hover:text-primary/70 ltr:pl-3 ltr:pr-2 ltr:before:-right-[15px] rtl:pl-2 rtl:pr-3 rtl:before:-left-[15px] rtl:before:rotate-180 dark:before:border-l-[#1b2e4b] dark:hover:text-white-dark/70">
                            Home
                        </button>
                    </li>
                    <li className="bg-[#ebedf2] dark:bg-[#1b2e4b]">
                        <button className="relative flex h-full items-center bg-primary p-1.5 text-white-light before:absolute  before:inset-y-0 before:z-[1] before:m-auto before:h-0 before:w-0 before:border-[16px] before:border-l-[15px] before:border-r-0 before:border-b-transparent before:border-l-primary before:border-t-transparent ltr:pl-6 ltr:pr-2 ltr:before:-right-[15px] rtl:pl-2 rtl:pr-6 rtl:before:-left-[15px] rtl:before:rotate-180">
                            Components
                        </button>
                    </li>
                    <li className="bg-[#ebedf2] dark:bg-[#1b2e4b]">
                        <button className="relative flex h-full items-center p-1.5  px-3 before:absolute before:inset-y-0 before:z-[1] before:m-auto before:h-0 before:w-0 before:border-[16px] before:border-l-[15px] before:border-r-0 before:border-b-transparent before:border-l-[#ebedf2] before:border-t-transparent hover:text-primary/70 ltr:pl-6 ltr:before:-right-[15px] rtl:pr-6 rtl:before:-left-[15px] rtl:before:rotate-180 dark:before:border-l-[#1b2e4b] dark:hover:text-white-dark/70">
                            UI Kit
                        </button>
                    </li>
                </ol>
            </div>
        </PanelCodeHighlight>
    );
};

export default ElementsBreadcrumbsArrowed;
