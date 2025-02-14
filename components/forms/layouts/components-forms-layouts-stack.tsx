import PanelCodeHighlight from '@/components/panel-code-highlight';
import React from 'react';

const ComponentsFormsLayoutsStack = () => {
    return (
        <PanelCodeHighlight
            title="Stack Forms"
            codeHighlight={`<form className="space-y-5">
    <div>
        <input type="email" placeholder="Enter Email" className="form-input" />
        <span className="text-white-dark text-[11px] inline-block mt-1">We'll never share your email with anyone else.</span>
    </div>
    <div>
        <input type="password" placeholder="Enter Password" className="form-input" />
    </div>
    <div>
        <label className="inline-flex items-center mt-1 cursor-pointer">
            <input type="checkbox" className="form-checkbox" />
            <span className="text-white-dark">Subscribe to weekly newsletter</span>
        </label>
    </div>
    <button type="submit" className="btn btn-primary !mt-6">
        Submit
    </button>
</form>`}
        >
            <div className="mb-5">
                <form className="space-y-5">
                    <div>
                        <input type="email" placeholder="Enter Email" className="form-input" />
                        <span className="mt-1 inline-block text-[11px] text-white-dark">{`We'll never share your email with anyone else.`}</span>
                    </div>
                    <div>
                        <input type="password" placeholder="Enter Password" className="form-input" />
                    </div>
                    <div>
                        <label className="mt-1 inline-flex cursor-pointer items-center">
                            <input type="checkbox" className="form-checkbox" />
                            <span className="text-white-dark">Subscribe to weekly newsletter</span>
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary !mt-6">
                        Submit
                    </button>
                </form>
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsFormsLayoutsStack;
