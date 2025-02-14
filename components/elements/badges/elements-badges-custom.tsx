import IconFacebook from '@/components/icon/icon-facebook';
import IconSettings from '@/components/icon/icon-settings';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import React from 'react';

const ElementsBadgesCustom = () => {
    return (
        <PanelCodeHighlight
            title="Custom Badges"
            codeHighlight={`<button type="button" className="btn btn-primary my-4">
    <span className="flex items-center">
        <svg>...</svg>
        Facebook
    </span>
    <span className="badge absolute ltr:right-0 rtl:left-0 -top-3 bg-danger p-0.5 px-1.5 rounded-full">9</span>
</button>

<button type="button" className="btn btn-info my-4">
    <span>Twitter</span>
    <span className="badge absolute ltr:right-0 rtl:left-0 -top-3 bg-danger p-0.5 px-1.5 rounded-full">4</span>
</button>

<button type="button" className="btn btn-secondary px-5 my-4">
    <span>
        <svg>...</svg>
    </span>
    <span className="badge absolute ltr:right-0 rtl:left-0 -top-3 bg-danger p-0.5 px-1.5 rounded-full">8</span>
</button>

<button type="button" className="btn btn-dark my-4">
    Notifications
    <span className="badge my-0 bg-white-light text-black ltr:ml-4 rtl:mr-4">4</span>
</button>

<div className="flex flex-wrap items-center justify-center gap-3">
    <span className="badge bg-warning p-0 ltr:pr-4 rtl:pl-4 my-4 rounded-full flex items-center text-base">
        <img src="/assets/images/profile-34.jpeg" className="w-10 h-10 rounded-full object-cover" alt="img" />
        <span className="ltr:ml-2 rtl:mr-2">John Doe</span>
    </span>
    <span className="badge bg-danger p-0 ltr:pr-4 rtl:pl-4 my-4 rounded-full flex items-center text-base">
        <img src="/assets/images/profile-34.jpeg" className="w-10 h-10 rounded-full object-cover" alt="img" />
        <span className="ltr:ml-2 rtl:mr-2">John Doe</span>
        <span className="ltr:ml-4 rtl:mr-4 cursor-pointer hover:opacity-90">x</span>
    </span>
</div>`}
        >
            <div className="mb-5">
                <div className="flex flex-wrap items-center justify-center gap-3">
                    <button type="button" className="btn btn-primary my-4">
                        <span className="flex items-center">
                            <IconFacebook className="h-4.5 w-4.5 shrink-0 ltr:mr-1 rtl:ml-1" />
                            Facebook
                        </span>
                        <span className="badge absolute -top-3 rounded-full bg-danger p-0.5 px-1.5 ltr:right-0 rtl:left-0">9</span>
                    </button>
                    <button type="button" className="btn btn-info my-4">
                        <span>Twitter</span>
                        <span className="badge absolute -top-3 rounded-full bg-danger p-0.5 px-1.5 ltr:right-0 rtl:left-0">4</span>
                    </button>
                    <button type="button" className="btn btn-secondary my-4 px-5">
                        <span>
                            <IconSettings className="h-5 w-5" />
                        </span>
                        <span className="badge absolute -top-3 rounded-full bg-danger p-0.5 px-1.5 ltr:right-0 rtl:left-0">8</span>
                    </button>
                    <button type="button" className="btn btn-dark my-4">
                        Notifications
                        <span className="badge my-0 bg-white-light text-black ltr:ml-4 rtl:mr-4">4</span>
                    </button>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <span className="badge my-4 flex items-center rounded-full bg-warning p-0 text-base ltr:pr-4 rtl:pl-4">
                            <img src="/assets/images/profile-34.jpeg" className="h-10 w-10 rounded-full object-cover" alt="img" />
                            <span className="ltr:ml-2 rtl:mr-2">John Doe</span>
                        </span>
                        <span className="badge my-4 flex items-center rounded-full bg-danger p-0 text-base ltr:pr-4 rtl:pl-4">
                            <img src="/assets/images/profile-34.jpeg" className="h-10 w-10 rounded-full object-cover" alt="img" />
                            <span className="ltr:ml-2 rtl:mr-2">John Doe</span>
                            <span className="cursor-pointer hover:opacity-90 ltr:ml-4 rtl:mr-4">x</span>
                        </span>
                    </div>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ElementsBadgesCustom;
