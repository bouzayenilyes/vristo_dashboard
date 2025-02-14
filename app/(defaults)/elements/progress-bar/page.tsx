import Link from 'next/link';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Progressbar',
};

const Progressbar = () => {
    return (
        <div>
            <div>
                <ul className="flex space-x-2 rtl:space-x-reverse">
                    <li>
                        <Link href="#" className="text-primary hover:underline">
                            Elements
                        </Link>
                    </li>
                    <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                        <span>Progress Bar</span>
                    </li>
                </ul>
                <div className="grid grid-cols-1 gap-6 pt-5 lg:grid-cols-2">
                    <PanelCodeHighlight
                        title="Basic"
                        codeHighlight={`<div className="w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full">
    <div className="bg-primary h-4 rounded-full w-3/12"></div>
</div>

<div className="w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full">
    <div className="bg-secondary h-4 rounded-full w-4/12"></div>
</div>

<div className="w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full">
    <div className="bg-success h-4 rounded-full w-5/12"></div>
</div>

<div className="w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full">
    <div className="bg-warning h-4 rounded-full w-6/12"></div>
</div>

<div className="w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full">
    <div className="bg-danger h-4 rounded-full w-7/12"></div>
</div>

<div className="w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full">
    <div className="bg-info h-4 rounded-full w-8/12"></div>
</div>

<div className="w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full">
    <div className="bg-black dark:bg-dark h-4 rounded-full w-9/12"></div>
</div>`}
                    >
                        <div className="mb-5 space-y-5">
                            <div className="h-4 w-full rounded-full bg-[#ebedf2] dark:bg-dark/40">
                                <div className="h-4 w-3/12 rounded-full bg-primary"></div>
                            </div>
                            <div className="h-4 w-full rounded-full bg-[#ebedf2] dark:bg-dark/40">
                                <div className="h-4 w-4/12 rounded-full bg-secondary"></div>
                            </div>
                            <div className="h-4 w-full rounded-full bg-[#ebedf2] dark:bg-dark/40">
                                <div className="h-4 w-5/12 rounded-full bg-success"></div>
                            </div>
                            <div className="h-4 w-full rounded-full bg-[#ebedf2] dark:bg-dark/40">
                                <div className="h-4 w-6/12 rounded-full bg-warning"></div>
                            </div>
                            <div className="h-4 w-full rounded-full bg-[#ebedf2] dark:bg-dark/40">
                                <div className="h-4 w-7/12 rounded-full bg-danger"></div>
                            </div>
                            <div className="h-4 w-full rounded-full bg-[#ebedf2] dark:bg-dark/40">
                                <div className="h-4 w-8/12 rounded-full bg-info"></div>
                            </div>
                            <div className="h-4 w-full rounded-full bg-[#ebedf2] dark:bg-dark/40">
                                <div className="h-4 w-9/12 rounded-full bg-black dark:bg-dark"></div>
                            </div>
                        </div>
                    </PanelCodeHighlight>

                    <PanelCodeHighlight
                        title="Gradient"
                        codeHighlight={`<div className="w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full">
    <div className="bg-gradient-to-r from-[#0081ff] to-[#0045ff] h-4 rounded-full w-3/12"></div>
</div>

<div className="w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full">
    <div className="bg-gradient-to-r from-[#04befe] to-[#4481eb] h-4 rounded-full w-4/12"></div>
</div>

<div className="w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full">
    <div className="bg-gradient-to-r from-[#3cba92] to-[#0ba360] h-4 rounded-full w-5/12"></div>
</div>

<div className="w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full">
    <div className="bg-gradient-to-r from-[#f09819] to-[#ff5858] h-4 rounded-full w-6/12"></div>
</div>

<div className="w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full">
    <div className="bg-gradient-to-r from-[#d09693] to-[#c71d6f] h-4 rounded-full w-7/12"></div>
</div>

<div className="w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full">
    <div className="bg-gradient-to-r from-[#7579ff] to-[#b224ef] h-4 rounded-full w-8/12"></div>
</div>

<div className="w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full">
    <div className="bg-gradient-to-r from-[#2b5876] to-[#4e4376] h-4 rounded-full w-9/12"></div>
</div>`}
                    >
                        <div className="mb-5 space-y-5">
                            <div className="h-4 w-full rounded-full bg-[#ebedf2] dark:bg-dark/40">
                                <div className="h-4 w-3/12 rounded-full bg-gradient-to-r from-[#0081ff] to-[#0045ff]"></div>
                            </div>
                            <div className="h-4 w-full rounded-full bg-[#ebedf2] dark:bg-dark/40">
                                <div className="h-4 w-4/12 rounded-full bg-gradient-to-r from-[#04befe] to-[#4481eb]"></div>
                            </div>
                            <div className="h-4 w-full rounded-full bg-[#ebedf2] dark:bg-dark/40">
                                <div className="h-4 w-5/12 rounded-full bg-gradient-to-r from-[#3cba92] to-[#0ba360]"></div>
                            </div>
                            <div className="h-4 w-full rounded-full bg-[#ebedf2] dark:bg-dark/40">
                                <div className="h-4 w-6/12 rounded-full bg-gradient-to-r from-[#f09819] to-[#ff5858]"></div>
                            </div>
                            <div className="h-4 w-full rounded-full bg-[#ebedf2] dark:bg-dark/40">
                                <div className="h-4 w-7/12 rounded-full bg-gradient-to-r from-[#d09693] to-[#c71d6f]"></div>
                            </div>
                            <div className="h-4 w-full rounded-full bg-[#ebedf2] dark:bg-dark/40">
                                <div className="h-4 w-8/12 rounded-full bg-gradient-to-r from-[#7579ff] to-[#b224ef]"></div>
                            </div>
                            <div className="h-4 w-full rounded-full bg-[#ebedf2] dark:bg-dark/40">
                                <div className="h-4 w-9/12 rounded-full bg-gradient-to-r from-[#2b5876] to-[#4e4376]"></div>
                            </div>
                        </div>
                    </PanelCodeHighlight>

                    <PanelCodeHighlight
                        title="Striped"
                        codeHighlight={`<div className="w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full">
    <div
        className="bg-primary h-4 rounded-full w-3/12"
        style={{
            backgroundImage:
                'linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent)',
            backgroundSize: '1rem 1rem',
        }}
    ></div>
</div>`}
                    >
                        <div className="mb-5 space-y-5">
                            <div className="h-4 w-full rounded-full bg-[#ebedf2] dark:bg-dark/40">
                                <div
                                    className="h-4 w-3/12 rounded-full bg-primary"
                                    style={{
                                        backgroundImage:
                                            'linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent)',
                                        backgroundSize: '1rem 1rem',
                                    }}
                                ></div>
                            </div>
                        </div>
                    </PanelCodeHighlight>

                    <PanelCodeHighlight
                        title="Animated"
                        codeHighlight={`<div
    className="bg-primary h-4 rounded-full w-6/12 animated-progress"
    style={{
        backgroundImage:
            'linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent)',
        backgroundSize: '1rem 1rem',
    }}
></div>`}
                    >
                        <div className="mb-5 space-y-5">
                            <div className="h-4 w-full rounded-full bg-[#ebedf2] dark:bg-dark/40">
                                <div
                                    className="animated-progress h-4 w-6/12 rounded-full bg-primary"
                                    style={{
                                        backgroundImage:
                                            'linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent)',
                                        backgroundSize: '1rem 1rem',
                                    }}
                                ></div>
                            </div>
                        </div>
                    </PanelCodeHighlight>

                    <PanelCodeHighlight
                        title="Labels"
                        codeHighlight={`<div className="mb-5 space-y-5">
    <div className="w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full">
        <div className="bg-info h-4 rounded-full w-4/5 text-center text-white text-xs">80%</div>
    </div>
    <div className="w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full">
        <div className="bg-danger h-4 rounded-full w-11/12 text-center text-white flex justify-between items-center px-2 text-xs">
            <span>PHP</span>
            <span>90%</span>
        </div>
    </div>
</div>`}
                    >
                        <div className="mb-5 space-y-5">
                            <div className="h-4 w-full rounded-full bg-[#ebedf2] dark:bg-dark/40">
                                <div className="h-4 w-4/5 rounded-full bg-info text-center text-xs text-white">80%</div>
                            </div>
                            <div className="h-4 w-full rounded-full bg-[#ebedf2] dark:bg-dark/40">
                                <div className="flex h-4 w-11/12 items-center justify-between rounded-full bg-danger px-2 text-center text-xs text-white">
                                    <span>PHP</span>
                                    <span>90%</span>
                                </div>
                            </div>
                        </div>
                    </PanelCodeHighlight>

                    <PanelCodeHighlight
                        title="Stacked"
                        codeHighlight={`<div className="space-y-2">
    <h3 className="text-base">Basic</h3>
    <div className="w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex">
        <div className="bg-success h-4 ltr:rounded-l-full rtl:rounded-r-full w-2/12 text-center text-white text-xs"></div>
        <div className="bg-warning h-4 w-4/12 text-center text-white text-xs"></div>
        <div className="bg-danger h-4 ltr:rounded-r-full rtl:rounded-l-full w-3/12 text-center text-white text-xs"></div>
    </div>
</div>

<div className="space-y-2">
    <h3 className="text-base">Striped</h3>
    <div className="w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex">
        <div
            className="bg-primary h-4 ltr:rounded-l-full rtl:rounded-r-full w-2/12 text-center text-white text-xs"
            style={{
                backgroundImage:
                    'linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent)',
                backgroundSize: '1rem 1rem',
            }}
        ></div>
        <div
            className="bg-success h-4 w-4/12 text-center text-white text-xs"
            style={{
                backgroundImage:
                    'linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent)',
                backgroundSize: '1rem 1rem',
            }}
        ></div>
        <div
            className="bg-info h-4 ltr:rounded-r-full rtl:rounded-l-full w-3/12 text-center text-white text-xs"
            style={{
                backgroundImage:
                    'linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent)',
                backgroundSize: '1rem 1rem',
            }}
        ></div>
    </div>
</div>

<div className="space-y-2">
    <h3 className="text-base">Animated</h3>
    <div className="w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex">
        <div
            className="bg-info h-4 ltr:rounded-l-full rtl:rounded-r-full w-2/12 animated-progress text-center text-white text-xs"
            style={{
                backgroundImage:
                    'linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent)',
                backgroundSize: '1rem 1rem',
            }}
        ></div>
        <div
            className="bg-secondary h-4 w-4/12 animated-progress text-center text-white text-xs"
            style={{
                backgroundImage:
                    'linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent)',
                backgroundSize: '1rem 1rem',
            }}
        ></div>
        <div
            className="bg-primary h-4 ltr:rounded-r-full rtl:rounded-l-full w-3/12 animated-progress text-center text-white text-xs"
            style={{
                backgroundImage:
                    'linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent)',
                backgroundSize: '1rem 1rem',
            }}
        ></div>
    </div>
</div>`}
                    >
                        <div className="mb-5 space-y-5">
                            <div className="space-y-2">
                                <h3 className="text-base">Basic</h3>
                                <div className="flex h-4 w-full rounded-full bg-[#ebedf2] dark:bg-dark/40">
                                    <div className="h-4 w-2/12 bg-success text-center text-xs text-white ltr:rounded-l-full rtl:rounded-r-full"></div>
                                    <div className="h-4 w-4/12 bg-warning text-center text-xs text-white"></div>
                                    <div className="h-4 w-3/12 bg-danger text-center text-xs text-white ltr:rounded-r-full rtl:rounded-l-full"></div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-base">Striped</h3>
                                <div className="flex h-4 w-full rounded-full bg-[#ebedf2] dark:bg-dark/40">
                                    <div
                                        className="h-4 w-2/12 bg-primary text-center text-xs text-white ltr:rounded-l-full rtl:rounded-r-full"
                                        style={{
                                            backgroundImage:
                                                'linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent)',
                                            backgroundSize: '1rem 1rem',
                                        }}
                                    ></div>
                                    <div
                                        className="h-4 w-4/12 bg-success text-center text-xs text-white"
                                        style={{
                                            backgroundImage:
                                                'linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent)',
                                            backgroundSize: '1rem 1rem',
                                        }}
                                    ></div>
                                    <div
                                        className="h-4 w-3/12 bg-info text-center text-xs text-white ltr:rounded-r-full rtl:rounded-l-full"
                                        style={{
                                            backgroundImage:
                                                'linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent)',
                                            backgroundSize: '1rem 1rem',
                                        }}
                                    ></div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-base">Animated</h3>
                                <div className="flex h-4 w-full rounded-full bg-[#ebedf2] dark:bg-dark/40">
                                    <div
                                        className="animated-progress h-4 w-2/12 bg-info text-center text-xs text-white ltr:rounded-l-full rtl:rounded-r-full"
                                        style={{
                                            backgroundImage:
                                                'linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent)',
                                            backgroundSize: '1rem 1rem',
                                        }}
                                    ></div>
                                    <div
                                        className="animated-progress h-4 w-4/12 bg-secondary text-center text-xs text-white"
                                        style={{
                                            backgroundImage:
                                                'linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent)',
                                            backgroundSize: '1rem 1rem',
                                        }}
                                    ></div>
                                    <div
                                        className="animated-progress h-4 w-3/12 bg-primary text-center text-xs text-white ltr:rounded-r-full rtl:rounded-l-full"
                                        style={{
                                            backgroundImage:
                                                'linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent)',
                                            backgroundSize: '1rem 1rem',
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </PanelCodeHighlight>

                    <PanelCodeHighlight
                        title="Progress Bars Different Sizes"
                        codeHighlight={`<div className="space-y-1">
    <h3 className="text-primary">Default Progress Bar Size</h3>
    <div className="w-full h-4 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex">
        <div className="bg-primary h-4 rounded-full rounded-bl-full w-3/12 text-center text-white text-xs"></div>
    </div>
</div>

<div className="space-y-2">
    <h3 className="text-base text-success">Progress-sm</h3>
    <div className="w-full h-1 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex">
        <div className="bg-success h-1 rounded-full rounded-bl-full w-5/12 text-center text-white text-xs"></div>
    </div>
</div>

<div className="space-y-2">
    <h3 className="text-base text-warning">Progress-md</h3>
    <div className="w-full h-2.5 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex">
        <div className="bg-warning h-2.5 rounded-full rounded-bl-full w-7/12 text-center text-white text-xs"></div>
    </div>
</div>

<div className="space-y-2">
    <h3 className="text-base text-info">Progress-lg</h3>
    <div className="w-full h-5 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex">
        <div className="bg-info h-5 rounded-full rounded-bl-full w-8/12 text-center text-white text-xs"></div>
    </div>
</div>

<div className="space-y-2">
    <h3 className="text-base text-danger">Progress-xl</h3>
    <div className="w-full h-6 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex">
        <div className="bg-danger h-6 rounded-full rounded-bl-full w-10/12 text-center text-white text-xs"></div>
    </div>
</div>`}
                    >
                        <div className="mb-5 space-y-5">
                            <div className="space-y-1">
                                <h3 className="text-primary">Default Progress Bar Size</h3>
                                <div className="flex h-4 w-full rounded-full bg-[#ebedf2] dark:bg-dark/40">
                                    <div className="h-4 w-3/12 rounded-full rounded-bl-full bg-primary text-center text-xs text-white"></div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-base text-success">Progress-sm</h3>
                                <div className="flex h-1 w-full rounded-full bg-[#ebedf2] dark:bg-dark/40">
                                    <div className="h-1 w-5/12 rounded-full rounded-bl-full bg-success text-center text-xs text-white"></div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-base text-warning">Progress-md</h3>
                                <div className="flex h-2.5 w-full rounded-full bg-[#ebedf2] dark:bg-dark/40">
                                    <div className="h-2.5 w-7/12 rounded-full rounded-bl-full bg-warning text-center text-xs text-white"></div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-base text-info">Progress-lg</h3>
                                <div className="flex h-5 w-full rounded-full bg-[#ebedf2] dark:bg-dark/40">
                                    <div className="h-5 w-8/12 rounded-full rounded-bl-full bg-info text-center text-xs text-white"></div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-base text-danger">Progress-xl</h3>
                                <div className="flex h-6 w-full rounded-full bg-[#ebedf2] dark:bg-dark/40">
                                    <div className="h-6 w-10/12 rounded-full rounded-bl-full bg-danger text-center text-xs text-white"></div>
                                </div>
                            </div>
                        </div>
                    </PanelCodeHighlight>
                </div>
            </div>
        </div>
    );
};

export default Progressbar;
