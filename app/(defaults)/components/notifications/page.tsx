import ComponentsNotificationsBasic from '@/components/components/notifications/components-notifications-basic';
import ComponentsNotificationsBgColor from '@/components/components/notifications/components-notifications-bg-color';
import ComponentsNotificationsClickCallback from '@/components/components/notifications/components-notifications-click-callback';
import ComponentsNotificationsDuration from '@/components/components/notifications/components-notifications-duration';
import ComponentsNotificationsNoAction from '@/components/components/notifications/components-notifications-no-action';
import ComponentsNotificationsPosition from '@/components/components/notifications/components-notifications-position';
import IconBell from '@/components/icon/icon-bell';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
    title: 'Notifications',
};

const Notifications = () => {
    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link href="#" className="text-primary hover:underline">
                        Components
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Notifications</span>
                </li>
            </ul>
            <div className="space-y-8 pt-5">
                <div className="panel flex items-center overflow-x-auto whitespace-nowrap p-3 text-primary">
                    <div className="rounded-full bg-primary p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3">
                        <IconBell />
                    </div>
                    <span className="ltr:mr-3 rtl:ml-3">Documentation: </span>
                    <a href="https://www.npmjs.com/package/sweetalert2" target="_blank" className="block hover:underline" rel="noreferrer">
                        https://www.npmjs.com/package/sweetalert2
                    </a>
                </div>
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <ComponentsNotificationsBasic />
                    <ComponentsNotificationsPosition />
                    <ComponentsNotificationsNoAction />
                    <ComponentsNotificationsClickCallback />
                    <ComponentsNotificationsDuration />
                    <ComponentsNotificationsBgColor />
                </div>
            </div>
        </div>
    );
};

export default Notifications;
