import ElementsSearchLive from '@/components/elements/search/elements-search-live';
import ElementsSearchOverlay from '@/components/elements/search/elements-search-overlay';
import IconSearch from '@/components/icon/icon-search';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
    title: 'Search',
};

const Search = () => {
    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link href="#" className="text-primary hover:underline">
                        Elements
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Search</span>
                </li>
            </ul>
            <div className="grid grid-cols-1 gap-6 pt-5 lg:grid-cols-2">
                <ElementsSearchLive />
                <ElementsSearchOverlay />
                <PanelCodeHighlight
                    title="Search Box"
                    codeHighlight={`import { useState} from 'react';
import ClickAwayListener from 'react-click-away-listener';

const [focus, setFocus] = useState(false);

const overlaySearchClick = () => {
        setFocus(true);
};

<form>
    <div className="relative border border-white-dark/20  w-full flex">
        <button type="submit" placeholder="Let's find your question in fast way" className="text-primary m-auto p-3 flex items-center justify-center">
            <svg>...</svg>
        </button>
        <input
            type="text"
            placeholder="Let's find your question in fast way"
            className="form-input border-0 border-l rounded-none bg-white  focus:shadow-[0_0_5px_2px_rgb(194_213_255_/_62%)] dark:shadow-[#1b2e4b] placeholder:tracking-wider focus:outline-none py-3"
        />
    </div>
</form>`}
                >
                    <div className="mb-5 space-y-5">
                        <form>
                            <div className="relative flex w-full  border border-white-dark/20">
                                <button type="submit" placeholder="Let's find your question in fast way" className="m-auto flex items-center justify-center p-3 text-primary">
                                    <IconSearch className="mx-auto h-5 w-5" />
                                </button>
                                <input
                                    type="text"
                                    placeholder="Let's find your question in fast way"
                                    className="form-input rounded-none border-0 border-l bg-white  py-3 placeholder:tracking-wider focus:shadow-[0_0_5px_2px_rgb(194_213_255_/_62%)] focus:outline-none dark:shadow-[#1b2e4b]"
                                />
                            </div>
                        </form>
                    </div>
                </PanelCodeHighlight>
            </div>
        </div>
    );
};

export default Search;
