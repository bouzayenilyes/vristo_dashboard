import Link from 'next/link';
import IconArrowLeft from '@/components/icon/icon-arrow-left';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Typography',
};

const Typography = () => {
    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link href="#" className="text-primary hover:underline">
                        Elements
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Typography</span>
                </li>
            </ul>
            <div className="grid grid-cols-1 gap-6 pt-5 lg:grid-cols-2">
                <div className="panel">
                    <h5 className="mb-5 text-lg font-semibold dark:text-white-light">Heading</h5>
                    <div className="mb-5 flex items-center justify-center">
                        <div className="w-full max-w-xs overflow-hidden rounded-md border border-white-dark/20 dark:border-[#191e3a]">
                            <div className="bg-white p-4 dark:bg-[#191e3a]">
                                <p className="text-4xl leading-[60px] text-[#515365] dark:text-white-light">The quick brown fox</p>
                            </div>
                            <div className="border-border-white-dark/20 border-t bg-dark-light p-4 dark:border-black dark:bg-[#191e3a]">
                                <h5 className="text-base dark:text-white-light">Nunito</h5>
                                <button className="text-[13px] text-primary">Google Fonts</button>
                                <div className="mt-7 flex justify-center">
                                    <button className="btn btn-primary">View Family</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="panel">
                    <h5 className="mb-5 text-lg font-semibold dark:text-white-light">Heading</h5>
                    <div className="mb-5 flex items-center justify-center">
                        <div className="prose w-full max-w-xs rounded-md border border-white-dark/20 p-5">
                            <h1 className="m-0 dark:text-white-dark">H1. Heading</h1>
                            <h2 className="m-0 dark:text-white-dark">H2. Heading</h2>
                            <h3 className="m-0 dark:text-white-dark">H3. Heading</h3>
                            <h4 className="m-0 dark:text-white-dark">H4. Heading</h4>
                            <h5 className="m-0 dark:text-white-dark">H5. Heading</h5>
                            <h6 className="m-0 dark:text-white-dark">H6. Heading</h6>
                        </div>
                    </div>
                </div>

                <div className="panel">
                    <h5 className="mb-5 text-lg font-semibold dark:text-white-light">Heading Colored</h5>
                    <div className="mb-5 flex items-center justify-center">
                        <div className="prose w-full max-w-xs rounded-md border border-white-dark/20 p-5">
                            <h1 className="m-0 text-primary">H1. Heading</h1>
                            <h2 className="m-0 text-info">H2. Heading</h2>
                            <h3 className="m-0 text-success">H3. Heading</h3>
                            <h4 className="m-0 text-warning">H4. Heading</h4>
                            <h5 className="m-0 text-danger">H5. Heading</h5>
                            <h6 className="m-0 text-secondary">H6. Heading</h6>
                        </div>
                    </div>
                </div>

                <div className="panel">
                    <h5 className="mb-5 text-lg font-semibold dark:text-white-light">Icon List</h5>
                    <div className="mb-5 flex items-center justify-center">
                        <div className="w-full max-w-xs rounded-md border border-white-dark/20 p-5">
                            <ul className="space-y-3 font-semibold">
                                <li>
                                    <IconArrowLeft className="inline text-primary ltr:mr-2 rtl:ml-2 rtl:rotate-180" />
                                    <span className="list-text">Aliquam et eros vehicula.</span>
                                </li>
                                <li>
                                    <IconArrowLeft className="inline text-primary ltr:mr-2 rtl:ml-2 rtl:rotate-180" />
                                    <span className="list-text">Vivamus lacus suscipit.</span>
                                </li>
                                <li>
                                    <IconArrowLeft className="inline text-primary ltr:mr-2 rtl:ml-2 rtl:rotate-180" />
                                    <span className="list-text">Morbi luctus tincidunt.</span>
                                </li>
                                <li>
                                    <IconArrowLeft className="inline text-primary ltr:mr-2 rtl:ml-2 rtl:rotate-180" />
                                    <span className="list-text">Nulla metus dolor.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="panel">
                    <h5 className="mb-5 text-lg font-semibold dark:text-white-light">Unordered list</h5>
                    <div className="mb-5 flex items-center justify-center">
                        <div className="w-full max-w-xs rounded-md border border-white-dark/20 p-5 text-white-dark">
                            <ul className="list-inside list-disc space-y-3 font-semibold">
                                <li className="mb-1">Consectetur adipiscing elit</li>
                                <li className="mb-1">Integer molestie lorem at massa</li>
                                <li className="mb-1">Facilisis in pretium nisl aliquet</li>
                                <li className="inline">
                                    <ul className="list-inside space-y-3 ltr:pl-5 rtl:pr-5">
                                        <li className="mb-1 mt-1">Phasellus iaculis neque</li>
                                        <li className="mb-1">Purus sodales ultricies</li>
                                        <li className="mb-1">Ac tristique libero volutpat at</li>
                                    </ul>
                                </li>
                                <li className="mb-1 mt-1">Faucibus porta lacus fringilla vel</li>
                                <li className="mb-1">Aenean sit amet erat nunc</li>
                                <li className="mb-1">Eget porttitor lorem</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="panel">
                    <h5 className="mb-5 text-lg font-semibold dark:text-white-light">Ordered list</h5>
                    <div className="mb-5 flex items-center justify-center">
                        <div className="w-full max-w-xs rounded-md border border-white-dark/20 p-5 text-white-dark">
                            <ol className="list-inside list-decimal space-y-3 font-semibold">
                                <li className="mb-1">Consectetur adipiscing elit</li>
                                <li className="mb-1">Integer molestie lorem at massa</li>
                                <li className="mb-1">Facilisis in pretium nisl aliquet</li>
                                <li className="inline">
                                    <ol className="list-inside list-decimal space-y-3 ltr:pl-5 rtl:pr-5">
                                        <li className="mb-1 mt-1">Phasellus iaculis neque</li>
                                        <li className="mb-1">Purus sodales ultricies</li>
                                        <li className="mb-1">Ac tristique libero volutpat at</li>
                                    </ol>
                                </li>
                                <li className="mb-1 mt-1">Faucibus porta lacus fringilla vel</li>
                                <li className="mb-1">Aenean sit amet erat nunc</li>
                                <li className="mb-1">Eget porttitor lorem</li>
                            </ol>
                        </div>
                    </div>
                </div>

                <div className="panel">
                    <h5 className="mb-5 text-lg font-semibold dark:text-white-light">Blockquote</h5>
                    <div className="mb-5 flex items-center justify-center">
                        <blockquote className="rounded-br-md rounded-tr-md border border-l-2 border-white-light !border-l-primary bg-white p-5 text-black shadow-md ltr:pl-3.5 rtl:pr-3.5 dark:border-[#060818] dark:bg-[#060818]">
                            <div className="flex items-start">
                                <p className="m-0 text-sm not-italic text-[#515365] dark:text-white-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                            </div>
                            <small className="block w-full text-xs not-italic text-[#777] before:relative before:-top-1 before:inline-block before:h-[1px] before:w-3 before:bg-[#777] before:opacity-50 ltr:before:mr-1 rtl:before:ml-1">
                                Someone famous <cite className="italic">Source Title</cite>
                            </small>
                        </blockquote>
                    </div>
                </div>

                <div className="panel">
                    <h5 className="mb-5 text-lg font-semibold dark:text-white-light">Blockquote with profile</h5>
                    <div className="mb-5 flex items-center justify-center">
                        <blockquote className="rounded-br-md rounded-tr-md border border-l-2 border-white-light !border-l-primary bg-white p-5 text-black shadow-md ltr:pl-3.5 rtl:pr-3.5 dark:border-[#060818] dark:bg-[#060818]">
                            <div className="flex items-start">
                                <div className="h-14 w-14 flex-none ltr:mr-5 rtl:ml-5">
                                    <img src="/assets/images/profile-34.jpeg" alt="img" className="m-auto h-14 w-14 rounded-full object-cover" />
                                </div>
                                <p className="m-0 text-sm not-italic text-[#515365] dark:text-white-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                            </div>
                            <small className="block w-full text-xs not-italic text-[#777] before:relative before:-top-1 before:inline-block before:h-[1px] before:w-3 before:bg-[#777] before:opacity-50 ltr:text-right ltr:before:mr-1 rtl:text-left rtl:before:ml-1">
                                Someone famous <cite className="italic">Source Title</cite>
                            </small>
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Typography;
