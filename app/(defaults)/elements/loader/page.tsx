import Link from 'next/link';
import IconLoader from '@/components/icon/icon-loader';
import { Metadata } from 'next';
import PanelCodeHighlight from '@/components/panel-code-highlight';

export const metadata: Metadata = {
    title: 'Loader',
};

const Loader = () => {
    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link href="#" className="text-primary hover:underline">
                        Elements
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Loader</span>
                </li>
            </ul>
            <div className="grid grid-cols-1 gap-6 pt-5 lg:grid-cols-2">
                {/* Loaders with Buttons */}
                <PanelCodeHighlight
                    title="Loaders with Buttons"
                    codeHighlight={`<button type="button" className="btn btn-info btn-lg">
    <svg>...</svg>
    Loading
</button>

<button type="button" className="btn btn-danger btn-lg">
    <span className="animate-spin border-2 border-white border-l-transparent rounded-full w-5 h-5 ltr:mr-4 rtl:ml-4 inline-block align-middle"></span>
    Loading
</button>

<button type="button" className="btn btn-secondary btn-lg">
    <span className="animate-ping w-3 h-3 ltr:mr-4 rtl:ml-4 inline-block rounded-full bg-white"></span>
    Loading
</button>`}
                >
                    <div className="mb-5">
                        <div className="flex w-full flex-wrap items-center justify-center gap-4">
                            <button type="button" className="btn btn-info btn-lg">
                                <IconLoader className="inline-block shrink-0 animate-[spin_2s_linear_infinite] align-middle ltr:mr-2 rtl:ml-2" />
                                Loading
                            </button>

                            <button type="button" className="btn btn-danger btn-lg">
                                <span className="inline-block h-5 w-5 shrink-0 animate-spin rounded-full border-2 border-white border-l-transparent align-middle ltr:mr-4 rtl:ml-4"></span>
                                Loading
                            </button>

                            <button type="button" className="btn btn-secondary btn-lg">
                                <span className="inline-block h-3 w-3 shrink-0 animate-ping rounded-full bg-white ltr:mr-4 rtl:ml-4"></span>
                                Loading
                            </button>
                        </div>
                    </div>
                </PanelCodeHighlight>
                {/* Position */}
                <PanelCodeHighlight
                    title="Position"
                    codeHighlight={`<div className="flex flex-wrap items-center justify-center w-full sm:w-1/2 text-center mb-3 sm:mb-0">
    <p className="w-full mb-2">Default Button</p>
    <button type="button" className="btn btn-primary btn-lg">
        <svg>...</svg>
        Loading
    </button>
</div>
<div className="flex flex-wrap items-center justify-center w-full sm:w-1/2 text-center">
    <p className="w-full mb-2">Outline Button</p>
    <button type="button" className="btn btn-outline-primary btn-lg">
        Loading
        <svg>...</svg>
    </button>
</div>`}
                >
                    <div className="mb-5">
                        <div className="flex w-full flex-wrap">
                            <div className="mb-3 flex w-full flex-wrap items-center justify-center text-center sm:mb-0 sm:w-1/2">
                                <p className="mb-2 w-full">Default Button</p>
                                <button type="button" className="btn btn-primary btn-lg">
                                    <IconLoader className="inline-block shrink-0 animate-[spin_2s_linear_infinite] align-middle ltr:mr-2 rtl:ml-2" />
                                    Loading
                                </button>
                            </div>
                            <div className="flex w-full flex-wrap items-center justify-center text-center sm:w-1/2">
                                <p className="mb-2 w-full">Outline Button</p>
                                <button type="button" className="btn btn-outline-primary btn-lg">
                                    Loading
                                    <IconLoader className="inline-block shrink-0 animate-[spin_2s_linear_infinite] align-middle ltr:ml-2 rtl:mr-2" />
                                </button>
                            </div>
                        </div>
                    </div>
                </PanelCodeHighlight>
                {/* Sizes */}
                <PanelCodeHighlight
                    title="Sizes"
                    codeHighlight={`<span className="animate-spin border-4 border-success border-l-transparent rounded-full w-12 h-12 inline-block align-middle m-auto mb-10"></span>

<span className="animate-spin border-4 border-success border-l-transparent rounded-full w-10 h-10 inline-block align-middle m-auto mb-10"></span>

<span className="animate-spin border-[3px] border-success border-l-transparent rounded-full w-6 h-6 inline-block align-middle m-auto mb-10"></span>

<span className="animate-spin border-4 border-transparent border-l-primary rounded-full w-12 h-12 inline-block align-middle m-auto mb-10"></span>

<span className="animate-spin border-4 border-transparent border-l-primary rounded-full w-10 h-10 inline-block align-middle m-auto mb-10"></span>

<span className="animate-spin border-[3px] border-transparent border-l-primary rounded-full w-6 h-6 inline-block align-middle m-auto mb-10"></span>

<span className="w-5 h-5 m-auto mb-10">
    <span className="animate-ping inline-flex h-full w-full rounded-full bg-info"></span>
</span>

<span className="w-4 h-4 m-auto mb-10">
    <span className="animate-ping inline-flex h-full w-full rounded-full bg-info"></span>
</span>

<span className="w-3 h-3 m-auto mb-10">
    <span className="animate-ping inline-flex h-full w-full rounded-full bg-info"></span>
</span>`}
                >
                    <div className="mb-5">
                        <div className="grid w-full grid-cols-3 gap-4">
                            <span className="m-auto mb-10 inline-block h-12 w-12 animate-spin rounded-full border-4 border-success border-l-transparent align-middle"></span>
                            <span className="m-auto mb-10 inline-block h-10 w-10 animate-spin rounded-full border-4 border-success border-l-transparent align-middle"></span>
                            <span className="m-auto mb-10 inline-block h-6 w-6 animate-spin rounded-full border-[3px] border-success border-l-transparent align-middle"></span>
                            <span className="m-auto mb-10 inline-block h-12 w-12 animate-spin rounded-full border-4 border-transparent border-l-primary align-middle"></span>
                            <span className="m-auto mb-10 inline-block h-10 w-10 animate-spin rounded-full border-4 border-transparent border-l-primary align-middle"></span>
                            <span className="m-auto mb-10 inline-block h-6 w-6 animate-spin rounded-full border-[3px] border-transparent border-l-primary align-middle"></span>
                            <span className="m-auto mb-10 h-5 w-5">
                                <span className="inline-flex h-full w-full animate-ping rounded-full bg-info"></span>
                            </span>
                            <span className="m-auto mb-10 h-4 w-4">
                                <span className="inline-flex h-full w-full animate-ping rounded-full bg-info"></span>
                            </span>
                            <span className="m-auto mb-10 h-3 w-3">
                                <span className="inline-flex h-full w-full animate-ping rounded-full bg-info"></span>
                            </span>
                        </div>
                    </div>
                </PanelCodeHighlight>
                {/* Colors */}
                <PanelCodeHighlight
                    title="Colors"
                    codeHighlight={`<span className="animate-spin border-4 border-success border-l-transparent rounded-full w-10 h-10 inline-block align-middle m-auto mb-10"></span>

<span className="animate-spin border-4 border-danger border-l-transparent rounded-full w-10 h-10 inline-block align-middle m-auto mb-10"></span>

<span className="animate-spin border-4 border-warning border-l-transparent rounded-full w-10 h-10 inline-block align-middle m-auto mb-10"></span>

<span className="animate-spin border-4 border-primary border-l-transparent rounded-full w-10 h-10 inline-block align-middle m-auto mb-10"></span>

<span className="animate-spin border-4 border-transparent border-l-black rounded-full w-10 h-10 inline-block align-middle m-auto mb-10 dark:border-l-dark"></span>

<span className="animate-spin border-4 border-transparent border-l-danger rounded-full w-10 h-10 inline-block align-middle m-auto mb-10"></span>

<span className="animate-spin border-4 border-transparent border-l-warning rounded-full w-10 h-10 inline-block align-middle m-auto mb-10"></span>

<span className="animate-spin border-4 border-transparent border-l-primary rounded-full w-10 h-10 inline-block align-middle m-auto mb-10"></span>

<span className="w-4 h-4 m-auto mb-10">
    <span className="animate-ping inline-flex h-full w-full rounded-full bg-info"></span>
</span>

<span className="w-4 h-4 m-auto mb-10">
    <span className="animate-ping inline-flex h-full w-full rounded-full bg-danger"></span>
</span>

<span className="w-4 h-4 m-auto mb-10">
    <span className="animate-ping inline-flex h-full w-full rounded-full bg-warning"></span>
</span>

<span className="w-4 h-4 m-auto mb-10">
    <span className="animate-ping inline-flex h-full w-full rounded-full bg-primary"></span>
</span>`}
                >
                    <div className="mb-5">
                        <div className="grid w-full grid-cols-4 gap-4">
                            <span className="m-auto mb-10 inline-block h-10 w-10 animate-spin rounded-full border-4 border-success border-l-transparent align-middle"></span>
                            <span className="m-auto mb-10 inline-block h-10 w-10 animate-spin rounded-full border-4 border-danger border-l-transparent align-middle"></span>
                            <span className="m-auto mb-10 inline-block h-10 w-10 animate-spin rounded-full border-4 border-warning border-l-transparent align-middle"></span>
                            <span className="m-auto mb-10 inline-block h-10 w-10 animate-spin rounded-full border-4 border-primary border-l-transparent align-middle"></span>
                            <span className="m-auto mb-10 inline-block h-10 w-10 animate-spin rounded-full border-4 border-transparent border-l-black align-middle dark:border-l-dark"></span>
                            <span className="m-auto mb-10 inline-block h-10 w-10 animate-spin rounded-full border-4 border-transparent border-l-danger align-middle"></span>
                            <span className="m-auto mb-10 inline-block h-10 w-10 animate-spin rounded-full border-4 border-transparent border-l-warning align-middle"></span>
                            <span className="m-auto mb-10 inline-block h-10 w-10 animate-spin rounded-full border-4 border-transparent border-l-primary align-middle"></span>
                            <span className="m-auto mb-10 h-4 w-4">
                                <span className="inline-flex h-full w-full animate-ping rounded-full bg-info"></span>
                            </span>
                            <span className="m-auto mb-10 h-4 w-4">
                                <span className="inline-flex h-full w-full animate-ping rounded-full bg-danger"></span>
                            </span>
                            <span className="m-auto mb-10 h-4 w-4">
                                <span className="inline-flex h-full w-full animate-ping rounded-full bg-warning"></span>
                            </span>
                            <span className="m-auto mb-10 h-4 w-4">
                                <span className="inline-flex h-full w-full animate-ping rounded-full bg-primary"></span>
                            </span>
                        </div>
                    </div>
                </PanelCodeHighlight>
                {/* Custom */}
                <PanelCodeHighlight
                    title="Custom"
                    codeHighlight={`<span className="animate-spin border-8 border-[#f1f2f3] border-l-primary rounded-full w-14 h-14 inline-block align-middle m-auto mb-10"></span>

<span className="animate-[spin_2s_linear_infinite] border-8 border-[#f1f2f3] border-l-primary border-r-primary rounded-full w-14 h-14 inline-block align-middle m-auto mb-10"></span>

<span className="animate-[spin_3s_linear_infinite] border-8 border-r-warning border-l-primary border-t-danger border-b-success rounded-full w-14 h-14 inline-block align-middle m-auto mb-10"></span>`}
                >
                    <div className="mb-5">
                        <div className="grid w-full grid-cols-3 gap-4">
                            <span className="m-auto mb-10 inline-block h-14 w-14 animate-spin rounded-full border-8 border-[#f1f2f3] border-l-primary align-middle"></span>
                            <span className="m-auto mb-10 inline-block h-14 w-14 animate-[spin_2s_linear_infinite] rounded-full border-8 border-[#f1f2f3] border-l-primary border-r-primary align-middle"></span>
                            <span className="m-auto mb-10 inline-block h-14 w-14 animate-[spin_3s_linear_infinite] rounded-full border-8 border-b-success border-l-primary border-r-warning border-t-danger align-middle"></span>
                        </div>
                    </div>
                </PanelCodeHighlight>
            </div>
        </div>
    );
};

export default Loader;
