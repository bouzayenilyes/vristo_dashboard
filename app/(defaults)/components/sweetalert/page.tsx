import ComponentsSweetAlertsAutoCloseTimer from '@/components/components/sweet-alerts/components-sweet-alerts-auto-close-timer';
import ComponentsSweetAlertsBasic from '@/components/components/sweet-alerts/components-sweet-alerts-basic';
import ComponentsSweetAlertsCancel from '@/components/components/sweet-alerts/components-sweet-alerts-cancel';
import ComponentsSweetAlertsChainingModals from '@/components/components/sweet-alerts/components-sweet-alerts-chaining-modals';
import ComponentsSweetAlertsCustomAnimation from '@/components/components/sweet-alerts/components-sweet-alerts-custom-animation';
import ComponentsSweetAlertsCustomImage from '@/components/components/sweet-alerts/components-sweet-alerts-custom-image';
import ComponentsSweetAlertsCustomStyle from '@/components/components/sweet-alerts/components-sweet-alerts-custom-style';
import ComponentsSweetAlertsDynamic from '@/components/components/sweet-alerts/components-sweet-alerts-dynamic';
import ComponentsSweetAlertsHtml from '@/components/components/sweet-alerts/components-sweet-alerts-html';
import ComponentsSweetAlertsMixin from '@/components/components/sweet-alerts/components-sweet-alerts-mixin';
import ComponentsSweetAlertsRtl from '@/components/components/sweet-alerts/components-sweet-alerts-rtl';
import ComponentsSweetAlertsSuccess from '@/components/components/sweet-alerts/components-sweet-alerts-success';
import ComponentsSweetAlertsTitleWithText from '@/components/components/sweet-alerts/components-sweet-alerts-title-with-text';
import ComponentsSweetAlertsWarning from '@/components/components/sweet-alerts/components-sweet-alerts-warning';
import ComponentsSweetAlertsWithFooter from '@/components/components/sweet-alerts/components-sweet-alerts-with-footer';
import IconBell from '@/components/icon/icon-bell';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
    title: 'Sweetalert',
};

const Sweetalert = () => {
    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link href="#" className="text-primary hover:underline">
                        Components
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Sweet Alerts</span>
                </li>
            </ul>
            <div className="sweet-alerts space-y-8 pt-5">
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
                    <ComponentsSweetAlertsBasic />
                    <ComponentsSweetAlertsSuccess />
                    <ComponentsSweetAlertsDynamic />
                    <ComponentsSweetAlertsTitleWithText />
                    <ComponentsSweetAlertsChainingModals />
                    <ComponentsSweetAlertsCustomAnimation />
                    <ComponentsSweetAlertsAutoCloseTimer />
                    <ComponentsSweetAlertsCustomImage />
                    <ComponentsSweetAlertsHtml />
                    <ComponentsSweetAlertsWarning />
                    <ComponentsSweetAlertsCancel />
                    <ComponentsSweetAlertsCustomStyle />
                    <ComponentsSweetAlertsWithFooter />
                    <ComponentsSweetAlertsRtl />
                    <ComponentsSweetAlertsMixin />
                </div>
            </div>
        </div>
    );
};

export default Sweetalert;
