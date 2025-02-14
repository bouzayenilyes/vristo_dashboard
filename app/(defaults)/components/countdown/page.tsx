import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import ComponentsCountdownSimple from '@/components/components/countdown/components-countdown-simple';
import ComponentsCountdownCircle from '@/components/components/countdown/components-countdown-circle';

export const metadata: Metadata = {
    title: 'Countdown',
};

const Countdown = () => {
    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link href="#" className="text-primary hover:underline">
                        Components
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Countdown</span>
                </li>
            </ul>
            <div className="grid grid-cols-1 gap-6 pt-5 xl:grid-cols-2">
                <ComponentsCountdownSimple />
                <ComponentsCountdownCircle />
            </div>
        </div>
    );
};

export default Countdown;
