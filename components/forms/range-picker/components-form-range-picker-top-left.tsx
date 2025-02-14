'use client';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import React, { useState } from 'react';

const ComponentsFormRangePickerTopLeft = () => {
    const [range1, setRange1] = useState<any>('0');
    return (
        <PanelCodeHighlight
            title="Postion : Top-Left"
            codeHighlight={`import { useState } from 'react';
const [range1, setRange1] = useState<any>('0');

<div>
    <div className="font-bold">
        <span className="inline-block py-1 px-2 rounded text-primary border border-white-light dark:border-dark">{range1}</span>
        <span>%</span>
    </div>
    <input type="range" className="w-full py-2.5" value={range1} min={0} max={100} onChange={(e) => setRange1(e.target.value)} />
</div>`}
        >
            <div className="mb-5 pt-5">
                <div className="font-bold">
                    <span className="inline-block rounded border border-white-light px-2 py-1 text-primary dark:border-dark">{range1}</span>
                    <span>%</span>
                </div>
                <input type="range" className="w-full py-2.5" value={range1} min={0} max={100} onChange={(e) => setRange1(e.target.value)} />
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsFormRangePickerTopLeft;
