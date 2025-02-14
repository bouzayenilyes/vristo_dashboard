'use client';
import Dropdown from '@/components/dropdown';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import { IRootState } from '@/store';
import React from 'react';
import { useSelector } from 'react-redux';

const ElementsDropdownsSplit = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl';
    return (
        <PanelCodeHighlight
            title="Split"
            codeHighlight={`import Dropdown from '@/components/dropdown';

const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl';

<div className="inline-flex">
    <button className="btn btn-primary ltr:rounded-r-none rtl:rounded-l-none">Action</button>
    <div className="dropdown">
        <Dropdown
            placement={\`\${isRtl ? 'bottom-start' : 'bottom-end'}\`}
            btnClassName="btn dropdown-toggle btn-primary ltr:rounded-l-none rtl:rounded-r-none border-l-[#4468fd] before:border-[5px] before:border-l-transparent before:border-r-transparent before:border-t-inherit before:border-b-0 before:inline-block before:border-t-white-light h-full"
            button={<span className="sr-only">Toggle dropdown</span>}
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
<div className="inline-flex">
    <button className="btn btn-outline-primary ltr:rounded-r-none rtl:rounded-l-none">Action</button>
    <div className="dropdown">
        <Dropdown
            placement={\`\${isRtl ? 'bottom-start' : 'bottom-end'}\`}
            btnClassName="btn btn-outline-primary ltr:rounded-l-none rtl:rounded-r-none dropdown-toggle before:border-[5px] before:border-l-transparent before:border-r-transparent before:border-t-inherit before:border-b-0 before:inline-block hover:before:border-t-white-light h-full"
            button={<span className="sr-only">Toggle dropdown</span>}
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
                        <div className="inline-flex">
                            <button className="btn btn-primary ltr:rounded-r-none rtl:rounded-l-none">Action</button>
                            <div className="dropdown">
                                <Dropdown
                                    placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                                    btnClassName="btn dropdown-toggle btn-primary ltr:rounded-l-none rtl:rounded-r-none border-l-[#4468fd] before:border-[5px] before:border-l-transparent before:border-r-transparent before:border-t-inherit before:border-b-0 before:inline-block before:border-t-white-light h-full"
                                    button={<span className="sr-only">Toggle dropdown</span>}
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
                    <div className="flex items-center justify-center">
                        <div className="inline-flex">
                            <button className="btn btn-outline-primary ltr:rounded-r-none rtl:rounded-l-none">Action</button>
                            <div className="dropdown">
                                <Dropdown
                                    placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                                    btnClassName="btn btn-outline-primary ltr:rounded-l-none rtl:rounded-r-none dropdown-toggle before:border-[5px] before:border-l-transparent before:border-r-transparent before:border-t-inherit before:border-b-0 before:inline-block hover:before:border-t-white-light h-full"
                                    button={<span className="sr-only">Toggle dropdown</span>}
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

export default ElementsDropdownsSplit;
