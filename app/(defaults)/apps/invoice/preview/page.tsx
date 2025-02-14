import ComponentsAppsInvoicePreview from '@/components/apps/mailbox/invoice/components-apps-invoice-preview';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Invoice Preview',
};

const InvoicePreview = () => {
    return <ComponentsAppsInvoicePreview />;
};

export default InvoicePreview;
