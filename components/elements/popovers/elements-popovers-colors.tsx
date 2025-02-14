'use client';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import React from 'react';

const ElementsPopoversColors = () => {
    return (
        <PanelCodeHighlight
            title="Colors"
            codeHighlight={`import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

<Tippy trigger="click" content="Primary" theme="primary">
    <button type="button" className="btn btn-primary">
        Primary
    </button>
</Tippy>

<Tippy trigger="click" content="Success" theme="success">
    <button type="button" className="btn btn-success">
        Success
    </button>
</Tippy>

<Tippy trigger="click" content="info" theme="info">
    <button type="button" className="btn btn-info">
        Info
    </button>
</Tippy>

<Tippy trigger="click" content="danger" theme="danger">
    <button type="button" className="btn btn-danger">
        Danger
    </button>
</Tippy>

<Tippy trigger="click" content="warning" theme="warning">
    <button type="button" className="btn btn-warning">
        Warning
    </button>
</Tippy>

<Tippy trigger="click" content="secondary" theme="secondary">
    <button type="button" className="btn btn-secondary">
        Secondary
    </button>
</Tippy>

<Tippy trigger="click" content="dark" theme="dark">
    <button type="button" className="btn btn-dark">
        Dark
    </button>
</Tippy>`}
        >
            <div className="mb-5">
                <div className="flex w-full flex-wrap justify-center gap-4">
                    <Tippy trigger="click" content="Primary" theme="primary">
                        <button type="button" className="btn btn-primary">
                            Primary
                        </button>
                    </Tippy>
                    <Tippy trigger="click" content="Success" theme="success">
                        <button type="button" className="btn btn-success">
                            Success
                        </button>
                    </Tippy>
                    <Tippy trigger="click" content="info" theme="info">
                        <button type="button" className="btn btn-info">
                            Info
                        </button>
                    </Tippy>
                    <Tippy trigger="click" content="danger" theme="danger">
                        <button type="button" className="btn btn-danger">
                            Danger
                        </button>
                    </Tippy>
                    <Tippy trigger="click" content="warning" theme="warning">
                        <button type="button" className="btn btn-warning">
                            Warning
                        </button>
                    </Tippy>
                    <Tippy trigger="click" content="secondary" theme="secondary">
                        <button type="button" className="btn btn-secondary">
                            Secondary
                        </button>
                    </Tippy>
                    <Tippy trigger="click" content="dark" theme="dark">
                        <button type="button" className="btn btn-dark">
                            Dark
                        </button>
                    </Tippy>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ElementsPopoversColors;
