'use client';
import React, { useState } from 'react';
import { ReactSortable } from 'react-sortablejs';
const items3 = [
    {
        id: 2,
        text: 'Meeting with client',
        name: 'Andy King',
    },
    {
        id: 1,
        text: 'Need to be approved',
        name: 'Kelly Young',
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
];
const ComponentsDragndropNewsFeed = () => {
    const [newsFeed, setNewsFeed] = useState(items3);
    return (
        <div className="panel">
            <div className="mb-5 text-lg font-semibold dark:text-white">News Feed</div>
            <div>
                <div id="example12">
                    <ReactSortable list={newsFeed} setList={setNewsFeed} animation={200} className="grid grid-cols-1 gap-x-12 sm:grid-cols-2">
                        {newsFeed.map((item) => {
                            return (
                                <div className="mb-2.5" key={item.id}>
                                    <div className="rounded-md border border-white-light bg-white px-6 py-3.5 dark:border-dark dark:bg-[#1b2e4b]">
                                        <div className="py-sm-2.5 items-md-center block text-center sm:flex ltr:md:text-left rtl:md:text-right">
                                            <div className="ltr:sm:mr-4 rtl:sm:ml-4">
                                                <img alt="avatar" src={`/assets/images/profile-${item.id + 1}.jpeg`} className="mx-auto h-11 w-11 rounded-lg" />
                                            </div>
                                            <div className="flex flex-1 flex-col items-center justify-between md:flex-row">
                                                <div className="my-3 font-semibold md:my-0">
                                                    <div className="text-base text-dark dark:text-[#bfc9d4]">{item.name}</div>
                                                    <div className="text-xs text-white-dark">11 hours ago</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-4 border-b border-b-[#f1f2f3] py-5 dark:border-b-dark">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                            nostrud exercitation.
                                        </div>
                                        <div className="flex-wrap items-center md:flex">
                                            <div className="text-center ltr:md:text-left rtl:md:text-right xl:flex-1">
                                                <div className="flex justify-center -space-x-2 text-white rtl:space-x-reverse md:justify-start">
                                                    <img className="h-10 w-10 rounded-full object-cover ring-2 ring-white dark:ring-white-dark" src="/assets/images/profile-6.jpeg" alt="avatar" />
                                                    <img className="h-10 w-10 rounded-full object-cover ring-2 ring-white dark:ring-white-dark" src="/assets/images/profile-7.jpeg" alt="avatar" />
                                                    <img className="h-10 w-10 rounded-full object-cover ring-2 ring-white dark:ring-white-dark" src="/assets/images/profile-8.jpeg" alt="avatar" />
                                                    <img className="h-10 w-10 rounded-full object-cover ring-2 ring-white dark:ring-white-dark" src="/assets/images/profile-10.jpeg" alt="avatar" />
                                                </div>
                                            </div>
                                            <div className="text-center ltr:md:text-right rtl:md:text-left">
                                                <span className="block pt-2 text-xs text-white-dark lg:pt-0">
                                                    <button className="mr-1 text-sm font-semibold text-danger dark:text-primary">Vincent, Mary</button>
                                                    and 19 other like this
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </ReactSortable>
                </div>
            </div>
        </div>
    );
};

export default ComponentsDragndropNewsFeed;
