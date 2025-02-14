'use client';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import React from 'react';
import Swal from 'sweetalert2';

const ComponentsNotificationsBgColor = () => {
    const coloredToast = (color: any) => {
        const toast = Swal.mixin({
            toast: true,
            position: 'bottom-start',
            showConfirmButton: false,
            timer: 3000,
            showCloseButton: true,
            customClass: {
                popup: `color-${color}`,
            },
        });
        toast.fire({
            title: 'Example notification text.',
        });
    };

    return (
        <PanelCodeHighlight
            title="Background Color"
            codeHighlight={`import Swal from 'sweetalert2';

const coloredToast = (color: any) => {
    const toast = Swal.mixin({
        toast: true,
        position: 'bottom-start',
        showConfirmButton: false,
        timer: 3000,
        showCloseButton: true,
        customClass: {
            popup: \`color-\${color}\`,
        },
    });
    toast.fire({
        title: 'Example notification text.',
    });
};

<div className="mb-5">
    <div className="grid grid-cols-2 sm:grid-cols-1 sm:flex items-center justify-center gap-2 colored-toast">
        <div>
            <button type="button" className="btn btn-primary" onClick={() => coloredToast('primary')}>
                Primary
            </button>
            <div id="primary-toast"></div>
        </div>
        <div>
            <button type="button" className="btn btn-secondary" onClick={() => coloredToast('secondary')}>
                Secondary
            </button>
            <div id="secondary-toast"></div>
        </div>
        <div>
            <button type="button" className="btn btn-success" onClick={() => coloredToast('success')}>
                Success
            </button>
            <div id="success-toast"></div>
        </div>
        <div>
            <button type="button" className="btn btn-danger" onClick={() => coloredToast('danger')}>
                Danger
            </button>
            <div id="danger-toast"></div>
        </div>
        <div>
            <button type="button" className="btn btn-warning" onClick={() => coloredToast('warning')}>
                Warning
            </button>
            <div id="warning-toast"></div>
        </div>
        <div>
            <button type="button" className="btn btn-info" onClick={() => coloredToast('info')}>
                Info
            </button>
            <div id="info-toast"></div>
        </div>
    </div>
</div>`}
        >
            <div className="mb-5">
                <div className="colored-toast grid grid-cols-2 items-center justify-center gap-2 sm:flex sm:grid-cols-1">
                    <div>
                        <button type="button" className="btn btn-primary" onClick={() => coloredToast('primary')}>
                            Primary
                        </button>
                        <div id="primary-toast"></div>
                    </div>
                    <div>
                        <button type="button" className="btn btn-secondary" onClick={() => coloredToast('secondary')}>
                            Secondary
                        </button>
                        <div id="secondary-toast"></div>
                    </div>
                    <div>
                        <button type="button" className="btn btn-success" onClick={() => coloredToast('success')}>
                            Success
                        </button>
                        <div id="success-toast"></div>
                    </div>
                    <div>
                        <button type="button" className="btn btn-danger" onClick={() => coloredToast('danger')}>
                            Danger
                        </button>
                        <div id="danger-toast"></div>
                    </div>
                    <div>
                        <button type="button" className="btn btn-warning" onClick={() => coloredToast('warning')}>
                            Warning
                        </button>
                        <div id="warning-toast"></div>
                    </div>
                    <div>
                        <button type="button" className="btn btn-info" onClick={() => coloredToast('info')}>
                            Info
                        </button>
                        <div id="info-toast"></div>
                    </div>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsNotificationsBgColor;
