'use client';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import React from 'react';

const ElementsPopoversOptions = () => {
    return (
        <PanelCodeHighlight
            title="Options"
            codeHighlight={`import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

<Tippy trigger="mouseenter focus" content="On Hover">
    <button type="button" data-trigger="mouseenter" className="btn btn-primary">
        On Hover
    </button>
</Tippy>

<Tippy trigger="focusin" content="On Focus">
    <button type="button" data-trigger="focus" className="btn btn-secondary">
        On Focus
    </button>
</Tippy>

<Tippy trigger="click" content="Delay 1s" delay={1000}>
    <button type="button" data-delay="1000" className="btn btn-info">
        Delay
    </button>
</Tippy>

<Tippy trigger="click" content="Disabled Animation">
    <button type="button" data-animation="false" className="btn btn-dark">
        Disabled Animation
    </button>
</Tippy>`}
        >
            <div className="mb-5">
                <div className="flex w-full flex-wrap justify-center gap-4">
                    <Tippy trigger="mouseenter focus" content="On Hover">
                        <button type="button" data-trigger="mouseenter" className="btn btn-primary">
                            On Hover
                        </button>
                    </Tippy>
                    <Tippy trigger="focusin" content="On Focus">
                        <button type="button" data-trigger="focus" className="btn btn-secondary">
                            On Focus
                        </button>
                    </Tippy>
                    <Tippy trigger="click" content="Delay 1s" delay={1000}>
                        <button type="button" data-delay="1000" className="btn btn-info">
                            Delay
                        </button>
                    </Tippy>
                    <Tippy trigger="click" content="Disabled Animation">
                        <button type="button" data-animation="false" className="btn btn-dark">
                            Disabled Animation
                        </button>
                    </Tippy>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ElementsPopoversOptions;
