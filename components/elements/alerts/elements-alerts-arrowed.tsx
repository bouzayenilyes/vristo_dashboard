import IconBellBing from '@/components/icon/icon-bell-bing';
import IconInfoCircle from '@/components/icon/icon-info-circle';
import IconX from '@/components/icon/icon-x';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import React from 'react';

const ElementsAlertsArrowed = () => {
    return (
        <PanelCodeHighlight
            title="Arrowed Alerts"
            codeHighlight={`<div className="relative flex items-center border p-3.5 rounded before:absolute before:top-1/2 ltr:before:left-0 rtl:before:right-0 rtl:before:rotate-180 before:-mt-2 before:border-l-8 before:border-t-8 before:border-b-8 before:border-t-transparent before:border-b-transparent before:border-l-inherit text-primary bg-primary-light !border-primary ltr:border-l-[64px] rtl:border-r-[64px] dark:bg-primary-dark-light">
    <span className="absolute ltr:-left-11 rtl:-right-11 inset-y-0 text-white w-6 h-6 m-auto">
        <svg>...</svg>
    </span>
    <span className="ltr:pr-2 rtl:pl-2">
        <strong className="ltr:mr-1 rtl:ml-1">Warning!</strong>Lorem Ipsum is simply dummy text of the printing.
    </span>
    <button type="button" className="ltr:ml-auto rtl:mr-auto hover:opacity-80">
        <svg>...</svg>
    </button>
</div>
<div className="relative flex items-center border p-3.5 rounded before:inline-block before:absolute before:top-1/2 ltr:before:right-0 rtl:before:left-0 rtl:before:rotate-180 before:-mt-2 before:border-r-8 before:border-t-8 before:border-b-8 before:border-t-transparent before:border-b-transparent before:border-r-inherit text-danger bg-danger-light border-danger ltr:border-r-[64px] rtl:border-l-[64px] dark:bg-danger-dark-light">
    <span className="absolute ltr:-right-11 rtl:-left-11 inset-y-0 text-white w-6 h-6 m-auto">
        <svg>...</svg>
    </span>
    <span className="ltr:pr-2 rtl:pl-2">
        <strong className="ltr:mr-1 rtl:ml-1">Warning!</strong>Lorem Ipsum is simply dummy text of the printing.
    </span>
    <button type="button" className="ltr:ml-auto rtl:mr-auto hover:opacity-80">
        <svg>...</svg>
    </button>
</div>`}
        >
            <div className="mb-5 grid gap-5 lg:grid-cols-2">
                <div className="relative flex items-center rounded border !border-primary bg-primary-light p-3.5 text-primary before:absolute before:top-1/2 before:-mt-2 before:border-b-8 before:border-l-8 before:border-t-8 before:border-b-transparent before:border-l-inherit before:border-t-transparent ltr:border-l-[64px] ltr:before:left-0 rtl:border-r-[64px] rtl:before:right-0 rtl:before:rotate-180 dark:bg-primary-dark-light">
                    <span className="absolute inset-y-0 m-auto h-6 w-6 text-white ltr:-left-11 rtl:-right-11">
                        <IconBellBing className="h-6 w-6" />
                    </span>
                    <span className="ltr:pr-2 rtl:pl-2">
                        <strong className="ltr:mr-1 rtl:ml-1">Warning!</strong>Lorem Ipsum is simply dummy text of the printing.
                    </span>
                    <button type="button" className="hover:opacity-80 ltr:ml-auto rtl:mr-auto">
                        <IconX className="h-5 w-5" />
                    </button>
                </div>
                <div className="relative flex items-center rounded border border-danger bg-danger-light p-3.5 text-danger before:absolute before:top-1/2 before:-mt-2 before:inline-block before:border-b-8 before:border-r-8 before:border-t-8 before:border-b-transparent before:border-r-inherit before:border-t-transparent ltr:border-r-[64px] ltr:before:right-0 rtl:border-l-[64px] rtl:before:left-0 rtl:before:rotate-180 dark:bg-danger-dark-light">
                    <span className="absolute inset-y-0 m-auto h-6 w-6 text-white ltr:-right-11 rtl:-left-11">
                        <IconInfoCircle />
                    </span>
                    <span className="ltr:pr-2 rtl:pl-2">
                        <strong className="ltr:mr-1 rtl:ml-1">Warning!</strong>Lorem Ipsum is simply dummy text of the printing.
                    </span>
                    <button type="button" className="hover:opacity-80 ltr:ml-auto rtl:mr-auto">
                        <IconX className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ElementsAlertsArrowed;
