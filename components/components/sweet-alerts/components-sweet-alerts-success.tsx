'use client';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import React from 'react';
import Swal from 'sweetalert2';

const ComponentsSweetAlertsSuccess = () => {
    const showAlert = async () => {
        Swal.fire({
            icon: 'success',
            title: 'Good job!',
            text: 'You clicked the!',
            padding: '2em',
            customClass: 'sweet-alerts',
        });
    };
    return (
        <PanelCodeHighlight
            title="Success message"
            codeHighlight={`import Swal from 'sweetalert2';
const showAlert = async () => {
    Swal.fire({
        icon: 'success',
        title: 'Good job!',
        text: 'You clicked the!',
        padding: '2em',
        customClass: 'sweet-alerts',
    });
};

<div className="mb-5">
    <div className="flex items-center justify-center">
        <button type="button" className="btn btn-secondary" onClick={() => showAlert()}>
            Success message!
        </button>
    </div>
</div>      `}
        >
            <div className="mb-5">
                <div className="flex items-center justify-center">
                    <button type="button" className="btn btn-secondary" onClick={() => showAlert()}>
                        Success message!
                    </button>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsSweetAlertsSuccess;
