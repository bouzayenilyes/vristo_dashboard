import IconX from '@/components/icon/icon-x';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import React from 'react';

const ElementsAlertsSolid = () => {
    return (
        <PanelCodeHighlight
            title="Solid Alerts"
            codeHighlight={`<div className="flex items-center p-3.5 rounded text-white bg-primary">
    <span className="ltr:pr-2 rtl:pl-2">
        <strong className="ltr:mr-1 rtl:ml-1">Warning!</strong>Lorem Ipsum is simply dummy text of the printing.
    </span>
    <button type="button" className="ltr:ml-auto rtl:mr-auto hover:opacity-80">
        <svg>...</svg>
    </button>
</div>
<div className="flex items-center p-3.5 rounded text-white bg-warning">
    <span className="ltr:pr-2 rtl:pl-2">
        <strong className="ltr:mr-1 rtl:ml-1">Info!</strong>Lorem Ipsum is simply dummy text of the printing.
    </span>
    <button type="button" className="ltr:ml-auto rtl:mr-auto hover:opacity-80">
        <svg>...</svg>
    </button>
</div>`}
        >
            <div className="mb-5 grid gap-5 lg:grid-cols-2">
                <div className="flex items-center rounded bg-primary p-3.5 text-white">
                    <span className="ltr:pr-2 rtl:pl-2">
                        <strong className="ltr:mr-1 rtl:ml-1">Warning!</strong>Lorem Ipsum is simply dummy text of the printing.
                    </span>
                    <button type="button" className="hover:opacity-80 ltr:ml-auto rtl:mr-auto">
                        <IconX className="h-5 w-5" />
                    </button>
                </div>
                <div className="flex items-center rounded bg-warning p-3.5 text-white">
                    <span className="ltr:pr-2 rtl:pl-2">
                        <strong className="ltr:mr-1 rtl:ml-1">Info!</strong>Lorem Ipsum is simply dummy text of the printing.
                    </span>
                    <button type="button" className="hover:opacity-80 ltr:ml-auto rtl:mr-auto">
                        <IconX className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ElementsAlertsSolid;
