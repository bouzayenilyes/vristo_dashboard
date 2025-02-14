'use client';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import React, { useState } from 'react';

const ComponentsFormRangePickerBottomLeft = () => {
    const [range3, setRange3] = useState<any>('0');
    return (
        <PanelCodeHighlight
            title="Postion : Bottom-Left"
            codeHighlight={`import { useState } from 'react';
const [range3, setRange3] = useState<any>('0');

<div>
    <input type="range" className="w-full py-2.5" min="0" max="100" value={range3} onChange={(e) => setRange3(e.target.value)} />
    <div className="font-bold">
        <span className="inline-block py-1 px-2 rounded text-primary border border-white-light dark:border-dark">{range3}</span>
        <span>%</span>
    </div>
</div>`}
        >
            <div className="mb-5">
                <input type="range" className="w-full py-2.5" min="0" max="100" value={range3} onChange={(e) => setRange3(e.target.value)} />
                <div className="font-bold">
                    <span className="inline-block rounded border border-white-light px-2 py-1 text-primary dark:border-dark">{range3}</span>
                    <span>%</span>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsFormRangePickerBottomLeft;
