'use client';
import IconX from '@/components/icon/icon-x';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import { IRootState } from '@/store';
import { Transition, Dialog } from '@headlessui/react';
import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';

const ComponentsModalAnimationStyle = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl';
    const [modal9, setModal9] = useState(false);
    const [modal10, setModal10] = useState(false);
    const [modal11, setModal11] = useState(false);
    const [modal12, setModal12] = useState(false);
    const [modal13, setModal13] = useState(false);
    const [modal14, setModal14] = useState(false);
    const [modal15, setModal15] = useState(false);
    const [modal16, setModal16] = useState(false);
    return (
        <PanelCodeHighlight
            title="Animation Style Modal"
            className="md:col-span-2"
            codeHighlight={`import { Dialog, Transition } from '@headlessui/react';
import { useState, Fragment } from 'react';

const [modal9, setModal9] = useState(false);
const [modal10, setModal10] = useState(false);
const [modal11, setModal11] = useState(false);
const [modal12, setModal12] = useState(false);
const [modal13, setModal13] = useState(false);
const [modal14, setModal14] = useState(false);
const [modal15, setModal15] = useState(false);
const [modal16, setModal16] = useState(false);

<div className="mb-5">
    <div className="flex flex-wrap items-center justify-center gap-2">
        <div>
            <button onClick={() => setModal9(true)} type="button" className="btn btn-primary">
                FadeIn
            </button>
            <Transition appear show={modal9} as={Fragment}>
                <Dialog as="div" open={modal9} onClose={() => setModal9(false)}>
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
                    <div id="fadein_modal" className="fixed inset-0 bg-[black]/60 z-[999] overflow-y-auto">
                        <div className="flex items-start justify-center min-h-screen px-4">
                            <Dialog.Panel className="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg my-8 text-black dark:text-white-dark animate__animated animate__fadeIn">
                                <div className="flex bg-[#fbfbfb] dark:bg-[#121c2c] items-center justify-between px-5 py-3">
                                    <h5 className="font-bold text-lg">Modal Title</h5>
                                    <button onClick={() => setModal9(false)} type="button" className="text-white-dark hover:text-dark">
                                        <svg>...</svg>
                                    </button>
                                </div>
                                <div className="p-5">
                                    <p>
                                        Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque
                                        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut
                                        sit amet ullamcorper mi.
                                    </p>
                                    <div className="flex justify-end items-center mt-8">
                                        <button onClick={() => setModal9(false)} type="button" className="btn btn-outline-danger">
                                            Discard
                                        </button>
                                        <button onClick={() => setModal9(false)} type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4">
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
        <div>
            <button onClick={() => setModal10(true)} type="button" className="btn btn-info">
                SlideIn Down
            </button>
            <Transition appear show={modal10} as={Fragment}>
                <Dialog as="div" open={modal10} onClose={() => setModal10(false)}>
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
                    <div id="slideIn_down_modal" className="fixed inset-0 bg-[black]/60 z-[999] overflow-y-auto">
                        <div className="flex items-start justify-center min-h-screen px-4">
                            <Dialog.Panel className="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg my-8 text-black dark:text-white-dark animate__animated animate__slideInDown">
                                <div className="flex bg-[#fbfbfb] dark:bg-[#121c2c] items-center justify-between px-5 py-3">
                                    <h5 className="font-bold text-lg">Modal Title</h5>
                                    <button onClick={() => setModal10(false)} type="button" className="text-white-dark hover:text-dark">
                                        <svg>...</svg>
                                    </button>
                                </div>
                                <div className="p-5">
                                    <p>
                                        Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque
                                        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut
                                        sit amet ullamcorper mi.
                                    </p>
                                    <div className="flex justify-end items-center mt-8">
                                        <button onClick={() => setModal10(false)} type="button" className="btn btn-outline-danger">
                                            Discard
                                        </button>
                                        <button onClick={() => setModal10(false)} type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4">
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
        <div>
            <button type="button" onClick={() => setModal11(true)} className="btn btn-success">
                FadeIn Up
            </button>
            <Transition appear show={modal11} as={Fragment}>
                <Dialog as="div" open={modal11} onClose={() => setModal11(false)}>
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
                    <div id="fadein_left_modal" className="fixed inset-0 bg-[black]/60 z-[999] overflow-y-auto">
                        <div className="flex items-start justify-center min-h-screen px-4">
                            <Dialog.Panel className="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg my-8 text-black dark:text-white-dark animate__animated animate__fadeInUp">
                                <div className="flex bg-[#fbfbfb] dark:bg-[#121c2c] items-center justify-between px-5 py-3">
                                    <h5 className="font-bold text-lg">Modal Title</h5>
                                    <button onClick={() => setModal11(false)} type="button" className="text-white-dark hover:text-dark">
                                        <svg>...</svg>
                                    </button>
                                </div>
                                <div className="p-5">
                                    <p>
                                        Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque
                                        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut
                                        sit amet ullamcorper mi.
                                    </p>
                                    <div className="flex justify-end items-center mt-8">
                                        <button onClick={() => setModal11(false)} type="button" className="btn btn-outline-danger">
                                            Discard
                                        </button>
                                        <button onClick={() => setModal11(false)} type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4">
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
        <div>
            <button onClick={() => setModal12(true)} type="button" className="btn btn-warning">
                SlideIn Up
            </button>
            <Transition appear show={modal12} as={Fragment}>
                <Dialog as="div" open={modal12} onClose={() => setModal12(false)}>
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
                    <div id="slidein_up_modal" className="fixed inset-0 bg-[black]/60 z-[999] overflow-y-auto">
                        <div className="flex items-start justify-center min-h-screen px-4">
                            <Dialog.Panel className="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg my-8 text-black dark:text-white-dark animate__animated animate__slideInUp">
                                <div className="flex bg-[#fbfbfb] dark:bg-[#121c2c] items-center justify-between px-5 py-3">
                                    <h5 className="font-bold text-lg">Modal Title</h5>
                                    <button onClick={() => setModal12(false)} type="button" className="text-white-dark hover:text-dark">
                                        <svg>...</svg>
                                    </button>
                                </div>
                                <div className="p-5">
                                    <p>
                                        Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque
                                        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut
                                        sit amet ullamcorper mi.
                                    </p>
                                    <div className="flex justify-end items-center mt-8">
                                        <button onClick={() => setModal12(false)} type="button" className="btn btn-outline-danger">
                                            Discard
                                        </button>
                                        <button onClick={() => setModal12(false)} type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4">
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
        <div>
            <button onClick={() => setModal13(true)} type="button" className="btn btn-danger">
                FadeIn Left
            </button>
            <Transition appear show={modal13} as={Fragment}>
                <Dialog as="div" open={modal13} onClose={() => setModal13(false)}>
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
                    <div id="fadein_up_modal" className="fixed inset-0 bg-[black]/60 z-[999] overflow-y-auto">
                        <div className="flex items-start justify-center min-h-screen px-4">
                            <Dialog.Panel
                                className='panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg my-8 text-black dark:text-white-dark animate__animated'

                            >
                                <div className="flex bg-[#fbfbfb] dark:bg-[#121c2c] items-center justify-between px-5 py-3">
                                    <h5 className="font-bold text-lg">Modal Title</h5>
                                    <button onClick={() => setModal13(false)} type="button" className="text-white-dark hover:text-dark">
                                        <svg>...</svg>
                                    </button>
                                </div>
                                <div className="p-5">
                                    <p>
                                        Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque
                                        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut
                                        sit amet ullamcorper mi.
                                    </p>
                                    <div className="flex justify-end items-center mt-8">
                                        <button onClick={() => setModal13(false)} type="button" className="btn btn-outline-danger">
                                            Discard
                                        </button>
                                        <button onClick={() => setModal13(false)} type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4">
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
        <div>
            <button onClick={() => setModal14(true)} type="button" className="btn btn-secondary">
                RotateIn Left
            </button>
            <Transition appear show={modal14} as={Fragment}>
                <Dialog as="div" open={modal14} onClose={() => setModal14(false)}>
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
                    <div id="rotatein_left_modal" className="fixed inset-0 bg-[black]/60 z-[999] overflow-y-auto">
                        <div className="flex items-start justify-center min-h-screen px-4">
                            <Dialog.Panel
                                className='panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg my-8 text-black dark:text-white-dark animate__animated'
                            >
                                <div className="flex bg-[#fbfbfb] dark:bg-[#121c2c] items-center justify-between px-5 py-3">
                                    <h5 className="font-bold text-lg">Modal Title</h5>
                                    <button onClick={() => setModal14(false)} type="button" className="text-white-dark hover:text-dark">
                                        <svg>...</svg>
                                    </button>
                                </div>
                                <div className="p-5">
                                    <p>
                                        Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque
                                        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut
                                        sit amet ullamcorper mi.
                                    </p>
                                    <div className="flex justify-end items-center mt-8">
                                        <button onClick={() => setModal14(false)} type="button" className="btn btn-outline-danger">
                                            Discard
                                        </button>
                                        <button onClick={() => setModal14(false)} type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4">
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
        <div>
            <button onClick={() => setModal15(true)} type="button" className="btn btn-dark">
                FadeIn Right
            </button>
            <Transition appear show={modal15} as={Fragment}>
                <Dialog as="div" open={modal15} onClose={() => setModal15(false)}>
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
                    <div id="fadein_right_modal" className="fixed inset-0 bg-[black]/60 z-[999] overflow-y-auto">
                        <div className="flex items-start justify-center min-h-screen px-4">
                            <Dialog.Panel
                                className='panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg my-8 text-black dark:text-white-dark animate__animated'
                            >
                                <div className="flex bg-[#fbfbfb] dark:bg-[#121c2c] items-center justify-between px-5 py-3">
                                    <h5 className="font-bold text-lg">Modal Title</h5>
                                    <button onClick={() => setModal15(false)} type="button" className="text-white-dark hover:text-dark">
                                        <svg>...</svg>
                                    </button>
                                </div>
                                <div className="p-5">
                                    <p>
                                        Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque
                                        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut
                                        sit amet ullamcorper mi.
                                    </p>
                                    <div className="flex justify-end items-center mt-8">
                                        <button onClick={() => setModal15(false)} type="button" className="btn btn-outline-danger">
                                            Discard
                                        </button>
                                        <button onClick={() => setModal15(false)} type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4">
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
        <div>
            <button onClick={() => setModal16(true)} type="button" className="btn btn-primary">
                ZoomIn Up
            </button>
            <Transition appear show={modal16} as={Fragment}>
                <Dialog as="div" open={modal16} onClose={() => setModal16(false)}>
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
                    <div id="zoomIn_up_modal" className="fixed inset-0 bg-[black]/60 z-[999] overflow-y-auto">
                        <div className="flex items-start justify-center min-h-screen px-4">
                            <Dialog.Panel className="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg my-8 text-black dark:text-white-dark animate__animated animate__zoomInUp">
                                <div className="flex bg-[#fbfbfb] dark:bg-[#121c2c] items-center justify-between px-5 py-3">
                                    <h5 className="font-bold text-lg">Modal Title</h5>
                                    <button onClick={() => setModal16(false)} type="button" className="text-white-dark hover:text-dark">
                                        <svg>...</svg>
                                    </button>
                                </div>
                                <div className="p-5">
                                    <p>
                                        Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque
                                        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut
                                        sit amet ullamcorper mi.
                                    </p>
                                    <div className="flex justify-end items-center mt-8">
                                        <button onClick={() => setModal16(false)} type="button" className="btn btn-outline-danger">
                                            Discard
                                        </button>
                                        <button onClick={() => setModal16(false)} type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4">
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
    </div>
</div>`}
        >
            <div className="mb-5">
                <div className="flex flex-wrap items-center justify-center gap-2">
                    {/* FadeIn */}
                    <div>
                        <button onClick={() => setModal9(true)} type="button" className="btn btn-primary">
                            FadeIn
                        </button>
                        <Transition appear show={modal9} as={Fragment}>
                            <Dialog as="div" open={modal9} onClose={() => setModal9(false)}>
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
                                <div id="fadein_modal" className="fixed inset-0 z-[999] overflow-y-auto bg-[black]/60">
                                    <div className="flex min-h-screen items-start justify-center px-4">
                                        <Dialog.Panel className="panel animate__animated animate__fadeIn my-8 w-full max-w-lg overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark">
                                            <div className="flex items-center justify-between bg-[#fbfbfb] px-5 py-3 dark:bg-[#121c2c]">
                                                <h5 className="text-lg font-bold">Modal Title</h5>
                                                <button onClick={() => setModal9(false)} type="button" className="text-white-dark hover:text-dark">
                                                    <IconX />
                                                </button>
                                            </div>
                                            <div className="p-5">
                                                <p>
                                                    Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et
                                                    magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi.
                                                </p>
                                                <div className="mt-8 flex items-center justify-end">
                                                    <button onClick={() => setModal9(false)} type="button" className="btn btn-outline-danger">
                                                        Discard
                                                    </button>
                                                    <button onClick={() => setModal9(false)} type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4">
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
                    {/* SlideIn Down */}
                    <div>
                        <button onClick={() => setModal10(true)} type="button" className="btn btn-info">
                            SlideIn Down
                        </button>
                        <Transition appear show={modal10} as={Fragment}>
                            <Dialog as="div" open={modal10} onClose={() => setModal10(false)}>
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
                                <div id="slideIn_down_modal" className="fixed inset-0 z-[999] overflow-y-auto bg-[black]/60">
                                    <div className="flex min-h-screen items-start justify-center px-4">
                                        <Dialog.Panel className="panel animate__animated animate__slideInDown my-8 w-full max-w-lg overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark">
                                            <div className="flex items-center justify-between bg-[#fbfbfb] px-5 py-3 dark:bg-[#121c2c]">
                                                <h5 className="text-lg font-bold">Modal Title</h5>
                                                <button onClick={() => setModal10(false)} type="button" className="text-white-dark hover:text-dark">
                                                    <IconX />
                                                </button>
                                            </div>
                                            <div className="p-5">
                                                <p>
                                                    Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et
                                                    magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi.
                                                </p>
                                                <div className="mt-8 flex items-center justify-end">
                                                    <button onClick={() => setModal10(false)} type="button" className="btn btn-outline-danger">
                                                        Discard
                                                    </button>
                                                    <button onClick={() => setModal10(false)} type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4">
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
                    {/* FadeIn Up */}
                    <div>
                        <button type="button" onClick={() => setModal11(true)} className="btn btn-success">
                            FadeIn Up
                        </button>
                        <Transition appear show={modal11} as={Fragment}>
                            <Dialog as="div" open={modal11} onClose={() => setModal11(false)}>
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
                                <div id="fadein_left_modal" className="fixed inset-0 z-[999] overflow-y-auto bg-[black]/60">
                                    <div className="flex min-h-screen items-start justify-center px-4">
                                        <Dialog.Panel className="panel animate__animated animate__fadeInUp my-8 w-full max-w-lg overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark">
                                            <div className="flex items-center justify-between bg-[#fbfbfb] px-5 py-3 dark:bg-[#121c2c]">
                                                <h5 className="text-lg font-bold">Modal Title</h5>
                                                <button onClick={() => setModal11(false)} type="button" className="text-white-dark hover:text-dark">
                                                    <IconX />
                                                </button>
                                            </div>
                                            <div className="p-5">
                                                <p>
                                                    Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et
                                                    magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi.
                                                </p>
                                                <div className="mt-8 flex items-center justify-end">
                                                    <button onClick={() => setModal11(false)} type="button" className="btn btn-outline-danger">
                                                        Discard
                                                    </button>
                                                    <button onClick={() => setModal11(false)} type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4">
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
                    {/* SlideIn Up */}
                    <div>
                        <button onClick={() => setModal12(true)} type="button" className="btn btn-warning">
                            SlideIn Up
                        </button>
                        <Transition appear show={modal12} as={Fragment}>
                            <Dialog as="div" open={modal12} onClose={() => setModal12(false)}>
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
                                <div id="slidein_up_modal" className="fixed inset-0 z-[999] overflow-y-auto bg-[black]/60">
                                    <div className="flex min-h-screen items-start justify-center px-4">
                                        <Dialog.Panel className="panel animate__animated animate__slideInUp my-8 w-full max-w-lg overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark">
                                            <div className="flex items-center justify-between bg-[#fbfbfb] px-5 py-3 dark:bg-[#121c2c]">
                                                <h5 className="text-lg font-bold">Modal Title</h5>
                                                <button onClick={() => setModal12(false)} type="button" className="text-white-dark hover:text-dark">
                                                    <IconX />
                                                </button>
                                            </div>
                                            <div className="p-5">
                                                <p>
                                                    Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et
                                                    magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi.
                                                </p>
                                                <div className="mt-8 flex items-center justify-end">
                                                    <button onClick={() => setModal12(false)} type="button" className="btn btn-outline-danger">
                                                        Discard
                                                    </button>
                                                    <button onClick={() => setModal12(false)} type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4">
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
                    {/* FadeIn Left */}
                    <div>
                        <button onClick={() => setModal13(true)} type="button" className="btn btn-danger">
                            FadeIn Left
                        </button>
                        <Transition appear show={modal13} as={Fragment}>
                            <Dialog as="div" open={modal13} onClose={() => setModal13(false)}>
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
                                <div id="fadein_up_modal" className="fixed inset-0 z-[999] overflow-y-auto bg-[black]/60">
                                    <div className="flex min-h-screen items-start justify-center px-4">
                                        <Dialog.Panel
                                            className={`panel animate__animated my-8 w-full max-w-lg overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark ${
                                                isRtl ? 'animate__fadeInRight' : 'animate__fadeInLeft'
                                            }`}
                                        >
                                            <div className="flex items-center justify-between bg-[#fbfbfb] px-5 py-3 dark:bg-[#121c2c]">
                                                <h5 className="text-lg font-bold">Modal Title</h5>
                                                <button onClick={() => setModal13(false)} type="button" className="text-white-dark hover:text-dark">
                                                    <IconX />
                                                </button>
                                            </div>
                                            <div className="p-5">
                                                <p>
                                                    Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et
                                                    magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi.
                                                </p>
                                                <div className="mt-8 flex items-center justify-end">
                                                    <button onClick={() => setModal13(false)} type="button" className="btn btn-outline-danger">
                                                        Discard
                                                    </button>
                                                    <button onClick={() => setModal13(false)} type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4">
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
                    {/* RotateIn Left */}
                    <div>
                        <button onClick={() => setModal14(true)} type="button" className="btn btn-secondary">
                            RotateIn Left
                        </button>
                        <Transition appear show={modal14} as={Fragment}>
                            <Dialog as="div" open={modal14} onClose={() => setModal14(false)}>
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
                                <div id="rotatein_left_modal" className="fixed inset-0 z-[999] overflow-y-auto bg-[black]/60">
                                    <div className="flex min-h-screen items-start justify-center px-4">
                                        <Dialog.Panel
                                            className={`panel animate__animated my-8 w-full max-w-lg overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark ${
                                                isRtl ? 'animate__rotateInDownRight' : 'animate__rotateInDownLeft'
                                            }`}
                                        >
                                            <div className="flex items-center justify-between bg-[#fbfbfb] px-5 py-3 dark:bg-[#121c2c]">
                                                <h5 className="text-lg font-bold">Modal Title</h5>
                                                <button onClick={() => setModal14(false)} type="button" className="text-white-dark hover:text-dark">
                                                    <IconX />
                                                </button>
                                            </div>
                                            <div className="p-5">
                                                <p>
                                                    Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et
                                                    magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi.
                                                </p>
                                                <div className="mt-8 flex items-center justify-end">
                                                    <button onClick={() => setModal14(false)} type="button" className="btn btn-outline-danger">
                                                        Discard
                                                    </button>
                                                    <button onClick={() => setModal14(false)} type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4">
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
                    {/* FadeIn Right */}
                    <div>
                        <button onClick={() => setModal15(true)} type="button" className="btn btn-dark">
                            FadeIn Right
                        </button>
                        <Transition appear show={modal15} as={Fragment}>
                            <Dialog as="div" open={modal15} onClose={() => setModal15(false)}>
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
                                <div id="fadein_right_modal" className="fixed inset-0 z-[999] overflow-y-auto bg-[black]/60">
                                    <div className="flex min-h-screen items-start justify-center px-4">
                                        <Dialog.Panel
                                            className={`panel animate__animated my-8 w-full max-w-lg overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark ${
                                                isRtl ? 'animate__fadeInLeft' : 'animate__fadeInRight'
                                            }`}
                                        >
                                            <div className="flex items-center justify-between bg-[#fbfbfb] px-5 py-3 dark:bg-[#121c2c]">
                                                <h5 className="text-lg font-bold">Modal Title</h5>
                                                <button onClick={() => setModal15(false)} type="button" className="text-white-dark hover:text-dark">
                                                    <IconX />
                                                </button>
                                            </div>
                                            <div className="p-5">
                                                <p>
                                                    Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et
                                                    magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi.
                                                </p>
                                                <div className="mt-8 flex items-center justify-end">
                                                    <button onClick={() => setModal15(false)} type="button" className="btn btn-outline-danger">
                                                        Discard
                                                    </button>
                                                    <button onClick={() => setModal15(false)} type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4">
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
                    {/* ZoomIn Up*/}
                    <div>
                        <button onClick={() => setModal16(true)} type="button" className="btn btn-primary">
                            ZoomIn Up
                        </button>
                        <Transition appear show={modal16} as={Fragment}>
                            <Dialog as="div" open={modal16} onClose={() => setModal16(false)}>
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
                                <div id="zoomIn_up_modal" className="fixed inset-0 z-[999] overflow-y-auto bg-[black]/60">
                                    <div className="flex min-h-screen items-start justify-center px-4">
                                        <Dialog.Panel className="panel animate__animated animate__zoomInUp my-8 w-full max-w-lg overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark">
                                            <div className="flex items-center justify-between bg-[#fbfbfb] px-5 py-3 dark:bg-[#121c2c]">
                                                <h5 className="text-lg font-bold">Modal Title</h5>
                                                <button onClick={() => setModal16(false)} type="button" className="text-white-dark hover:text-dark">
                                                    <IconX />
                                                </button>
                                            </div>
                                            <div className="p-5">
                                                <p>
                                                    Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et
                                                    magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi.
                                                </p>
                                                <div className="mt-8 flex items-center justify-end">
                                                    <button onClick={() => setModal16(false)} type="button" className="btn btn-outline-danger">
                                                        Discard
                                                    </button>
                                                    <button onClick={() => setModal16(false)} type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4">
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
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsModalAnimationStyle;
