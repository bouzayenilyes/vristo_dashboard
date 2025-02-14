import PanelCodeHighlight from '@/components/panel-code-highlight';
import React from 'react';

const ElementsButtonsBlock = () => {
    return (
        <PanelCodeHighlight
            title="Block Buttons"
            codeHighlight={`{/*Block Buttons*/}

<button type="button" className="btn btn-primary w-full"> Button</button>

<button type="button" className="btn btn-info w-full">Button</button>

<button type="button" className="btn btn-success w-full">Button</button>`}
        >
            <div className="mb-5">
                <div className="flex flex-col gap-4">
                    <button type="button" className="btn btn-primary w-full">
                        Button
                    </button>
                    <button type="button" className="btn btn-info w-full">
                        Button
                    </button>
                    <button type="button" className="btn btn-success w-full">
                        Button
                    </button>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ElementsButtonsBlock;
