'use client';
import IconCopy from '@/components/icon/icon-copy';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import Swal from 'sweetalert2';

const ComponentsFormsClipboardAdvanced = () => {
    const message4 = 'http://www.admin-dashboard.com/code';
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
            title="Copy Hidden Text (Advanced)"
            codeHighlight={`import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
const message4 = 'http://www.admin-dashboard.com/code';

<form>
    <p className="mb-3 font-semibold">
        <span> {'Link -> '} </span>
        <span id="copyLink"> http://www.admin-dashboard.com/code</span>
    </p>
    <span className="absolute opacity-0" id="copyHiddenCode">
        2291
    </span>
    <div className="sm:flex space-y-2 sm:space-y-0 sm:space-x-2 rtl:space-x-reverse mt-5">
        <CopyToClipboard
            text={message4}
            onCopy={(text, result) => {
                if (result) {
                    showMessage();
                }
            }}
        >
            <button type="button" className="btn btn-primary">
                <svg>...</svg>
                Copy Link
            </button>
        </CopyToClipboard>
        <CopyToClipboard
            text={'2291'}
            onCopy={(text, result) => {
                if (result) {
                    showMessage();
                }
            }}
        >
            <button type="button" className="btn btn-dark ">
                <svg>...</svg>
                Copy Hidden Code
            </button>
        </CopyToClipboard>
    </div>
</form>`}
        >
            <div className="mb-5">
                <div className="rounded bg-[#f1f2f3] p-5 dark:bg-[#060818]">
                    <form>
                        <p className="mb-3 font-semibold">
                            <span> {'Link -> '} </span>
                            <span id="copyLink"> http://www.admin-dashboard.com/code</span>
                        </p>
                        <span className="absolute opacity-0" id="copyHiddenCode">
                            2291
                        </span>
                        <div className="mt-5 space-y-2 rtl:space-x-reverse sm:flex sm:space-x-2 sm:space-y-0">
                            <CopyToClipboard
                                text={message4}
                                onCopy={(text, result) => {
                                    if (result) {
                                        showMessage();
                                    }
                                }}
                            >
                                <button type="button" className="btn btn-primary">
                                    <IconCopy className="ltr:mr-2 rtl:ml-2" />
                                    Copy Link
                                </button>
                            </CopyToClipboard>
                            <CopyToClipboard
                                text={'2291'}
                                onCopy={(text, result) => {
                                    if (result) {
                                        showMessage();
                                    }
                                }}
                            >
                                <button type="button" className="btn btn-dark ">
                                    <IconCopy className="ltr:mr-2 rtl:ml-2" />
                                    Copy Hidden Code
                                </button>
                            </CopyToClipboard>
                        </div>
                    </form>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsFormsClipboardAdvanced;
