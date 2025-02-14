import IconInfoTriangle from '@/components/icon/icon-info-triangle';
import IconSettings from '@/components/icon/icon-settings';
import IconX from '@/components/icon/icon-x';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import React from 'react';

const ElementsAlertsWithIcon = () => {
    return (
        <PanelCodeHighlight
            title="Alerts with icon"
            codeHighlight={`<div className="relative flex items-center border p-3.5 rounded text-success bg-success-light border-success ltr:border-l-[64px] rtl:border-r-[64px] dark:bg-success-dark-light">
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
<div className="relative flex items-center border p-3.5 rounded text-dark bg-dark-light border-dark ltr:border-r-[64px] rtl:border-l-[64px] dark:bg-dark-dark-light dark:text-white-light dark:border-white-light/20">
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
                <div className="relative flex items-center rounded border border-success bg-success-light p-3.5 text-success ltr:border-l-[64px] rtl:border-r-[64px] dark:bg-success-dark-light">
                    <span className="absolute inset-y-0 m-auto h-6 w-6 text-white ltr:-left-11 rtl:-right-11">
                        <IconInfoTriangle />
                    </span>
                    <span className="ltr:pr-2 rtl:pl-2">
                        <strong className="ltr:mr-1 rtl:ml-1">Warning!</strong>Lorem Ipsum is simply dummy text of the printing.
                    </span>
                    <button type="button" className="hover:opacity-80 ltr:ml-auto rtl:mr-auto">
                        <IconX className="h-5 w-5" />
                    </button>
                </div>
                <div className="relative flex items-center rounded border border-dark bg-dark-light p-3.5 text-dark ltr:border-r-[64px] rtl:border-l-[64px] dark:border-white-light/20 dark:bg-dark-dark-light dark:text-white-light">
                    <span className="absolute inset-y-0 m-auto h-6 w-6 text-white ltr:-right-11 rtl:-left-11">
                        <IconSettings />
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

export default ElementsAlertsWithIcon;
