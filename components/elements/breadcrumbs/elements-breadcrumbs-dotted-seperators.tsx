import PanelCodeHighlight from '@/components/panel-code-highlight';
import React from 'react';

const ElementsBreadcrumbsDottedSeperators = () => {
    return (
        <PanelCodeHighlight
            title="Dotted Seperators"
            codeHighlight={`<ol className="flex text-gray-500 font-semibold dark:text-white-dark">
    <li>
        <button className="hover:text-gray-500/70 dark:hover:text-white-dark/70">Home</button>
    </li>
    <li className="before:w-1 before:h-1 before:rounded-full before:bg-primary before:inline-block before:relative before:-top-0.5 before:mx-4">
        <button className="text-primary">Components</button>
    </li>
    <li className="before:w-1 before:h-1 before:rounded-full before:bg-primary before:inline-block before:relative before:-top-0.5 before:mx-4">
        <button className="hover:text-gray-500/70 dark:hover:text-white-dark/70">UI Kit</button>
    </li>
</ol>`}
        >
            <div className="mb-5">
                <ol className="flex font-semibold text-gray-500 dark:text-white-dark">
                    <li>
                        <button className="hover:text-gray-500/70 dark:hover:text-white-dark/70">Home</button>
                    </li>
                    <li className="before:relative before:-top-0.5 before:mx-4 before:inline-block before:h-1 before:w-1 before:rounded-full before:bg-primary">
                        <button className="text-primary">Components</button>
                    </li>
                    <li className="before:relative before:-top-0.5 before:mx-4 before:inline-block before:h-1 before:w-1 before:rounded-full before:bg-primary">
                        <button className="hover:text-gray-500/70 dark:hover:text-white-dark/70">UI Kit</button>
                    </li>
                </ol>
            </div>
        </PanelCodeHighlight>
    );
};

export default ElementsBreadcrumbsDottedSeperators;
