'use client';
import Dropdown from '@/components/dropdown';
import IconSettings from '@/components/icon/icon-settings';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import { IRootState } from '@/store';
import React from 'react';
import { useSelector } from 'react-redux';

const ComponentsFormsInputGroupDropdownIcon = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl';
    return (
        <PanelCodeHighlight
            title="Dropdown Icon"
            codeHighlight={`import Dropdown from '@/components/Dropdown';
<div className="flex">
    <div className="dropdown">
        <Dropdown
            offset={[0, 5]}
            placement={\`\${isRtl ? 'bottom-end' : 'bottom-start'}\`}
            btnClassName="bg-primary flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] cursor-pointer pt-2 pb-2"
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
    <input id="dropdownLeft" type="text" placeholder="Dropdown" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
</div>

<div className="flex">
    <input id="dropdownLeft" type="text" placeholder="Dropdown" className="form-input ltr:rounded-r-none rtl:rounded-l-none" />
    <div className="dropdown">
        <Dropdown
            offset={[0, 5]}
            placement={\`\${isRtl ? 'bottom-start' : 'bottom-end'}\`}
            btnClassName="bg-success flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border ltr:border-l-0 rtl:border-r-0 border-white-light dark:border-[#17263c] cursor-pointer pt-2 pb-2"
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
</div>`}
        >
            <div className="mb-5">
                <div>
                    <label htmlFor="dropdownLeft">Left</label>
                    <div className="flex">
                        <div className="dropdown">
                            <Dropdown
                                offset={[0, 5]}
                                placement={`${isRtl ? 'bottom-end' : 'bottom-start'}`}
                                btnClassName="bg-primary flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] cursor-pointer pt-2 pb-2"
                                button={<IconSettings className="h-5 w-5 text-white" />}
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
                        <input id="dropdownLeft" type="text" placeholder="Dropdown" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
                    </div>
                </div>
                <div className="mt-5">
                    <label htmlFor="dropdownRight">Right</label>
                    <div className="flex">
                        <input id="dropdownLeft" type="text" placeholder="Dropdown" className="form-input ltr:rounded-r-none rtl:rounded-l-none" />
                        <div className="dropdown">
                            <Dropdown
                                offset={[0, 5]}
                                placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                                btnClassName="bg-success flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border ltr:border-l-0 rtl:border-r-0 border-white-light dark:border-[#17263c] cursor-pointer pt-2 pb-2"
                                button={<IconSettings className="h-5 w-5 text-white" />}
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

export default ComponentsFormsInputGroupDropdownIcon;
