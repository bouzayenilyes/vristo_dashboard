import ElementsAvatarAnimateXAxis from '@/components/elements/avatar/elements-avatar-animate-x-axis';
import ElementsAvatarAnimateYAxis from '@/components/elements/avatar/elements-avatar-animate-y-axis';
import ElementsAvatarBasic from '@/components/elements/avatar/elements-avatar-basic';
import ElementsAvatarGroup from '@/components/elements/avatar/elements-avatar-group';
import ElementsAvatarIndicators from '@/components/elements/avatar/elements-avatar-indicators';
import ElementsAvatarInitials from '@/components/elements/avatar/elements-avatar-initials';
import ElementsAvatarShapes from '@/components/elements/avatar/elements-avatar-shapes';
import ElementsAvatarTooltip from '@/components/elements/avatar/elements-avatar-tooltip';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
    title: 'Avatar',
};

const Avatar = () => {
    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link href="#" className="text-primary hover:underline">
                        Elements
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Avatar</span>
                </li>
            </ul>
            <div className="grid grid-cols-1 gap-6 pt-5 lg:grid-cols-2">
                <ElementsAvatarBasic />
                <ElementsAvatarIndicators />
                <ElementsAvatarShapes />
                <ElementsAvatarInitials />
                <ElementsAvatarGroup />
                <ElementsAvatarAnimateYAxis />
                <ElementsAvatarAnimateXAxis />
                <ElementsAvatarTooltip />
            </div>
        </div>
    );
};

export default Avatar;
