'use client';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import React from 'react';
import Swal from 'sweetalert2';

const ComponentsSweetAlertsMixin = () => {
    const showAlert = async () => {
        const toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
        });
        toast.fire({
            icon: 'success',
            title: 'Signed in successfully',
            padding: '10px 20px',
        });
    };

    return (
        <PanelCodeHighlight
            title="Mixin"
            codeHighlight={`import Swal from 'sweetalert2';

const showAlert = async () => {
    const toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
    });
    toast.fire({
        icon: 'success',
        title: 'Signed in successfully',
        padding: '10px 20px',
    });
}

<div className="mb-5">
    <div className="flex items-center justify-center" id="rtl-container">
        <button type="button" className="btn btn-secondary" onClick={() => showAlert()}>
            Mixin
        </button>
    </div>
</div>`}
        >
            <div className="mb-5">
                <div className="flex items-center justify-center" id="rtl-container">
                    <button type="button" className="btn btn-secondary" onClick={() => showAlert()}>
                        Mixin
                    </button>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsSweetAlertsMixin;
