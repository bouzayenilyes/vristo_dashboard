'use client';
import Dropdown from '@/components/dropdown';
import IconCaretDown from '@/components/icon/icon-caret-down';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import { IRootState } from '@/store';
import React from 'react';
import { useSelector } from 'react-redux';

const ElementsDropdownsBasic = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl';
    return (
        <PanelCodeHighlight
            title="Basic"
            codeHighlight={`import Dropdown from '@/components/dropdown';

const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl';

<div className="dropdown">
    <Dropdown
        placement={\`\${isRtl ? 'bottom-start' : 'bottom-end'}\`}
        btnClassName="btn btn-primary dropdown-toggle"
        button={
            <>
                Action
                <span>
                    <svg>...</svg>
                </span>
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
            placement={\`\${isRtl ? 'bottom-start' : 'bottom-end'}\`}
            btnClassName="btn btn-outline-primary dropdown-toggle"
            button={
                <>
                    Action
                    <span>
                        <svg>...</svg>
                    </span>
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
                                placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                                btnClassName="btn btn-primary dropdown-toggle"
                                button={
                                    <>
                                        Action
                                        <span>
                                            <IconCaretDown className="inline-block ltr:ml-1 rtl:mr-1" />
                                        </span>
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
                                placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                                btnClassName="btn btn-outline-primary dropdown-toggle"
                                button={
                                    <>
                                        Action
                                        <span>
                                            <IconCaretDown className="inline-block ltr:ml-1 rtl:mr-1" />
                                        </span>
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

export default ElementsDropdownsBasic;
