'use client';
import IconHome from '@/components/icon/icon-home';
import IconThumbUp from '@/components/icon/icon-thumb-up';
import IconUser from '@/components/icon/icon-user';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import React, { useState } from 'react';

const ComponentsFormsWizardsPillsIcon = () => {
    const [activeTab1, setActiveTab1] = useState<any>(1);
    return (
        <PanelCodeHighlight
            title="Icon Only"
            codeHighlight={`import { useState } from 'react';

const [activeTab1, setActiveTab1] = useState<any>(1);

<div className="inline-block w-full">
    <ul className="mb-5 grid grid-cols-3">
        <li>
            <div
                className={\`\${activeTab1 === 1 ? '!bg-primary text-white' : ''}
                flex items-center justify-center rounded-full bg-[#f3f2ee] p-2.5 dark:bg-[#1b2e4b]\`}
                onClick={() => setActiveTab1(1)}
            >
                <svg>...</svg>
            </div>
        </li>
        <li>
            <div
                className={\`\${activeTab1 === 2 ? '!bg-primary text-white' : ''}
                flex items-center justify-center rounded-full bg-[#f3f2ee] p-2.5 dark:bg-[#1b2e4b]\`}
                onClick={() => setActiveTab1(2)}
            >
                <svg>...</svg>
            </div>
        </li>
        <li>
            <div
                className={\`\${activeTab1 === 3 ? '!bg-primary text-white' : ''}
                flex items-center justify-center rounded-full bg-[#f3f2ee] p-2.5 dark:bg-[#1b2e4b]\`}
                onClick={() => setActiveTab1(3)}
            >
                <svg>...</svg>
            </div>
        </li>
    </ul>
    <div>
        <p className="mb-5">{activeTab1 === 1 && 'Try the keyboard navigation by clicking arrow left or right!'}</p>

        <p className="mb-5">{activeTab1 === 2 && 'The next and previous buttons help you to navigate through your content.'}</p>

        <p className="mb-5">{activeTab1 === 3 && 'Wonderful transition effects.'}</p>
    </div>
    <div className="flex justify-between">
        <button type="button" className={\`btn btn-primary \${activeTab1 === 1 ? 'hidden' : ''}\`} onClick={() => setActiveTab1(activeTab1 === 3 ? 2 : 1)}>
            Back
        </button>
        <button type="button" className="btn btn-primary ltr:ml-auto rtl:mr-auto" onClick={() => setActiveTab1(activeTab1 === 1 ? 2 : 3)}>
            {activeTab1 === 3 ? 'Finish' : 'Next'}
        </button>
    </div>
</div>`}
        >
            <div className="mb-5">
                <div className="inline-block w-full">
                    <ul className="mb-5 grid grid-cols-3">
                        <li>
                            <div
                                className={`${activeTab1 === 1 ? '!bg-primary text-white' : ''}
                                            flex items-center justify-center rounded-full bg-[#f3f2ee] p-2.5 dark:bg-[#1b2e4b]`}
                                onClick={() => setActiveTab1(1)}
                            >
                                <IconHome />
                            </div>
                        </li>
                        <li>
                            <div
                                className={`${activeTab1 === 2 ? '!bg-primary text-white' : ''}
                                            flex items-center justify-center rounded-full bg-[#f3f2ee] p-2.5 dark:bg-[#1b2e4b]`}
                                onClick={() => setActiveTab1(2)}
                            >
                                <IconUser className="h-5 w-5" />
                            </div>
                        </li>
                        <li>
                            <div
                                className={`${activeTab1 === 3 ? '!bg-primary text-white' : ''}
                                            flex items-center justify-center rounded-full bg-[#f3f2ee] p-2.5 dark:bg-[#1b2e4b]`}
                                onClick={() => setActiveTab1(3)}
                            >
                                <IconThumbUp className="h-5 w-5" />
                            </div>
                        </li>
                    </ul>
                    <div>
                        <p className="mb-5">{activeTab1 === 1 && 'Try the keyboard navigation by clicking arrow left or right!'}</p>

                        <p className="mb-5">{activeTab1 === 2 && 'The next and previous buttons help you to navigate through your content.'}</p>

                        <p className="mb-5">{activeTab1 === 3 && 'Wonderful transition effects.'}</p>
                    </div>
                    <div className="flex justify-between">
                        <button type="button" className={`btn btn-primary ${activeTab1 === 1 ? 'hidden' : ''}`} onClick={() => setActiveTab1(activeTab1 === 3 ? 2 : 1)}>
                            Back
                        </button>
                        <button type="button" className="btn btn-primary ltr:ml-auto rtl:mr-auto" onClick={() => setActiveTab1(activeTab1 === 1 ? 2 : 3)}>
                            {activeTab1 === 3 ? 'Finish' : 'Next'}
                        </button>
                    </div>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsFormsWizardsPillsIcon;
