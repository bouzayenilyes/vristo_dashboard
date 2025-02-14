'use client';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import React, { useState } from 'react';

const ComponentsFormRangePickerTopRight = () => {
    const [range2, setRange2] = useState<any>('0');
    return (
        <PanelCodeHighlight
            title="Postion : Top-right"
            codeHighlight={`import { useState } from 'react';
const [range2, setRange2] = useState<any>('0');

<div>
    <div className="font-bold ltr:text-right rtl:text-left">
        <span className="inline-block py-1 px-2 rounded text-primary border border-white-light dark:border-dark">{range2}</span>
        <span>%</span>
    </div>
    <input type="range" className="w-full py-2.5" min="0" max="100" value={range2} onChange={(e) => setRange2(e.target.value)} />
</div>`}
        >
            <div className="mb-5">
                <div className="font-bold ltr:text-right rtl:text-left">
                    <span className="inline-block rounded border border-white-light px-2 py-1 text-primary dark:border-dark">{range2}</span>
                    <span>%</span>
                </div>
                <input type="range" className="w-full py-2.5" min="0" max="100" value={range2} onChange={(e) => setRange2(e.target.value)} />
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsFormRangePickerTopRight;
