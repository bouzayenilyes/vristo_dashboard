'use client';
import Dropdown from '@/components/dropdown';
import IconCaretDown from '@/components/icon/icon-caret-down';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import { IRootState } from '@/store';
import React from 'react';
import { useSelector } from 'react-redux';

const ElementsDropdownsGroupedBtn = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl';
    return (
        <PanelCodeHighlight
            title="Grouped Dropdown Buttons"
            codeHighlight={`import Dropdown from '@/components/dropdown';

const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl';

<div className="relative inline-flex align-middle">
    <button type="button" className="btn btn-secondary ltr:rounded-r-none rtl:rounded-l-none">
        1
    </button>
    <button type="button" className="btn btn-secondary rounded-none">
        2
    </button>
    <div className="relative inline-flex align-middle">
        <div className="dropdown">
            <Dropdown
                placement={\`\${isRtl ? 'bottom-start' : 'bottom-end'}\`}
                btnClassName="btn dropdown-toggle btn-secondary flex ltr:rounded-l-none rtl:rounded-r-none"
                button={
                    <>
                        Dropdown
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
    </div>
</div>
<div className="relative inline-flex align-middle">
    <button type="button" className="btn btn-outline-secondary ltr:border-r-0 rtl:border-l-0 ltr:rounded-r-none rtl:rounded-l-none">
        1
    </button>
    <button type="button" className="btn btn-outline-secondary ltr:border-r-0 rtl:border-l-0 rounded-none">
        2
    </button>
    <div className="dropdown">
        <Dropdown
            placement={\`\${isRtl ? 'bottom-start' : 'bottom-end'}\`}
            btnClassName="btn dropdown-toggle btn-outline-secondary flex ltr:rounded-l-none rtl:rounded-r-none"
            button={
                <>
                    Dropdown
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
</div>`}
        >
            <div className="mb-5">
                <div className="flex w-full flex-wrap justify-around gap-7">
                    <div className="flex items-center justify-center">
                        <div className="relative inline-flex align-middle">
                            <button type="button" className="btn btn-secondary ltr:rounded-r-none rtl:rounded-l-none">
                                1
                            </button>
                            <button type="button" className="btn btn-secondary rounded-none">
                                2
                            </button>
                            <div className="relative inline-flex align-middle">
                                <div className="dropdown">
                                    <Dropdown
                                        placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                                        btnClassName="btn dropdown-toggle btn-secondary flex ltr:rounded-l-none rtl:rounded-r-none"
                                        button={
                                            <>
                                                Dropdown
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
                    <div className="flex items-center justify-center">
                        <div className="relative inline-flex align-middle">
                            <button type="button" className="btn btn-outline-secondary ltr:rounded-r-none ltr:border-r-0 rtl:rounded-l-none rtl:border-l-0">
                                1
                            </button>
                            <button type="button" className="btn btn-outline-secondary rounded-none ltr:border-r-0 rtl:border-l-0">
                                2
                            </button>
                            <div className="dropdown">
                                <Dropdown
                                    placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                                    btnClassName="btn dropdown-toggle btn-outline-secondary flex ltr:rounded-l-none rtl:rounded-r-none"
                                    button={
                                        <>
                                            Dropdown
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
            </div>
        </PanelCodeHighlight>
    );
};

export default ElementsDropdownsGroupedBtn;
