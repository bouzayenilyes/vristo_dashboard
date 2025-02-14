import ComponentsAppsScrumBoard from '@/components/apps/scrumboard/components-apps-scrumboard';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Scrumboard',
};

const ScrumBoard = () => {
    return <ComponentsAppsScrumBoard />;
};

export default ScrumBoard;
