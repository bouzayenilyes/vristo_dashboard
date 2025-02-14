'use client';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import React from 'react';
import MaskedInput from 'react-text-mask';

const ComponentsFormsInputMaskPhone = () => {
    return (
        <PanelCodeHighlight
            title="Phone"
            codeHighlight={`import MaskedInput from 'react-text-mask';

<form>
    <fieldset>
        <label htmlFor="phoneMask" className="text-white-dark">
            mask="'(###) ###-####'" ((999) 999-9999)
        </label>
        <MaskedInput
            id="phoneMask"
            type="text"
            placeholder="(___) ___-____"
            className="form-input"
            mask={['(', /[0-9]/, /[0-9]/, /[0-9]/, ')', ' ', /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
        />
    </fieldset>
</form>`}
        >
            <div className="mb-5">
                <form>
                    <fieldset>
                        <label htmlFor="phoneMask" className="text-white-dark">
                            {`mask="'(###) ###-####'" ((999) 999-9999)`}
                        </label>
                        <MaskedInput
                            id="phoneMask"
                            type="text"
                            placeholder="(___) ___-____"
                            className="form-input"
                            mask={['(', /[0-9]/, /[0-9]/, /[0-9]/, ')', ' ', /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
                        />
                    </fieldset>
                </form>
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsFormsInputMaskPhone;
