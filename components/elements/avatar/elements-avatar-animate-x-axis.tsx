import PanelCodeHighlight from '@/components/panel-code-highlight';
import React from 'react';

const ElementsAvatarAnimateXAxis = () => {
    return (
        <PanelCodeHighlight
            title="Animate X-axis"
            codeHighlight={`<div className="flex items-center justify-center -space-x-4 rtl:space-x-reverse text-white">
    <img
        className="w-12 h-12 rounded-full object-cover ring-2 ring-white dark:ring-white-dark relative transition-all duration-300 hover:translate-x-2"
        src="/assets/images/profile-12.jpeg"
        alt="img"
    />
    <img
        className="w-12 h-12 rounded-full object-cover ring-2 ring-white dark:ring-white-dark relative transition-all duration-300 hover:translate-x-2"
        src="/assets/images/profile-12.jpeg"
        alt="img"
    />
    <img
        className="w-12 h-12 rounded-full object-cover ring-2 ring-white dark:ring-white-dark relative transition-all duration-300 hover:translate-x-2"
        src="/assets/images/profile-12.jpeg"
        alt="img"
    />
    <span className="flex justify-center items-center w-12 h-12 text-center rounded-full object-cover bg-info text-base ring-2 ring-white dark:ring-white-dark relative transition-all duration-300 hover:translate-x-2">
        AG
    </span>
</div>`}
        >
            <div className="mb-5">
                <div className="flex items-center justify-center -space-x-4 text-white rtl:space-x-reverse">
                    <img
                        className="relative h-12 w-12 rounded-full object-cover ring-2 ring-white transition-all duration-300 hover:translate-x-2 dark:ring-white-dark"
                        src="/assets/images/profile-12.jpeg"
                        alt="img"
                    />
                    <img
                        className="relative h-12 w-12 rounded-full object-cover ring-2 ring-white transition-all duration-300 hover:translate-x-2 dark:ring-white-dark"
                        src="/assets/images/profile-12.jpeg"
                        alt="img"
                    />
                    <img
                        className="relative h-12 w-12 rounded-full object-cover ring-2 ring-white transition-all duration-300 hover:translate-x-2 dark:ring-white-dark"
                        src="/assets/images/profile-12.jpeg"
                        alt="img"
                    />
                    <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-info object-cover text-center text-base ring-2 ring-white transition-all duration-300 hover:translate-x-2 dark:ring-white-dark">
                        AG
                    </span>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ElementsAvatarAnimateXAxis;
