import IconHome from '@/components/icon/icon-home';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import React from 'react';

const ElementsBreadcrumbsDefault = () => {
    return (
        <PanelCodeHighlight
            title="Default"
            codeHighlight={`<ol className="flex text-gray-500 font-semibold dark:text-white-dark">
    <li>
        <button className="hover:text-gray-500/70 dark:hover:text-white-dark/70">
        <svg>...</svg>
        </button>
    </li>
    <li className="before:content-['/'] before:px-1.5">
        <button type="button">Components</button>
    </li>
    <li className="before:content-['/'] before:px-1.5">
        <button className="text-black dark:text-white-light hover:text-black/70 dark:hover:text-white-light/70">UI Kit</button>
    </li>
</ol>`}
        >
            <div className="mb-5">
                <ol className="flex font-semibold text-gray-500 dark:text-white-dark">
                    <li>
                        <button className="hover:text-gray-500/70 dark:hover:text-white-dark/70">
                            <IconHome className="h-4 w-4" />
                        </button>
                    </li>
                    <li className="before:px-1.5 before:content-['/']">
                        <button type="button">Components</button>
                    </li>
                    <li className="before:px-1.5 before:content-['/']">
                        <button className="text-black hover:text-black/70 dark:text-white-light dark:hover:text-white-light/70">UI Kit</button>
                    </li>
                </ol>
            </div>
        </PanelCodeHighlight>
    );
};

export default ElementsBreadcrumbsDefault;
