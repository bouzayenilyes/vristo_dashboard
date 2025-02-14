import ComponentsTablesCaptions from '@/components/tables/components-tables-captions';
import ComponentsTablesCheckboxes from '@/components/tables/components-tables-checkboxes';
import ComponentsTablesContextual from '@/components/tables/components-tables-contextual';
import ComponentsTablesDropdown from '@/components/tables/components-tables-dropdown';
import ComponentsTablesFooter from '@/components/tables/components-tables-footer';
import ComponentsTablesHover from '@/components/tables/components-tables-hover';
import ComponentsTablesLight from '@/components/tables/components-tables-light';
import ComponentsTablesProgress from '@/components/tables/components-tables-progress';
import ComponentsTablesSimple from '@/components/tables/components-tables-simple';
import ComponentsTablesStripped from '@/components/tables/components-tables-stripped';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Tables',
};

const Tables = () => {
    return (
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
            {/* Simple */}
            <ComponentsTablesSimple />
            {/* Hover Table  */}
            <ComponentsTablesHover />
            {/* stripped Table  */}
            <ComponentsTablesStripped />
            {/* light Table  */}
            <ComponentsTablesLight />
            {/* captions */}
            <ComponentsTablesCaptions />
            {/* progress */}
            <ComponentsTablesProgress />
            {/* Contextual */}
            <ComponentsTablesContextual />
            {/* dropdown */}
            <ComponentsTablesDropdown />
            {/* footer Table  */}
            <ComponentsTablesFooter />
            {/* checkboxes */}
            <ComponentsTablesCheckboxes />
        </div>
    );
};

export default Tables;
