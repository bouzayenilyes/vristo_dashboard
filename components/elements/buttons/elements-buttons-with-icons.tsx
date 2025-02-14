import IconDownload from '@/components/icon/icon-download';
import IconPencil from '@/components/icon/icon-pencil';
import IconSettings from '@/components/icon/icon-settings';
import IconSun from '@/components/icon/icon-sun';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import React from 'react';

const ElementsButtonsWithIcons = () => {
    return (
        <PanelCodeHighlight
            title="Button with Icons"
            codeHighlight={`{/*Button with Icons*/}

<button type="button" className="btn btn-primary"><svg> ... </svg>Left</button>

<button type="button" className="btn btn-warning rounded-full">Right<svg> ... </svg></button>

<button type="button" className="btn btn-danger"><svg> ... </svg></button>

<button type="button" className="btn btn-dark w-10 h-10 p-0 rounded-full"><svg> ... </svg></button>`}
        >
            <div className="mb-5">
                <div className="flex flex-wrap items-center justify-center gap-2">
                    <button type="button" className="btn btn-primary">
                        <IconSettings className="h-5 w-5 shrink-0 ltr:mr-1.5 rtl:ml-1.5" />
                        Left
                    </button>
                    <button type="button" className="btn btn-warning rounded-full">
                        Right
                        <IconPencil className="h-5 w-5 shrink-0 ltr:ml-1.5 rtl:mr-1.5" />
                    </button>
                    <button type="button" className="btn btn-danger">
                        <IconDownload />
                    </button>
                    <button type="button" className="btn btn-dark h-10 w-10 rounded-full p-0">
                        <IconSun />
                    </button>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ElementsButtonsWithIcons;
