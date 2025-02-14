'use client';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import React, { useState } from 'react';

const ComponentsFormsWizardsPillsText = () => {
    const [activeTab, setActiveTab] = useState<any>(1);
    return (
        <PanelCodeHighlight
            title="Text Only"
            codeHighlight={`import { useState } from 'react';

const [activeTab, setActiveTab] = useState<any>(1);

<div className="inline-block w-full">
    <ul className="mb-5 grid grid-cols-3 text-center">
        <li>
            <div
                className={\`\${activeTab === 1 ? '!bg-primary text-white' : ''}
                block rounded-full bg-[#f3f2ee] p-2.5 dark:bg-[#1b2e4b]\`}
                onClick={() => setActiveTab(1)}
            >
                1 Home
            </div>
        </li>

        <li>
            <div className={\`\${activeTab === 2 ? '!bg-primary text-white' : ''} block rounded-full bg-[#f3f2ee] p-2.5 dark:bg-[#1b2e4b]\`} onClick={() => setActiveTab(2)}>
                2 About
            </div>
        </li>

        <li>
            <div className={\`\${activeTab === 3 ? '!bg-primary text-white' : ''} block rounded-full bg-[#f3f2ee] p-2.5 dark:bg-[#1b2e4b]\`} onClick={() => setActiveTab(3)}>
                3 Success
            </div>
        </li>
    </ul>

    <div>
        <p className="mb-5">{activeTab === 1 && 'Try the keyboard navigation by clicking arrow left or right!'}</p>
        <p className="mb-5">{activeTab === 2 && 'The next and previous buttons help you to navigate through your content.'}</p>
        <p className="mb-5">{activeTab === 3 && 'Wonderful transition effects.'}</p>
    </div>
    <div className="flex justify-between">
        <button type="button" className={\`btn btn-primary \${activeTab === 1 ? 'hidden' : ''}\`} onClick={() => setActiveTab(activeTab === 3 ? 2 : 1)}>
            Back
        </button>
        <button type="button" className="btn btn-primary ltr:ml-auto rtl:mr-auto" onClick={() => setActiveTab(activeTab === 1 ? 2 : 3)}>
            {activeTab === 3 ? 'Finish' : 'Next'}
        </button>
    </div>
</div>`}
        >
            <div className="mb-5">
                <div className="inline-block w-full">
                    <ul className="mb-5 grid grid-cols-3 text-center">
                        <li>
                            <div
                                className={`${activeTab === 1 ? '!bg-primary text-white' : ''}
                                            block rounded-full bg-[#f3f2ee] p-2.5 dark:bg-[#1b2e4b]`}
                                onClick={() => setActiveTab(1)}
                            >
                                1 Home
                            </div>
                        </li>

                        <li>
                            <div className={`${activeTab === 2 ? '!bg-primary text-white' : ''} block rounded-full bg-[#f3f2ee] p-2.5 dark:bg-[#1b2e4b]`} onClick={() => setActiveTab(2)}>
                                2 About
                            </div>
                        </li>

                        <li>
                            <div className={`${activeTab === 3 ? '!bg-primary text-white' : ''} block rounded-full bg-[#f3f2ee] p-2.5 dark:bg-[#1b2e4b]`} onClick={() => setActiveTab(3)}>
                                3 Success
                            </div>
                        </li>
                    </ul>

                    <div>
                        <p className="mb-5">{activeTab === 1 && 'Try the keyboard navigation by clicking arrow left or right!'}</p>
                        <p className="mb-5">{activeTab === 2 && 'The next and previous buttons help you to navigate through your content.'}</p>
                        <p className="mb-5">{activeTab === 3 && 'Wonderful transition effects.'}</p>
                    </div>
                    <div className="flex justify-between">
                        <button type="button" className={`btn btn-primary ${activeTab === 1 ? 'hidden' : ''}`} onClick={() => setActiveTab(activeTab === 3 ? 2 : 1)}>
                            Back
                        </button>
                        <button type="button" className="btn btn-primary ltr:ml-auto rtl:mr-auto" onClick={() => setActiveTab(activeTab === 1 ? 2 : 3)}>
                            {activeTab === 3 ? 'Finish' : 'Next'}
                        </button>
                    </div>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsFormsWizardsPillsText;
