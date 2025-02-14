'use client';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import React from 'react';

const ElementsAvatarTooltip = () => {
    return (
        <PanelCodeHighlight
            title="Tooltip"
            codeHighlight={`import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

<div className="flex items-center justify-center -space-x-4 rtl:space-x-reverse text-white">
    <Tippy content="Judy Holmes">
        <img className="w-12 h-12 rounded-full object-cover ring-2 ring-white dark:ring-white-dark" src="/assets/images/profile-12.jpeg" alt="img" />
    </Tippy>
    <Tippy content="Judy Holmes">
        <img className="w-12 h-12 rounded-full object-cover ring-2 ring-white dark:ring-white-dark" src="/assets/images/profile-12.jpeg" alt="img" />
    </Tippy>
    <Tippy content="Judy Holmes">
        <img className="w-12 h-12 rounded-full object-cover ring-2 ring-white dark:ring-white-dark" src="/assets/images/profile-12.jpeg" alt="img" />
    </Tippy>
    <Tippy content="Alan Green">
        <span className="flex justify-center items-center w-12 h-12 text-center rounded-full object-cover bg-info text-base ring-2 ring-white dark:ring-white-dark">AG</span>
    </Tippy>
</div>`}
        >
            <div className="mb-5">
                <div className="flex items-center justify-center -space-x-4 text-white rtl:space-x-reverse">
                    <Tippy content="Judy Holmes">
                        <img className="h-12 w-12 rounded-full object-cover ring-2 ring-white dark:ring-white-dark" src="/assets/images/profile-12.jpeg" alt="img" />
                    </Tippy>
                    <Tippy content="Judy Holmes">
                        <img className="h-12 w-12 rounded-full object-cover ring-2 ring-white dark:ring-white-dark" src="/assets/images/profile-12.jpeg" alt="img" />
                    </Tippy>
                    <Tippy content="Judy Holmes">
                        <img className="h-12 w-12 rounded-full object-cover ring-2 ring-white dark:ring-white-dark" src="/assets/images/profile-12.jpeg" alt="img" />
                    </Tippy>
                    <Tippy content="Alan Green">
                        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-info object-cover text-center text-base ring-2 ring-white dark:ring-white-dark">AG</span>
                    </Tippy>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ElementsAvatarTooltip;
