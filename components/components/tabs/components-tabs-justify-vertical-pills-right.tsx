'use client';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import { Tab } from '@headlessui/react';
import React, { Fragment, useEffect, useState } from 'react';

const ComponentsTabsJustifyVerticalPillsRight = () => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <PanelCodeHighlight
            title="Justify Vertical Pills Right"
            codeHighlight={`import { Tab } from '@headlessui/react';
import { Fragment } from 'react';

<div className="mb-5 flex flex-col sm:flex-row">
    <Tab.Group>
        <div className="ltr:pr-4 rtl:pl-4 space-y-2 sm:flex-[0_0_20%] mb-5 sm:mb-0 sm:order-1">
            <Tab.List className="m-auto flex w-24 flex-col justify-center space-y-3">
                <Tab as={Fragment}>
                    {({ selected }) => (
                        <div className="flex-auto text-center !outline-none">
                            <button
                                className={\`\${selected ? '!bg-success text-white !outline-none' : ''} block rounded-md p-3.5 py-2 transition-all duration-300 hover:bg-success hover:text-white w-full text-left\`}>
                                Home
                            </button>
                        </div>
                    )}
                </Tab>
                <Tab as={Fragment}>
                    {({ selected }) => (
                        <button
                            className={\`\${selected ? '!bg-success text-white !outline-none' : ''} block rounded-md p-3.5 py-2 transition-all duration-300 hover:bg-success hover:text-white w-full text-left\`}>
                            Profile
                        </button>
                    )}
                </Tab>
                <Tab as={Fragment}>
                    {({ selected }) => (
                        <button
                            className={\`\${selected ? '!bg-success text-white !outline-none' : ''} block rounded-md p-3.5 py-2 transition-all duration-300 hover:bg-success hover:text-white w-full text-left\`}>
                            Contact
                        </button>
                    )}
                </Tab>
            </Tab.List>
        </div>
    </Tab.Group>
    <Tab.Panels>
        <Tab.Panel>
            <div className="active">
                <h4 className="mb-4 text-2xl font-semibold">We move your world!</h4>
                <p className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </Tab.Panel>
        <Tab.Panel>
            <div>
                <div className="flex items-start">
                    <div className="h-20 w-20 flex-none ltr:mr-4 rtl:ml-4">
                        <img
                            src="/assets/images/profile-34.jpeg"
                            alt="img"
                            className="m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"
                        />
                    </div>
                    <div className="flex-auto">
                        <h5 className="mb-4 text-xl font-medium">Media heading</h5>
                        <p className="text-white-dark">
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at,
                            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                        </p>
                    </div>
                </div>
            </div>
        </Tab.Panel>
        <Tab.Panel>
            <div className="pt-5">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                    laborum.
                </p>
            </div>
        </Tab.Panel>
        <Tab.Panel>
            <div className="rounded-tr-md rounded-br-md border border-l-2 border-white-light !border-l-primary bg-white p-5 text-black shadow-md ltr:pl-3.5 rtl:pr-3.5 dark:border-[#060818] dark:bg-[#060818]">
                <div className="flex items-start">
                    <p className="m-0 text-sm not-italic text-[#515365] dark:text-white-dark">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                    </p>
                </div>
            </div>
        </Tab.Panel>
    </Tab.Panels>
</div>`}
        >
            <div className="mb-5 flex flex-col sm:flex-row sm:gap-4">
                {isMounted && (
                    <Tab.Group>
                        <div className="mb-5 space-y-2 ltr:pr-4 rtl:pl-4 sm:order-1 sm:mb-0 sm:flex-[0_0_20%]">
                            <Tab.List className="space-y-2">
                                <Tab as={Fragment}>
                                    {({ selected }) => (
                                        <button
                                            className={`${selected ? '!bg-success text-white !outline-none' : ''}
                                                    block w-full rounded-md p-3.5 py-2 text-left transition-all duration-300 hover:bg-success  hover:text-white`}
                                        >
                                            Home
                                        </button>
                                    )}
                                </Tab>
                                <Tab as={Fragment}>
                                    {({ selected }) => (
                                        <button
                                            className={`${selected ? '!bg-success text-white !outline-none' : ''}
                                                    block w-full rounded-md p-3.5 py-2 text-left transition-all duration-300 hover:bg-success  hover:text-white`}
                                        >
                                            Profile
                                        </button>
                                    )}
                                </Tab>
                                <Tab as={Fragment}>
                                    {({ selected }) => (
                                        <button
                                            className={`${selected ? '!bg-success text-white !outline-none' : ''}
                                                    block w-full rounded-md p-3.5 py-2 text-left transition-all duration-300 hover:bg-success  hover:text-white`}
                                        >
                                            Messages
                                        </button>
                                    )}
                                </Tab>
                                <Tab as={Fragment}>
                                    {({ selected }) => (
                                        <button
                                            className={`${selected ? '!bg-success text-white !outline-none' : ''}
                                                    block w-full rounded-md p-3.5 py-2 text-left transition-all duration-300 hover:bg-success  hover:text-white`}
                                        >
                                            Settings
                                        </button>
                                    )}
                                </Tab>
                            </Tab.List>
                        </div>
                        <Tab.Panels>
                            <Tab.Panel>
                                <div className="active">
                                    <h4 className="mb-4 text-2xl font-semibold">We move your world!</h4>
                                    <p className="mb-4">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </div>
                            </Tab.Panel>
                            <Tab.Panel>
                                <div className="flex items-start">
                                    <div className="h-20 w-20 flex-none ltr:mr-4 rtl:ml-4">
                                        <img src="/assets/images/profile-34.jpeg" alt="img" className="m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark" />
                                    </div>
                                    <div className="flex-auto">
                                        <h5 className="mb-4 text-xl font-medium">Media heading</h5>
                                        <p className="text-white-dark">
                                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra
                                            turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                        </p>
                                    </div>
                                </div>
                            </Tab.Panel>
                            <Tab.Panel>
                                <div className="active flex-1 text-sm">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </div>
                            </Tab.Panel>
                            <Tab.Panel>
                                <div className="rounded-br-md rounded-tr-md border border-l-2 border-white-light !border-l-primary bg-white p-5 text-black shadow-md ltr:pl-3.5 rtl:pr-3.5 dark:border-[#060818] dark:bg-[#060818]">
                                    <div className="flex items-start">
                                        <p className="m-0 text-sm not-italic text-[#515365] dark:text-white-dark">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                                        </p>
                                    </div>
                                </div>
                            </Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                )}
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsTabsJustifyVerticalPillsRight;
