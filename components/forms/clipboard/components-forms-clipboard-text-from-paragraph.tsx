'use client';
import IconCopy from '@/components/icon/icon-copy';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import Swal from 'sweetalert2';

const ComponentsFormsClipboardTextFromParagraph = () => {
    const message3 = '22991';
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
            title="Copy Text from Paragraph"
            codeHighlight={`import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
const message3 = '22991';

<form>
    <p className="mb-3 font-semibold">
        Here is your OTP
        <span className="text-2xl" id="copyOTP" defaultValue={message3}>
            22991
        </span>
        .
    </p>
    <p className="font-semibold">Please do not share it to anyone</p>
    <div className="sm:flex space-y-2 sm:space-y-0 sm:space-x-2 rtl:space-x-reverse mt-5">
        <CopyToClipboard
            text={message3}
            onCopy={(text, result) => {
                if (result) {
                    showMessage();
                }
            }}
        >
            <button type="button" className="btn btn-primary" data-clipboard-target="#copyOTP">
                <svg>...</svg>
                Copy from Paragraph
            </button>
        </CopyToClipboard>
    </div>
</form>`}
        >
            <div className="mb-5">
                <div className="rounded bg-[#f1f2f3] p-5 dark:bg-[#060818]">
                    <form>
                        <p className="mb-3 font-semibold">
                            Here is your OTP
                            <span className="text-2xl" id="copyOTP" defaultValue={message3}>
                                22991
                            </span>
                            .
                        </p>
                        <p className="font-semibold">Please do not share it to anyone</p>
                        <div className="mt-5 space-y-2 rtl:space-x-reverse sm:flex sm:space-x-2 sm:space-y-0">
                            <CopyToClipboard
                                text={message3}
                                onCopy={(text, result) => {
                                    if (result) {
                                        showMessage();
                                    }
                                }}
                            >
                                <button type="button" className="btn btn-primary" data-clipboard-target="#copyOTP">
                                    <IconCopy className="ltr:mr-2 rtl:ml-2" />
                                    Copy from Paragraph
                                </button>
                            </CopyToClipboard>
                        </div>
                    </form>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsFormsClipboardTextFromParagraph;
