import ElementsAlertsArrowed from '@/components/elements/alerts/elements-alerts-arrowed';
import ElementsAlertsCustom from '@/components/elements/alerts/elements-alerts-custom';
import ElementsAlertsDefault from '@/components/elements/alerts/elements-alerts-default';
import ElementsAlertsOutline from '@/components/elements/alerts/elements-alerts-outline';
import ElementsAlertsSolid from '@/components/elements/alerts/elements-alerts-solid';
import ElementsAlertsWithIcon from '@/components/elements/alerts/elements-alerts-with-icon';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Alerts',
};

const Alerts = () => {
    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link href="/elements/alerts" className="text-primary hover:underline">
                        Elements
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Alerts</span>
                </li>
            </ul>
            <div className="space-y-8 pt-5">
                <ElementsAlertsDefault />
                <ElementsAlertsOutline />
                <ElementsAlertsSolid />
                <ElementsAlertsWithIcon />
                <ElementsAlertsArrowed />
                <ElementsAlertsCustom />
            </div>
        </div>
    );
};

export default Alerts;
