'use client';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import React from 'react';

const ElementsTooltipsOptions = () => {
    return (
        <PanelCodeHighlight
            title="Options"
            codeHighlight={`import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

<Tippy trigger="click" content="On Click">
    <button type="button" data-trigger="mouseenter" className="btn btn-primary">
        On Click
    </button>
</Tippy>

<Tippy trigger="focusin" content="On Focus">
    <button type="button" data-trigger="focus" className="btn btn-secondary">
        On Focus
    </button>
</Tippy>

<Tippy content="Delay 1s" delay={1000}>
    <button type="button" data-delay="1000" className="btn btn-info">
        Delay
    </button>
</Tippy>

<Tippy content="Disabled Animation">
    <button type="button" data-animation="false" className="btn btn-dark">
        Disabled Animation
    </button>
</Tippy>`}
        >
            <div className="mb-5">
                <div className="flex w-full flex-wrap justify-center gap-4">
                    <Tippy trigger="click" content="On Click">
                        <button type="button" data-trigger="mouseenter" className="btn btn-primary">
                            On Click
                        </button>
                    </Tippy>
                    <Tippy trigger="focusin" content="On Focus">
                        <button type="button" data-trigger="focus" className="btn btn-secondary">
                            On Focus
                        </button>
                    </Tippy>
                    <Tippy content="Delay 1s" delay={1000}>
                        <button type="button" data-delay="1000" className="btn btn-info">
                            Delay
                        </button>
                    </Tippy>
                    <Tippy content="Disabled Animation">
                        <button type="button" data-animation="false" className="btn btn-dark">
                            Disabled Animation
                        </button>
                    </Tippy>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ElementsTooltipsOptions;
