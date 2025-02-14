import PanelCodeHighlight from '@/components/panel-code-highlight';
import React from 'react';

const ElementsBadgesOutline = () => {
    return (
        <PanelCodeHighlight
            title="Outline"
            codeHighlight={`<span className="badge badge-outline-primary">Primary</span>

<span className="badge badge-outline-secondary">Secondary</span>

<span className="badge badge-outline-success">Success</span>

<span className="badge badge-outline-danger">Danger</span>

<span className="badge badge-outline-warning">Warning</span>

<span className="badge badge-outline-info">Info</span>

<span className="badge badge-outline-dark">Dark</span>`}
        >
            <div className="mb-5">
                <div className="flex flex-wrap items-center justify-center gap-3">
                    <span className="badge badge-outline-primary">Primary</span>
                    <span className="badge badge-outline-secondary">Secondary</span>
                    <span className="badge badge-outline-success">Success</span>
                    <span className="badge badge-outline-danger">Danger</span>
                    <span className="badge badge-outline-warning">Warning</span>
                    <span className="badge badge-outline-info">Info</span>
                    <span className="badge badge-outline-dark">Dark</span>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ElementsBadgesOutline;
