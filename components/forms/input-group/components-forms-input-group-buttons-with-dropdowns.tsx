'use client';
import Dropdown from '@/components/dropdown';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import { IRootState } from '@/store';
import React from 'react';
import { useSelector } from 'react-redux';

const ComponentsFormsInputGroupButtonsWithDropdowns = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl';
    return (
        <PanelCodeHighlight
            title="Buttons with dropdowns"
            codeHighlight={`import Dropdown from '@/components/Dropdown';
<form>
    <div className="mb-5 dropdown">
        <label htmlFor="dropdownLeftButton">Left</label>
        <div className="flex">
            <div className="dropdown">
                <Dropdown
                    offset={[0, 5]}
                    placement={\`\${isRtl ? 'bottom-end' : 'bottom-start'}\`}
                    btnClassName="bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] cursor-pointer pt-2 pb-2"
                    button={<span>Dropdown</span>}
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
            <input id="dropdownLeftButton" type="text" placeholder="" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
        </div>
    </div>

    <div className="dropdown">
        <label htmlFor="dropdownRightButton">Right</label>
        <div className="flex">
            <input id="dropdownRightButton" type="text" placeholder="" className="form-input ltr:rounded-r-none rtl:rounded-l-none" />
            <div className="dropdown">
                <Dropdown
                    offset={[0, 5]}
                    placement={\`\${isRtl ? 'bottom-start' : 'bottom-end'}\`}
                    btnClassName="bg-danger text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border ltr:border-l-0 rtl:border-r-0 border-white-light dark:border-[#17263c] cursor-pointer pt-2 pb-2"
                    button={<span>Dropdown</span>}
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
</form>`}
        >
            <div className="mb-5">
                <form>
                    <div className="dropdown mb-5">
                        <label htmlFor="dropdownLeftButton">Left</label>
                        <div className="flex">
                            <div className="dropdown">
                                <Dropdown
                                    offset={[0, 5]}
                                    placement={`${isRtl ? 'bottom-end' : 'bottom-start'}`}
                                    btnClassName="bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] cursor-pointer pt-2 pb-2"
                                    button={<span>Dropdown</span>}
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
                            <input id="dropdownLeftButton" type="text" placeholder="" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
                        </div>
                    </div>

                    <div className="dropdown">
                        <label htmlFor="dropdownRightButton">Right</label>
                        <div className="flex">
                            <input id="dropdownRightButton" type="text" placeholder="" className="form-input ltr:rounded-r-none rtl:rounded-l-none" />
                            <div className="dropdown">
                                <Dropdown
                                    offset={[0, 5]}
                                    placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                                    btnClassName="bg-danger text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border ltr:border-l-0 rtl:border-r-0 border-white-light dark:border-[#17263c] cursor-pointer pt-2 pb-2"
                                    button={<span>Dropdown</span>}
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
                </form>
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsFormsInputGroupButtonsWithDropdowns;
