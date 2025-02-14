'use client';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import React, { useState } from 'react';

const ComponentsFormRangePickerBottomRight = () => {
    const [range4, setRange4] = useState<any>('0');
    return (
        <PanelCodeHighlight
            title="Postion : Bottom-right"
            codeHighlight={`import { useState } from 'react';
const [range4, setRange4] = useState<any>('0');

<div>
    <input type="range" className="w-full py-2.5" min="0" max="100" value={range4} onChange={(e) => setRange4(e.target.value)} />
    <div className="font-bold ltr:text-right rtl:text-left">
        <span className="inline-block py-1 px-2 rounded text-primary border border-white-light dark:border-dark">{range4}</span>
        <span>%</span>
    </div>
</div>`}
        >
            <div className="mb-5">
                <input type="range" className="w-full py-2.5" min="0" max="100" value={range4} onChange={(e) => setRange4(e.target.value)} />
                <div className="font-bold ltr:text-right rtl:text-left">
                    <span className="inline-block rounded border border-white-light px-2 py-1 text-primary dark:border-dark">{range4}</span>
                    <span>%</span>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsFormRangePickerBottomRight;
