'use client';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import Nouislider from '@x1mrdonut1x/nouislider-react';
import 'nouislider/distribute/nouislider.css';
import React, { useState } from 'react';

const ComponentsFormRangePickerInputElement = () => {
    const [inputStart, setInputStart] = useState<any>(20);
    const [inputEnd, setInputEnd] = useState<any>(40);
    const slider1Update = (range: any) => {
        setInputStart(range[0]);
        setInputEnd(range[1]);
    };

    return (
        <PanelCodeHighlight
            title="Using HTML5 input elements"
            codeHighlight={`import { useState } from 'react';

const [inputStart, setInputStart] = useState<any>(20);
const [inputEnd, setInputEnd] = useState<any>(40);
const slider1Update = (range: any) => {
    setInputStart(range[0]);
    setInputEnd(range[1]);
};

<div>
    <Nouislider range={{ min: 0, max: 100 }} start={[inputStart, inputEnd]} step={1} connect={true} onSlide={slider1Update} tooltips={true} />
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-4 mt-9">
        <div className="mb-3">
            <select id="select" className="form-select w-full" value={parseInt(inputStart)} onChange={(e) => setInputStart(e.target.value)}>
                {Array.from(Array(101).keys()).map((i) => (
                    <option value={i} key={i}>
                        {i}
                    </option>
                ))}
            </select>
        </div>
        <div>
            <input type="number" className="form-input" min="0" max="100" value={parseInt(inputEnd)} onChange={(e) => setInputEnd(e.target.value)} />
        </div>
    </div>
</div>`}
        >
            <div className="mb-5 pt-10">
                <Nouislider range={{ min: 0, max: 100 }} start={[inputStart, inputEnd]} step={1} connect={true} onSlide={slider1Update} tooltips={true} />
                <div className="mb-4 mt-9 grid grid-cols-1 gap-8 lg:grid-cols-2">
                    <div className="mb-3">
                        <select id="select" className="form-select w-full" value={parseInt(inputStart)} onChange={(e) => setInputStart(e.target.value)}>
                            {Array.from(Array(101).keys()).map((i) => (
                                <option value={i} key={i}>
                                    {i}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <input type="number" className="form-input" min="0" max="100" value={parseInt(inputEnd)} onChange={(e) => setInputEnd(e.target.value)} />
                    </div>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsFormRangePickerInputElement;
