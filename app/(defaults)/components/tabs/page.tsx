import ComponentsTabsSimple from '@/components/components/tabs/components-tabs-simple';
import IconBell from '@/components/icon/icon-bell';
import Link from 'next/link';
import React from 'react';
import { Metadata } from 'next';
import ComponentsTabsSimplePills from '@/components/components/tabs/components-tabs-simple-pills';
import ComponentsTabsIcon from '@/components/components/tabs/components-tabs-icon';
import ComponentsTabsIconPills from '@/components/components/tabs/components-tabs-icon-pills';
import ComponentsTabsBorder from '@/components/components/tabs/components-tabs-border';
import ComponentsTabsVerticalBordered from '@/components/components/tabs/components-tabs-vertical-bordered';
import ComponentsTabsBorderTop from '@/components/components/tabs/components-tabs-border-top';
import ComponentsTabsLine from '@/components/components/tabs/components-tabs-line';
import ComponentsTabsAnimatedLine from '@/components/components/tabs/components-tabs-animated-line';
import ComponentsTabsVerticalLine from '@/components/components/tabs/components-tabs-vertical-line';
import ComponentsTabsJustify from '@/components/components/tabs/components-tabs-justify';
import ComponentsTabsJustifyPills from '@/components/components/tabs/components-tabs-justify-pills';
import ComponentsTabsJustifyCenter from '@/components/components/tabs/components-tabs-justify-center';
import ComponentsTabsJustifyCenterPills from '@/components/components/tabs/components-tabs-justify-center-pills';
import ComponentsTabsJustifyRight from '@/components/components/tabs/components-tabs-justify-right';
import ComponentsTabsJustifyRightPills from '@/components/components/tabs/components-tabs-justify-right-pills';
import ComponentsTabsPillsWithIcon from '@/components/components/tabs/components-tabs-pills-with-icon';
import ComponentsTabsRoundedPillWithIcon from '@/components/components/tabs/components-tabs-rounded-pill-with-icon';
import ComponentsTabsVerticalRoundedWithIcon from '@/components/components/tabs/components-tabs-vertical-rounded-with-icon';
import ComponentsTabsVerticalCircleWithIcon from '@/components/components/tabs/components-tabs-vertical-circle-with-icon';
import ComponentsTabsVerticalPills from '@/components/components/tabs/components-tabs-vertical-pills';
import ComponentsTabsJustifyVerticalPillsRight from '@/components/components/tabs/components-tabs-justify-vertical-pills-right';

export const metadata: Metadata = {
    title: 'Tabs',
};

const Tab = () => {
    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link href="/components/tabs" className="text-primary hover:underline">
                        Components
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Tabs</span>
                </li>
            </ul>
            <div className="space-y-8 pt-5">
                <div className="panel flex items-center overflow-x-auto whitespace-nowrap p-3 text-primary">
                    <div className="rounded-full bg-primary p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3">
                        <IconBell />
                    </div>
                    <span className="ltr:mr-3 rtl:ml-3">Documentation: </span>
                    <a href="https://headlessui.com/react/tabs" target="_blank" className="block hover:underline" rel="noreferrer">
                        https://headlessui.com/react/tabs
                    </a>
                </div>
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <ComponentsTabsSimple />
                    <ComponentsTabsSimplePills />
                    <ComponentsTabsIcon />
                    <ComponentsTabsIconPills />
                    <ComponentsTabsVerticalBordered />
                    <ComponentsTabsBorder />
                    <ComponentsTabsBorderTop />
                    <ComponentsTabsLine />
                    <ComponentsTabsAnimatedLine />
                    <ComponentsTabsVerticalLine />
                    <ComponentsTabsJustify />
                    <ComponentsTabsJustifyPills />
                    <ComponentsTabsJustifyCenter />
                    <ComponentsTabsJustifyCenterPills />
                    <ComponentsTabsJustifyRight />
                    <ComponentsTabsJustifyRightPills />
                    <ComponentsTabsPillsWithIcon />
                    <ComponentsTabsRoundedPillWithIcon />
                    <ComponentsTabsVerticalRoundedWithIcon />
                    <ComponentsTabsVerticalCircleWithIcon />
                    <ComponentsTabsVerticalPills />
                    <ComponentsTabsJustifyVerticalPillsRight />
                </div>
            </div>
        </div>
    );
};

export default Tab;
