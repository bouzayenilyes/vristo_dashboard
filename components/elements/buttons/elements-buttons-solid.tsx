import PanelCodeHighlight from '@/components/panel-code-highlight';
import React from 'react';

const ElementsButtonsSolid = () => {
    return (
        <PanelCodeHighlight
            title="Solid"
            codeHighlight={`{/*Solid*/}

<button type="button" className="btn btn-primary">Primary</button>

<button type="button" className="btn btn-info">Info</button>

<button type="button" className="btn btn-success">Success</button>

<button type="button" className="btn btn-warning">Warning</button>

<button type="button" className="btn btn-danger">Danger</button>

<button type="button" className="btn btn-secondary">Secondary</button>

<button type="button" className="btn btn-dark">Dark</button>`}
        >
            <div className="mb-5">
                <div className="flex flex-wrap items-center justify-center gap-2">
                    <button type="button" className="btn btn-primary">
                        Primary
                    </button>
                    <button type="button" className="btn btn-info">
                        Info
                    </button>
                    <button type="button" className="btn btn-success">
                        Success
                    </button>
                    <button type="button" className="btn btn-warning">
                        Warning
                    </button>
                    <button type="button" className="btn btn-danger">
                        Danger
                    </button>
                    <button type="button" className="btn btn-secondary">
                        Secondary
                    </button>
                    <button type="button" className="btn btn-dark">
                        Dark
                    </button>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ElementsButtonsSolid;
