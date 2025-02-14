import ComponentsAppsInvoiceList from '@/components/apps/mailbox/invoice/components-apps-invoice-list';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Invoice List',
};

const InvoiceList = () => {
    return <ComponentsAppsInvoiceList />;
};

export default InvoiceList;
