'use client';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import React from 'react';
import MaskedInput from 'react-text-mask';

const ComponentsFormsInputMaskBasic = () => {
    return (
        <PanelCodeHighlight
            title="Static Mask Basic"
            codeHighlight={`import MaskedInput from 'react-text-mask';

<form>
    <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
            <label htmlFor="staticMask1" className="text-white-dark">
                mask="'##-#######'" (99-9999999)
            </label>
            <MaskedInput
                id="staticMask1"
                type="text"
                placeholder="__-_______"
                className="form-input"
                mask={[/[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
            />
        </div>
        <div>
            <label htmlFor="staticMask2" className="text-white-dark">
                mask="'AA-####'" (aa-9999)
            </label>
            <MaskedInput id="staticMask2" type="text" placeholder="__-____" className="form-input" mask={[/[a-z]/, /[a-z]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]} />
        </div>
    </fieldset>
</form>`}
        >
            <div className="mb-5">
                <p className="mb-5 text-white-dark">
                    Input mask are use with <span className="text-danger">input</span> tags.
                </p>
                <form>
                    <fieldset className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div>
                            <label htmlFor="staticMask1" className="text-white-dark">
                                {`mask="'##-#######'" (99-9999999)`}
                            </label>
                            <MaskedInput
                                id="staticMask1"
                                type="text"
                                placeholder="__-_______"
                                className="form-input"
                                mask={[/[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
                            />
                        </div>
                        <div>
                            <label htmlFor="staticMask2" className="text-white-dark">
                                {`mask="'AA-####'" (aa-9999)`}
                            </label>
                            <MaskedInput id="staticMask2" type="text" placeholder="__-____" className="form-input" mask={[/[a-z]/, /[a-z]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]} />
                        </div>
                    </fieldset>
                </form>
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsFormsInputMaskBasic;
