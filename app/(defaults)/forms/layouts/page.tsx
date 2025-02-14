import ComponentsFormsLayoutsActionsButtons from '@/components/forms/layouts/components-forms-layouts-actions-buttons';
import ComponentsFormsLayoutsAutoSizing from '@/components/forms/layouts/components-forms-layouts-auto-sizing';
import ComponentsFormsLayoutsGrid from '@/components/forms/layouts/components-forms-layouts-grid';
import ComponentsFormsLayoutsHorizontal from '@/components/forms/layouts/components-forms-layouts-horizontal';
import ComponentsFormsLayoutsInline from '@/components/forms/layouts/components-forms-layouts-inline';
import ComponentsFormsLayoutsLogin from '@/components/forms/layouts/components-forms-layouts-login';
import ComponentsFormsLayoutsRegistration from '@/components/forms/layouts/components-forms-layouts-registration';
import ComponentsFormsLayoutsStack from '@/components/forms/layouts/components-forms-layouts-stack';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
    title: 'Layouts',
};

const Layouts = () => {
    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link href="#" className="text-primary hover:underline">
                        Forms
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Layouts</span>
                </li>
            </ul>

            <div className="grid grid-cols-1 gap-6 pt-5 lg:grid-cols-2">
                {/* Stack */}
                <ComponentsFormsLayoutsStack />

                {/* Horizontal */}
                <ComponentsFormsLayoutsHorizontal />

                {/* Registration */}
                <ComponentsFormsLayoutsRegistration />

                {/* Login */}
                <ComponentsFormsLayoutsLogin />

                {/* Grid */}
                <ComponentsFormsLayoutsGrid />

                {/* Inline */}
                <ComponentsFormsLayoutsInline />

                {/* Auto-sizing */}
                <ComponentsFormsLayoutsAutoSizing />

                {/* Actions Buttons */}
                <ComponentsFormsLayoutsActionsButtons />
            </div>
        </div>
    );
};

export default Layouts;
