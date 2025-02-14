'use client';
import IconHeart from '@/components/icon/icon-heart';
import IconStar from '@/components/icon/icon-star';
import React, { useState } from 'react';
import { ReactSortable } from 'react-sortablejs';

const items1 = [
    {
        id: 1,
        text: 'Need to be approved',
        name: 'Kelly Young',
    },
    {
        id: 2,
        text: 'Meeting with client',
        name: 'Andy King',
    },
    {
        id: 3,
        text: 'Project Detail',
        name: 'Judy Holmes',
    },
    {
        id: 4,
        text: 'Edited Post Approval',
        name: 'Vincent Carpenter',
    },
    {
        id: 5,
        text: 'Project Lead Pickup',
        name: 'Mary McDonald',
    },
];
const items2 = [
    {
        id: 6,
        text: 'Need to be approved',
        name: 'Kelly Young',
    },
    {
        id: 7,
        text: 'Meeting with client',
        name: 'Andy King',
    },
    {
        id: 8,
        text: 'Project Detail',
        name: 'Judy Holmes',
    },
    {
        id: 9,
        text: 'Edited Post Approval',
        name: 'Vincent Carpenter',
    },
    {
        id: 10,
        text: 'Project Lead Pickup',
        name: 'Mary McDonald',
    },
];

const ComponentsDragndropIconChange = () => {
    const [iconChange1, setIconChange1] = useState(items1);
    const [iconChange2, setIconChange2] = useState(items2);
    return (
        <div className="panel">
            <div className="mb-5 text-lg font-semibold dark:text-white">Icon Change</div>
            <div className="icon-change grid grid-cols-1 gap-x-12 sm:grid-cols-2">
                <div>
                    <ul id="example3" className="left">
                        <ReactSortable list={iconChange1} setList={setIconChange1} animation={200} ghostClass="gu-transit" group="icon">
                            {iconChange1.map((item) => {
                                return (
                                    <li key={item.id} className="mb-2.5 cursor-grab">
                                        <div className="items-md-center flex flex-col rounded-md border border-white-light bg-white px-6 py-3.5 ltr:text-left rtl:text-right dark:border-dark dark:bg-[#1b2e4b] md:flex-row">
                                            <div className="ltr:sm:mr-4 rtl:sm:ml-4">
                                                <img alt="avatar" src={`/assets/images/profile-${item.id}.jpeg`} className="h-11 w-11 rounded-full" />
                                            </div>
                                            <div className="flex flex-1 items-center justify-between">
                                                <div className="my-3 font-semibold md:my-0">
                                                    <div className="text-base text-dark dark:text-[#bfc9d4]">{item.text}</div>
                                                    <div className="text-xs text-white-dark">{item.name}</div>
                                                </div>
                                                <div className="text-white-dark">
                                                    <IconStar className="h-6 w-6" />
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                );
                            })}
                        </ReactSortable>
                    </ul>
                </div>

                <div>
                    <ul id="example4" className="right">
                        <ReactSortable list={iconChange2} setList={setIconChange2} animation={200} ghostClass="gu-transit" group="icon">
                            {iconChange2.map((item) => {
                                return (
                                    <li key={item.id} className="mb-2.5 cursor-grab">
                                        <div className="items-md-center flex flex-col rounded-md border border-white-light bg-white px-6 py-3.5 ltr:text-left rtl:text-right dark:border-dark dark:bg-[#1b2e4b] md:flex-row">
                                            <div className="ltr:sm:mr-4 rtl:sm:ml-4">
                                                <img alt="avatar" src={`/assets/images/profile-${item.id}.jpeg`} className="h-11 w-11 rounded-full" />
                                            </div>
                                            <div className="flex flex-1 items-center justify-between">
                                                <div className="my-3 font-semibold md:my-0">
                                                    <div className="text-base text-dark dark:text-[#bfc9d4]">{item.text}</div>
                                                    <div className="text-xs text-white-dark">{item.name}</div>
                                                </div>
                                                <div className="text-white-dark">
                                                    <IconHeart />
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                );
                            })}
                        </ReactSortable>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ComponentsDragndropIconChange;
