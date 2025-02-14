import PanelCodeHighlight from '@/components/panel-code-highlight';
import React from 'react';

const ComponentsFormsLayoutsHorizontal = () => {
    return (
        <PanelCodeHighlight
            title="Horizontal form"
            codeHighlight={`<form className="space-y-5">
    <div className="flex sm:flex-row flex-col">
        <label htmlFor="horizontalEmail" className="mb-0 sm:w-1/4 sm:ltr:mr-2 rtl:ml-2">
            Email
        </label>
        <input id="horizontalEmail" type="email" placeholder="Enter Email" className="form-input flex-1" />
    </div>
    <div className="flex sm:flex-row flex-col">
        <label htmlFor="horizontalPassword" className="mb-0 sm:w-1/4 sm:ltr:mr-2 rtl:ml-2">
            Password
        </label>
        <input id="horizontalPassword" type="password" placeholder="Enter Password" className="form-input flex-1" />
    </div>
    <div className="flex sm:flex-row flex-col">
        <label className="sm:w-1/4 sm:ltr:mr-2 rtl:ml-2">Choose Segements</label>
        <div className="flex-1">
            <div className="mb-2">
                <label className="inline-flex mt-1 cursor-pointer">
                    <input type="radio" name="segements" className="form-radio" />
                    <span className="text-white-dark">Segements 1</span>
                </label>
            </div>
            <div className="mb-2">
                <label className="inline-flex mt-1 cursor-pointer">
                    <input type="radio" name="segements" className="form-radio" />
                    <span className="text-white-dark">Segements 2</span>
                </label>
            </div>
            <div>
                <label className="inline-flex mt-1">
                    <input type="radio" name="segements" className="form-radio" disabled />
                    <span className="text-white-dark">Segements 3 ( disabled )</span>
                </label>
            </div>
        </div>
    </div>
    <div className="flex sm:flex-row flex-col">
        <label className="font-semibold sm:w-1/4 sm:ltr:mr-2 rtl:ml-2">Apply</label>
        <label className="inline-flex mb-0 cursor-pointer">
            <input type="checkbox" className="form-checkbox" />
            <span className="text-white-dark">Terms Conditions</span>
        </label>
    </div>
    <button type="submit" className="btn btn-primary !mt-6">
        Submit
    </button>
</form>`}
        >
            <div className="mb-5">
                <form className="space-y-5">
                    <div className="flex flex-col sm:flex-row">
                        <label htmlFor="horizontalEmail" className="mb-0 rtl:ml-2 sm:w-1/4 sm:ltr:mr-2">
                            Email
                        </label>
                        <input id="horizontalEmail" type="email" placeholder="Enter Email" className="form-input flex-1" />
                    </div>
                    <div className="flex flex-col sm:flex-row">
                        <label htmlFor="horizontalPassword" className="mb-0 rtl:ml-2 sm:w-1/4 sm:ltr:mr-2">
                            Password
                        </label>
                        <input id="horizontalPassword" type="password" placeholder="Enter Password" className="form-input flex-1" />
                    </div>
                    <div className="flex flex-col sm:flex-row">
                        <label className="rtl:ml-2 sm:w-1/4 sm:ltr:mr-2">Choose Segements</label>
                        <div className="flex-1">
                            <div className="mb-2">
                                <label className="mt-1 inline-flex cursor-pointer">
                                    <input type="radio" name="segements" className="form-radio" />
                                    <span className="text-white-dark">Segements 1</span>
                                </label>
                            </div>
                            <div className="mb-2">
                                <label className="mt-1 inline-flex cursor-pointer">
                                    <input type="radio" name="segements" className="form-radio" />
                                    <span className="text-white-dark">Segements 2</span>
                                </label>
                            </div>
                            <div>
                                <label className="mt-1 inline-flex">
                                    <input type="radio" name="segements" className="form-radio" disabled />
                                    <span className="text-white-dark">Segements 3 ( disabled )</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row">
                        <label className="font-semibold rtl:ml-2 sm:w-1/4 sm:ltr:mr-2">Apply</label>
                        <label className="mb-0 inline-flex cursor-pointer">
                            <input type="checkbox" className="form-checkbox" />
                            <span className="text-white-dark">Terms Conditions</span>
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

export default ComponentsFormsLayoutsHorizontal;
