'use client';
import IconCopy from '@/components/icon/icon-copy';
import IconPencil from '@/components/icon/icon-pencil';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import React, { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import Swal from 'sweetalert2';

const ComponentsFormsClipboardTextarea = () => {
    const [message2, setMessage2] = useState<any>('Lorem ipsum dolor sit amet, consectetur adipiscing elit...');
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
            title="Copy form Textarea"
            codeHighlight={`import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
const [message2, setMessage2] = useState<any>('Lorem ipsum dolor sit amet, consectetur adipiscing elit...');

<form>
    <textarea rows={3} wrap="soft" className="form-textarea" value={message2} id="message2" onChange={(e) => setMessage2(e.target.value)}></textarea>
    <div className="sm:flex space-y-2 sm:space-y-0 sm:space-x-2 rtl:space-x-reverse mt-5">
        <CopyToClipboard
            text={message2}
            onCopy={(text, result) => {
                if (result) {
                    showMessage();
                }
            }}
        >
            <button type="button" className="btn btn-primary" data-clipboard-target="#message2">
                <svg>...</svg>
                Copy from Input
            </button>
        </CopyToClipboard>
        <CopyToClipboard
            text={message2}
            onCopy={(text, result) => {
                if (result) {
                    showMessage('Cut successfully.');
                }
            }}
        >
            <button type="button" className="btn btn-dark " onClick={() => setMessage2('')}>
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
                        <textarea rows={3} wrap="soft" className="form-textarea" value={message2} id="message2" onChange={(e) => setMessage2(e.target.value)}></textarea>
                        <div className="mt-5 space-y-2 rtl:space-x-reverse sm:flex sm:space-x-2 sm:space-y-0">
                            <CopyToClipboard
                                text={message2}
                                onCopy={(text, result) => {
                                    if (result) {
                                        showMessage();
                                    }
                                }}
                            >
                                <button type="button" className="btn btn-primary" data-clipboard-target="#message2">
                                    <IconCopy className="ltr:mr-2 rtl:ml-2" />
                                    Copy from Input
                                </button>
                            </CopyToClipboard>
                            <CopyToClipboard
                                text={message2}
                                onCopy={(text, result) => {
                                    if (result) {
                                        showMessage('Cut successfully.');
                                    }
                                }}
                            >
                                <button type="button" className="btn btn-dark " onClick={() => setMessage2('')}>
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

export default ComponentsFormsClipboardTextarea;
