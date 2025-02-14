'use client';
import Dropdown from '@/components/dropdown';
import IconCaretDown from '@/components/icon/icon-caret-down';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import { IRootState } from '@/store';
import React from 'react';
import { useSelector } from 'react-redux';

const ComponentsFormsInputGroupSegmentedButtons = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl';
    return (
        <PanelCodeHighlight
            title="Segmented buttons"
            codeHighlight={`import Dropdown from '@/components/Dropdown';
<form>
    <div className="mb-5 dropdown">
        <label htmlFor="btnLeft">Left</label>
        <div className="flex">
            <button
                type="button"
                className="bg-info text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-info"
            >
                Action
            </button>
            <div className="dropdown">
                <Dropdown
                    offset={[0, 5]}
                    placement={\`\${isRtl ? 'bottom-end' : 'bottom-start'}\`}
                    btnClassName="bg-white dark:bg-[#1b2e4b] text-info flex justify-center items-center rounded-none px-3 font-semibold border border-info cursor-pointer pt-2 pb-2"
                    button={
                        <svg> ... </svg>
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

            <input id="btnLeft" type="text" placeholder="" className="form-input ltr:rounded-l-none rtl:rounded-r-none ltr:border-l-0 rtl:border-r-0" />
        </div>
    </div>
    <div className="dropdown">
        <label htmlFor="btnLeft">Right</label>
        <div className="flex">
            <input id="btnRight" type="text" placeholder="" className="form-input ltr:rounded-r-none rtl:rounded-l-none ltr:border-r-0 rtl:border-l-0" />
            <div className="dropdown">
                <Dropdown
                    offset={[0, 5]}
                    placement={\`\${isRtl ? 'bottom-end' : 'bottom-start'}\`}
                    btnClassName="bg-white dark:bg-[#1b2e4b] text-secondary flex justify-center items-center rounded-none px-3 font-semibold border border-secondary pt-2 pb-2"
                    button={
                        <svg> ... </svg>
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
            <button
                type="button"
                className="bg-secondary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border ltr:border-l-0 rtl:border-r-0 border-secondary cursor-pointer"
            >
                Action
            </button>
        </div>
    </div>
</form>`}
        >
            <div className="mb-5">
                <form>
                    <div className="dropdown mb-5">
                        <label htmlFor="btnLeft">Left</label>
                        <div className="flex">
                            <button
                                type="button"
                                className="flex items-center justify-center border border-info bg-info px-3 font-semibold text-white ltr:rounded-l-md ltr:border-r-0 rtl:rounded-r-md rtl:border-l-0"
                            >
                                Action
                            </button>
                            <div className="dropdown">
                                <Dropdown
                                    offset={[0, 5]}
                                    placement={`${isRtl ? 'bottom-end' : 'bottom-start'}`}
                                    btnClassName="bg-white dark:bg-[#1b2e4b] text-info flex justify-center items-center rounded-none px-3 font-semibold border border-info cursor-pointer pt-2 pb-2"
                                    button={<IconCaretDown className="h-5 w-5" />}
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

                            <input id="btnLeft" type="text" placeholder="" className="form-input ltr:rounded-l-none ltr:border-l-0 rtl:rounded-r-none rtl:border-r-0" />
                        </div>
                    </div>
                    <div className="dropdown">
                        <label htmlFor="btnLeft">Right</label>
                        <div className="flex">
                            <input id="btnRight" type="text" placeholder="" className="form-input ltr:rounded-r-none ltr:border-r-0 rtl:rounded-l-none rtl:border-l-0" />
                            <div className="dropdown">
                                <Dropdown
                                    offset={[0, 5]}
                                    placement={`${isRtl ? 'bottom-end' : 'bottom-start'}`}
                                    btnClassName="bg-white dark:bg-[#1b2e4b] text-secondary flex justify-center items-center rounded-none px-3 font-semibold border border-secondary pt-2 pb-2"
                                    button={<IconCaretDown className="h-5 w-5" />}
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
                            <button
                                type="button"
                                className="flex cursor-pointer items-center justify-center border border-secondary bg-secondary px-3 font-semibold text-white ltr:rounded-r-md ltr:border-l-0 rtl:rounded-l-md rtl:border-r-0"
                            >
                                Action
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsFormsInputGroupSegmentedButtons;
