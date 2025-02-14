'use client';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import React, { useState } from 'react';
import AnimateHeight from 'react-animate-height';

const ComponentsAccordionsNoIcons = () => {
    const [active3, setActive3] = useState<string>('1');
    const togglePara3 = (value: string) => {
        setActive3((oldValue) => {
            return oldValue === value ? '' : value;
        });
    };
    return (
        <PanelCodeHighlight
            title="No Icons"
            codeHighlight={`import AnimateHeight from 'react-animate-height';
import { useState } from 'react';

const [active3, setActive3] = useState<string>('1');
    const togglePara3 = (value: string) => {
        setActive3((oldValue) => {
            return oldValue === value ? '' : value;
        });
    };

<div className="mb-5">
    <div className="space-y-2 font-semibold">
        <div className="border border-[#d3d3d3] rounded dark:border-[#1b2e4b]">
            <button
                type="button"
                className={\`p-4 w-full flex items-center text-white-dark dark:bg-[#1b2e4b] \${active3 === '1' ? '!text-primary' : ''}\`}
                onClick={() => togglePara3('1')}
            >
                Collapsible Group Item #1
            </button>
            <div>
                <AnimateHeight duration={300} height={active3 === '1' ? 'auto' : 0}>
                    <div className="space-y-2 p-4 text-white-dark text-[13px] border-t border-[#d3d3d3] dark:border-[#1b2e4b]">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </AnimateHeight>
            </div>
        </div>
        <div className="border border-[#d3d3d3] dark:border-[#1b2e4b] rounded">
            <button
                type="button"
                className={\`p-4 w-full flex items-center text-white-dark dark:bg-[#1b2e4b] \${active3 === '2' ? '!text-primary' : ''}\`}
                onClick={() => togglePara3('2')}
            >
                Collapsible Group Item #2
            </button>
            <div>
                <AnimateHeight duration={300} height={active3 === '2' ? 'auto' : 0}>
                    <div className="p-4 text-[13px] border-t border-[#d3d3d3] dark:border-[#1b2e4b]">
                        <ul className="space-y-1">
                            <li>
                                <button type="button">Apple</button>
                            </li>
                            <li>
                                <button type="button">Orange</button>
                            </li>
                            <li>
                                <button type="button">Banana</button>
                            </li>
                            <li>
                                <button type="button">list</button>
                            </li>
                        </ul>
                    </div>
                </AnimateHeight>
            </div>
        </div>
        <div className="border border-[#d3d3d3] dark:border-[#1b2e4b] rounded">
            <button
                type="button"
                className={\`p-4 w-full flex items-center text-white-dark dark:bg-[#1b2e4b] \${active3 === '3' ? '!text-primary' : ''}\`}
                onClick={() => togglePara3('3')}
            >
                Collapsible Group Item #3
            </button>
            <div>
                <AnimateHeight duration={300} height={active3 === '3' ? 'auto' : 0}>
                    <div className="p-4 text-[13px] border-t border-[#d3d3d3] dark:border-[#1b2e4b]">
                        <p>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur
                            butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                            labore sustainable VHS.
                        </p>
                        <button type="button" className="btn btn-primary mt-4">
                            Accept
                        </button>
                    </div>
                </AnimateHeight>
            </div>
        </div>
    </div>
</div>`}
        >
            <div className="mb-5">
                <div className="space-y-2 font-semibold">
                    <div className="rounded border border-[#d3d3d3] dark:border-[#1b2e4b]">
                        <button type="button" className={`flex w-full items-center p-4 text-white-dark dark:bg-[#1b2e4b] ${active3 === '1' ? '!text-primary' : ''}`} onClick={() => togglePara3('1')}>
                            Collapsible Group Item #1
                        </button>
                        <div>
                            <AnimateHeight duration={300} height={active3 === '1' ? 'auto' : 0}>
                                <div className="space-y-2 border-t border-[#d3d3d3] p-4 text-[13px] text-white-dark dark:border-[#1b2e4b]">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </div>
                            </AnimateHeight>
                        </div>
                    </div>
                    <div className="rounded border border-[#d3d3d3] dark:border-[#1b2e4b]">
                        <button type="button" className={`flex w-full items-center p-4 text-white-dark dark:bg-[#1b2e4b] ${active3 === '2' ? '!text-primary' : ''}`} onClick={() => togglePara3('2')}>
                            Collapsible Group Item #2
                        </button>
                        <div>
                            <AnimateHeight duration={300} height={active3 === '2' ? 'auto' : 0}>
                                <div className="border-t border-[#d3d3d3] p-4 text-[13px] dark:border-[#1b2e4b]">
                                    <ul className="space-y-1">
                                        <li>
                                            <button type="button">Apple</button>
                                        </li>
                                        <li>
                                            <button type="button">Orange</button>
                                        </li>
                                        <li>
                                            <button type="button">Banana</button>
                                        </li>
                                        <li>
                                            <button type="button">list</button>
                                        </li>
                                    </ul>
                                </div>
                            </AnimateHeight>
                        </div>
                    </div>
                    <div className="rounded border border-[#d3d3d3] dark:border-[#1b2e4b]">
                        <button type="button" className={`flex w-full items-center p-4 text-white-dark dark:bg-[#1b2e4b] ${active3 === '3' ? '!text-primary' : ''}`} onClick={() => togglePara3('3')}>
                            Collapsible Group Item #3
                        </button>
                        <div>
                            <AnimateHeight duration={300} height={active3 === '3' ? 'auto' : 0}>
                                <div className="border-t border-[#d3d3d3] p-4 text-[13px] dark:border-[#1b2e4b]">
                                    <p>
                                        {`Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo. Leggings occaecat craft
                          beer farm-to-table, raw denim aesthetic synth nesciunt
                          you probably haven't heard of them accusamus labore
                          sustainable VHS.`}
                                    </p>
                                    <button type="button" className="btn btn-primary mt-4">
                                        Accept
                                    </button>
                                </div>
                            </AnimateHeight>
                        </div>
                    </div>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsAccordionsNoIcons;
