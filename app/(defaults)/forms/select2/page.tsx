import ComponentsFormsSelectBasic from '@/components/forms/select2/components-forms-select-basic';
import ComponentsFormsSelectDisablingOptions from '@/components/forms/select2/components-forms-select-disabling-options';
import ComponentsFormsSelectMultiselect from '@/components/forms/select2/components-forms-select-multiselect';
import ComponentsFormsSelectNested from '@/components/forms/select2/components-forms-select-nested';
import ComponentsFormsSelectPlaceholder from '@/components/forms/select2/components-forms-select-placeholder';
import ComponentsFormsSelectSearchable from '@/components/forms/select2/components-forms-select-searchable';
import IconBell from '@/components/icon/icon-bell';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
    title: 'Select2',
};

const Select2 = () => {
    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link href="#" className="text-primary hover:underline">
                        Forms
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Select2</span>
                </li>
            </ul>
            <div className="space-y-8 pt-5">
                <div className="panel flex items-center overflow-x-auto whitespace-nowrap p-3 text-primary">
                    <div className="rounded-full bg-primary p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3">
                        <IconBell />
                    </div>
                    <span className="ltr:mr-3 rtl:ml-3">Documentation: </span>
                    <a href="https://www.npmjs.com/package/react-select" target="_blank" className="block hover:underline" rel="noreferrer">
                        https://www.npmjs.com/package/react-select
                    </a>
                </div>
                <div className="custom-select grid grid-cols-1 gap-6 lg:grid-cols-2">
                    {/* Basic */}
                    <ComponentsFormsSelectBasic />
                    {/*  Nested */}
                    <ComponentsFormsSelectNested />
                    {/* Disabling options */}
                    <ComponentsFormsSelectDisablingOptions />
                    {/* Searchable */}
                    <ComponentsFormsSelectSearchable />
                    {/*  Placeholder */}
                    <ComponentsFormsSelectPlaceholder />
                    {/* Multiple */}
                    <ComponentsFormsSelectMultiselect />
                </div>
            </div>
        </div>
    );
};

export default Select2;
