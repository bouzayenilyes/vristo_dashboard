import Link from 'next/link';
import { Metadata } from 'next';
import PanelCodeHighlight from '@/components/panel-code-highlight';

export const metadata: Metadata = {
    title: 'Jumbotron',
};
const Jumbotron = () => {
    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link href="#" className="text-primary hover:underline">
                        Elements
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Jumbotron</span>
                </li>
            </ul>
            <div className="grid grid-cols-1 gap-6 pt-5 xl:grid-cols-2">
                {/* basic */}
                <PanelCodeHighlight
                    title="Basic"
                    codeHighlight={`<div className="prose bg-[#f1f2f3] px-4 py-9 sm:px-8 sm:py-16 rounded max-w-full dark:bg-[#1b2e4b] dark:text-white-light w-full mb-5">
    <h2 className="text-dark mb-5  mt-4 text-center text-5xl dark:text-white-light">Hello, world!</h2>
    <p className="lead mt-3 mb-4 dark:text-white-light">
        This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
    </p>
    <hr className="my-4 dark:border-[#191e3a]" />
    <p className="mb-5">It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <p className="lead">
        <button type="button" className="btn btn-dark">
            Learn more
        </button>
    </p>
</div>`}
                >
                    <div className="prose mb-5 w-full max-w-full rounded bg-[#f1f2f3] px-4 py-9 dark:bg-[#1b2e4b] dark:text-white-light sm:px-8 sm:py-16">
                        <h2 className="mb-5 mt-4  text-center text-5xl text-dark dark:text-white-light">Hello, world!</h2>
                        <p className="lead mb-4 mt-3 dark:text-white-light">
                            This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
                        </p>
                        <hr className="my-4 dark:border-[#191e3a]" />
                        <p className="mb-5">It uses utility classes for typography and spacing to space content out within the larger container.</p>
                        <p className="lead">
                            <button type="button" className="btn btn-dark">
                                Learn more
                            </button>
                        </p>
                    </div>
                </PanelCodeHighlight>
                {/* fluid */}
                <PanelCodeHighlight
                    title="Jumbotron Fluid"
                    codeHighlight={`<div className="prose bg-[#f1f2f3] px-4 py-9 sm:px-8 sm:py-16 rounded max-w-full dark:bg-[#1b2e4b] dark:text-white-light w-full mb-5">
    <h2 className="text-dark mb-5  mt-4 text-center text-5xl dark:text-white-light">Fluid Jumbotron</h2>
    <p className="lead mt-3 mb-4 dark:text-white-light">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
    <blockquote className="text-black p-5 ltr:pl-3.5 rtl:pr-3.5 bg-white shadow-md rounded-tr-md rounded-br-md border border-white-light border-l-2 !border-l-primary dark:bg-[#060818] dark:border-[#060818]">
        <div className="flex items-start">
            <div className="w-14 h-14 ltr:mr-5 rtl:ml-5 flex-none">
                <img src="/assets/images/profile-34.jpeg" alt="img" className="w-14 h-14 rounded-full object-cover m-auto" />
            </div>
            <p className="not-italic text-[#515365] text-sm dark:text-white-light m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        </div>
        <small className="ltr:text-right rtl:text-left w-full not-italic text-xs text-[#777] block before:w-3 before:h-[1px] before:bg-[#777] before:inline-block before:opacity-50 before:relative before:-top-1 before:ltr:mr-1 rtl:before:ml-1">
            Someone famous <cite className="italic">Source Title</cite>
        </small>
    </blockquote>
</div>`}
                >
                    <div className="prose mb-5 w-full max-w-full rounded bg-[#f1f2f3] px-4 py-9 dark:bg-[#1b2e4b] dark:text-white-light sm:px-8 sm:py-16">
                        <h2 className="mb-5 mt-4  text-center text-5xl text-dark dark:text-white-light">Fluid Jumbotron</h2>
                        <p className="lead mb-4 mt-3 dark:text-white-light">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                        <blockquote className="rounded-br-md rounded-tr-md border border-l-2 border-white-light !border-l-primary bg-white p-5 text-black shadow-md ltr:pl-3.5 rtl:pr-3.5 dark:border-[#060818] dark:bg-[#060818]">
                            <div className="flex items-start">
                                <div className="h-14 w-14 flex-none ltr:mr-5 rtl:ml-5">
                                    <img src="/assets/images/profile-34.jpeg" alt="img" className="m-auto h-14 w-14 rounded-full object-cover" />
                                </div>
                                <p className="m-0 text-sm not-italic text-[#515365] dark:text-white-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                            </div>
                            <small className="block w-full text-xs not-italic text-[#777] before:relative before:-top-1 before:inline-block before:h-[1px] before:w-3 before:bg-[#777] before:opacity-50 ltr:text-right before:ltr:mr-1 rtl:text-left rtl:before:ml-1">
                                Someone famous <cite className="italic">Source Title</cite>
                            </small>
                        </blockquote>
                    </div>
                </PanelCodeHighlight>
            </div>
        </div>
    );
};

export default Jumbotron;
