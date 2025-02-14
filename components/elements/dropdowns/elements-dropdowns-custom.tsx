'use client';
import Dropdown from '@/components/dropdown';
import IconHorizontalDots from '@/components/icon/icon-horizontal-dots';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import { IRootState } from '@/store';
import React from 'react';
import { useSelector } from 'react-redux';

const ElementsDropdownsCustom = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl';
    return (
        <PanelCodeHighlight
            title="Custom Dropdown"
            codeHighlight={`import Dropdown from '@/components/dropdown';

const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl';

<div className="dropdown">
    <Dropdown
        placement={\`\${isRtl ? 'top-end' : 'top-start'}\`}
        btnClassName="btn p-0 rounded-none border-0 shadow-none dropdown-toggle text-black dark:text-white-dark hover:text-primary dark:hover:text-primary"
        button={
            <svg>...</svg>
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
        placement={\`\${isRtl ? 'top-end' : 'top-start'}\`}
        btnClassName="btn p-0 rounded-none border-0 shadow-none dropdown-toggle text-black dark:text-white-dark hover:text-primary dark:hover:text-primary"
        button={
            <svg>...</svg>
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
        placement={\`\${isRtl ? 'top-end' : 'top-start'}\`}
        btnClassName="btn p-0 rounded-none border-0 shadow-none dropdown-toggle text-black dark:text-white-dark hover:text-primary dark:hover:text-primary"
        button={
            <svg>...</svg>
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
        placement={\`\${isRtl ? 'top-start' : 'top-end'}\`}
        btnClassName="btn p-0 rounded-none border-0 shadow-none dropdown-toggle text-black dark:text-white-dark hover:text-primary dark:hover:text-primary"
        button={
            <svg>...</svg>
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
                <div className="flex w-full">
                    <div className="flex w-1/4 items-center justify-center">
                        <div className="dropdown">
                            <Dropdown
                                placement={`${isRtl ? 'top-end' : 'top-start'}`}
                                btnClassName="btn p-0 rounded-none border-0 shadow-none dropdown-toggle text-black dark:text-white-dark hover:text-primary dark:hover:text-primary"
                                button={<IconHorizontalDots className="h-6 w-6 opacity-70" />}
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
                    <div className="flex w-1/4 items-center justify-center">
                        <div className="dropdown">
                            <Dropdown
                                placement={`${isRtl ? 'top-end' : 'top-start'}`}
                                btnClassName="btn p-0 rounded-none border-0 shadow-none dropdown-toggle text-black dark:text-white-dark hover:text-primary dark:hover:text-primary"
                                button={<IconHorizontalDots className="h-6 w-6 opacity-70" />}
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
                    <div className="flex w-1/4 items-center justify-center">
                        <div className="dropdown">
                            <Dropdown
                                placement={`${isRtl ? 'top-end' : 'top-start'}`}
                                btnClassName="btn p-0 rounded-none border-0 shadow-none dropdown-toggle text-black dark:text-white-dark hover:text-primary dark:hover:text-primary"
                                button={<IconHorizontalDots className="h-6 w-6 opacity-70" />}
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
                    <div className="flex w-1/4 items-center justify-center">
                        <div className="dropdown">
                            <Dropdown
                                placement={`${isRtl ? 'top-start' : 'top-end'}`}
                                btnClassName="btn p-0 rounded-none border-0 shadow-none dropdown-toggle text-black dark:text-white-dark hover:text-primary dark:hover:text-primary"
                                button={<IconHorizontalDots className="h-6 w-6 opacity-70" />}
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

export default ElementsDropdownsCustom;
