import ComponentsFormsValidationBasic from '@/components/forms/validation/components-forms-validation-basic';
import ComponentsFormsValidationBrowserDefault from '@/components/forms/validation/components-forms-validation-browser-default';
import ComponentsFormsValidationCustomStyles from '@/components/forms/validation/components-forms-validation-custom-styles';
import ComponentsFormsValidationEmail from '@/components/forms/validation/components-forms-validation-email';
import ComponentsFormsValidationSelect from '@/components/forms/validation/components-forms-validation-select';
import ComponentsFormsValidationTooltips from '@/components/forms/validation/components-forms-validation-tooltips';
import IconBell from '@/components/icon/icon-bell';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
    title: 'Validation',
};

const Validation = () => {
    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link href="#" className="text-primary hover:underline">
                        Forms
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Validation</span>
                </li>
            </ul>

            <div className="space-y-8 pt-5">
                <div className="panel flex items-center overflow-x-auto whitespace-nowrap p-3 text-primary">
                    <div className="rounded-full bg-primary p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3">
                        <IconBell />
                    </div>
                    <span className="ltr:mr-3 rtl:ml-3">Documentation: </span>
                    <a href="https://www.npmjs.com/package/formik" target="_blank" className="block hover:underline" rel="noreferrer">
                        https://www.npmjs.com/package/formik
                    </a>
                </div>

                <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                    {/* Basic */}
                    <ComponentsFormsValidationBasic />

                    {/* Email */}
                    <ComponentsFormsValidationEmail />

                    {/* Select */}
                    <ComponentsFormsValidationSelect />

                    {/* Custom Styles */}
                    <ComponentsFormsValidationCustomStyles />

                    {/* Browser Default */}
                    <ComponentsFormsValidationBrowserDefault />

                    {/* Tooltips */}
                    <ComponentsFormsValidationTooltips />
                </div>
            </div>
        </div>
    );
};

export default Validation;
