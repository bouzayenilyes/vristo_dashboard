import ComponentsAppsCalendar from '@/components/apps/calendar/components-apps-calendar';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Calendar',
};

const Calendar = () => {
    return <ComponentsAppsCalendar />;
};

export default Calendar;
