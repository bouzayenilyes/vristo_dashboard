import Link from 'next/link';
import IconCaretsDown from '@/components/icon/icon-carets-down';
import IconCaretDown from '@/components/icon/icon-caret-down';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Pagination',
};

const Pagination = () => {
    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link href="#" className="text-primary hover:underline">
                        Elements
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Pagination</span>
                </li>
            </ul>
            <div className="grid grid-cols-1 gap-6 pt-5 xl:grid-cols-2">
                {/* Default */}
                <PanelCodeHighlight
                    title="Default"
                    codeHighlight={`<ul className="inline-flex items-center space-x-1 rtl:space-x-reverse m-auto mb-4">
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 rounded transition text-dark hover:text-primary border-2 border-white-light dark:border-[#191e3a] hover:border-primary dark:hover:border-primary dark:text-white-light"
        >
            First
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 rounded transition text-dark hover:text-primary border-2 border-white-light dark:border-[#191e3a] hover:border-primary dark:hover:border-primary dark:text-white-light"
        >
            Prev
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 rounded transition text-dark hover:text-primary border-2 border-white-light dark:border-[#191e3a] hover:border-primary dark:hover:border-primary dark:text-white-light"
        >
            1
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 rounded transition text-primary border-2 border-primary dark:border-primary dark:text-white-light"
        >
            2
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 rounded transition text-dark hover:text-primary border-2 border-white-light dark:border-[#191e3a] hover:border-primary dark:hover:border-primary dark:text-white-light"
        >
            3
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 rounded transition text-dark hover:text-primary border-2 border-white-light dark:border-[#191e3a] hover:border-primary dark:hover:border-primary dark:text-white-light"
        >
            Next
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 rounded transition text-dark hover:text-primary border-2 border-white-light dark:border-[#191e3a] hover:border-primary dark:hover:border-primary dark:text-white-light"
        >
            Last
        </button>
    </li>
</ul>

<ul className="inline-flex items-center space-x-1 rtl:space-x-reverse m-auto">
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 rounded transition text-dark hover:text-primary border-2 border-white-light dark:border-[#191e3a] hover:border-primary dark:hover:border-primary dark:text-white-light"
        >
            Prev
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 rounded transition text-dark hover:text-primary border-2 border-white-light dark:border-[#191e3a] hover:border-primary dark:hover:border-primary dark:text-white-light"
        >
            1
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 rounded transition text-primary border-2 border-primary dark:border-primary dark:text-white-light"
        >
            2
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 rounded transition text-dark hover:text-primary border-2 border-white-light dark:border-[#191e3a] hover:border-primary dark:hover:border-primary dark:text-white-light"
        >
            3
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 rounded transition text-dark hover:text-primary border-2 border-white-light dark:border-[#191e3a] hover:border-primary dark:hover:border-primary dark:text-white-light"
        >
            Next
        </button>
    </li>
</ul>`}
                >
                    <div className="mb-5">
                        <div className="flex w-full flex-col justify-center">
                            <ul className="m-auto mb-4 inline-flex items-center space-x-1 rtl:space-x-reverse">
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded border-2 border-white-light px-3.5 py-2 font-semibold text-dark transition hover:border-primary hover:text-primary dark:border-[#191e3a] dark:text-white-light dark:hover:border-primary"
                                    >
                                        First
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded border-2 border-white-light px-3.5 py-2 font-semibold text-dark transition hover:border-primary hover:text-primary dark:border-[#191e3a] dark:text-white-light dark:hover:border-primary"
                                    >
                                        Prev
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded border-2 border-white-light px-3.5 py-2 font-semibold text-dark transition hover:border-primary hover:text-primary dark:border-[#191e3a] dark:text-white-light dark:hover:border-primary"
                                    >
                                        1
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded border-2 border-primary px-3.5 py-2 font-semibold text-primary transition dark:border-primary dark:text-white-light"
                                    >
                                        2
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded border-2 border-white-light px-3.5 py-2 font-semibold text-dark transition hover:border-primary hover:text-primary dark:border-[#191e3a] dark:text-white-light dark:hover:border-primary"
                                    >
                                        3
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded border-2 border-white-light px-3.5 py-2 font-semibold text-dark transition hover:border-primary hover:text-primary dark:border-[#191e3a] dark:text-white-light dark:hover:border-primary"
                                    >
                                        Next
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded border-2 border-white-light px-3.5 py-2 font-semibold text-dark transition hover:border-primary hover:text-primary dark:border-[#191e3a] dark:text-white-light dark:hover:border-primary"
                                    >
                                        Last
                                    </button>
                                </li>
                            </ul>
                            <ul className="m-auto inline-flex items-center space-x-1 rtl:space-x-reverse">
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded border-2 border-white-light px-3.5 py-2 font-semibold text-dark transition hover:border-primary hover:text-primary dark:border-[#191e3a] dark:text-white-light dark:hover:border-primary"
                                    >
                                        Prev
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded border-2 border-white-light px-3.5 py-2 font-semibold text-dark transition hover:border-primary hover:text-primary dark:border-[#191e3a] dark:text-white-light dark:hover:border-primary"
                                    >
                                        1
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded border-2 border-primary px-3.5 py-2 font-semibold text-primary transition dark:border-primary dark:text-white-light"
                                    >
                                        2
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded border-2 border-white-light px-3.5 py-2 font-semibold text-dark transition hover:border-primary hover:text-primary dark:border-[#191e3a] dark:text-white-light dark:hover:border-primary"
                                    >
                                        3
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded border-2 border-white-light px-3.5 py-2 font-semibold text-dark transition hover:border-primary hover:text-primary dark:border-[#191e3a] dark:text-white-light dark:hover:border-primary"
                                    >
                                        Next
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </PanelCodeHighlight>
                {/* Solid */}
                <PanelCodeHighlight
                    title="Solid"
                    codeHighlight={`<ul className="inline-flex items-center space-x-1 rtl:space-x-reverse m-auto mb-4">
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 rounded transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            First
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 rounded transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            Prev
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 rounded transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            1
        </button>
    </li>
    <li>
        <button type="button" className="flex justify-center font-semibold px-3.5 py-2 rounded transition bg-primary text-white dark:text-white-light dark:bg-primary">
            2
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 rounded transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            3
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 rounded transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            Next
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 rounded transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            Last
        </button>
    </li>
</ul>
<ul className="inline-flex items-center space-x-1 rtl:space-x-reverse m-auto">
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 rounded transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            Prev
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 rounded transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            1
        </button>
    </li>
    <li>
        <button type="button" className="flex justify-center font-semibold px-3.5 py-2 rounded transition bg-primary text-white dark:text-white-light dark:bg-primary">
            2
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 rounded transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            3
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 rounded transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            Next
        </button>
    </li>
</ul>`}
                >
                    <div className="mb-5">
                        <div className="flex w-full flex-col justify-center">
                            <ul className="m-auto mb-4 inline-flex items-center space-x-1 rtl:space-x-reverse">
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        First
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        Prev
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        1
                                    </button>
                                </li>
                                <li>
                                    <button type="button" className="flex justify-center rounded bg-primary px-3.5 py-2 font-semibold text-white transition dark:bg-primary dark:text-white-light">
                                        2
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        3
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        Next
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        Last
                                    </button>
                                </li>
                            </ul>
                            <ul className="m-auto inline-flex items-center space-x-1 rtl:space-x-reverse">
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        Prev
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        1
                                    </button>
                                </li>
                                <li>
                                    <button type="button" className="flex justify-center rounded bg-primary px-3.5 py-2 font-semibold text-white transition dark:bg-primary dark:text-white-light">
                                        2
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        3
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        Next
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </PanelCodeHighlight>
                {/* With Icons */}
                <PanelCodeHighlight
                    title="With Icons"
                    codeHighlight={`<ul className="inline-flex items-center space-x-1 rtl:space-x-reverse m-auto mb-4">
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 rounded transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            <svg>...</svg>
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 rounded transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            <svg>...</svg>
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 rounded transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            1
        </button>
    </li>
    <li>
        <button type="button" className="flex justify-center font-semibold px-3.5 py-2 rounded transition bg-primary text-white dark:text-white-light dark:bg-primary">
            2
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 rounded transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            3
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 rounded transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            <svg>...</svg>
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 rounded transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            <svg>...</svg>
        </button>
    </li>
</ul>
<ul className="inline-flex items-center space-x-1 rtl:space-x-reverse m-auto">
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 rounded transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            <svg>...</svg>
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 rounded transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            1
        </button>
    </li>
    <li>
        <button type="button" className="flex justify-center font-semibold px-3.5 py-2 rounded transition bg-primary text-white dark:text-white-light dark:bg-primary">
            2
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 rounded transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            3
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 rounded transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            <svg>...</svg>
        </button>
    </li>
</ul>`}
                >
                    <div className="mb-5">
                        <div className="flex w-full flex-col justify-center">
                            <ul className="m-auto mb-4 inline-flex items-center space-x-1 rtl:space-x-reverse">
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        <IconCaretsDown className="rotate-90 rtl:-rotate-90" />
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        <IconCaretDown className="h-5 w-5 rotate-90 rtl:-rotate-90" />
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        1
                                    </button>
                                </li>
                                <li>
                                    <button type="button" className="flex justify-center rounded bg-primary px-3.5 py-2 font-semibold text-white transition dark:bg-primary dark:text-white-light">
                                        2
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        3
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        <IconCaretDown className="h-5 w-5 -rotate-90 rtl:rotate-90" />
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        <IconCaretsDown className="-rotate-90 rtl:rotate-90" />
                                    </button>
                                </li>
                            </ul>
                            <ul className="m-auto inline-flex items-center space-x-1 rtl:space-x-reverse">
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        <IconCaretDown className="h-5 w-5 rotate-90 rtl:-rotate-90" />
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        1
                                    </button>
                                </li>
                                <li>
                                    <button type="button" className="flex justify-center rounded bg-primary px-3.5 py-2 font-semibold text-white transition dark:bg-primary dark:text-white-light">
                                        2
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        3
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        <IconCaretDown className="h-5 w-5 -rotate-90 rtl:rotate-90" />
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </PanelCodeHighlight>
                {/* With Icons and Rounded */}
                <PanelCodeHighlight
                    title="With Icons and Rounded"
                    codeHighlight={`<ul className="inline-flex items-center space-x-1 rtl:space-x-reverse m-auto mb-4">
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold p-2 rounded-full transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            <svg>...</svg>
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold p-2 rounded-full transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            <svg>...</svg>
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 rounded-full transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            1
        </button>
    </li>
    <li>
        <button type="button" className="flex justify-center font-semibold px-3.5 py-2 rounded-full transition bg-primary text-white dark:text-white-light dark:bg-primary">
            2
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 rounded-full transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            3
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold p-2 rounded-full transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            <svg>...</svg>
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold p-2 rounded-full transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            <svg>...</svg>
        </button>
    </li>
</ul>
<ul className="inline-flex items-center space-x-1 rtl:space-x-reverse m-auto">
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold p-2 rounded-full transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            <svg>...</svg>
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 rounded-full transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            1
        </button>
    </li>
    <li>
        <button type="button" className="flex justify-center font-semibold px-3.5 py-2 rounded-full transition bg-primary text-white dark:text-white-light dark:bg-primary">
            2
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 rounded-full transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            3
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold p-2 rounded-full transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            <svg>...</svg>
        </button>
    </li>
</ul>`}
                >
                    <div className="mb-5">
                        <div className="flex w-full flex-col justify-center">
                            <ul className="m-auto mb-4 inline-flex items-center space-x-1 rtl:space-x-reverse">
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded-full bg-white-light p-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        <IconCaretsDown className="rotate-90 rtl:-rotate-90" />
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded-full bg-white-light p-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        <IconCaretDown className="h-5 w-5 rotate-90 rtl:-rotate-90" />
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded-full bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        1
                                    </button>
                                </li>
                                <li>
                                    <button type="button" className="flex justify-center rounded-full bg-primary px-3.5 py-2 font-semibold text-white transition dark:bg-primary dark:text-white-light">
                                        2
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded-full bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        3
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded-full bg-white-light p-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        <IconCaretDown className="h-5 w-5 -rotate-90 rtl:rotate-90" />
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded-full bg-white-light p-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        <IconCaretsDown className="-rotate-90 rtl:rotate-90" />
                                    </button>
                                </li>
                            </ul>
                            <ul className="m-auto inline-flex items-center space-x-1 rtl:space-x-reverse">
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded-full bg-white-light p-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        <IconCaretDown className="h-5 w-5 rotate-90 rtl:-rotate-90" />
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded-full bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        1
                                    </button>
                                </li>
                                <li>
                                    <button type="button" className="flex justify-center rounded-full bg-primary px-3.5 py-2 font-semibold text-white transition dark:bg-primary dark:text-white-light">
                                        2
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded-full bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        3
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center rounded-full bg-white-light p-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        <IconCaretDown className="h-5 w-5 -rotate-90 rtl:rotate-90" />
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </PanelCodeHighlight>
                {/* No Spacing */}
                <PanelCodeHighlight
                    title="No Spacing"
                    codeHighlight={`<ul className="inline-flex items-center m-auto mb-4">
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold ltr:rounded-l-full rtl:rounded-r-full px-3.5 py-2 transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            <svg>...</svg>
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            <svg>...</svg>
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            1
        </button>
    </li>
    <li>
        <button type="button" className="flex justify-center font-semibold px-3.5 py-2 transition bg-primary text-white dark:text-white-light dark:bg-primary">
            2
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            3
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            <svg>...</svg>
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold ltr:rounded-r-full rtl:rounded-l-full px-3.5 py-2 transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            <svg>...</svg>
        </button>
    </li>
</ul>
<ul className="inline-flex items-center m-auto">
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold ltr:rounded-l-full rtl:rounded-r-full px-3.5 py-2 transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            <svg>...</svg>
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            1
        </button>
    </li>
    <li>
        <button type="button" className="flex justify-center font-semibold px-3.5 py-2 transition bg-primary text-white dark:text-white-light dark:bg-primary">
            2
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold px-3.5 py-2 transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            3
        </button>
    </li>
    <li>
        <button
            type="button"
            className="flex justify-center font-semibold ltr:rounded-r-full rtl:rounded-l-full px-3.5 py-2 transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
        >
            <svg>...</svg>
        </button>
    </li>
</ul>`}
                >
                    <div className="mb-5">
                        <div className="flex w-full flex-col justify-center">
                            <ul className="m-auto mb-4 inline-flex items-center">
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white ltr:rounded-l-full rtl:rounded-r-full dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        <IconCaretsDown className="rotate-90 rtl:-rotate-90" />
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        <IconCaretDown className="h-5 w-5 rotate-90 rtl:-rotate-90" />
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        1
                                    </button>
                                </li>
                                <li>
                                    <button type="button" className="flex justify-center bg-primary px-3.5 py-2 font-semibold text-white transition dark:bg-primary dark:text-white-light">
                                        2
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        3
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        <IconCaretDown className="h-5 w-5 -rotate-90 rtl:rotate-90" />
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white ltr:rounded-r-full rtl:rounded-l-full dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        <IconCaretsDown className="-rotate-90 rtl:rotate-90" />
                                    </button>
                                </li>
                            </ul>
                            <ul className="m-auto inline-flex items-center">
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white ltr:rounded-l-full rtl:rounded-r-full dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        <IconCaretDown className="h-5 w-5 rotate-90 rtl:-rotate-90" />
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        1
                                    </button>
                                </li>
                                <li>
                                    <button type="button" className="flex justify-center bg-primary px-3.5 py-2 font-semibold text-white transition dark:bg-primary dark:text-white-light">
                                        2
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        3
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="flex justify-center bg-white-light px-3.5 py-2 font-semibold text-dark transition hover:bg-primary hover:text-white ltr:rounded-r-full rtl:rounded-l-full dark:bg-[#191e3a] dark:text-white-light dark:hover:bg-primary"
                                    >
                                        <IconCaretDown className="h-5 w-5 -rotate-90 rtl:rotate-90" />
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </PanelCodeHighlight>
            </div>
        </div>
    );
};

export default Pagination;
