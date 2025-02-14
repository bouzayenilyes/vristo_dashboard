'use client';
import IconHome from '@/components/icon/icon-home';
import IconThumbUp from '@/components/icon/icon-thumb-up';
import IconUser from '@/components/icon/icon-user';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import React, { useState } from 'react';

const ComponentsFormsWizardsPillsTextAndIcon = () => {
    const [activeTab2, setActiveTab2] = useState<any>(1);
    return (
        <PanelCodeHighlight
            title="Text & Icon"
            className="lg:col-span-2"
            codeHighlight={`import { useState } from 'react';

const [activeTab2, setActiveTab2] = useState<any>(1);

<div className="inline-block w-full">
    <ul className="mb-5 grid grid-cols-3">
        <li>
            <div
                className={\`\${activeTab2 === 1 ? '!bg-primary text-white' : ''}
                flex items-center justify-center rounded-full bg-[#f3f2ee] p-2.5 dark:bg-[#1b2e4b]\`}
                onClick={() => setActiveTab2(1)}
            >
            >...</svg>
            </div>
            <span className="text-center block mt-2">Home</span>
        </li>
        <li>
            <div
                className={\`\${activeTab2 === 2 ? '!bg-primary text-white' : ''}
                flex items-center justify-center rounded-full bg-[#f3f2ee] p-2.5 dark:bg-[#1b2e4b]\`}
                onClick={() => setActiveTab2(2)}
            >
                <svg>...</svg>
            </div>
            <span className="text-center block mt-2">About</span>
        </li>
        <li>
            <div
                className={\`\${activeTab2 === 3 ? '!bg-primary text-white' : ''}
                flex items-center justify-center rounded-full bg-[#f3f2ee] p-2.5 dark:bg-[#1b2e4b]\`}
                onClick={() => setActiveTab2(3)}
            >
                <svg>...</svg>
            </div>
            <span className={\`text-center block mt-2 \${activeTab2 === 3 ? 'text-primary ' : ''}\`}>Success</span>
        </li>
    </ul>
    <div>
        <p className="mb-5">{activeTab2 === 1 && ' Try the keyboard navigation by clicking arrow left or right!'}</p>

        <p className="mb-5">{activeTab2 === 2 && 'The next and previous buttons help you to navigate through your content.'}</p>

        <p className="mb-5">{activeTab2 === 3 && 'Wonderful transition effects.'}</p>
    </div>
    <div className="flex justify-between">
        <button type="button" className={\`btn btn-primary \${activeTab2 === 1 ? 'hidden' : ''}\`} onClick={() => setActiveTab2(activeTab2 === 3 ? 2 : 1)}>
            Back
        </button>
        <button type="button" className="btn btn-primary ltr:ml-auto rtl:mr-auto" onClick={() => setActiveTab2(activeTab2 === 1 ? 2 : 3)}>
            {activeTab2 === 3 ? 'Finish' : 'Next'}
        </button>
    </div>
</div>`}
        >
            <div className="mb-5">
                <div className="inline-block w-full">
                    <ul className="mb-5 grid grid-cols-3">
                        <li>
                            <div
                                className={`${activeTab2 === 1 ? '!bg-primary text-white ' : ''}flex items-center justify-center rounded-full bg-[#f3f2ee] p-2.5 dark:bg-[#1b2e4b] `}
                                onClick={() => setActiveTab2(1)}
                            >
                                <IconHome />
                            </div>
                            <span className="mt-2 block text-center">Home</span>
                        </li>
                        <li>
                            <div
                                className={`${activeTab2 === 2 ? '!bg-primary text-white ' : ''}flex items-center justify-center rounded-full bg-[#f3f2ee] p-2.5 dark:bg-[#1b2e4b] `}
                                onClick={() => setActiveTab2(2)}
                            >
                                <IconUser className="h-5 w-5" />
                            </div>
                            <span className="mt-2 block text-center">About</span>
                        </li>
                        <li>
                            <div
                                className={`${activeTab2 === 3 ? '!bg-primary text-white ' : ''} flex items-center justify-center rounded-full bg-[#f3f2ee] p-2.5 dark:bg-[#1b2e4b] `}
                                onClick={() => setActiveTab2(3)}
                            >
                                <IconThumbUp className="h-5 w-5" />
                            </div>
                            <span className={`mt-2 block text-center ${activeTab2 === 3 ? 'text-primary ' : ''}`}>Success</span>
                        </li>
                    </ul>
                    <div>
                        <p className="mb-5">{activeTab2 === 1 && ' Try the keyboard navigation by clicking arrow left or right!'}</p>

                        <p className="mb-5">{activeTab2 === 2 && 'The next and previous buttons help you to navigate through your content.'}</p>

                        <p className="mb-5">{activeTab2 === 3 && 'Wonderful transition effects.'}</p>
                    </div>
                    <div className="flex justify-between">
                        <button type="button" className={`btn btn-primary ${activeTab2 === 1 ? 'hidden' : ''}`} onClick={() => setActiveTab2(activeTab2 === 3 ? 2 : 1)}>
                            Back
                        </button>
                        <button type="button" className="btn btn-primary ltr:ml-auto rtl:mr-auto" onClick={() => setActiveTab2(activeTab2 === 1 ? 2 : 3)}>
                            {activeTab2 === 3 ? 'Finish' : 'Next'}
                        </button>
                    </div>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsFormsWizardsPillsTextAndIcon;
