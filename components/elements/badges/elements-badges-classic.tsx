import PanelCodeHighlight from '@/components/panel-code-highlight';
import React from 'react';

const ElementsBadgesClassic = () => {
    return (
        <PanelCodeHighlight
            title="Classic"
            codeHighlight={`<div className="flex items-center justify-center w-1/2">
    <span className="badge bg-primary rounded-none">Primary</span>
</div>

<div className="flex items-center justify-center w-1/2">
    <span className="badge badge-outline-primary rounded-none">Primary</span>
</div>`}
        >
            <div className="mb-5">
                <div className="flex w-full">
                    <div className="flex w-1/2 items-center justify-center">
                        <span className="badge rounded-none bg-primary">Primary</span>
                    </div>
                    <div className="flex w-1/2 items-center justify-center">
                        <span className="badge badge-outline-primary rounded-none">Primary</span>
                    </div>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ElementsBadgesClassic;
