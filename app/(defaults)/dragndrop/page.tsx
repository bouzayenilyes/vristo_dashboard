import ComponentsDragndropDelete from '@/components/dragndrop/components-dragndrop-delete';
import ComponentsDragndropGrid from '@/components/dragndrop/components-dragndrop-grid';
import ComponentsDragndropHandler from '@/components/dragndrop/components-dragndrop-handler';
import ComponentsDragndropIconChange from '@/components/dragndrop/components-dragndrop-icon-change';
import ComponentsDragndropNewsFeed from '@/components/dragndrop/components-dragndrop-news-feed';
import ComponentsDragndropSortable from '@/components/dragndrop/components-dragndrop-sortable';
import ComponentsDragndropSwap from '@/components/dragndrop/components-dragndrop-swap';
import IconBell from '@/components/icon/icon-bell';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
    title: 'Drag And Drop',
};

const DragAndDrop = () => {
    return (
        <div>
            <ul className="mb-6 flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link href="#" className="text-primary hover:underline">
                        Dashboard
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Drag & Drop</span>
                </li>
            </ul>

            <div className="dragndrop space-y-8">
                <div className="panel flex items-center overflow-x-auto whitespace-nowrap p-3 text-primary">
                    <div className="rounded-full bg-primary p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3">
                        <IconBell />
                    </div>
                    <span className="ltr:mr-3 rtl:ml-3">Documentation: </span>
                    <a href="https://www.npmjs.com/package/react-sortablejs" target="_blank" className="block hover:underline" rel="noreferrer">
                        https://www.npmjs.com/package/react-sortablejs
                    </a>
                </div>
                {/* Sortable */}
                <ComponentsDragndropSortable />
                {/* Icon change */}
                <ComponentsDragndropIconChange />
                {/* Handler */}
                <ComponentsDragndropHandler />
                {/* News Feed */}
                <ComponentsDragndropNewsFeed />
                {/* Delete */}
                <ComponentsDragndropDelete />
                {/* Grid drag */}
                <ComponentsDragndropGrid />
                {/* Swap */}
                <ComponentsDragndropSwap />
            </div>
        </div>
    );
};

export default DragAndDrop;
