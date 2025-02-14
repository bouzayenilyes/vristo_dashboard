import ElementsBreadcrumbsArrowed from '@/components/elements/breadcrumbs/elements-breadcrumbs-arrowed';
import ElementsBreadcrumbsBasic from '@/components/elements/breadcrumbs/elements-breadcrumbs-basic';
import ElementsBreadcrumbsDefault from '@/components/elements/breadcrumbs/elements-breadcrumbs-default';
import ElementsBreadcrumbsDottedSeperators from '@/components/elements/breadcrumbs/elements-breadcrumbs-dotted-seperators';
import ElementsBreadcrumbsWithIcon from '@/components/elements/breadcrumbs/elements-breadcrumbs-with-icon';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
    title: 'Breadcrumbs',
};

const Breadcrumbs = () => {
    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link href="#" className="text-primary hover:underline">
                        Elements
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Breadcrumbs</span>
                </li>
            </ul>
            <div className="grid grid-cols-1 gap-6 pt-5 lg:grid-cols-2">
                <ElementsBreadcrumbsDefault />
                <ElementsBreadcrumbsBasic />
                <ElementsBreadcrumbsArrowed />
                <ElementsBreadcrumbsDottedSeperators />
                <ElementsBreadcrumbsWithIcon />
            </div>
        </div>
    );
};

export default Breadcrumbs;
