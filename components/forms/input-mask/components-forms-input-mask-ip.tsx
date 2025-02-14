'use client';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import React from 'react';
import MaskedInput from 'react-text-mask';

const ComponentsFormsInputMaskIp = () => {
    return (
        <PanelCodeHighlight
            title="IP"
            codeHighlight={`import MaskedInput from 'react-text-mask';

<form>
    <fieldset>
        <label htmlFor="ipMask" className="text-white-dark">
            mask="'###.###.###.###'" (192.198.1.1)
        </label>
        <MaskedInput
            id="ipMask"
            type="text"
            placeholder="___.___.___.___"
            className="form-input"
            mask={[/[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/]}
        />
    </fieldset>
</form>`}
        >
            <div className="mb-5">
                <form>
                    <fieldset>
                        <label htmlFor="ipMask" className="text-white-dark">
                            {`mask="'###.###.###.###'" (192.198.1.1)`}
                        </label>
                        <MaskedInput
                            id="ipMask"
                            type="text"
                            placeholder="___.___.___.___"
                            className="form-input"
                            mask={[/[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/]}
                        />
                    </fieldset>
                </form>
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsFormsInputMaskIp;
