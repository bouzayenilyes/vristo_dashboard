import PanelCodeHighlight from '@/components/panel-code-highlight';
import React from 'react';

const ElementsAvatarGroup = () => {
    return (
        <PanelCodeHighlight
            title="Group"
            codeHighlight={`<div className="flex items-center justify-center -space-x-4 rtl:space-x-reverse text-white">
    <img className="w-16 h-16 rounded-full overflow-hidden object-cover ring-2 ring-white dark:ring-white-dark" src="/assets/images/profile-12.jpeg" alt="img" />
    <img className="w-16 h-16 rounded-full overflow-hidden object-cover ring-2 ring-white dark:ring-white-dark" src="/assets/images/profile-12.jpeg" alt="img" />
    <img className="w-16 h-16 rounded-full overflow-hidden object-cover ring-2 ring-white dark:ring-white-dark" src="/assets/images/profile-12.jpeg" alt="img" />
    <span className="flex justify-center items-center w-16 h-16 text-center rounded-full object-cover bg-info text-xl ring-2 ring-white dark:ring-white-dark">AG</span>
</div>
<div className="flex items-center justify-center -space-x-4 rtl:space-x-reverse text-white">
    <img className="w-12 h-12 rounded-full overflow-hidden object-cover ring-2 ring-white dark:ring-white-dark" src="/assets/images/profile-12.jpeg" alt="img" />
    <img className="w-12 h-12 rounded-full overflow-hidden object-cover ring-2 ring-white dark:ring-white-dark" src="/assets/images/profile-12.jpeg" alt="img" />
    <img className="w-12 h-12 rounded-full overflow-hidden object-cover ring-2 ring-white dark:ring-white-dark" src="/assets/images/profile-12.jpeg" alt="img" />
    <span className="flex justify-center items-center w-12 h-12 text-center rounded-full object-cover bg-info text-base ring-2 ring-white dark:ring-white-dark">AG</span>
</div>`}
        >
            <div className="mb-5 flex flex-wrap items-center justify-around gap-10">
                <div className="flex items-center justify-center -space-x-4 text-white rtl:space-x-reverse">
                    <img className="h-16 w-16 overflow-hidden rounded-full object-cover ring-2 ring-white dark:ring-white-dark" src="/assets/images/profile-12.jpeg" alt="img" />
                    <img className="h-16 w-16 overflow-hidden rounded-full object-cover ring-2 ring-white dark:ring-white-dark" src="/assets/images/profile-12.jpeg" alt="img" />
                    <img className="h-16 w-16 overflow-hidden rounded-full object-cover ring-2 ring-white dark:ring-white-dark" src="/assets/images/profile-12.jpeg" alt="img" />
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-info object-cover text-center text-xl ring-2 ring-white dark:ring-white-dark">AG</span>
                </div>
                <div className="flex items-center justify-center -space-x-4 text-white rtl:space-x-reverse">
                    <img className="h-12 w-12 overflow-hidden rounded-full object-cover ring-2 ring-white dark:ring-white-dark" src="/assets/images/profile-12.jpeg" alt="img" />
                    <img className="h-12 w-12 overflow-hidden rounded-full object-cover ring-2 ring-white dark:ring-white-dark" src="/assets/images/profile-12.jpeg" alt="img" />
                    <img className="h-12 w-12 overflow-hidden rounded-full object-cover ring-2 ring-white dark:ring-white-dark" src="/assets/images/profile-12.jpeg" alt="img" />
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-info object-cover text-center text-base ring-2 ring-white dark:ring-white-dark">AG</span>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ElementsAvatarGroup;
