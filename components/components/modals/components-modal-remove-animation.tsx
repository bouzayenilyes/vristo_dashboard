'use client';
import IconX from '@/components/icon/icon-x';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import { Transition, Dialog } from '@headlessui/react';
import React, { Fragment, useState } from 'react';

const ComponentsModalRemoveAnimation = () => {
    const [modal4, setModal4] = useState(false);
    return (
        <PanelCodeHighlight
            title="Remove animation"
            codeHighlight={`import { Dialog, Transition } from '@headlessui/react';
import { useState, Fragment } from 'react';

const [modal4, setModal4] = useState(false);

<div className="mb-5" onClick={() => setModal4(true)}>
    <div className="flex items-center justify-center">
        <button type="button" className="btn btn-success">
            Launch modal
        </button>
    </div>
    <Transition appear show={modal4} as={Fragment}>
        <Dialog as="div" open={modal4} onClose={() => setModal4(false)}>
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed inset-0" />
            </Transition.Child>
            <div className="fixed inset-0 bg-[black]/60 z-[999] px-4">
                <div className="flex items-start justify-center min-h-screen px-4">
                    <Dialog.Panel className="panel border-0 p-0 rounded-lg overflow-hidden  w-full max-w-lg my-8 text-black dark:text-white-dark">
                        <div className="flex bg-[#fbfbfb] dark:bg-[#121c2c] items-center justify-between px-5 py-3">
                            <h5 className="font-bold text-lg">Modal Title</h5>
                            <button type="button" onClick={() => setModal4(false)} className="text-white-dark hover:text-dark">
                                <svg>...</svg>
                            </button>
                        </div>
                        <div className="p-5">
                            <p>
                                Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus
                                et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper
                                mi.
                            </p>
                            <div className="flex justify-end items-center mt-8">
                                <button onClick={() => setModal4(false)} type="button" className="btn btn-outline-danger">
                                    Discard
                                </button>
                                <button type="button" onClick={() => setModal4(false)} className="btn btn-primary ltr:ml-4 rtl:mr-4">
                                    Save
                                </button>
                            </div>
                        </div>
                    </Dialog.Panel>
                </div>
            </div>
        </Dialog>
    </Transition>
</div>`}
        >
            <div className="mb-5" onClick={() => setModal4(true)}>
                <div className="flex items-center justify-center">
                    <button type="button" className="btn btn-success">
                        Launch modal
                    </button>
                </div>
                <Transition appear show={modal4} as={Fragment}>
                    <Dialog as="div" open={modal4} onClose={() => setModal4(false)}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0" />
                        </Transition.Child>
                        <div className="fixed inset-0 z-[999] bg-[black]/60 px-4">
                            <div className="flex min-h-screen items-start justify-center px-4">
                                <Dialog.Panel className="panel my-8 w-full max-w-lg overflow-hidden  rounded-lg border-0 p-0 text-black dark:text-white-dark">
                                    <div className="flex items-center justify-between bg-[#fbfbfb] px-5 py-3 dark:bg-[#121c2c]">
                                        <h5 className="text-lg font-bold">Modal Title</h5>
                                        <button type="button" onClick={() => setModal4(false)} className="text-white-dark hover:text-dark">
                                            <IconX />
                                        </button>
                                    </div>
                                    <div className="p-5">
                                        <p>
                                            Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis
                                            parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi.
                                        </p>
                                        <div className="mt-8 flex items-center justify-end">
                                            <button onClick={() => setModal4(false)} type="button" className="btn btn-outline-danger">
                                                Discard
                                            </button>
                                            <button type="button" onClick={() => setModal4(false)} className="btn btn-primary ltr:ml-4 rtl:mr-4">
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </div>
                        </div>
                    </Dialog>
                </Transition>
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsModalRemoveAnimation;
