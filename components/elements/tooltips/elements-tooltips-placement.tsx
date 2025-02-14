'use client';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import React from 'react';

const ElementsTooltipsPlacement = () => {
    return (
        <PanelCodeHighlight
            title="Placement"
            codeHighlight={`import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

<Tippy content="Popover on top" placement="top">
    <button type="button" className="btn btn-info">
        Tooltip on top
    </button>
</Tippy>

<Tippy content="Popover on left" placement="left">
    <button type="button" className="btn btn-secondary">
        Tooltip on left
    </button>
</Tippy>

<Tippy content="Popover on right" placement="right">
    <button type="button" className="btn btn-danger">
        Tooltip on right
    </button>
</Tippy>

<Tippy content="Popover on bottom" placement="bottom">
    <button type="button" className="btn btn-warning">
        Tooltip on bottom
    </button>
</Tippy>`}
        >
            <div className="mb-5">
                <div className="flex w-full flex-wrap justify-center gap-4">
                    <Tippy content="Popover on top" placement="top">
                        <button type="button" className="btn btn-info">
                            Tooltip on top
                        </button>
                    </Tippy>
                    <Tippy content="Popover on left" placement="left">
                        <button type="button" className="btn btn-secondary">
                            Tooltip on left
                        </button>
                    </Tippy>
                    <Tippy content="Popover on bottom" placement="bottom">
                        <button type="button" className="btn btn-warning">
                            Tooltip on bottom
                        </button>
                    </Tippy>
                    <Tippy content="Popover on right" placement="right">
                        <button type="button" className="btn btn-danger">
                            Tooltip on right
                        </button>
                    </Tippy>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ElementsTooltipsPlacement;
