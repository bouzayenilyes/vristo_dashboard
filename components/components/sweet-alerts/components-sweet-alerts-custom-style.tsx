'use client';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import React from 'react';
import Swal from 'sweetalert2';

const ComponentsSweetAlertsCustomStyle = () => {
    const showAlert = async () => {
        Swal.fire({
            title: 'Custom width, padding, background.',
            width: 600,
            padding: '7em',
            customClass: 'background-modal sweet-alerts',
            background: '#fff url(/assets/images/sweet-bg.jpg) no-repeat 100% 100%',
        });
    };
    return (
        <PanelCodeHighlight
            title="A message with custom width, padding and background"
            codeHighlight={`import Swal from 'sweetalert2';

const showAlert = async () => {
    Swal.fire({
        title: 'Custom width, padding, background.',
        width: 600,
        padding: '7em',
        customClass: 'background-modal sweet-alerts',
        background: '#fff url(/assets/images/sweet-bg.jpg) no-repeat 100% 100%',
    });
}

<div className="mb-5">
    <div className="flex items-center justify-center">
        <button type="button" className="btn btn-info" onClick={() => showAlert()}>
            Custom Message
        </button>
    </div>
</div>`}
        >
            <div className="mb-5">
                <div className="flex items-center justify-center">
                    <button type="button" className="btn btn-info" onClick={() => showAlert()}>
                        Custom Message
                    </button>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsSweetAlertsCustomStyle;
