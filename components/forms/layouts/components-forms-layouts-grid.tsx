import PanelCodeHighlight from '@/components/panel-code-highlight';
import React from 'react';

const ComponentsFormsLayoutsGrid = () => {
    return (
        <PanelCodeHighlight
            title="Forms Grid"
            codeHighlight={`<form className="space-y-5">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
            <label htmlFor="gridEmail">Email</label>
            <input id="gridEmail" type="email" placeholder="Enter Email" className="form-input" />
        </div>
        <div>
            <label htmlFor="gridPassword">Password</label>
            <input id="gridPassword" type="Password" placeholder="Enter Password" className="form-input" />
        </div>
    </div>
    <div>
        <label htmlFor="gridAddress1">Address</label>
        <input id="gridAddress1" type="text" placeholder="Enter Address" defaultValue="1234 Main St" className="form-input" />
    </div>
    <div>
        <label htmlFor="gridAddress2">Address2</label>
        <input id="gridAddress2" type="text" placeholder="Enter Address2" defaultValue="Apartment, studio, or floor" className="form-input" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="md:col-span-2">
            <label htmlFor="gridCity">City</label>
            <input id="gridCity" type="text" placeholder="Enter City" className="form-input" />
        </div>
        <div>
            <label htmlFor="gridState">State</label>
            <select id="gridState" className="form-select text-white-dark">
                <option>Choose...</option>
                <option>...</option>
            </select>
        </div>
        <div>
            <label htmlFor="gridZip">Zip</label>
            <input id="gridZip" type="text" placeholder="Enter Zip" className="form-input" />
        </div>
    </div>
    <div>
        <label className="flex items-center mt-1 cursor-pointer">
            <input type="checkbox" className="form-checkbox" />
            <span className="text-white-dark">Check me out</span>
        </label>
    </div>
    <button type="submit" className="btn btn-primary !mt-6">
        Submit
    </button>
</form>`}
        >
            <div className="mb-5">
                <form className="space-y-5">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                            <label htmlFor="gridEmail">Email</label>
                            <input id="gridEmail" type="email" placeholder="Enter Email" className="form-input" />
                        </div>
                        <div>
                            <label htmlFor="gridPassword">Password</label>
                            <input id="gridPassword" type="Password" placeholder="Enter Password" className="form-input" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="gridAddress1">Address</label>
                        <input id="gridAddress1" type="text" placeholder="Enter Address" defaultValue="1234 Main St" className="form-input" />
                    </div>
                    <div>
                        <label htmlFor="gridAddress2">Address2</label>
                        <input id="gridAddress2" type="text" placeholder="Enter Address2" defaultValue="Apartment, studio, or floor" className="form-input" />
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
                        <div className="md:col-span-2">
                            <label htmlFor="gridCity">City</label>
                            <input id="gridCity" type="text" placeholder="Enter City" className="form-input" />
                        </div>
                        <div>
                            <label htmlFor="gridState">State</label>
                            <select id="gridState" className="form-select text-white-dark">
                                <option>Choose...</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="gridZip">Zip</label>
                            <input id="gridZip" type="text" placeholder="Enter Zip" className="form-input" />
                        </div>
                    </div>
                    <div>
                        <label className="mt-1 flex cursor-pointer items-center">
                            <input type="checkbox" className="form-checkbox" />
                            <span className="text-white-dark">Check me out</span>
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

export default ComponentsFormsLayoutsGrid;
