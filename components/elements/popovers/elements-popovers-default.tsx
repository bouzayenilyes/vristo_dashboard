'use client';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import React from 'react';

const ElementsPopoversDefault = () => {
    return (
        <PanelCodeHighlight
            title="Default"
            codeHighlight={`import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

<Tippy trigger="click" content="Popover using ANCHOR tag">
    <button type="button" className="btn bg-primary btn-primary">
        Link
    </button>
</Tippy>

<Tippy trigger="click" content="Popover using BUTTON tag">
    <button type="button" className="btn btn-success">
        Button
    </button>
</Tippy>`}
        >
            <div className="mb-5">
                <div className="flex w-full justify-center gap-4">
                    <Tippy trigger="click" content="Popover using ANCHOR tag">
                        <button type="button" className="btn btn-primary bg-primary">
                            Link
                        </button>
                    </Tippy>
                    <Tippy trigger="click" content="Popover using BUTTON tag">
                        <button type="button" className="btn btn-success">
                            Button
                        </button>
                    </Tippy>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ElementsPopoversDefault;
