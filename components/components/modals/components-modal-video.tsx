'use client';
import IconX from '@/components/icon/icon-x';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import { Transition, Dialog } from '@headlessui/react';
import React, { Fragment, useState } from 'react';

const ComponentsModalVideo = () => {
    const [modal8, setModal8] = useState(false);
    return (
        <PanelCodeHighlight
            title="Video"
            codeHighlight={`import { Dialog, Transition } from '@headlessui/react';
import { useState, Fragment } from 'react';

const [modal8, setModal8] = useState(false);

<div className="mb-5">
<div className="flex items-center justify-center">
    <button onClick={() => setModal8(true)} type="button" className="btn btn-primary">
        Play Youtube
    </button>
</div>
<Transition appear show={modal8} as={Fragment}>
    <Dialog as="div" open={modal8} onClose={() => setModal8(false)}>
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
        <div className="fixed inset-0 bg-[black]/60 z-[999] overflow-y-auto">
            <div className="flex items-start justify-center min-h-screen px-4">
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Dialog.Panel className="max-w-3xl w-full my-8 overflow-hidden">
                        <div className="text-right">
                            <button onClick={() => setModal8(false)} type="button" className="text-white-dark hover:text-dark">
                                <svg>...</svg>
                            </button>
                        </div>
                        <iframe title="youtube-video" src="https://www.youtube.com/embed/tgbNymZ7vqY" className="w-full h-[250px] md:h-[550px]"></iframe>
                    </Dialog.Panel>
                </Transition.Child>
            </div>
        </div>
    </Dialog>
</Transition>
</div>`}
        >
            <div className="mb-5">
                <div className="flex items-center justify-center">
                    <button onClick={() => setModal8(true)} type="button" className="btn btn-primary">
                        Play Youtube
                    </button>
                </div>
                <Transition appear show={modal8} as={Fragment}>
                    <Dialog as="div" open={modal8} onClose={() => setModal8(false)}>
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
                        <div className="fixed inset-0 z-[999] overflow-y-auto bg-[black]/60">
                            <div className="flex min-h-screen items-start justify-center px-4">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    <Dialog.Panel className="my-8 w-full max-w-3xl overflow-hidden">
                                        <div className="text-right">
                                            <button onClick={() => setModal8(false)} type="button" className="text-white-dark hover:text-dark">
                                                <IconX />
                                            </button>
                                        </div>
                                        <iframe title="youtube-video" src="https://www.youtube.com/embed/tgbNymZ7vqY" className="h-[250px] w-full md:h-[550px]"></iframe>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition>
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsModalVideo;
