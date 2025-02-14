import PanelCodeHighlight from '@/components/panel-code-highlight';
import React from 'react';

const ComponentsFormsLayoutsRegistration = () => {
    return (
        <PanelCodeHighlight
            title="Registration Forms"
            codeHighlight={`<form className="space-y-5">
    <div>
        <input type="email" placeholder="Enter Email Address *" className="form-input" />
    </div>
    <div>
        <input type="password" placeholder="Enter Password *" className="form-input" />
    </div>
    <div>
        <input type="password" placeholder="Enter Confirm Password *" className="form-input" />
    </div>
    <div className="!mt-2">
        <span className="text-white-dark text-[11px] inline-block">*Required Fields</span>
    </div>
    <div>
        <label className="inline-flex cursor-pointer">
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
                        <input type="email" placeholder="Enter Email Address *" className="form-input" />
                    </div>
                    <div>
                        <input type="password" placeholder="Enter Password *" className="form-input" />
                    </div>
                    <div>
                        <input type="password" placeholder="Enter Confirm Password *" className="form-input" />
                    </div>
                    <div className="!mt-2">
                        <span className="inline-block text-[11px] text-white-dark">*Required Fields</span>
                    </div>
                    <div>
                        <label className="inline-flex cursor-pointer">
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

export default ComponentsFormsLayoutsRegistration;
