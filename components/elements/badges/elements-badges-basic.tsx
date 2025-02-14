import PanelCodeHighlight from '@/components/panel-code-highlight';
import React from 'react';

const ElementsBadgesBasic = () => {
    return (
        <PanelCodeHighlight
            title="Basic"
            codeHighlight={`<span className="badge bg-primary">Primary</span>

<span className="badge bg-secondary">Secondary</span>

<span className="badge bg-success">Success</span>

<span className="badge bg-danger">Danger</span>

<span className="badge bg-warning">Warning</span>

<span className="badge bg-info">Info</span>

<span className="badge bg-dark">Dark</span> `}
        >
            <div className="mb-5">
                <div className="flex flex-wrap items-center justify-center gap-3">
                    <span className="badge bg-primary">Primary</span>
                    <span className="badge bg-secondary">Secondary</span>
                    <span className="badge bg-success">Success</span>
                    <span className="badge bg-danger">Danger</span>
                    <span className="badge bg-warning">Warning</span>
                    <span className="badge bg-info">Info</span>
                    <span className="badge bg-dark">Dark</span>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ElementsBadgesBasic;
