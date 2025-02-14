import Link from 'next/link';
import IconBox from '@/components/icon/icon-box';
import IconArrowLeft from '@/components/icon/icon-arrow-left';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Infobox',
};

const Infobox = () => {
    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link href="#" className="text-primary hover:underline">
                        Elements
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Infobox</span>
                </li>
            </ul>
            <div className="grid grid-cols-1 gap-6 pt-5 lg:grid-cols-2">
                {/* Infobox-1 */}
                <PanelCodeHighlight
                    title="Infobox 1"
                    codeHighlight={`<div className="flex flex-wrap w-full justify-center mb-5">
    <div className="border border-gray-500/20 rounded-md shadow-[rgb(31_45_61_/_10%)_0px_2px_10px_1px] dark:shadow-[0_2px_11px_0_rgb(6_8_24_/_39%)] p-6">
        <div className="text-primary mb-5">
            <svg>...</svg>
        </div>
        <h5 className="text-lg font-semibold mb-3.5 dark:text-white-light">Layout Package</h5>
        <p className="text-white-dark text-[15px]  mb-3.5">Lorem ipsum dolor sit amet, labore et dolore magna aliqua.</p>
        <button type="button" className="text-primary font-semibold hover:underline group">
            Discover
            <svg>...</svg>
        </button>
    </div>
</div>`}
                >
                    <div className="mb-5 flex w-full flex-wrap justify-center">
                        <div className="rounded-md border border-gray-500/20 p-6 shadow-[rgb(31_45_61_/_10%)_0px_2px_10px_1px] dark:shadow-[0_2px_11px_0_rgb(6_8_24_/_39%)]">
                            <div className="mb-5 text-primary">
                                <IconBox className="h-12 w-12" />
                            </div>
                            <h5 className="mb-3.5 text-lg font-semibold dark:text-white-light">Layout Package</h5>
                            <p className="mb-3.5 text-[15px]  text-white-dark">Lorem ipsum dolor sit amet, labore et dolore magna aliqua.</p>
                            <button type="button" className="group font-semibold text-primary hover:underline">
                                Discover{' '}
                                <IconArrowLeft className="relative inline-block transition-all duration-300 group-hover:translate-x-2 ltr:ml-1 rtl:mr-1 rtl:rotate-180 rtl:group-hover:-translate-x-2" />
                            </button>
                        </div>
                    </div>
                </PanelCodeHighlight>

                {/* Infobox-2 */}
                <PanelCodeHighlight
                    title="Infobox 2"
                    codeHighlight={`<div className="flex flex-wrap w-full justify-center mb-5">
    <div className="bg-dark border border-gray-500/20 rounded-md shadow-[rgb(31_45_61_/_10%)_0px_2px_10px_1px] dark:shadow-[0_2px_11px_0_rgb(6_8_24_/_39%)] p-6 text-center">
        <div className="text-white-light bg1-white-dark w-20 h-20 rounded-full flex items-center justify-center mb-5 mx-auto">
            <svg>...</svg>
        </div>
        <h5 className="text-lg font-semibold mb-3.5 text-white-light">Layout Package</h5>
        <p className="text-white-light text-[15px]  mb-3.5">Lorem ipsum dolor sit amet, labore et dolore magna aliqua.</p>
        <button type="button" className="text-info font-semibold hover:underline group">
            Discover
            <svg>...</svg>
        </button>
    </div>
</div>`}
                >
                    <div className="mb-5 flex w-full flex-wrap justify-center">
                        <div className="rounded-md border border-gray-500/20 bg-dark p-6 text-center shadow-[rgb(31_45_61_/_10%)_0px_2px_10px_1px] dark:shadow-[0_2px_11px_0_rgb(6_8_24_/_39%)]">
                            <div className="bg1-white-dark mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full text-white-light">
                                <IconBox className="h-12 w-12" />
                            </div>
                            <h5 className="mb-3.5 text-lg font-semibold text-white-light">Layout Package</h5>
                            <p className="mb-3.5 text-[15px]  text-white-light">Lorem ipsum dolor sit amet, labore et dolore magna aliqua.</p>
                            <button type="button" className="group font-semibold text-info hover:underline">
                                Discover{' '}
                                <IconArrowLeft className="relative inline-block transition-all duration-300 group-hover:translate-x-2 ltr:ml-1 rtl:mr-1 rtl:rotate-180 rtl:group-hover:-translate-x-2" />
                            </button>
                        </div>
                    </div>
                </PanelCodeHighlight>
                {/* Infobox-3 */}
                <PanelCodeHighlight
                    title="Infobox 3"
                    codeHighlight={`<div className="flex flex-wrap w-full justify-center mb-5">
    <div className="border border-gray-500/20 rounded-md shadow-[rgb(31_45_61_/_10%)_0px_2px_10px_1px] dark:shadow-[0_2px_11px_0_rgb(6_8_24_/_39%)] p-6 pt-12 mt-8 relative">
        <div className="bg-primary absolute text-white-light ltr:left-6 rtl:right-6 -top-8 w-16 h-16 rounded-md flex items-center justify-center mb-5 mx-auto">
            <svg>...</svg>
        </div>
        <h5 className="text-dark text-lg font-semibold mb-3.5 dark:text-white-light">Layout Package</h5>
        <p className="text-white-dark text-[15px]  mb-3.5">Lorem ipsum dolor sit amet, labore et dolore magna aliqua.</p>
        <button type="button" className="text-primary font-semibold hover:underline group">
            Discover
            <svg>...</svg>
        </button>
    </div>
</div>`}
                >
                    <div className="mb-5 flex w-full flex-wrap justify-center">
                        <div className="relative mt-8 rounded-md border border-gray-500/20 p-6 pt-12 shadow-[rgb(31_45_61_/_10%)_0px_2px_10px_1px] dark:shadow-[0_2px_11px_0_rgb(6_8_24_/_39%)]">
                            <div className="absolute -top-8 mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-md bg-primary text-white-light ltr:left-6 rtl:right-6">
                                <IconBox className="h-12 w-12" />
                            </div>
                            <h5 className="mb-3.5 text-lg font-semibold text-dark dark:text-white-light">Layout Package</h5>
                            <p className="mb-3.5 text-[15px]  text-white-dark">Lorem ipsum dolor sit amet, labore et dolore magna aliqua.</p>
                            <button type="button" className="group font-semibold text-primary hover:underline">
                                Discover{' '}
                                <IconArrowLeft className="relative inline-block transition-all duration-300 group-hover:translate-x-2 ltr:ml-1 rtl:mr-1 rtl:rotate-180 rtl:group-hover:-translate-x-2" />
                            </button>
                        </div>
                    </div>
                </PanelCodeHighlight>
            </div>
        </div>
    );
};

export default Infobox;
