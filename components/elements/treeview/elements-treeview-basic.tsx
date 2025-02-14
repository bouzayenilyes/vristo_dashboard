'use client';
import IconFolderMinus from '@/components/icon/icon-folder-minus';
import IconFolderPlus from '@/components/icon/icon-folder-plus';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import React, { useState } from 'react';
import AnimateHeight from 'react-animate-height';

const ElementsTreeviewBasic = () => {
    const [treeview2, setTreeview2] = useState<string[]>(['parent']);

    const toggleTreeview2 = (name: any) => {
        if (treeview2.includes(name)) {
            setTreeview2((value) => value.filter((d) => d !== name));
        } else {
            setTreeview2([...treeview2, name]);
        }
    };
    return (
        <PanelCodeHighlight
            title="Basic"
            codeHighlight={`import { useState } from 'react';
import AnimateHeight from 'react-animate-height';

const [treeview2, setTreeview2] = useState<string[]>(['parent']);

const toggleTreeview2 = (name: any) => {
    if (treeview2.includes(name)) {
        setTreeview2((value) => value.filter((d) => d !== name));
    } else {
        setTreeview2([...treeview2, name]);
    }
};

<ul className="font-semibold">
    <li>
        <button type="button" className={\`\${treeview2.includes('parent') ? 'active' : ''}\`} onClick={() => toggleTreeview2('parent')}>
            {treeview2.includes('parent') ? (
                <svg>...</svg>
            ) : (
                <svg>...</svg>
            )}
            Parent Node
        </button>
        <AnimateHeight duration={300} height={treeview2.includes('parent') ? 'auto' : 0} easing="none">
            <ul>
                <li className="py-[5px] ltr:pl-7 rtl:pr-7">
                    <button type="button" className={\`\${treeview2.includes('img') ? 'open' : ''}\`} onClick={() => toggleTreeview2('img')}>
                        {treeview2.includes('img') ? (
                            <svg>...</svg>
                        ) : (
                            <svg>...</svg>
                        )}
                        img
                    </button>
                    <ul></ul>
                </li>
                <li className="py-[5px] ltr:pl-7 rtl:pr-7">
                    <button type="button" className={\`\${treeview2.includes('css') ? 'open' : ''}\`} onClick={() => toggleTreeview2('css')}>
                        {treeview2.includes('css') ? (
                            <svg>...</svg>
                        ) : (
                            <svg>...</svg>
                        )}
                        css
                    </button>
                    <AnimateHeight duration={300} height={treeview2.includes('css') ? 'auto' : 0} easing="none">
                        <ul>
                            <li className="py-[5px] ltr:pl-7 rtl:pr-7 text-secondary">style.css</li>
                        </ul>
                    </AnimateHeight>
                </li>
                <li className="py-[5px] ltr:pl-7 rtl:pr-7">
                    <button type="button" className={\`\${treeview2.includes('js') ? 'open' : ''}\`} onClick={() => toggleTreeview2('js')}>
                        {treeview2.includes('js') ? (
                            <svg>...</svg>
                        ) : (
                            <svg>...</svg>
                        )}
                        js
                    </button>
                    <AnimateHeight duration={300} height={treeview2.includes('js') ? 'auto' : 0} easing="none">
                        <ul>
                            <li className="py-[5px] ltr:pl-7 rtl:pr-7 text-secondary">script.js</li>
                        </ul>
                    </AnimateHeight>
                </li>
                <li className="py-[5px] ltr:pl-7 rtl:pr-7 text-secondary">index.html</li>
            </ul>
        </AnimateHeight>
    </li>
</ul>`}
        >
            <div className="mb-5">
                <ul className="font-semibold">
                    <li>
                        <button type="button" className={`${treeview2.includes('parent') ? 'active' : ''}`} onClick={() => toggleTreeview2('parent')}>
                            {treeview2.includes('parent') ? (
                                <IconFolderPlus className="relative -top-1 inline text-primary ltr:mr-2 rtl:ml-2" />
                            ) : (
                                <IconFolderMinus className="relative -top-1 inline text-primary ltr:mr-2 rtl:ml-2" />
                            )}
                            Parent Node
                        </button>
                        <AnimateHeight duration={300} height={treeview2.includes('parent') ? 'auto' : 0} easing="none">
                            <ul>
                                <li className="py-[5px] ltr:pl-7 rtl:pr-7">
                                    <button type="button" className={`${treeview2.includes('img') ? 'open' : ''} `} onClick={() => toggleTreeview2('img')}>
                                        {treeview2.includes('img') ? (
                                            <IconFolderPlus className="relative -top-1 inline text-primary ltr:mr-2 rtl:ml-2" />
                                        ) : (
                                            <IconFolderMinus className="relative -top-1 inline text-primary ltr:mr-2 rtl:ml-2" />
                                        )}
                                        img
                                    </button>
                                    <ul></ul>
                                </li>
                                <li className="py-[5px] ltr:pl-7 rtl:pr-7">
                                    <button type="button" className={`${treeview2.includes('css') ? 'open' : ''} `} onClick={() => toggleTreeview2('css')}>
                                        {treeview2.includes('css') ? (
                                            <IconFolderPlus className="relative -top-1 inline text-primary ltr:mr-2 rtl:ml-2" />
                                        ) : (
                                            <IconFolderMinus className="relative -top-1 inline text-primary ltr:mr-2 rtl:ml-2" />
                                        )}
                                        css
                                    </button>
                                    <AnimateHeight duration={300} height={treeview2.includes('css') ? 'auto' : 0} easing="none">
                                        <ul>
                                            <li className="py-[5px] text-secondary ltr:pl-7 rtl:pr-7">style.css</li>
                                        </ul>
                                    </AnimateHeight>
                                </li>
                                <li className="py-[5px] ltr:pl-7 rtl:pr-7">
                                    <button type="button" className={`${treeview2.includes('js') ? 'open' : ''} `} onClick={() => toggleTreeview2('js')}>
                                        {treeview2.includes('js') ? (
                                            <IconFolderPlus className="relative -top-1 inline text-primary ltr:mr-2 rtl:ml-2" />
                                        ) : (
                                            <IconFolderMinus className="relative -top-1 inline text-primary ltr:mr-2 rtl:ml-2" />
                                        )}
                                        js
                                    </button>
                                    <AnimateHeight duration={300} height={treeview2.includes('js') ? 'auto' : 0} easing="none">
                                        <ul>
                                            <li className="py-[5px] text-secondary ltr:pl-7 rtl:pr-7">script.js</li>
                                        </ul>
                                    </AnimateHeight>
                                </li>
                                <li className="py-[5px] text-secondary ltr:pl-7 rtl:pr-7">index.html</li>
                            </ul>
                        </AnimateHeight>
                    </li>
                </ul>
            </div>
        </PanelCodeHighlight>
    );
};

export default ElementsTreeviewBasic;
