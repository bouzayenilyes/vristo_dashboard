'use client';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import React from 'react';

const ElementsPopoversPlacement = () => {
    return (
        <PanelCodeHighlight
            title="Placement"
            codeHighlight={`import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

<Tippy trigger="click" content="Popover on top" placement="top">
    <button type="button" className="btn btn-info">
        Popover on top
    </button>
</Tippy>

<Tippy trigger="click" content="Popover on left" placement="left">
    <button type="button" className="btn btn-secondary">
        Popover on left
    </button>
</Tippy>

<Tippy trigger="click" content="Popover on right" placement="right">
    <button type="button" className="btn btn-danger">
        Popover on right
    </button>
</Tippy>

<Tippy trigger="click" content="Popover on bottom" placement="bottom">
    <button type="button" className="btn btn-warning">
        Popover on bottom
    </button>
</Tippy>`}
        >
            <div className="mb-5">
                <div className="flex w-full flex-wrap justify-center gap-4">
                    <Tippy trigger="click" content="Popover on top" placement="top">
                        <button type="button" className="btn btn-info">
                            Popover on top
                        </button>
                    </Tippy>
                    <Tippy trigger="click" content="Popover on left" placement="left">
                        <button type="button" className="btn btn-secondary">
                            Popover on left
                        </button>
                    </Tippy>
                    <Tippy trigger="click" content="Popover on right" placement="right">
                        <button type="button" className="btn btn-danger">
                            Popover on right
                        </button>
                    </Tippy>
                    <Tippy trigger="click" content="Popover on bottom" placement="bottom">
                        <button type="button" className="btn btn-warning">
                            Popover on bottom
                        </button>
                    </Tippy>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ElementsPopoversPlacement;
