'use client';
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

const ComponentsDragndropSwap = () => {
    const [swap, setSwap] = useState([...items1, ...items2]);
    return (
        <div className="panel">
            <div className="mb-5 text-lg font-semibold dark:text-white">Swap</div>
            <div>
                <div>
                    <ul id="example7">
                        <ReactSortable list={swap} setList={setSwap} animation={200} swap={true} swapThreshold={1} className="grid grid-cols-1 gap-x-12 gap-y-2.5 sm:grid-cols-2">
                            {swap.map((item) => {
                                return (
                                    <li key={item.id} className=" cursor-grab">
                                        <div className="items-md-center flex flex-col rounded-md border border-white-light bg-white px-6 py-3.5 ltr:text-left rtl:text-right dark:border-dark dark:bg-[#1b2e4b] md:flex-row">
                                            <div className="ltr:sm:mr-4 rtl:sm:ml-4">
                                                <img alt="avatar" src={`/assets/images/profile-${item.id}.jpeg`} className="mx-auto h-11 w-11 rounded-full" />
                                            </div>
                                            <div className="flex flex-1 flex-col items-center justify-between text-center md:flex-row md:text-left">
                                                <div className="my-3 font-semibold md:my-0">
                                                    <div className="text-base text-dark dark:text-[#bfc9d4]">{item.text}</div>
                                                    <div className="text-xs text-white-dark">{item.name}</div>
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

export default ComponentsDragndropSwap;
