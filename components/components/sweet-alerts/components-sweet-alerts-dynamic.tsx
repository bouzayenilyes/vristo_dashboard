'use client';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import React from 'react';
import Swal from 'sweetalert2';

const ComponentsSweetAlertsDynamic = () => {
    const showAlert = async () => {
        const ipAPI = 'https://api.ipify.org?format=json';
        Swal.fire({
            title: 'Your public IP',
            confirmButtonText: 'Show my public IP',
            text: 'Your public IP will be received via AJAX request',
            showLoaderOnConfirm: true,
            customClass: 'sweet-alerts',
            preConfirm: async () => {
                try {
                    const response = await fetch(ipAPI);
                    const data = await response.json();
                    Swal.fire({
                        title: data.ip,
                        customClass: 'sweet-alerts',
                    });
                } catch {
                    Swal.fire({
                        icon: 'error',
                        title: 'Unable to get your public IP',
                        customClass: 'sweet-alerts',
                    });
                }
            },
        });
    };

    return (
        <PanelCodeHighlight
            title="Dynamic queue"
            codeHighlight={`import Swal from 'sweetalert2';

const showAlert = async () => {
    const ipAPI = 'https://api.ipify.org?format=json';
    Swal.fire({
        title: 'Your public IP',
        confirmButtonText: 'Show my public IP',
        text: 'Your public IP will be received via AJAX request',
        showLoaderOnConfirm: true,
        customClass: 'sweet-alerts',
        preConfirm: async () => {
            try {
                const response = await fetch(ipAPI);
                const data = await response.json();
                Swal.fire({
                    title: data.ip,
                    customClass: 'sweet-alerts',
                });
            } catch {
                Swal.fire({
                    icon: 'error',
                    title: 'Unable to get your public IP',
                    customClass: 'sweet-alerts',
                });
            }
        },
    });
}

<div className="mb-5">
    <div className="flex items-center justify-center">
        <button type="button" className="btn btn-success" onClick={() => showAlert()}>
            Dynamic queue
        </button>
    </div>
</div>`}
        >
            <div className="mb-5">
                <div className="flex items-center justify-center">
                    <button type="button" className="btn btn-success" onClick={() => showAlert()}>
                        Dynamic queue
                    </button>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsSweetAlertsDynamic;
