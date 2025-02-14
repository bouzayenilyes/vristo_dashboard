'use client';
import Dropdown from '@/components/dropdown';
import IconCaretDown from '@/components/icon/icon-caret-down';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import { IRootState } from '@/store';
import React from 'react';
import { useSelector } from 'react-redux';

const ElementsButtonGroupVertical = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl';
    return (
        <PanelCodeHighlight
            title="Vertical"
            codeHighlight={`import Dropdown from '@/components/dropdown';

<div className="relative inline-flex align-middle flex-col items-start justify-center">
    <button type="button" className="btn btn-dark rounded-b-none w-full">
        Button
    </button>
    <div className="relative">
        <div className="dropdown">
            <Dropdown
                offset={[0, 5]}
                placement={\`\${isRtl ? 'bottom-start' : 'bottom-end'}\`}
                btnClassName="btn dropdown-toggle btn-dark rounded-none"
                button={
                    <>
                        Dropdown
                        <span>
                            <svg>...</svg>
                        </span>
                    </>
                }
            >
                <ul>
                    <li>
                        <button type="button">Dropdown link</button>
                    </li>
                    <li>
                        <button type="button">Dropdown link</button>
                    </li>
                </ul>
            </Dropdown>
        </div>
    </div>
    <button type="button" className="btn btn-dark rounded-none w-full">
        Button
    </button>
    <button type="button" className="btn btn-dark rounded-none w-full">
        Button
    </button>
    <div className="relative">
        <div className="dropdown">
            <Dropdown
                offset={[0, 5]}
                placement={\`\${isRtl ? 'top-start' : 'top-end'}\`}
                btnClassName="btn dropdown-toggle btn-dark rounded-t-none"
                button={
                    <>
                        Dropdown
                        <span>
                            <svg>...</svg>
                        </span>
                    </>
                }
            >
                <ul>
                    <li>
                        <button type="button">Dropdown link</button>
                    </li>
                    <li>
                        <button type="button">Dropdown link</button>
                    </li>
                </ul>
            </Dropdown>
        </div>
    </div>
</div>`}
        >
            <div className="mb-5 text-center">
                <div className="relative inline-flex flex-col items-start justify-center align-middle">
                    <button type="button" className="btn btn-dark w-full rounded-b-none">
                        Button
                    </button>
                    <div className="relative">
                        <div className="dropdown">
                            <Dropdown
                                offset={[0, 5]}
                                placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                                btnClassName="btn dropdown-toggle btn-dark rounded-none"
                                button={
                                    <>
                                        Dropdown
                                        <span className="shrink-0">
                                            <IconCaretDown className="inline-block shrink-0 ltr:ml-2 rtl:mr-2" />
                                        </span>
                                    </>
                                }
                            >
                                <ul>
                                    <li>
                                        <button type="button">Dropdown link</button>
                                    </li>
                                    <li>
                                        <button type="button">Dropdown link</button>
                                    </li>
                                </ul>
                            </Dropdown>
                        </div>
                    </div>
                    <button type="button" className="btn btn-dark w-full rounded-none">
                        Button
                    </button>
                    <button type="button" className="btn btn-dark w-full rounded-none">
                        Button
                    </button>
                    <div className="relative">
                        <div className="dropdown">
                            <Dropdown
                                offset={[0, 5]}
                                placement={`${isRtl ? 'top-start' : 'top-end'}`}
                                btnClassName="btn dropdown-toggle btn-dark rounded-t-none"
                                button={
                                    <>
                                        Dropdown
                                        <span className="shrink-0">
                                            <IconCaretDown className="inline-block shrink-0 ltr:ml-2 rtl:mr-2" />
                                        </span>
                                    </>
                                }
                            >
                                <ul>
                                    <li>
                                        <button type="button">Dropdown link</button>
                                    </li>
                                    <li>
                                        <button type="button">Dropdown link</button>
                                    </li>
                                </ul>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ElementsButtonGroupVertical;
