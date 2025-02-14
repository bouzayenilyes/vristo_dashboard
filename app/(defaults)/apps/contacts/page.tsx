import ComponentsAppsContacts from '@/components/apps/contacts/components-apps-contacts';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Contacts',
};

const Contacts = () => {
    return <ComponentsAppsContacts />;
};

export default Contacts;
