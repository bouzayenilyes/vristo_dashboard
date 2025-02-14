import IconBellBing from '@/components/icon/icon-bell-bing';
import IconX from '@/components/icon/icon-x';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import React from 'react';

const ElementsAlertsCustom = () => {
    return (
        <PanelCodeHighlight
            title="Custom Alerts"
            codeHighlight={`<div className="flex items-center p-3.5 rounded text-white bg-info">
    <span className="text-white w-6 h-6 ltr:mr-4 rtl:ml-4">
        <svg>...</svg>
    </span>
    <span>
        <strong className="ltr:mr-1 rtl:ml-1">Warning!</strong>Lorem Ipsum is simply dummy text of the printing.
    </span>
    <button type="button" className="btn btn-sm bg-white text-black ltr:ml-auto rtl:mr-auto">
        Accept
    </button>
    <button type="button" className="ltr:ml-4 rtl:mr-4">
        <svg>...</svg>
    </button>
</div>

<div className="flex items-center p-3.5 rounded text-white bg-gradient-to-r from-[#BD194D] to-[#004fe6]">
    <span className="ltr:pr-2 rtl:pl-2">
        <strong className="ltr:mr-1 rtl:ml-1">Warning!</strong>Lorem Ipsum is simply dummy text of the printing.
    </span>
    <button type="button" className="ltr:ml-auto rtl:mr-auto hover:opacity-80">
        <svg>...</svg>
    </button>
</div>

<div className="flex items-center p-3.5 rounded text-white bg-no-repeat bg-center bg-cover" style={{ backgroundImage: \`url("/assets/images/menu-heade.jpg")\`}}>
    <span className="ltr:pr-2 rtl:pl-2">
        <strong className="ltr:mr-1 rtl:ml-1">Warning!</strong>Lorem Ipsum is simply dummy text of the printing.
    </span>
    <button type="button" className="ltr:ml-auto rtl:mr-auto hover:opacity-80">
        <svg>...</svg>
    </button>
</div>`}
        >
            <div className="mb-5 grid gap-5 lg:grid-cols-2">
                <div className="flex items-center rounded bg-info p-3.5 text-white">
                    <span className="h-6 w-6 text-white ltr:mr-4 rtl:ml-4">
                        <IconBellBing className="h-6 w-6" />
                    </span>
                    <span>
                        <strong className="ltr:mr-1 rtl:ml-1">Warning!</strong>Lorem Ipsum is simply dummy text of the printing.
                    </span>
                    <button type="button" className="btn btn-sm bg-white text-black ltr:ml-auto rtl:mr-auto">
                        Accept
                    </button>
                    <button type="button" className="ltr:ml-4 rtl:mr-4">
                        <IconX className="h-5 w-5" />
                    </button>
                </div>

                <div className="flex items-center rounded bg-gradient-to-r from-[#BD194D] to-[#004fe6] p-3.5 text-white">
                    <span className="ltr:pr-2 rtl:pl-2">
                        <strong className="ltr:mr-1 rtl:ml-1">Warning!</strong>Lorem Ipsum is simply dummy text of the printing.
                    </span>
                    <button type="button" className="hover:opacity-80 ltr:ml-auto rtl:mr-auto">
                        <IconX className="h-5 w-5" />
                    </button>
                </div>

                <div
                    className="flex items-center rounded bg-cover bg-center bg-no-repeat p-3.5 text-white"
                    style={{
                        backgroundImage: `url("/assets/images/menu-heade.jpg")`,
                    }}
                >
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

export default ElementsAlertsCustom;
