'use client';
import IconHorizontalDots from '@/components/icon/icon-horizontal-dots';
import IconSearch from '@/components/icon/icon-search';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import React, { useEffect, useState } from 'react';

const ElementsSearchLive = () => {
    const items = [
        {
            thumb: 'profile-5.jpeg',
            name: 'Alan Green',
            email: 'alan@mail.com',
            status: 'Active',
            statusClass: 'badge badge-outline-primary',
        },
        {
            thumb: 'profile-11.jpeg',
            name: 'Linda Nelson',
            email: 'Linda@mail.com',
            status: 'Busy',
            statusClass: 'badge badge-outline-danger',
        },
        {
            thumb: 'profile-12.jpeg',
            name: 'Lila Perry',
            email: 'Lila@mail.com',
            status: 'Closed',
            statusClass: 'badge badge-outline-warning',
        },
        {
            thumb: 'profile-3.jpeg',
            name: 'Andy King',
            email: 'Andy@mail.com',
            status: 'Active',
            statusClass: 'badge badge-outline-primary',
        },
        {
            thumb: 'profile-15.jpeg',
            name: 'Jesse Cory',
            email: 'Jesse@mail.com',
            status: 'Busy',
            statusClass: 'badge badge-outline-danger',
        },
    ];

    const [search, setSearch] = useState<string>('');
    const [filteredItems, setFilteredItems] = useState<any>(items);

    useEffect(() => {
        setFilteredItems(() => {
            return items.filter((item) => {
                return item.name.toLowerCase().includes(search.toLowerCase()) || item.email.toLowerCase().includes(search.toLowerCase());
            });
        });
    }, [search]);
    return (
        <PanelCodeHighlight
            title="Live Search"
            className="lg:row-span-2"
            codeHighlight={`import { useState, useEffect } from 'react';

const items = [
    {
        thumb: 'profile-5.jpeg',
        name: 'Alan Green',
        email: 'alan@mail.com',
        status: 'Active',
        statusClass: 'badge badge-outline-primary',
    },
    {
        thumb: 'profile-11.jpeg',
        name: 'Linda Nelson',
        email: 'Linda@mail.com',
        status: 'Busy',
        statusClass: 'badge badge-outline-danger',
    },
    {
        thumb: 'profile-12.jpeg',
        name: 'Lila Perry',
        email: 'Lila@mail.com',
        status: 'Closed',
        statusClass: 'badge badge-outline-warning',
    },
    {
        thumb: 'profile-3.jpeg',
        name: 'Andy King',
        email: 'Andy@mail.com',
        status: 'Active',
        statusClass: 'badge badge-outline-primary',
    },
    {
        thumb: 'profile-15.jpeg',
        name: 'Jesse Cory',
        email: 'Jesse@mail.com',
        status: 'Busy',
        statusClass: 'badge badge-outline-danger',
    },
];

const [search, setSearch] = useState<string>('');
const [filteredItems, setFilteredItems] = useState<any>(items);

useEffect(() => {
        setFilteredItems(() => {
            return items.filter((item) => {
                return item.name.toLowerCase().includes(search.toLowerCase()) || item.email.toLowerCase().includes(search.toLowerCase());
            });
        });
}, [search]);


<div className="mb-5 space-y-5">
    <form className="mx-auto w-full sm:w-1/2 mb-5">
        <div className="relative">
            <input
                type="text"
                value={search}
                placeholder="Search Attendees..."
                className="form-input shadow-[0_0_4px_2px_rgb(31_45_61_/_10%)] bg-white rounded-full h-11 placeholder:tracking-wider ltr:pr-11 rtl:pl-11"
                onChange={(e) => setSearch(e.target.value)}
            />
            <button type="button" className="btn btn-primary absolute ltr:right-1 rtl:left-1 inset-y-0 m-auto rounded-full w-9 h-9 p-0 flex items-center justify-center">
                <svg>...</svg>
            </button>
        </div>
    </form>
    <div className="p-4 border border-white-dark/20 rounded-lg space-y-4 overflow-x-auto w-full block">
        {filteredItems.map((item: any) => {
            return (
                <div
                    key={item.email}
                    className="bg-white dark:bg-[#1b2e4b] rounded-xl shadow-[0_0_4px_2px_rgb(31_45_61_/_10%)] p-3 flex items-center justify-between
                        text-gray-500 font-semibold min-w-[625px] hover:text-primary transition-all duration-300 hover:scale-[1.01]"
                >
                    <div className="user-profile">
                        <img src={\`/assets/images/\${item.thumb}\`} alt="img" className="w-8 h-8 rounded-md object-cover" />
                    </div>
                    <div>{item.name}</div>
                    <div>{item.email}</div>
                    <div className={\`badge \${item.statusClass} border-2 border-dashed\`}>{item.status}</div>
                    <div className="cursor-pointer">
                        <svg>...</svg>
                    </div>
                </div>
            );
        })}
    </div>
</div>`}
        >
            <div className="mb-5 space-y-5">
                <div>
                    <form className="mx-auto mb-5 w-full sm:w-1/2">
                        <div className="relative">
                            <input
                                type="text"
                                value={search}
                                placeholder="Search Attendees..."
                                className="form-input h-11 rounded-full bg-white shadow-[0_0_4px_2px_rgb(31_45_61_/_10%)] placeholder:tracking-wider ltr:pr-11 rtl:pl-11"
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <button type="button" className="btn btn-primary absolute inset-y-0 m-auto flex h-9 w-9 items-center justify-center rounded-full p-0 ltr:right-1 rtl:left-1">
                                <IconSearch className="mx-auto" />
                            </button>
                        </div>
                    </form>
                    <div className="block w-full space-y-4 overflow-x-auto rounded-lg border border-white-dark/20 p-4">
                        {filteredItems.map((item: any) => {
                            return (
                                <div
                                    key={item.email}
                                    className="flex min-w-[625px] items-center justify-between rounded-xl bg-white p-3 font-semibold
                                         text-gray-500 shadow-[0_0_4px_2px_rgb(31_45_61_/_10%)] transition-all duration-300 hover:scale-[1.01] hover:text-primary dark:bg-[#1b2e4b]"
                                >
                                    <div className="user-profile">
                                        <img src={`/assets/images/${item.thumb}`} alt="img" className="h-8 w-8 rounded-md object-cover" />
                                    </div>
                                    <div>{item.name}</div>
                                    <div>{item.email}</div>
                                    <div className={`badge ${item.statusClass} border-2 border-dashed`}>{item.status}</div>
                                    <div className="cursor-pointer">
                                        <IconHorizontalDots className="h-6 w-6 opacity-70" />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ElementsSearchLive;
