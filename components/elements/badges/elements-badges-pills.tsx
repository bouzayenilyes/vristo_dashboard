import PanelCodeHighlight from '@/components/panel-code-highlight';
import React from 'react';

const ElementsBadgesPills = () => {
    return (
        <PanelCodeHighlight
            title="Pills"
            codeHighlight={`<div className="flex items-center justify-center w-1/2">
    <span className="badge bg-primary rounded-full">Primary</span>
</div>

<div className="flex items-center justify-center w-1/2">
    <span className="badge badge-outline-primary rounded-full">Primary</span>
</div>`}
        >
            <div className="mb-5">
                <div className="flex w-full">
                    <div className="flex w-1/2 items-center justify-center">
                        <span className="badge rounded-full bg-primary">Primary</span>
                    </div>
                    <div className="flex w-1/2 items-center justify-center">
                        <span className="badge badge-outline-primary rounded-full">Primary</span>
                    </div>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ElementsBadgesPills;
