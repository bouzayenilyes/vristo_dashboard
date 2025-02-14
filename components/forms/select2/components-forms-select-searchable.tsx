'use client';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import React from 'react';
import Select from 'react-select';

const ComponentsFormsSelectSearchable = () => {
    const options4 = [
        { value: 'orange', label: 'Orange' },
        { value: 'white', label: 'White' },
        { value: 'purple', label: 'Purple' },
    ];

    return (
        <PanelCodeHighlight
            title="Searchable"
            codeHighlight={`import Select from 'react-select';

const options4 = [
    { value: 'orange', label: 'Orange' },
    { value: 'white', label: 'White' },
    { value: 'purple', label: 'Purple' },
];

<Select placeholder="Select an option" options={options4} />`}
        >
            <div className="mb-5">
                <Select placeholder="Select an option" options={options4} />
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsFormsSelectSearchable;
