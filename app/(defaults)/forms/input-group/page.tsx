import ComponentsFormsInputGroupButtonAddons from '@/components/forms/input-group/components-forms-input-group-button-addons';
import ComponentsFormsInputGroupButtonsWithDropdowns from '@/components/forms/input-group/components-forms-input-group-buttons-with-dropdowns';
import ComponentsFormsInputGroupCheckboxes from '@/components/forms/input-group/components-forms-input-group-checkboxes';
import ComponentsFormsInputGroupDefault from '@/components/forms/input-group/components-forms-input-group-default';
import ComponentsFormsInputGroupDropdownIcon from '@/components/forms/input-group/components-forms-input-group-dropdown-icon';
import ComponentsFormsInputGroupMultipleAddons from '@/components/forms/input-group/components-forms-input-group-multiple-addons';
import ComponentsFormsInputGroupMultipleInputs from '@/components/forms/input-group/components-forms-input-group-multiple-inputs';
import ComponentsFormsInputGroupRadio from '@/components/forms/input-group/components-forms-input-group-radio';
import ComponentsFormsInputGroupSegmentedButtons from '@/components/forms/input-group/components-forms-input-group-segmented-buttons';
import ComponentsFormsInputGroupSimpleIcon from '@/components/forms/input-group/components-forms-input-group-simple-icon';
import ComponentsFormsInputGroupSizes from '@/components/forms/input-group/components-forms-input-group-sizes';
import ComponentsFormsInputGroupSpinningIcon from '@/components/forms/input-group/components-forms-input-group-spinning-icon';
import ComponentsFormsInputGroupSwitch from '@/components/forms/input-group/components-forms-input-group-switch';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
    title: 'Input Group',
};

const InputGroup = () => {
    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link href="#" className="text-primary hover:underline">
                        Forms
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Input Group</span>
                </li>
            </ul>

            <div className="space-y-4 pt-5">
                {/*  Basic  */}
                <div className="grid grid-cols-1 gap-4 xl:grid-cols-2" id="basic">
                    {/* default */}
                    <ComponentsFormsInputGroupDefault />

                    {/* simple icon */}
                    <ComponentsFormsInputGroupSimpleIcon />

                    {/*  spinning Icon  */}
                    <ComponentsFormsInputGroupSpinningIcon />

                    {/*  dropdown icon */}
                    <ComponentsFormsInputGroupDropdownIcon />

                    {/* checkboxes */}
                    <ComponentsFormsInputGroupCheckboxes />

                    {/* Radio */}
                    <ComponentsFormsInputGroupRadio />

                    {/* switch */}
                    <ComponentsFormsInputGroupSwitch />
                </div>

                {/* Sizes */}
                <ComponentsFormsInputGroupSizes />

                {/* <!-- Multiple --> */}
                <div className="grid grid-cols-1 gap-4 xl:grid-cols-2" id="multiple">
                    {/* Multiple inputs */}
                    <ComponentsFormsInputGroupMultipleInputs />

                    {/* Multiple addons */}
                    <ComponentsFormsInputGroupMultipleAddons />
                </div>

                <div className="grid grid-cols-1 gap-4 xl:grid-cols-2" id="with_action">
                    {/* Buttons with dropdowns */}
                    <ComponentsFormsInputGroupButtonsWithDropdowns />

                    {/* Segmented buttons */}
                    <ComponentsFormsInputGroupSegmentedButtons />

                    {/* Button addons */}
                    <ComponentsFormsInputGroupButtonAddons />
                </div>
            </div>
        </div>
    );
};

export default InputGroup;
