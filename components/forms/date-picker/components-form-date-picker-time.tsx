'use client';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import { IRootState } from '@/store';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.css';

const ComponentsFormDatePickerTime = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl';
    const [date4, setDate4] = useState<any>('13:45');
    return (
        <PanelCodeHighlight
            title="Preloading Time"
            codeHighlight={`import { useState } from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.css';
import { useSelector } from 'react-redux';

const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl';
const [date4, setDate4] = useState<any>('13:45');

<Flatpickr
    options={{
        noCalendar: true,
        enableTime: true,
        dateFormat: 'H:i',
        position: isRtl ? 'auto right' : 'auto left',
    }}
    defaultValue={date4}
    className="form-input"
    onChange={(date4) => setDate4(date4)}
/>`}
        >
            <div className="mb-2.5">
                Use
                <code className="text-danger">{` {noCalendar: true, enableTime: true, dateFormat: 'H:i'} `}</code>
                with Date Time options to disable calendar and show time picker only.
            </div>
            <div className="mb-5">
                <Flatpickr
                    options={{
                        noCalendar: true,
                        enableTime: true,
                        dateFormat: 'H:i',
                        position: isRtl ? 'auto right' : 'auto left',
                    }}
                    defaultValue={date4}
                    className="form-input"
                    onChange={(date4) => setDate4(date4)}
                />
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsFormDatePickerTime;
