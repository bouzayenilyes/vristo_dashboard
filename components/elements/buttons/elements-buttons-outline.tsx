import PanelCodeHighlight from '@/components/panel-code-highlight';
import React from 'react';

const ElementsButtonsOutline = () => {
    return (
        <PanelCodeHighlight
            title="Outline"
            codeHighlight={`{/*Outline*/}

<button type="button" className="btn btn-outline-primary">Primary</button>

<button type="button" className="btn btn-outline-info">Info</button>

<button type="button" className="btn btn-outline-success">Success</button>

<button type="button" className="btn btn-outline-warning">Warning</button>

<button type="button" className="btn btn-outline-danger">Danger</button>

<button type="button" className="btn btn-outline-secondary">Secondary</button>

<button type="button" className="btn btn-outline-dark">Dark</button>`}
        >
            <div className="mb-5">
                <div className="flex flex-wrap items-center justify-center gap-2">
                    <button type="button" className="btn btn-outline-primary">
                        Primary
                    </button>
                    <button type="button" className="btn btn-outline-info">
                        Info
                    </button>
                    <button type="button" className="btn btn-outline-success">
                        Success
                    </button>
                    <button type="button" className="btn btn-outline-warning">
                        Warning
                    </button>
                    <button type="button" className="btn btn-outline-danger">
                        Danger
                    </button>
                    <button type="button" className="btn btn-outline-secondary">
                        Secondary
                    </button>
                    <button type="button" className="btn btn-outline-dark">
                        Dark
                    </button>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ElementsButtonsOutline;
