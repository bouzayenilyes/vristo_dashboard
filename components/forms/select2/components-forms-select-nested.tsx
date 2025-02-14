'use client';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import Select from 'react-select';
import React from 'react';

const ComponentsFormsSelectNested = () => {
    const options1 = [
        { value: 'group1', label: 'Group 1', isDisabled: 'option--is-disabled' },
        { value: 'orange', label: 'Orange' },
        { value: 'white', label: 'White' },
        { value: 'purple', label: 'Purple' },
        { value: 'group2', label: 'Group 2', isDisabled: 'option--is-disabled' },
        { value: 'yellow', label: 'Yellow' },
        { value: 'green', label: 'Green' },
        { value: 'red', label: 'Red' },
        { value: 'group3', label: 'Group 3', isDisabled: 'option--is-disabled' },
        { value: 'aqua', label: 'Aqua' },
        { value: 'black', label: 'Black' },
        { value: 'blue', label: 'Blue' },
    ];

    return (
        <PanelCodeHighlight
            title="Nested"
            codeHighlight={`import Select from 'react-select';

const options1 = [
    { value: 'group1', label: 'Group 1', isDisabled: 'option--is-disabled' },
    { value: 'orange', label: 'Orange' },
    { value: 'white', label: 'White' },
    { value: 'purple', label: 'Purple' },
    { value: 'group2', label: 'Group 2', isDisabled: 'option--is-disabled' },
    { value: 'yellow', label: 'Yellow' },
    { value: 'green', label: 'Green' },
    { value: 'red', label: 'Red' },
    { value: 'group3', label: 'Group 3', isDisabled: 'option--is-disabled' },
    { value: 'aqua', label: 'Aqua' },
    { value: 'black', label: 'Black' },
    { value: 'blue', label: 'Blue' },
];

<Select defaultValue={options1[1]} options={options1} isSearchable={false}/>`}
        >
            <div className="mb-5">
                <Select defaultValue={options1[1]} options={options1} isSearchable={false} />
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsFormsSelectNested;
