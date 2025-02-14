'use client';
import React, { useState } from 'react';
import { ReactSortable } from 'react-sortablejs';

const items4 = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
    { id: 5, name: 'Item 5' },
    { id: 6, name: 'Item 6' },
    { id: 7, name: 'Item 7' },
    { id: 8, name: 'Item 8' },
    { id: 9, name: 'Item 9' },
    { id: 10, name: 'Item 10' },
    { id: 11, name: 'Item 11' },
    { id: 12, name: 'Item 12' },
];

const ComponentsDragndropGrid = () => {
    const [gridDrag, setGridDrag] = useState(items4);
    return (
        <div className="dragndrop space-y-8">
            <div className="panel">
                <div className="mb-5 text-lg font-semibold dark:text-white">Grid drag</div>
                <div id="example11">
                    <ReactSortable list={gridDrag} setList={setGridDrag} animation={200} className="xs grid grid-cols-2 place-items-center gap-8 sm:grid-cols-4 md:grid-cols-8">
                        {gridDrag.map((item) => {
                            return (
                                <div key={item.id} className="flex h-24 w-24 cursor-grab items-center justify-center rounded-md border border-white-light font-semibold shadow dark:border-dark">
                                    {item.name}
                                </div>
                            );
                        })}
                    </ReactSortable>
                </div>
            </div>
        </div>
    );
};

export default ComponentsDragndropGrid;
