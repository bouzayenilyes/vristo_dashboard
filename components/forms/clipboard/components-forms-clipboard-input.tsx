'use client';
import IconCopy from '@/components/icon/icon-copy';
import IconPencil from '@/components/icon/icon-pencil';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import React, { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import Swal from 'sweetalert2';

const ComponentsFormsClipboardInput = () => {
    const [message1, setMessage1] = useState<any>('http://www.admin-dashboard.com');
    const showMessage = (message: String = '') => {
        const toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
        });
        toast.fire({
            icon: 'success',
            title: message || 'Copied successfully.',
            padding: '10px 20px',
        });
    };

    return (
        <PanelCodeHighlight
            title="Copy from input"
            codeHighlight={`import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
const [message1, setMessage1] = useState<any>('http://www.admin-dashboard.com');

<form>
    <input type="text" value={message1} className="form-input" onChange={(e) => setMessage1(e.target.value)} />
    <div className="sm:flex space-y-2 sm:space-y-0 sm:space-x-2 rtl:space-x-reverse mt-5">
        <CopyToClipboard
            text={message1}
            onCopy={(text, result) => {
                if (result) {
                    showMessage();
                }
            }}
        >
            <button type="button" className="btn btn-primary">
                <svg>...</svg>
                Copy from Input
            </button>
        </CopyToClipboard>
        <CopyToClipboard
            text={message1}
            onCopy={(text, result) => {
                if (result) {
                    showMessage('Cut successfully.');
                }
            }}
        >
            <button type="button" className="btn btn-dark" value={message1} onClick={() => setMessage1('')}>
                <svg>...</svg>
                Cut from Input
            </button>
        </CopyToClipboard>
    </div>
</form>`}
        >
            <div className="mb-5">
                <div className="rounded bg-[#f1f2f3] p-5 dark:bg-[#060818]">
                    <form>
                        <input type="text" value={message1} className="form-input" onChange={(e) => setMessage1(e.target.value)} />
                        <div className="mt-5 space-y-2 rtl:space-x-reverse sm:flex sm:space-x-2 sm:space-y-0">
                            <CopyToClipboard
                                text={message1}
                                onCopy={(text, result) => {
                                    if (result) {
                                        showMessage();
                                    }
                                }}
                            >
                                <button type="button" className="btn btn-primary">
                                    <IconCopy className="ltr:mr-2 rtl:ml-2" />
                                    Copy from Input
                                </button>
                            </CopyToClipboard>
                            <CopyToClipboard
                                text={message1}
                                onCopy={(text, result) => {
                                    if (result) {
                                        showMessage('Cut successfully.');
                                    }
                                }}
                            >
                                <button type="button" className="btn btn-dark" value={message1} onClick={() => setMessage1('')}>
                                    <IconPencil className="ltr:mr-2 rtl:ml-2" />
                                    Cut from Input
                                </button>
                            </CopyToClipboard>
                        </div>
                    </form>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsFormsClipboardInput;
