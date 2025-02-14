'use client';
import IconAt from '@/components/icon/icon-at';
import IconBell from '@/components/icon/icon-bell';
import IconCaretDown from '@/components/icon/icon-caret-down';
import IconFacebook from '@/components/icon/icon-facebook';
import IconGithub from '@/components/icon/icon-github';
import IconLock from '@/components/icon/icon-lock';
import IconUser from '@/components/icon/icon-user';
import IconX from '@/components/icon/icon-x';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import { Transition, Dialog, Tab } from '@headlessui/react';
import React, { Fragment, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper';
import { useSelector } from 'react-redux';
import { IRootState } from '@/store';

const ComponentsModalCustom = () => {
    const swiperRef = useRef<any>();
    const themeConfig = useSelector((state: IRootState) => state.themeConfig);
    const items = ['carousel1.jpeg', 'carousel2.jpeg', 'carousel3.jpeg'];
    const [modal17, setModal17] = useState(false);
    const [modal18, setModal18] = useState(false);
    const [modal19, setModal19] = useState(false);
    const [modal20, setModal20] = useState(false);
    const [modal21, setModal21] = useState(false);
    const [modal22, setModal22] = useState(false);
    return (
        <PanelCodeHighlight
            title="Custom"
            className="md:col-span-2"
            codeHighlight={`import { Dialog, Transition,Tab } from '@headlessui/react';
import { useState, Fragment } from 'react';
    const swiperRef = useRef<any>();
    const items = ['carousel1.jpeg', 'carousel2.jpeg', 'carousel3.jpeg'];
    const [modal17, setModal17] = useState(false);
    const [modal18, setModal18] = useState(false);
    const [modal19, setModal19] = useState(false);
    const [modal20, setModal20] = useState(false);
    const [modal21, setModal21] = useState(false);
    const [modal22, setModal22] = useState(false);

<div className="mb-5">
    <p className="text-center mb-4">More Custom Modals.</p>
    <div className="flex flex-wrap items-center justify-center gap-2">
        {/* standard */}
        <div>
            <button type="button" onClick={() => setModal17(true)} className="btn btn-primary">
                Standard
            </button>
            <Transition appear show={modal17} as={Fragment}>
                <Dialog as="div" open={modal17} onClose={() => setModal17(false)}>
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
                    <div id="standard_modal" className="fixed inset-0 bg-[black]/60 z-[999] overflow-y-auto">
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
                                <Dialog.Panel className="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg my-8 text-black dark:text-white-dark">
                                    <div className="flex py-2 bg-[#fbfbfb] dark:bg-[#121c2c] items-center justify-center">
                                        <span className="flex items-center justify-center w-16 h-16 rounded-full bg-[#f1f2f3] dark:bg-white/10">
                                            <svg>...</svg>
                                        </span>
                                    </div>
                                    <div className="p-5">
                                        <div className="py-5 text-white-dark text-center">
                                            <p>
                                                Vivamus vitae hendrerit neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi
                                                consequat auctor turpis, vitae dictum augue efficitur vitae. Vestibulum a risus ipsum. Quisque nec lacus dolor. Quisque ornare
                                                tempor orci id rutrum.
                                            </p>
                                        </div>
                                        <div className="flex justify-end items-center mt-8">
                                            <button type="button" onClick={() => setModal17(false)} className="btn btn-outline-danger">
                                                Discard
                                            </button>
                                            <button type="button" onClick={() => setModal17(false)} className="btn btn-primary ltr:ml-4 rtl:mr-4">
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
        {/* tabs */}
        <div>
            <button onClick={() => setModal18(true)} type="button" className="btn btn-info">
                Tabs
            </button>
            <Transition appear show={modal18} as={Fragment}>
                <Dialog as="div" open={modal18} onClose={() => setModal18(false)}>
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
                    <div id="tabs_modal" className="fixed inset-0 bg-[black]/60 z-[999] overflow-y-auto">
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
                                <Dialog.Panel className="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg my-8 text-black dark:text-white-dark">
                                    <div className="flex bg-[#fbfbfb] dark:bg-[#121c2c] items-center justify-between px-5 py-3">
                                        <h5 className="font-bold text-lg">Tabs</h5>
                                        <button onClick={() => setModal18(false)} type="button" className="text-white-dark hover:text-dark">
                                            <svg>...</svg>
                                        </button>
                                    </div>
                                    <div className="p-5">
                                        <Tab.Group>
                                            <Tab.List className="flex flex-wrap mt-3 border-b border-white-light dark:border-[#191e3a]">
                                                <Tab as={Fragment}>
                                                    {({ selected }) => (
                                                        <button
                                                            type="button"
                                                            className={\`\${
                                                                selected
                                                                    ? '!border-white-light !border-b-white  text-primary dark:!border-[#191e3a] dark:!border-b-black !outline-none '
                                                                    : ''
                                                            } p-3.5 py-2 -mb-[1px] block border border-transparent hover:text-primary dark:hover:border-b-black\`}
                                                        >
                                                            Home
                                                        </button>
                                                    )}
                                                </Tab>
                                                <Tab as={Fragment}>
                                                    {({ selected }) => (
                                                        <button
                                                            type="button"
                                                            className={\`\${
                                                                selected
                                                                    ? '!border-white-light !border-b-white  text-primary dark:!border-[#191e3a] dark:!border-b-black !outline-none '
                                                                    : ''
                                                            } p-3.5 py-2 -mb-[1px] block border border-transparent hover:text-primary dark:hover:border-b-black\`}
                                                        >
                                                            Profile
                                                        </button>
                                                    )}
                                                </Tab>
                                                <Tab as={Fragment}>
                                                    {({ selected }) => (
                                                        <button
                                                            type="button"
                                                            className={\`\${
                                                                selected
                                                                    ? '!border-white-light !border-b-white  text-primary dark:!border-[#191e3a] dark:!border-b-black !outline-none '
                                                                    : ''
                                                            } p-3.5 py-2 -mb-[1px] block border border-transparent hover:text-primary dark:hover:border-b-black\`}
                                                        >
                                                            Contact
                                                        </button>
                                                    )}
                                                </Tab>
                                                <Tab className="p-3.5 py-2 -mb-[1px] block pointer-events-none text-white-light dark:text-dark outline-none">Disabled</Tab>
                                            </Tab.List>
                                            <Tab.Panels className="text-sm">
                                                <Tab.Panel>
                                                    <div className="active pt-5">
                                                        <h4 className="font-semibold text-2xl mb-4">We move your world!</h4>
                                                        <p className="mb-4">
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                        </p>
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                        </p>
                                                    </div>
                                                </Tab.Panel>
                                                <Tab.Panel>
                                                    <div>
                                                        <div className="flex items-start pt-5">
                                                            <div className="w-20 h-20 ltr:mr-4 rtl:ml-4 flex-none">
                                                                <img
                                                                    src="/assets/images/profile-34.jpeg"
                                                                    alt="img"
                                                                    className="w-20 h-20 m-0 rounded-full ring-2 ring-[#ebedf2] dark:ring-white-dark object-cover"
                                                                />
                                                            </div>
                                                            <div className="flex-auto">
                                                                <h5 className="text-xl font-medium mb-4">Media heading</h5>
                                                                <p className="text-white-dark">
                                                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio,
                                                                    vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec
                                                                    lacinia congue felis in faucibus.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Tab.Panel>
                                                <Tab.Panel>
                                                    <div className="pt-5">
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                                            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                        </p>
                                                    </div>
                                                </Tab.Panel>
                                                <Tab.Panel>Disabled</Tab.Panel>
                                            </Tab.Panels>
                                        </Tab.Group>
                                        <div className="flex justify-end items-center mt-8">
                                            <button onClick={() => setModal18(false)} type="button" className="btn btn-outline-danger">
                                                Discard
                                            </button>
                                            <button onClick={() => setModal18(false)} type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4">
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
        {/* profile */}
        <div>
            <button type="button" onClick={() => setModal19(true)} className="btn btn-success">
                Profile
            </button>
            <Transition appear show={modal19} as={Fragment}>
                <Dialog as="div" open={modal19} onClose={() => setModal19(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0"></div>
                    </Transition.Child>
                    <div id="profile_modal" className="fixed inset-0 bg-[black]/60 z-[999] overflow-y-auto">
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
                                <Dialog.Panel className="panel border-0 p-0 rounded-lg overflow-hidden max-w-[300px] w-full bg-secondary dark:bg-secondary my-8 text-black dark:text-white-dark">
                                    <div className="flex items-center justify-end pt-4 ltr:pr-4 rtl:pl-4 text-white dark:text-white-light">
                                        <button onClick={() => setModal19(false)} type="button" className="text-white-dark hover:text-dark">
                                            <svg>...</svg>
                                        </button>
                                    </div>
                                    <div className="p-5">
                                        <div className="py-5 text-white dark:text-white-light text-center">
                                            <div className="rounded-full w-20 h-20 mx-auto mb-7 overflow-hidden">
                                                <img src="/assets/images/profile-16.jpeg" alt="img" className="w-full h-full object-cover" />
                                            </div>
                                            <p className="font-semibold">
                                                Click on view to access <br />
                                                your profile.
                                            </p>
                                        </div>
                                        <div className="flex justify-center gap-4 p-5">
                                            <button type="button" className="btn bg-white text-black dark:btn-dark">
                                                View
                                            </button>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
        {/* login */}
        <div>
            <button type="button" onClick={() => setModal20(true)} className="btn btn-warning">
                Login
            </button>
            <Transition appear show={modal20} as={Fragment}>
                <Dialog as="div" open={modal20} onClose={() => setModal20(false)}>
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
                    <div id="login_modal" className="fixed inset-0 bg-[black]/60 z-[999] overflow-y-auto">
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
                                <Dialog.Panel className="panel border-0 py-1 px-4 rounded-lg overflow-hidden w-full max-w-sm my-8 text-black dark:text-white-dark">
                                    <div className="flex items-center justify-between p-5 font-semibold text-lg dark:text-white">
                                        <h5>Login</h5>
                                        <button type="button" onClick={() => setModal20(false)} className="text-white-dark hover:text-dark">
                                            <svg>...</svg>
                                        </button>
                                    </div>

                                    <div className="p-5">
                                        <form>
                                            <div className="relative mb-4">
                                                <span className="absolute ltr:left-3 rtl:right-3 top-1/2 -translate-y-1/2 dark:text-white-dark">
                                                    <svg>...</svg>
                                                </span>
                                                <input type="email" placeholder="Email" className="form-input ltr:pl-10 rtl:pr-10" id="login_email" />
                                            </div>
                                            <div className="relative mb-4">
                                                <span className="absolute ltr:left-3 rtl:right-3 top-1/2 -translate-y-1/2 dark:text-white-dark">
                                                    <svg>...</svg>
                                                </span>
                                                <input type="password" placeholder="Password" className="form-input ltr:pl-10 rtl:pr-10" id="login_password" />
                                            </div>
                                            <button type="button" className="btn btn-primary w-full">
                                                Login
                                            </button>
                                        </form>
                                    </div>
                                    <div className="my-4 text-center text-xs text-white-dark dark:text-white-dark/70">OR</div>
                                    <div className="flex items-center justify-center gap-3 mb-5">
                                        <button type="button" className="btn btn-outline-primary flex gap-1">
                                            <svg>...</svg>

                                            <span>Facebook</span>
                                        </button>
                                        <button type="button" className="btn btn-outline-danger flex gap-1">
                                            <svg>...</svg>
                                            <span>Github</span>
                                        </button>
                                    </div>
                                    <div className="p-5 border-t border-[#ebe9f1] dark:border-white/10">
                                        <p className="text-sm text-center text-white-dark dark:text-white-dark/70">
                                            Looking to
                                            <button type="button" className="text-[#515365] hover:underline dark:text-white-dark ltr:ml-1 rtl:mr-1">
                                                create an account?
                                            </button>
                                        </p>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
        {/* Register */}
        <div>
            <button type="button" onClick={() => setModal21(true)} className="btn btn-danger">
                Register
            </button>
            <Transition appear show={modal21} as={Fragment}>
                <Dialog
                    as="div"
                    open={modal21}
                    onClose={() => {
                        setModal21(false);
                    }}
                >
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
                    <div id="register_modal" className="fixed inset-0 bg-[black]/60 z-[999] overflow-y-auto">
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
                                <Dialog.Panel className="panel border-0 py-1 px-4 rounded-lg overflow-hidden w-full max-w-sm my-8 text-black dark:text-white-dark">
                                    <div className="flex items-center justify-between p-5 font-semibold text-lg dark:text-white">
                                        <h5>Register</h5>
                                        <button type="button" onClick={() => setModal21(false)} className="text-white-dark hover:text-dark">
                                            <svg>...</svg>
                                        </button>
                                    </div>
                                    <div className="p-5">
                                        <form>
                                            <div className="relative mb-4">
                                                <span className="absolute ltr:left-3 rtl:right-3 top-1/2 -translate-y-1/2 dark:text-white-dark">
                                                    <svg>...</svg>
                                                </span>
                                                <input type="text" placeholder="Name" className="form-input ltr:pl-10 rtl:pr-10" id="name" />
                                            </div>
                                            <div className="relative mb-4">
                                                <span className="absolute ltr:left-3 rtl:right-3 top-1/2 -translate-y-1/2 dark:text-white-dark">
                                                    <svg>...</svg>
                                                </span>
                                                <input type="email" placeholder="Email" className="form-input ltr:pl-10 rtl:pr-10" id="email" />
                                            </div>
                                            <div className="relative mb-4">
                                                <span className="absolute ltr:left-3 rtl:right-3 top-1/2 -translate-y-1/2 dark:text-white-dark">
                                                    <svg>...</svg>
                                                </span>
                                                <input type="password" placeholder="Password" className="form-input ltr:pl-10 rtl:pr-10" id="password" />
                                            </div>
                                            <button type="button" className="btn btn-primary w-full">
                                                Submit
                                            </button>
                                        </form>
                                    </div>
                                    <div className="my-4 text-center text-xs text-white-dark dark:text-white-dark/70">OR</div>
                                    <div className="flex items-center justify-center gap-3 mb-5">
                                        <button type="button" className="btn btn-outline-primary flex gap-1">
                                            <svg>...</svg>
                                            <span>Facebook</span>
                                        </button>
                                        <button type="button" className="btn btn-outline-danger flex gap-1">
                                            <svg>...</svg>
                                            <span>Github</span>
                                        </button>
                                    </div>
                                    <div className="p-5 border-t border-[#ebe9f1] dark:border-white/10">
                                        <p className="text-sm text-center text-white-dark dark:text-white-dark/70">
                                            Already have
                                            <button type="button" className="text-[#515365] hover:underline dark:text-white-dark ltr:ml-1 rtl:mr-1">
                                                Login?
                                            </button>
                                        </p>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
        {/* slider */}
        <div>
            <button
                type="button"
                onClick={() => {
                    setModal22(true);
                }}
                className="btn btn-secondary"
                >
                    Slider
            </button>
            <Dialog
                as="div"
                open={modal22}
                onClose={() => {
                    setModal22(false);
                }}
            >
                <div id="slider_modal" className="fixed inset-0 z-[999] overflow-y-auto bg-[black]/60">
                    <div className="flex min-h-screen items-start justify-center px-4">
                        <Dialog.Panel className="animate__animated animate__fadeIn panel my-8 w-full max-w-xl overflow-hidden rounded-lg border-0 py-1 px-4">
                            <div className="flex items-center justify-between py-5 text-lg font-semibold dark:text-white">
                                <span>Slider</span>
                                <button onClick={() => setModal22(false)} type="button" className="text-white-dark hover:text-dark">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </button>
                            </div>
                            <Swiper
                                ref={swiperRef}
                                modules={[Navigation, Pagination]}
                                navigation={{
                                    nextEl: '.swiper-button-next-ex1',
                                    prevEl: '.swiper-button-prev-ex1',
                                }}
                                observer={true}
                                observeParents={true}
                                pagination={{ clickable: true }}
                                className="swiper mx-auto mb-5 max-w-3xl"
                                id="slider1"
                                dir={themeConfig.rtlClass}
                                key={themeConfig.rtlClass === 'rtl' ? 'true' : 'false'}
                            >
                                <div className="swiper-wrapper">
                                    {items.map((item, i) => {
                                        return (
                                            <SwiperSlide key={i}>
                                                <img src={\`/assets/images/\${item}\`} className="max-h-80 w-full object-cover" alt="img" />
                                            </SwiperSlide>
                                        );
                                    })}
                                </div>
                                <button
                                    type="button"
                                    className="swiper-button-prev-ex1 absolute top-1/2 z-[999] grid -translate-y-1/2 place-content-center rounded-full border border-primary p-1  text-primary transition hover:border-primary hover:bg-primary hover:text-white ltr:left-2 rtl:right-2"
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 rtl:rotate-180">
                                        <path d="M15 5L9 12L15 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                                <button
                                    type="button"
                                    className="swiper-button-next-ex1 absolute top-1/2 z-[999] grid -translate-y-1/2 place-content-center rounded-full border border-primary p-1 text-primary transition hover:border-primary hover:bg-primary hover:text-white ltr:right-2 rtl:left-2"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="rtl:rotate-180">
                                        <path d="M9 5L15 12L9 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                                <div className="swiper-pagination"></div>
                            </Swiper>
                        </Dialog.Panel>
                    </div>
                </div>
            </Dialog>
        </div>
    </div>
</div>`}
        >
            <div className="mb-5">
                <p className="mb-4 text-center">More Custom Modals.</p>
                <div className="flex flex-wrap items-center justify-center gap-2">
                    {/* standard */}
                    <div>
                        <button type="button" onClick={() => setModal17(true)} className="btn btn-primary">
                            Standard
                        </button>
                        <Transition appear show={modal17} as={Fragment}>
                            <Dialog as="div" open={modal17} onClose={() => setModal17(false)}>
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
                                <div id="standard_modal" className="fixed inset-0 z-[999] overflow-y-auto bg-[black]/60">
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
                                            <Dialog.Panel className="panel my-8 w-full max-w-lg overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark">
                                                <div className="flex items-center justify-center p-5 text-base font-medium text-[#1f2937] dark:text-white-dark/70">
                                                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f1f2f3] dark:bg-white/10">
                                                        <IconBell className="h-7 w-7" />
                                                    </span>
                                                </div>
                                                <div className="p-5">
                                                    <div className="text-center text-sm text-white-dark">
                                                        <p>
                                                            Vivamus vitae hendrerit neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi consequat auctor
                                                            turpis, vitae dictum augue efficitur vitae. Vestibulum a risus ipsum. Quisque nec lacus dolor. Quisque ornare tempor orci id rutrum.
                                                        </p>
                                                    </div>
                                                    <div className="mt-8 flex items-center justify-end">
                                                        <button type="button" onClick={() => setModal17(false)} className="btn btn-outline-danger">
                                                            Discard
                                                        </button>
                                                        <button type="button" onClick={() => setModal17(false)} className="btn btn-primary ltr:ml-4 rtl:mr-4">
                                                            Save
                                                        </button>
                                                    </div>
                                                </div>
                                            </Dialog.Panel>
                                        </Transition.Child>
                                    </div>
                                </div>
                            </Dialog>
                        </Transition>
                    </div>
                    {/* tabs */}
                    <div>
                        <button onClick={() => setModal18(true)} type="button" className="btn btn-info">
                            Tabs
                        </button>
                        <Transition appear show={modal18} as={Fragment}>
                            <Dialog as="div" open={modal18} onClose={() => setModal18(false)}>
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
                                <div id="tabs_modal" className="fixed inset-0 z-[999] overflow-y-auto bg-[black]/60">
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
                                            <Dialog.Panel className="panel my-8 w-full max-w-lg overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark">
                                                <div className="flex items-center justify-between bg-[#fbfbfb] px-5 py-3 dark:bg-[#121c2c]">
                                                    <h5 className="text-lg font-bold">Tabs</h5>
                                                    <button onClick={() => setModal18(false)} type="button" className="text-white-dark hover:text-dark">
                                                        <IconX />
                                                    </button>
                                                </div>
                                                <div className="p-5">
                                                    <Tab.Group>
                                                        <Tab.List className="mt-3 flex flex-wrap border-b border-white-light dark:border-[#191e3a]">
                                                            <Tab as={Fragment}>
                                                                {({ selected }) => (
                                                                    <button
                                                                        type="button"
                                                                        className={`${
                                                                            selected
                                                                                ? '!border-white-light !border-b-white  text-primary !outline-none dark:!border-[#191e3a] dark:!border-b-black '
                                                                                : ''
                                                                        } -mb-[1px] block border border-transparent p-3.5 py-2 hover:text-primary dark:hover:border-b-black`}
                                                                    >
                                                                        Home
                                                                    </button>
                                                                )}
                                                            </Tab>
                                                            <Tab as={Fragment}>
                                                                {({ selected }) => (
                                                                    <button
                                                                        type="button"
                                                                        className={`${
                                                                            selected
                                                                                ? '!border-white-light !border-b-white  text-primary !outline-none dark:!border-[#191e3a] dark:!border-b-black '
                                                                                : ''
                                                                        }-mb-[1px] block border border-transparent p-3.5 py-2 hover:text-primary dark:hover:border-b-black`}
                                                                    >
                                                                        Profile
                                                                    </button>
                                                                )}
                                                            </Tab>
                                                            <Tab as={Fragment}>
                                                                {({ selected }) => (
                                                                    <button
                                                                        type="button"
                                                                        className={`${
                                                                            selected
                                                                                ? '!border-white-light !border-b-white  text-primary !outline-none dark:!border-[#191e3a] dark:!border-b-black '
                                                                                : ''
                                                                        }-mb-[1px] block border border-transparent p-3.5 py-2 hover:text-primary dark:hover:border-b-black`}
                                                                    >
                                                                        Contact
                                                                    </button>
                                                                )}
                                                            </Tab>
                                                            <Tab className="pointer-events-none -mb-[1px] block p-3.5 py-2 text-white-light outline-none dark:text-dark">Disabled</Tab>
                                                        </Tab.List>
                                                        <Tab.Panels className="text-sm">
                                                            <Tab.Panel>
                                                                <div className="active pt-5">
                                                                    <h4 className="mb-4 text-2xl font-semibold">We move your world!</h4>
                                                                    <p className="mb-4">
                                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                                        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                                    </p>
                                                                    <p>
                                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                                        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                                    </p>
                                                                </div>
                                                            </Tab.Panel>
                                                            <Tab.Panel>
                                                                <div>
                                                                    <div className="flex items-start pt-5">
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
                                                                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum
                                                                                in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                                                                                in faucibus.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Tab.Panel>
                                                            <Tab.Panel>
                                                                <div className="pt-5">
                                                                    <p>
                                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                                        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                                                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                                                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                                    </p>
                                                                </div>
                                                            </Tab.Panel>
                                                            <Tab.Panel>Disabled</Tab.Panel>
                                                        </Tab.Panels>
                                                    </Tab.Group>
                                                    <div className="mt-8 flex items-center justify-end">
                                                        <button onClick={() => setModal18(false)} type="button" className="btn btn-outline-danger">
                                                            Discard
                                                        </button>
                                                        <button onClick={() => setModal18(false)} type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4">
                                                            Save
                                                        </button>
                                                    </div>
                                                </div>
                                            </Dialog.Panel>
                                        </Transition.Child>
                                    </div>
                                </div>
                            </Dialog>
                        </Transition>
                    </div>
                    {/* profile */}
                    <div>
                        <button type="button" onClick={() => setModal19(true)} className="btn btn-success">
                            Profile
                        </button>
                        <Transition appear show={modal19} as={Fragment}>
                            <Dialog as="div" open={modal19} onClose={() => setModal19(false)}>
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="fixed inset-0"></div>
                                </Transition.Child>
                                <div id="profile_modal" className="fixed inset-0 z-[999] overflow-y-auto bg-[black]/60">
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
                                            <Dialog.Panel className="panel my-8 w-full max-w-[300px] overflow-hidden rounded-lg border-0 bg-secondary p-0 text-black dark:bg-secondary dark:text-white-dark">
                                                <div className="flex items-center justify-end pt-4 text-white ltr:pr-4 rtl:pl-4 dark:text-white-light">
                                                    <button onClick={() => setModal19(false)} type="button" className="text-white-dark hover:text-dark">
                                                        <IconX />
                                                    </button>
                                                </div>
                                                <div className="p-5">
                                                    <div className="py-5 text-center text-white dark:text-white-light">
                                                        <div className="mx-auto mb-7 h-20 w-20 overflow-hidden rounded-full">
                                                            <img src="/assets/images/profile-16.jpeg" alt="img" className="h-full w-full object-cover" />
                                                        </div>
                                                        <p className="font-semibold">
                                                            Click on view to access <br />
                                                            your profile.
                                                        </p>
                                                    </div>
                                                    <div className="flex justify-center gap-4 p-5">
                                                        <button type="button" className="btn dark:btn-dark bg-white text-black">
                                                            View
                                                        </button>
                                                    </div>
                                                </div>
                                            </Dialog.Panel>
                                        </Transition.Child>
                                    </div>
                                </div>
                            </Dialog>
                        </Transition>
                    </div>
                    {/* login */}
                    <div>
                        <button type="button" onClick={() => setModal20(true)} className="btn btn-warning">
                            Login
                        </button>
                        <Transition appear show={modal20} as={Fragment}>
                            <Dialog as="div" open={modal20} onClose={() => setModal20(false)}>
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
                                <div id="login_modal" className="fixed inset-0 z-[999] overflow-y-auto bg-[black]/60">
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
                                            <Dialog.Panel className="panel my-8 w-full max-w-sm overflow-hidden rounded-lg border-0 px-4 py-1 text-black dark:text-white-dark">
                                                <div className="flex items-center justify-between p-5 text-lg font-semibold dark:text-white">
                                                    <h5>Login</h5>
                                                    <button type="button" onClick={() => setModal20(false)} className="text-white-dark hover:text-dark">
                                                        <IconX />
                                                    </button>
                                                </div>

                                                <div className="p-5">
                                                    <form>
                                                        <div className="relative mb-4">
                                                            <span className="absolute top-1/2 -translate-y-1/2 ltr:left-3 rtl:right-3 dark:text-white-dark">
                                                                <IconUser className="h-5 w-5" />
                                                            </span>
                                                            <input type="email" placeholder="Email" className="form-input ltr:pl-10 rtl:pr-10" id="login_email" />
                                                        </div>
                                                        <div className="relative mb-4">
                                                            <span className="absolute top-1/2 -translate-y-1/2 ltr:left-3 rtl:right-3 dark:text-white-dark">
                                                                <IconLock className="h-5 w-5" />
                                                            </span>
                                                            <input type="password" placeholder="Password" className="form-input ltr:pl-10 rtl:pr-10" id="login_password" />
                                                        </div>
                                                        <button type="button" className="btn btn-primary w-full">
                                                            Login
                                                        </button>
                                                    </form>
                                                </div>
                                                <div className="my-4 text-center text-xs text-white-dark dark:text-white-dark/70">OR</div>
                                                <div className="mb-5 flex items-center justify-center gap-3">
                                                    <button type="button" className="btn btn-outline-primary flex gap-1">
                                                        <IconFacebook className="h-5 w-5 shrink-0" />

                                                        <span>Facebook</span>
                                                    </button>
                                                    <button type="button" className="btn btn-outline-danger flex gap-1">
                                                        <IconGithub className="shrink-0" />
                                                        <span>Github</span>
                                                    </button>
                                                </div>
                                                <div className="border-t border-[#ebe9f1] p-5 dark:border-white/10">
                                                    <p className="text-center text-sm text-white-dark dark:text-white-dark/70">
                                                        Looking to
                                                        <button type="button" className="text-[#515365] hover:underline ltr:ml-1 rtl:mr-1 dark:text-white-dark">
                                                            create an account?
                                                        </button>
                                                    </p>
                                                </div>
                                            </Dialog.Panel>
                                        </Transition.Child>
                                    </div>
                                </div>
                            </Dialog>
                        </Transition>
                    </div>
                    {/* Register */}
                    <div>
                        <button type="button" onClick={() => setModal21(true)} className="btn btn-danger">
                            Register
                        </button>
                        <Transition appear show={modal21} as={Fragment}>
                            <Dialog
                                as="div"
                                open={modal21}
                                onClose={() => {
                                    setModal21(false);
                                }}
                            >
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
                                <div id="register_modal" className="fixed inset-0 z-[999] overflow-y-auto bg-[black]/60">
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
                                            <Dialog.Panel className="panel my-8 w-full max-w-sm overflow-hidden rounded-lg border-0 px-4 py-1 text-black dark:text-white-dark">
                                                <div className="flex items-center justify-between p-5 text-lg font-semibold dark:text-white">
                                                    <h5>Register</h5>
                                                    <button type="button" onClick={() => setModal21(false)} className="text-white-dark hover:text-dark">
                                                        <IconX />
                                                    </button>
                                                </div>
                                                <div className="p-5">
                                                    <form>
                                                        <div className="relative mb-4">
                                                            <span className="absolute top-1/2 -translate-y-1/2 ltr:left-3 rtl:right-3 dark:text-white-dark">
                                                                <IconUser className="h-5 w-5" />
                                                            </span>
                                                            <input type="text" placeholder="Name" className="form-input ltr:pl-10 rtl:pr-10" id="name" />
                                                        </div>
                                                        <div className="relative mb-4">
                                                            <span className="absolute top-1/2 -translate-y-1/2 ltr:left-3 rtl:right-3 dark:text-white-dark">
                                                                <IconAt />
                                                            </span>
                                                            <input type="email" placeholder="Email" className="form-input ltr:pl-10 rtl:pr-10" id="email" />
                                                        </div>
                                                        <div className="relative mb-4">
                                                            <span className="absolute top-1/2 -translate-y-1/2 ltr:left-3 rtl:right-3 dark:text-white-dark">
                                                                <IconLock className="h-5 w-5" />
                                                            </span>
                                                            <input type="password" placeholder="Password" className="form-input ltr:pl-10 rtl:pr-10" id="password" />
                                                        </div>
                                                        <button type="button" className="btn btn-primary w-full">
                                                            Submit
                                                        </button>
                                                    </form>
                                                </div>
                                                <div className="my-4 text-center text-xs text-white-dark dark:text-white-dark/70">OR</div>
                                                <div className="mb-5 flex items-center justify-center gap-3">
                                                    <button type="button" className="btn btn-outline-primary flex gap-1">
                                                        <IconFacebook className="h-5 w-5 shrink-0" />
                                                        <span>Facebook</span>
                                                    </button>
                                                    <button type="button" className="btn btn-outline-danger flex gap-1">
                                                        <IconGithub className="shrink-0" />
                                                        <span>Github</span>
                                                    </button>
                                                </div>
                                                <div className="border-t border-[#ebe9f1] p-5 dark:border-white/10">
                                                    <p className="text-center text-sm text-white-dark dark:text-white-dark/70">
                                                        Already have
                                                        <button type="button" className="text-[#515365] hover:underline ltr:ml-1 rtl:mr-1 dark:text-white-dark">
                                                            Login?
                                                        </button>
                                                    </p>
                                                </div>
                                            </Dialog.Panel>
                                        </Transition.Child>
                                    </div>
                                </div>
                            </Dialog>
                        </Transition>
                    </div>
                    {/* slider */}
                    <div>
                        <button
                            type="button"
                            onClick={() => {
                                setModal22(true);
                            }}
                            className="btn btn-secondary"
                        >
                            Slider
                        </button>
                        <Dialog
                            as="div"
                            open={modal22}
                            onClose={() => {
                                setModal22(false);
                            }}
                        >
                            <div id="slider_modal" className="fixed inset-0 z-[999] overflow-y-auto bg-[black]/60">
                                <div className="flex min-h-screen items-start justify-center px-4">
                                    <Dialog.Panel className="animate__animated animate__fadeIn panel my-8 w-full max-w-xl overflow-hidden rounded-lg border-0 px-4 py-1">
                                        <div className="flex items-center justify-between py-5 text-lg font-semibold dark:text-white">
                                            <span>Slider</span>
                                            <button onClick={() => setModal22(false)} type="button" className="text-white-dark hover:text-dark">
                                                <IconX />
                                            </button>
                                        </div>
                                        <Swiper
                                            ref={swiperRef}
                                            modules={[Navigation, Pagination]}
                                            navigation={{
                                                nextEl: '.swiper-button-next-ex1',
                                                prevEl: '.swiper-button-prev-ex1',
                                            }}
                                            observer={true}
                                            observeParents={true}
                                            pagination={{ clickable: true }}
                                            className="swiper mx-auto mb-5 max-w-3xl"
                                            id="slider1"
                                            parallax={true}
                                            dir={themeConfig.rtlClass}
                                            key={themeConfig.rtlClass === 'rtl' ? 'true' : 'false'}
                                        >
                                            <div className="swiper-wrapper">
                                                {items.map((item, i) => {
                                                    return (
                                                        <SwiperSlide key={i}>
                                                            <img src={`/assets/images/${item}`} className="max-h-80 w-full object-cover" alt="img" />
                                                        </SwiperSlide>
                                                    );
                                                })}
                                            </div>
                                            <button
                                                type="button"
                                                className="swiper-button-prev-ex1 absolute top-1/2 z-[999] grid -translate-y-1/2 place-content-center rounded-full border border-primary p-1  text-primary transition hover:border-primary hover:bg-primary hover:text-white ltr:left-2 rtl:right-2"
                                            >
                                                <IconCaretDown className="h-5 w-5 rotate-90 rtl:-rotate-90" />
                                            </button>
                                            <button
                                                type="button"
                                                className="swiper-button-next-ex1 absolute top-1/2 z-[999] grid -translate-y-1/2 place-content-center rounded-full border border-primary p-1 text-primary transition hover:border-primary hover:bg-primary hover:text-white ltr:right-2 rtl:left-2"
                                            >
                                                <IconCaretDown className="h-5 w-5 -rotate-90 rtl:rotate-90" />
                                            </button>
                                            <div className="swiper-pagination"></div>
                                        </Swiper>
                                    </Dialog.Panel>
                                </div>
                            </div>
                        </Dialog>
                    </div>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsModalCustom;
