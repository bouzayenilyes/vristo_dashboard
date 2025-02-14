import PanelCodeHighlight from '@/components/panel-code-highlight';
import React from 'react';

const ComponentsFormsLayoutsActionsButtons = () => {
    return (
        <PanelCodeHighlight
            title="Actions Buttons"
            className="lg:col-start-2 lg:row-start-3"
            codeHighlight={`<form className="space-y-5">
    <div>
        <label htmlFor="actionName">Full Name:</label>
        <input id="actionName" type="text" placeholder="Enter Full Name" className="form-input" />
    </div>
    <div>
        <label htmlFor="actionEmail">Email:</label>
        <div className="flex flex-1">
            <div className="bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
                @
            </div>
            <input id="actionEmail" type="email" placeholder="" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
        </div>
    </div>
    <div>
        <label htmlFor="actionWeb">Website:</label>
        <input id="actionWeb" type="text" placeholder="https://" className="form-input" />
    </div>
    <div>
        <label htmlFor="actionPassword">Password:</label>
        <input id="actionPassword" type="password" placeholder="Enter Password" className="form-input" />
    </div>
    <div>
        <label htmlFor="actionCpass">Confirm Password:</label>
        <input id="actionCpass" type="password" placeholder="Enter Confirm Password" className="form-input" />
    </div>
    <button type="submit" className="btn btn-primary !mt-6">
        Submit
    </button>
</form>`}
        >
            <div className="mb-5">
                <form className="space-y-5">
                    <div>
                        <label htmlFor="actionName">Full Name:</label>
                        <input id="actionName" type="text" placeholder="Enter Full Name" className="form-input" />
                    </div>
                    <div>
                        <label htmlFor="actionEmail">Email:</label>
                        <div className="flex flex-1">
                            <div className="flex items-center justify-center border border-white-light bg-[#eee] px-3 font-semibold ltr:rounded-l-md ltr:border-r-0 rtl:rounded-r-md rtl:border-l-0 dark:border-[#17263c] dark:bg-[#1b2e4b]">
                                @
                            </div>
                            <input id="actionEmail" type="email" placeholder="" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="actionWeb">Website:</label>
                        <input id="actionWeb" type="text" placeholder="https://" className="form-input" />
                    </div>
                    <div>
                        <label htmlFor="actionPassword">Password:</label>
                        <input id="actionPassword" type="password" placeholder="Enter Password" className="form-input" />
                    </div>
                    <div>
                        <label htmlFor="actionCpass">Confirm Password:</label>
                        <input id="actionCpass" type="password" placeholder="Enter Confirm Password" className="form-input" />
                    </div>
                    <button type="submit" className="btn btn-primary !mt-6">
                        Submit
                    </button>
                </form>
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsFormsLayoutsActionsButtons;
