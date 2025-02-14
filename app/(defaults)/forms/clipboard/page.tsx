import ComponentsFormsClipboardAdvanced from '@/components/forms/clipboard/components-forms-clipboard-advanced';
import ComponentsFormsClipboardInput from '@/components/forms/clipboard/components-forms-clipboard-input';
import ComponentsFormsClipboardTextFromParagraph from '@/components/forms/clipboard/components-forms-clipboard-text-from-paragraph';
import ComponentsFormsClipboardTextarea from '@/components/forms/clipboard/components-forms-clipboard-textarea';
import IconBell from '@/components/icon/icon-bell';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
    title: 'Clipboard',
};

const Clipboard = () => {
    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link href="#" className="text-primary hover:underline">
                        Forms
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Clipboard</span>
                </li>
            </ul>
            <div className="space-y-8 pt-5">
                <div className="panel flex items-center overflow-x-auto whitespace-nowrap p-3 text-primary">
                    <div className="rounded-full bg-primary p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3">
                        <IconBell />
                    </div>
                    <span className="ltr:mr-3 rtl:ml-3">Documentation: </span>
                    <a href="https://www.npmjs.com/package/react-copy-to-clipboard" target="_blank" className="block hover:underline" rel="noreferrer">
                        https://www.npmjs.com/package/react-copy-to-clipboard
                    </a>
                </div>
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    {/* Copy from input */}
                    <ComponentsFormsClipboardInput />

                    {/* Copy form Textarea */}
                    <ComponentsFormsClipboardTextarea />

                    {/* Copy Text from Paragraph */}
                    <ComponentsFormsClipboardTextFromParagraph />

                    {/* Advanced */}
                    <ComponentsFormsClipboardAdvanced />
                </div>
            </div>
        </div>
    );
};

export default Clipboard;
