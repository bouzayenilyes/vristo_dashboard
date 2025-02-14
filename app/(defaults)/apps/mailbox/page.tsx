import ComponentsAppsMailbox from '@/components/apps/mailbox/components-apps-mailbox';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Mailbox',
};

const Mailbox = () => {
    return <ComponentsAppsMailbox />;
};

export default Mailbox;
