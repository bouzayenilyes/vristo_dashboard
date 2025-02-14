import PanelCodeHighlight from '@/components/panel-code-highlight';
import React from 'react';

const ElementsAvatarIndicators = () => {
    return (
        <PanelCodeHighlight
            title="Indicators"
            codeHighlight={`<span className="w-20 h-20 relative">
    <img className="w-20 h-20 rounded-full overflow-hidden object-cover" src="/assets/images/profile-12.jpeg" alt="img" />
    <span className="absolute ltr:right-0 rtl:left-0 bottom-0 w-7 h-7 rounded-full ring-2 ring-white dark:ring-white-dark bg-danger"></span>
</span>
<span className="w-16 h-16 relative">
    <img className="w-16 h-16 rounded-full overflow-hidden object-cover" src="/assets/images/profile-12.jpeg" alt="img" />
    <span className="absolute ltr:right-0 rtl:left-0 bottom-0 w-6 h-6 rounded-full ring-2 ring-white dark:ring-white-dark bg-success"></span>
</span>
<span className="w-14 h-14 relative">
    <img className="w-14 h-14 rounded-full overflow-hidden object-cover" src="/assets/images/profile-12.jpeg" alt="img" />
    <span className="absolute ltr:right-0 rtl:left-0 bottom-0 w-5 h-5 rounded-full ring-2 ring-white dark:ring-white-dark bg-secondary"></span>
</span>
<span className="w-12 h-12 relative">
    <img className="w-12 h-12 rounded-full overflow-hidden object-cover" src="/assets/images/profile-12.jpeg" alt="img" />
    <span className="absolute ltr:right-0 rtl:left-0 bottom-0 w-4 h-4 rounded-full ring-2 ring-white dark:ring-white-dark bg-info"></span>
</span>`}
        >
            <div className="mb-5">
                <div className="flex flex-wrap items-center justify-center gap-2">
                    <span className="relative h-20 w-20">
                        <img className="h-20 w-20 overflow-hidden rounded-full object-cover" src="/assets/images/profile-12.jpeg" alt="img" />
                        <span className="absolute bottom-0 h-7 w-7 rounded-full bg-danger ring-2 ring-white ltr:right-0 rtl:left-0 dark:ring-white-dark"></span>
                    </span>
                    <span className="relative h-16 w-16">
                        <img className="h-16 w-16 overflow-hidden rounded-full object-cover" src="/assets/images/profile-12.jpeg" alt="img" />
                        <span className="absolute bottom-0 h-6 w-6 rounded-full bg-success ring-2 ring-white ltr:right-0 rtl:left-0 dark:ring-white-dark"></span>
                    </span>
                    <span className="relative h-14 w-14">
                        <img className="h-14 w-14 overflow-hidden rounded-full object-cover" src="/assets/images/profile-12.jpeg" alt="img" />
                        <span className="absolute bottom-0 h-5 w-5 rounded-full bg-secondary ring-2 ring-white ltr:right-0 rtl:left-0 dark:ring-white-dark"></span>
                    </span>
                    <span className="relative h-12 w-12">
                        <img className="h-12 w-12 overflow-hidden rounded-full object-cover" src="/assets/images/profile-12.jpeg" alt="img" />
                        <span className="absolute bottom-0 h-4 w-4 rounded-full bg-info ring-2 ring-white ltr:right-0 rtl:left-0 dark:ring-white-dark"></span>
                    </span>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ElementsAvatarIndicators;
