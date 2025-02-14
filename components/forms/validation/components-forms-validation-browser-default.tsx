'use client';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import React from 'react';
import Swal from 'sweetalert2';

const ComponentsFormsValidationBrowserDefault = () => {
    const submitForm = () => {
        const toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
        });
        toast.fire({
            icon: 'success',
            title: 'Form submitted successfully',
            padding: '10px 20px',
        });
    };

    return (
        <PanelCodeHighlight
            title="Browser Default"
            codeHighlight={`import Swal from 'sweetalert2';
const submitForm = () => {
    const toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
    });
    toast.fire({
        icon: 'success',
        title: 'Form submitted successfully',
        padding: '10px 20px',
    });
};

<form
    className="space-y-5"
    onSubmit={(e) => {
        e.preventDefault();
        submitForm();
    }}
>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div>
            <label htmlFor="browserFname">First Name</label>
            <input id="browserFname" type="text" placeholder="Enter First Name" className="form-input" required />
        </div>
        <div>
            <label htmlFor="browserLname">Last name</label>
            <input id="browserLname" type="text" placeholder="Enter Last name" className="form-input" required />
        </div>
        <div>
            <label htmlFor="browserEmail">Username</label>
            <div className="flex">
                <div className="bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
                    @
                </div>
                <input id="browserEmail" type="text" placeholder="Enter Username" className="form-input ltr:rounded-l-none rtl:rounded-r-none" required />
            </div>
        </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="md:col-span-2">
            <label htmlFor="browserCity">City</label>
            <input id="browserCity" type="text" placeholder="Enter City" className="form-input" required />
        </div>
        <div>
            <label htmlFor="browserState">State</label>
            <input id="browserState" type="text" placeholder="Enter State" className="form-input" required />
        </div>
        <div>
            <label htmlFor="browserZip">Zip</label>
            <input id="browserZip" type="text" placeholder="Enter Zip" className="form-input" required />
        </div>
    </div>
    <div className="flex items-center cursor-pointer mt-1">
        <input type="checkbox" id="agree1 className="form-checkbox" required />
        <label htmlFor="agree1" className="text-white-dark font-semibold mb-0">Agree to terms and conditions</label>
    </div>
    <button type="submit" className="btn btn-primary !mt-6">
        Submit Form
    </button>
</form>`}
        >
            <div className="mb-5">
                <form
                    className="space-y-5"
                    onSubmit={(e) => {
                        e.preventDefault();
                        submitForm();
                    }}
                >
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                        <div>
                            <label htmlFor="browserFname">First Name</label>
                            <input id="browserFname" type="text" placeholder="Enter First Name" className="form-input" required />
                        </div>
                        <div>
                            <label htmlFor="browserLname">Last name</label>
                            <input id="browserLname" type="text" placeholder="Enter Last name" className="form-input" required />
                        </div>
                        <div>
                            <label htmlFor="browserEmail">Username</label>
                            <div className="flex">
                                <div className="flex items-center justify-center border border-white-light bg-[#eee] px-3 font-semibold ltr:rounded-l-md ltr:border-r-0 rtl:rounded-r-md rtl:border-l-0 dark:border-[#17263c] dark:bg-[#1b2e4b]">
                                    @
                                </div>
                                <input id="browserEmail" type="text" placeholder="Enter Username" className="form-input ltr:rounded-l-none rtl:rounded-r-none" required />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
                        <div className="md:col-span-2">
                            <label htmlFor="browserCity">City</label>
                            <input id="browserCity" type="text" placeholder="Enter City" className="form-input" required />
                        </div>
                        <div>
                            <label htmlFor="browserState">State</label>
                            <input id="browserState" type="text" placeholder="Enter State" className="form-input" required />
                        </div>
                        <div>
                            <label htmlFor="browserZip">Zip</label>
                            <input id="browserZip" type="text" placeholder="Enter Zip" className="form-input" required />
                        </div>
                    </div>
                    <div className="mt-1 flex cursor-pointer items-center">
                        <input type="checkbox" id="agree1" className="form-checkbox" required />
                        <label htmlFor="agree1" className="mb-0 font-semibold text-white-dark">
                            Agree to terms and conditions
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary !mt-6">
                        Submit Form
                    </button>
                </form>
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsFormsValidationBrowserDefault;
