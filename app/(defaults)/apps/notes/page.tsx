import ComponentsAppsNotes from '@/components/apps/notes/components-apps-notes';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Notes',
};

const Notes = () => {
    return <ComponentsAppsNotes />;
};

export default Notes;
