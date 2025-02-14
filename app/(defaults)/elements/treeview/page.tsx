import ElementsTreeviewAnimated from '@/components/elements/treeview/elements-treeview-animated';
import ElementsTreeviewBasic from '@/components/elements/treeview/elements-treeview-basic';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
    title: 'Treeview',
};

const Treeview = () => {
    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link href="#" className="text-primary hover:underline">
                        Elements
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Treeview</span>
                </li>
            </ul>
            <div className="grid grid-cols-1 gap-6 pt-6 lg:grid-cols-2">
                <ElementsTreeviewAnimated />
                <ElementsTreeviewBasic />
            </div>
        </div>
    );
};

export default Treeview;
