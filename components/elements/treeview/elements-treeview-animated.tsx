'use client';
import IconCaretDown from '@/components/icon/icon-caret-down';
import IconFolder from '@/components/icon/icon-folder';
import IconTxtFile from '@/components/icon/icon-txt-file';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import React, { useState } from 'react';
import AnimateHeight from 'react-animate-height';

const ElementsTreeviewAnimated = () => {
    const [treeview1, setTreeview1] = useState<string[]>(['images']);
    const [pagesSubMenu, setPagesSubMenu] = useState(false);

    const toggleTreeview1 = (name: any) => {
        if (treeview1.includes(name)) {
            setTreeview1((value) => value.filter((d) => d !== name));
        } else {
            setTreeview1([...treeview1, name]);
        }
    };

    return (
        <PanelCodeHighlight
            title="Animated"
            codeHighlight={`import { useState } from 'react';
import AnimateHeight from 'react-animate-height';

const [treeview1, setTreeview1] = useState<string[]>(['images']);
const [pagesSubMenu, setPagesSubMenu] = useState(false);

const toggleTreeview1 = (name: any) => {
    if (treeview1.includes(name)) {
        setTreeview1((value) => value.filter((d) => d !== name));
    } else {
        setTreeview1([...treeview1, name]);
    }
};

<ul className="font-semibold">
    <li className="py-[5px]">
        <button type="button" className={\`\${treeview1.includes('css') ? 'active' : ''}\`} onClick={() => toggleTreeview1('css')}>
            <svg>...</svg>
            <svg>...</svg>
            CSS
        </button>
        <AnimateHeight duration={300} height={treeview1.includes('css') ? 'auto' : 0}>
            <ul className="ltr:pl-14 rtl:pr-14">
                <li className="py-[5px]">
                    <svg>...</svg>
                    style.css
                </li>
            </ul>
        </AnimateHeight>
    </li>
    <li className="py-[5px]">
        <button type="button" className={\`\${treeview1.includes('images') ? 'active' : ''}\`} onClick={() => toggleTreeview1('images')}>
            <svg>...</svg>
            <svg>...</svg>
            Images
        </button>
        <AnimateHeight duration={300} height={treeview1.includes('images') ? 'auto' : 0}>
            <ul className="ltr:pl-14 rtl:pr-14">
                <li className="py-[5px]">
                    <svg>...</svg>
                    profile-16.jpeg
                </li>
                <li className="py-[5px]">
                    <svg>...</svg>
                    background.png
                </li>
                <li className="py-[5px]">
                    <svg>...</svg>
                    gallery.jpg
                </li>
            </ul>
        </AnimateHeight>
    </li>
    <li className="py-[5px]">
        <button type="button" className={\`\${treeview1.includes('html') ? 'active' : ''}\`} onClick={() => toggleTreeview1('html')}>
            <svg>...</svg>
            <svg>...</svg>
            HTML
        </button>
        <AnimateHeight duration={300} height={treeview1.includes('html') ? 'auto' : 0}>
            <ul className="ltr:pl-14 rtl:pr-14">
                <li className="py-[5px]">
                    <button type="button" className={\`\${pagesSubMenu ? 'open' : ''}\`} onClick={() => setPagesSubMenu(!pagesSubMenu)}>
                        <svg>...</svg>
                        <svg>...</svg>
                        PAGES
                    </button>
                    <AnimateHeight duration={300} height={pagesSubMenu ? 'auto' : 0}>
                        <ul className="ltr:pl-14 rtl:pr-14">
                            <li className="py-[5px]">
                                <svg>...</svg>
                                file name
                            </li>
                            <li className="py-[5px]">
                                <svg>...</svg>
                                file name
                            </li>
                            <li className="py-[5px]">
                                <svg>...</svg>
                                file name
                            </li>
                        </ul>
                    </AnimateHeight>
                </li>
                <li className="py-[5px] ltr:pl-8 rtl:pr-8">
                    <svg>...</svg>
                    file name
                </li>
                <li className="py-[5px] ltr:pl-8 rtl:pr-8">
                    <svg>...</svg>
                    file name
                </li>
            </ul>
        </AnimateHeight>
    </li>
    <li className="py-[5px] ltr:pl-7 rtl:pr-7">
        <svg>...</svg>
        index.html
    </li>
    <li className="py-[5px] ltr:pl-7 rtl:pr-7">
        <svg>...</svg>
        components.html
    </li>
</ul>`}
        >
            <div className="mb-5">
                <ul className="font-semibold">
                    <li className="py-[5px]">
                        <button type="button" className={`${treeview1.includes('css') ? 'active' : ''}`} onClick={() => toggleTreeview1('css')}>
                            <IconCaretDown className={`relative -top-1 inline h-5 w-5 text-primary ltr:mr-2 rtl:ml-2 ${treeview1.includes('css') && 'rotate-180'}`} />
                            <IconFolder className="relative -top-1 inline text-primary ltr:mr-2 rtl:ml-2" />
                            CSS
                        </button>
                        <AnimateHeight duration={300} height={treeview1.includes('css') ? 'auto' : 0}>
                            <ul className="ltr:pl-14 rtl:pr-14">
                                <li className="py-[5px]">
                                    <IconTxtFile className="inline h-4.5 w-4.5 text-primary ltr:mr-2 rtl:ml-2" />
                                    style.css
                                </li>
                            </ul>
                        </AnimateHeight>
                    </li>
                    <li className="py-[5px]">
                        <button type="button" className={`${treeview1.includes('images') ? 'active' : ''}`} onClick={() => toggleTreeview1('images')}>
                            <IconCaretDown className={`relative -top-1 inline h-5 w-5 text-primary ltr:mr-2 rtl:ml-2 ${treeview1.includes('images') && 'rotate-180'}`} />
                            <IconFolder className="relative -top-1 inline text-primary ltr:mr-2 rtl:ml-2" />
                            Images
                        </button>
                        <AnimateHeight duration={300} height={treeview1.includes('images') ? 'auto' : 0}>
                            <ul className="ltr:pl-14 rtl:pr-14">
                                <li className="py-[5px]">
                                    <IconTxtFile className="inline h-4.5 w-4.5 text-primary ltr:mr-2 rtl:ml-2" />
                                    profile-16.jpeg
                                </li>
                                <li className="py-[5px]">
                                    <IconTxtFile className="inline h-4.5 w-4.5 text-primary ltr:mr-2 rtl:ml-2" />
                                    background.png
                                </li>
                                <li className="py-[5px]">
                                    <IconTxtFile className="inline h-4.5 w-4.5 text-primary ltr:mr-2 rtl:ml-2" />
                                    gallery.jpg
                                </li>
                            </ul>
                        </AnimateHeight>
                    </li>
                    <li className="py-[5px]">
                        <button type="button" className={`${treeview1.includes('html') ? 'active' : ''}`} onClick={() => toggleTreeview1('html')}>
                            <IconCaretDown className={`relative -top-1 inline h-5 w-5 text-primary ltr:mr-2 rtl:ml-2 ${treeview1.includes('html') && 'rotate-180'}`} />
                            <IconFolder className="relative -top-1 inline text-primary ltr:mr-2 rtl:ml-2" />
                            HTML
                        </button>
                        <AnimateHeight duration={300} height={treeview1.includes('html') ? 'auto' : 0}>
                            <ul className="ltr:pl-14 rtl:pr-14">
                                <li className="py-[5px]">
                                    <button type="button" className={`${pagesSubMenu ? 'open' : ''} `} onClick={() => setPagesSubMenu(!pagesSubMenu)}>
                                        <IconCaretDown className={`relative -top-1 inline h-5 w-5 text-primary ltr:mr-2 rtl:ml-2 ${treeview1.includes('pages') && 'rotate-180'}`} />
                                        <IconFolder className="relative -top-1 inline text-primary ltr:mr-2 rtl:ml-2" />
                                        PAGES
                                    </button>
                                    <AnimateHeight duration={300} height={pagesSubMenu ? 'auto' : 0}>
                                        <ul className="ltr:pl-14 rtl:pr-14">
                                            <li className="py-[5px]">
                                                <IconTxtFile className="inline h-4.5 w-4.5 text-primary ltr:mr-2 rtl:ml-2" />
                                                file name
                                            </li>
                                            <li className="py-[5px]">
                                                <IconTxtFile className="inline h-4.5 w-4.5 text-primary ltr:mr-2 rtl:ml-2" />
                                                file name
                                            </li>
                                            <li className="py-[5px]">
                                                <IconTxtFile className="inline h-4.5 w-4.5 text-primary ltr:mr-2 rtl:ml-2" />
                                                file name
                                            </li>
                                        </ul>
                                    </AnimateHeight>
                                </li>
                                <li className="py-[5px] ltr:pl-8 rtl:pr-8">
                                    <IconTxtFile className="inline h-4.5 w-4.5 text-primary ltr:mr-2 rtl:ml-2" />
                                    file name
                                </li>
                                <li className="py-[5px] ltr:pl-8 rtl:pr-8">
                                    <IconTxtFile className="inline h-4.5 w-4.5 text-primary ltr:mr-2 rtl:ml-2" />
                                    file name
                                </li>
                            </ul>
                        </AnimateHeight>
                    </li>
                    <li className="py-[5px] ltr:pl-7 rtl:pr-7">
                        <IconTxtFile className="inline h-4.5 w-4.5 text-primary ltr:mr-2 rtl:ml-2" />
                        index.html
                    </li>
                    <li className="py-[5px] ltr:pl-7 rtl:pr-7">
                        <IconTxtFile className="inline h-4.5 w-4.5 text-primary ltr:mr-2 rtl:ml-2" />
                        components.html
                    </li>
                </ul>
            </div>
        </PanelCodeHighlight>
    );
};

export default ElementsTreeviewAnimated;
