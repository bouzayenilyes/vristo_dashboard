import ComponentsAppsInvoiceAdd from '@/components/apps/mailbox/invoice/components-apps-invoice-add';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Invoice Add',
};

const InvoiceAdd = () => {
    return <ComponentsAppsInvoiceAdd />;
};

export default InvoiceAdd;
