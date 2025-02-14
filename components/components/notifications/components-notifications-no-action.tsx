'use client';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const ComponentsNotificationsNoAction = () => {
    const MySwal = withReactContent(Swal);

    const showMessage7 = () => {
        MySwal.fire({
            title: 'Example notification text.',
            toast: true,
            position: 'bottom-start',
            showConfirmButton: false,
            timer: 3000,
            showCloseButton: false,
        });
    };

    return (
        <PanelCodeHighlight
            title="No Action"
            codeHighlight={`import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const showMessage7 = () => {
    MySwal.fire({
        title: 'Example notification text.',
        toast: true,
        position: 'bottom-start',
        showConfirmButton: false,
        timer: 3000,
        showCloseButton: false,
    });
};

<div className="mb-5">
    <div className="flex items-center justify-center">
        <button type="button" className="btn btn-success" onClick={showMessage7}>
            No Action
        </button>
    </div>
</div>`}
        >
            <div className="mb-5">
                <div className="flex items-center justify-center">
                    <button type="button" className="btn btn-success" onClick={showMessage7}>
                        No Action
                    </button>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsNotificationsNoAction;
