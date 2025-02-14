'use client';
import Dropdown from '@/components/dropdown';
import IconCaretDown from '@/components/icon/icon-caret-down';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import { IRootState } from '@/store';
import React from 'react';
import { useSelector } from 'react-redux';

const ElementsDropdownsDropLeft = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl';
    return (
        <PanelCodeHighlight
            title="Dropleft"
            codeHighlight={`import Dropdown from '@/components/dropdown';

const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl';

<div className="dropdown">
    <Dropdown
        placement={\`\${isRtl ? 'left-end' : 'left-start'}\`}
        btnClassName="btn btn-danger dropdown-toggle !flex"
        button={
            <>
                <svg>...</svg>
                Left
            </>
        }
    >
        <ul className="!min-w-[170px]">
            <li>
                <button type="button">
                    Action
                </button>
            </li>
            <li>
                <button type="button">
                    Another action
                </button>
            </li>
            <li>
                <button type="button">
                    Something else here
                </button>
            </li>
            <li>
                <button type="button">
                    Separated link
                </button>
            </li>
        </ul>
    </Dropdown>
</div>

<div className="dropdown">
    <Dropdown
        placement={\`\${isRtl ? 'left-end' : 'left-start'}\`}
        btnClassName="btn btn-outline-danger dropdown-toggle !flex"
        button={
            <>
                <svg>...</svg>
                Left
            </>
        }
    >
        <ul className="!min-w-[170px]">
            <li>
                <button type="button">
                    Action
                </button>
            </li>
            <li>
                <button type="button">
                    Another action
                </button>
            </li>
            <li>
                <button type="button">
                    Something else here
                </button>
            </li>
            <li>
                <button type="button">
                    Separated link
                </button>
            </li>
        </ul>
    </Dropdown>
</div>`}
        >
            <div className="mb-5">
                <div className="flex w-full flex-wrap justify-around gap-7">
                    <div className="flex items-center justify-center">
                        <div className="dropdown">
                            <Dropdown
                                placement={`${isRtl ? 'left-end' : 'left-start'}`}
                                btnClassName="btn btn-danger dropdown-toggle !flex"
                                button={
                                    <>
                                        <IconCaretDown className="inline-block rotate-90 ltr:mr-1 rtl:ml-1 rtl:-rotate-90" />
                                        Left
                                    </>
                                }
                            >
                                <ul className="!min-w-[170px]">
                                    <li>
                                        <button type="button">Action</button>
                                    </li>
                                    <li>
                                        <button type="button">Another action</button>
                                    </li>
                                    <li>
                                        <button type="button">Something else here</button>
                                    </li>
                                    <li>
                                        <button type="button">Separated link</button>
                                    </li>
                                </ul>
                            </Dropdown>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="dropdown">
                            <Dropdown
                                placement={`${isRtl ? 'left-end' : 'left-start'}`}
                                btnClassName="btn btn-outline-danger dropdown-toggle !flex"
                                button={
                                    <>
                                        <IconCaretDown className="inline-block rotate-90 ltr:mr-1 rtl:ml-1 rtl:-rotate-90" />
                                        Left
                                    </>
                                }
                            >
                                <ul className="!min-w-[170px]">
                                    <li>
                                        <button type="button">Action</button>
                                    </li>
                                    <li>
                                        <button type="button">Another action</button>
                                    </li>
                                    <li>
                                        <button type="button">Something else here</button>
                                    </li>
                                    <li>
                                        <button type="button">Separated link</button>
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

export default ElementsDropdownsDropLeft;
