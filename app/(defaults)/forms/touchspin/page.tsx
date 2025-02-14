import ComponentsFormsTouchspinButtonSpin from '@/components/forms/touchspin/components-forms-touchspin-button-spin';
import ComponentsFormsTouchspinChangeButtonClass from '@/components/forms/touchspin/components-forms-touchspin-change-button-class';
import ComponentsFormsTouchspinInlineSpinButton from '@/components/forms/touchspin/components-forms-touchspin-inline-spin-button';
import ComponentsFormsTouchspinSize from '@/components/forms/touchspin/components-forms-touchspin-size';
import ComponentsFormsTouchspinSpinWithStep5 from '@/components/forms/touchspin/components-forms-touchspin-spin-with-step5';
import ComponentsFormsTouchspinTextWithSpinButton from '@/components/forms/touchspin/components-forms-touchspin-text-with-spin-button';
import ComponentsFormsTouchspinVerticalSpinButton from '@/components/forms/touchspin/components-forms-touchspin-vertical-spin-button';
import ComponentsFormsTouchspinWrappingValueSpin from '@/components/forms/touchspin/components-forms-touchspin-wrapping-value-spin';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
    title: 'TouchSpin',
};

const TouchSpin = () => {
    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link href="#" className="text-primary hover:underline">
                        Forms
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>TouchSpin</span>
                </li>
            </ul>
            <div className="grid grid-cols-1 gap-6 pt-5 lg:grid-cols-2">
                {/* Basic */}
                <ComponentsFormsTouchspinButtonSpin />
                {/* step of 5 */}
                <ComponentsFormsTouchspinSpinWithStep5 />
                {/* Wrapping value */}
                <ComponentsFormsTouchspinWrappingValueSpin />
                {/* Size  */}
                <ComponentsFormsTouchspinSize />
                {/* Inline Buttons */}
                <ComponentsFormsTouchspinInlineSpinButton />
                {/* Vertical Buttons */}
                <ComponentsFormsTouchspinVerticalSpinButton />
                {/* text with spin */}
                <ComponentsFormsTouchspinTextWithSpinButton />
                {/* Change Button Class */}
                <ComponentsFormsTouchspinChangeButtonClass />
            </div>
        </div>
    );
};

export default TouchSpin;
