import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import ElementsButtonsDefault from '@/components/elements/buttons/elements-buttons-default';
import ElementsButtonsRounded from '@/components/elements/buttons/elements-buttons-rounded';
import ElementsButtonsSolid from '@/components/elements/buttons/elements-buttons-solid';
import ElementsButtonsOutline from '@/components/elements/buttons/elements-buttons-outline';
import ElementsButtonsSizes from '@/components/elements/buttons/elements-buttons-sizes';
import ElementsButtonsWithIcons from '@/components/elements/buttons/elements-buttons-with-icons';
import ElementsButtonsBlock from '@/components/elements/buttons/elements-buttons-block';

export const metadata: Metadata = {
    title: 'Buttons',
};
const Buttons = () => {
    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link href="#" className="text-primary hover:underline">
                        Elements
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Buttons</span>
                </li>
            </ul>
            <div className="grid grid-cols-1 gap-6 pt-5 lg:grid-cols-2">
                <ElementsButtonsDefault />
                <ElementsButtonsRounded />
                <ElementsButtonsSolid />
                <ElementsButtonsOutline />
                <ElementsButtonsSizes />
                <ElementsButtonsWithIcons />
                <ElementsButtonsBlock />
            </div>
        </div>
    );
};

export default Buttons;
