import ComponentsModalAnimationStyle from '@/components/components/modals/components-modal-animation-style';
import ComponentsModalBasic from '@/components/components/modals/components-modal-basic';
import ComponentsModalCustom from '@/components/components/modals/components-modal-custom';
import ComponentsModalOptionalSizes from '@/components/components/modals/components-modal-optional-sizes';
import ComponentsModalRemoveAnimation from '@/components/components/modals/components-modal-remove-animation';
import ComponentsModalStatic from '@/components/components/modals/components-modal-static';
import ComponentsModalVerticallyCenter from '@/components/components/modals/components-modal-vertically-center';
import ComponentsModalVideo from '@/components/components/modals/components-modal-video';
import IconBell from '@/components/icon/icon-bell';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
    title: 'Modals',
};

const Modals = async () => {
    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link href="#" className="text-primary hover:underline">
                        Components
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Modals</span>
                </li>
            </ul>
            <div className="space-y-8 pt-5">
                <div className="panel flex items-center overflow-x-auto whitespace-nowrap p-3 text-primary">
                    <div className="rounded-full bg-primary p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3">
                        <IconBell />
                    </div>
                    <span className="ltr:mr-3 rtl:ml-3">Documentation: </span>
                    <a href="https://headlessui.com/react/dialog" target="_blank" className="block hover:underline" rel="noreferrer">
                        https://headlessui.com/react/dialog
                    </a>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <ComponentsModalBasic />
                    <ComponentsModalVerticallyCenter />
                    <ComponentsModalStatic />
                    <ComponentsModalRemoveAnimation />
                    <ComponentsModalOptionalSizes />
                    <ComponentsModalVideo />
                    <ComponentsModalAnimationStyle />
                    <ComponentsModalCustom />
                </div>
            </div>
        </div>
    );
};

export default Modals;
