'use client';
import IconHome from '@/components/icon/icon-home';
import IconThumbUp from '@/components/icon/icon-thumb-up';
import IconUser from '@/components/icon/icon-user';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import React, { useState } from 'react';

const ComponentsFormsWizardsSquareIcon = () => {
    const [activeTab5, setActiveTab5] = useState<any>(1);
    return (
        <PanelCodeHighlight
            title="Icon Only"
            codeHighlight={`import { useState } from 'react';

const [activeTab5, setActiveTab5] = useState<any>(1);

<div className="inline-block w-full">
    <div className="relative z-[1]">
        <div
            className={\`\${activeTab5 === 1 ? 'w-[15%]' : activeTab5 === 2 ? 'w-[48%]' : activeTab5 === 3 ? 'w-[81%]' : ''}
            bg-primary w-[15%] h-1 absolute ltr:left-0 rtl:right-0 top-[30px] m-auto -z-[1] transition-[width]\`}
        ></div>
        <ul className="mb-5 grid grid-cols-3">
            <li className="mx-auto">
                <button type="button"
                    className={\`\${activeTab5 === 1 ? '!border-primary !bg-primary text-white' : ''}
                    bg-white dark:bg-[#253b5c] border-[3px] border-[#f3f2ee] dark:border-[#1b2e4b] flex justify-center items-center w-16 h-16\`}
                    onClick={() => setActiveTab5(1)}
                >
                    <svg>...</svg>
                </button>
            </li>
            <li className="mx-auto">
                <button type="button"
                    className={\`\${activeTab5 === 2 ? '!border-primary !bg-primary text-white' : ''}
                    bg-white dark:bg-[#253b5c] border-[3px] border-[#f3f2ee] dark:border-[#1b2e4b] flex justify-center items-center w-16 h-16\`}
                    onClick={() => setActiveTab5(2)}
                >
                    <svg>...</svg>
                </button>
            </li>
            <li className="mx-auto">
                <button type="button"
                    className={\`\${activeTab5 === 3 ? '!border-primary !bg-primary text-white' : ''}
                    bg-white dark:bg-[#253b5c] border-[3px] border-[#f3f2ee] dark:border-[#1b2e4b] flex justify-center items-center w-16 h-16\`}
                    onClick={() => setActiveTab5(3)}
                >
                    <svg>...</svg>
                </button>
            </li>
        </ul>
    </div>
    <div>
        <p className="mb-5">{activeTab5 === 1 && ' Try the keyboard navigation by clicking arrow left or right!'}</p>

        <p className="mb-5">{activeTab5 === 2 && 'The next and previous buttons help you to navigate through your content.'}</p>

        <p className="mb-5">{activeTab5 === 3 && 'Wonderful transition effects.'}</p>
    </div>
    <div className="flex justify-between">
        <button type="button" className={\`btn btn-primary \${activeTab5 === 1 ? 'hidden' : ''}\`} onClick={() => setActiveTab5(activeTab5 === 3 ? 2 : 1)}>
            Back
        </button>
        <button type="button" className="btn btn-primary ltr:ml-auto rtl:mr-auto" onClick={() => setActiveTab5(activeTab5 === 1 ? 2 : 3)}>
            {activeTab5 === 3 ? 'Finish' : 'Next'}
        </button>
    </div>
</div>`}
        >
            <div className="mb-5">
                <div className="inline-block w-full">
                    <div className="relative z-[1]">
                        <div
                            className={`${activeTab5 === 1 ? 'w-[15%]' : activeTab5 === 2 ? 'w-[48%]' : activeTab5 === 3 ? 'w-[81%]' : ''}
                                        absolute top-[30px] -z-[1] m-auto h-1 w-[15%] bg-primary transition-[width] ltr:left-0 rtl:right-0`}
                        ></div>
                        <ul className="mb-5 grid grid-cols-3">
                            <li className="mx-auto">
                                <button
                                    type="button"
                                    className={`${activeTab5 === 1 ? '!border-primary !bg-primary text-white' : ''}
                                                flex h-16 w-16 items-center justify-center border-[3px] border-[#f3f2ee] bg-white dark:border-[#1b2e4b] dark:bg-[#253b5c]`}
                                    onClick={() => setActiveTab5(1)}
                                >
                                    <IconHome />
                                </button>
                            </li>
                            <li className="mx-auto">
                                <button
                                    type="button"
                                    className={`${activeTab5 === 2 ? '!border-primary !bg-primary text-white' : ''}
                                                flex h-16 w-16 items-center justify-center border-[3px] border-[#f3f2ee] bg-white dark:border-[#1b2e4b] dark:bg-[#253b5c]`}
                                    onClick={() => setActiveTab5(2)}
                                >
                                    <IconUser className="h-5 w-5" />
                                </button>
                            </li>
                            <li className="mx-auto">
                                <button
                                    type="button"
                                    className={`${activeTab5 === 3 ? '!border-primary !bg-primary text-white' : ''}
                                                flex h-16 w-16 items-center justify-center border-[3px] border-[#f3f2ee] bg-white dark:border-[#1b2e4b] dark:bg-[#253b5c]`}
                                    onClick={() => setActiveTab5(3)}
                                >
                                    <IconThumbUp className="h-5 w-5" />
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="mb-5">{activeTab5 === 1 && ' Try the keyboard navigation by clicking arrow left or right!'}</p>

                        <p className="mb-5">{activeTab5 === 2 && 'The next and previous buttons help you to navigate through your content.'}</p>

                        <p className="mb-5">{activeTab5 === 3 && 'Wonderful transition effects.'}</p>
                    </div>
                    <div className="flex justify-between">
                        <button type="button" className={`btn btn-primary ${activeTab5 === 1 ? 'hidden' : ''}`} onClick={() => setActiveTab5(activeTab5 === 3 ? 2 : 1)}>
                            Back
                        </button>
                        <button type="button" className="btn btn-primary ltr:ml-auto rtl:mr-auto" onClick={() => setActiveTab5(activeTab5 === 1 ? 2 : 3)}>
                            {activeTab5 === 3 ? 'Finish' : 'Next'}
                        </button>
                    </div>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsFormsWizardsSquareIcon;
