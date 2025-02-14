import IconBox from '@/components/icon/icon-box';
import IconCpuBolt from '@/components/icon/icon-cpu-bolt';
import IconHome from '@/components/icon/icon-home';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import React from 'react';

const ElementsBreadcrumbsWithIcon = () => {
    return (
        <PanelCodeHighlight
            title="With Icons"
            codeHighlight={`<ol className="flex items-center flex-wrap text-gray-500 font-semibold dark:text-white-dark gap-y-4">
    <li>
        <button className="p-2.5 border border-gray-500/20 rounded-md shadow flex items-center justify-center dark:border-0 dark:bg-[#191e3a] hover:text-gray-500/70 dark:hover:text-white-dark/70">
        <svg>...</svg>
        </button>
    </li>
    <li className="flex items-center before:w-1 before:h-1 before:rounded-full before:bg-primary before:inline-block before:relative before:-top-0.5 before:mx-4">
        <button className="p-2.5 border border-gray-500/20 rounded-md shadow flex items-center justify-center text-primary dark:border-0 dark:bg-[#191e3a]">
        <svg>...</svg>
            Components
        </button>
    </li>
    <li className="flex items-center before:w-1 before:h-1 before:rounded-full before:bg-primary before:inline-block before:relative before:-top-0.5 before:mx-4">
        <button className="p-2.5 border border-gray-500/20 rounded-md shadow flex items-center justify-center dark:border-0 dark:bg-[#191e3a] hover:text-gray-500/70 dark:hover:text-white-dark/70">
            <svg>...</svg>
            UI Kit
        </button>
    </li>
</ol>`}
        >
            <div className="mb-5">
                <ol className="flex flex-wrap items-center gap-y-4 font-semibold text-gray-500 dark:text-white-dark">
                    <li>
                        <button className="flex items-center justify-center rounded-md border border-gray-500/20 p-2.5 shadow hover:text-gray-500/70 dark:border-0 dark:bg-[#191e3a] dark:hover:text-white-dark/70">
                            <IconHome />
                        </button>
                    </li>
                    <li className="flex items-center before:relative before:-top-0.5 before:mx-4 before:inline-block before:h-1 before:w-1 before:rounded-full before:bg-primary">
                        <button className="flex items-center justify-center rounded-md border border-gray-500/20 p-2.5 text-primary shadow dark:border-0 dark:bg-[#191e3a]">
                            <IconBox className="shrink-0 ltr:mr-2 rtl:ml-2" />
                            Components
                        </button>
                    </li>
                    <li className="flex items-center before:relative before:-top-0.5 before:mx-4 before:inline-block before:h-1 before:w-1 before:rounded-full before:bg-primary">
                        <button className="flex items-center justify-center rounded-md border border-gray-500/20 p-2.5 shadow hover:text-gray-500/70 dark:border-0 dark:bg-[#191e3a] dark:hover:text-white-dark/70">
                            <IconCpuBolt className="ltr:mr-2 rtl:ml-2" />
                            UI Kit
                        </button>
                    </li>
                </ol>
            </div>
        </PanelCodeHighlight>
    );
};

export default ElementsBreadcrumbsWithIcon;
