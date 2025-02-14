'use client';
import Dropdown from '@/components/dropdown';
import IconCaretsDown from '@/components/icon/icon-carets-down';
import IconChatDots from '@/components/icon/icon-chat-dots';
import IconChecks from '@/components/icon/icon-checks';
import IconChrome from '@/components/icon/icon-chrome';
import IconClock from '@/components/icon/icon-clock';
import IconCreditCard from '@/components/icon/icon-credit-card';
import IconFile from '@/components/icon/icon-file';
import IconGlobe from '@/components/icon/icon-globe';
import IconHorizontalDots from '@/components/icon/icon-horizontal-dots';
import IconLink from '@/components/icon/icon-link';
import IconMail from '@/components/icon/icon-mail';
import IconPlus from '@/components/icon/icon-plus';
import IconSafari from '@/components/icon/icon-safari';
import IconServer from '@/components/icon/icon-server';
import IconSquareCheck from '@/components/icon/icon-square-check';
import IconThumbUp from '@/components/icon/icon-thumb-up';
import IconTrendingUp from '@/components/icon/icon-trending-up';
import IconUsersGroup from '@/components/icon/icon-users-group';
import { IRootState } from '@/store';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useSelector } from 'react-redux';
import PerfectScrollbar from 'react-perfect-scrollbar';

const ComponentsDashboardAnalytics = () => {
    const isDark = useSelector((state: IRootState) => state.themeConfig.theme === 'dark' || state.themeConfig.isDarkMode);
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl';
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);

    // totalVisitOptions
    const totalVisit: any = {
        series: [{ data: [21, 9, 36, 12, 44, 25, 59, 41, 66, 25] }],
        options: {
            chart: {
                height: 58,
                type: 'line',
                fontFamily: 'Nunito, sans-serif',
                sparkline: {
                    enabled: true,
                },
                dropShadow: {
                    enabled: true,
                    blur: 3,
                    color: '#009688',
                    opacity: 0.4,
                },
            },
            stroke: {
                curve: 'smooth',
                width: 2,
            },
            colors: ['#009688'],
            grid: {
                padding: {
                    top: 5,
                    bottom: 5,
                    left: 5,
                    right: 5,
                },
            },
            tooltip: {
                x: {
                    show: false,
                },
                y: {
                    title: {
                        formatter: () => {
                            return '';
                        },
                    },
                },
            },
        },
    };
    // paidVisitOptions
    const paidVisit: any = {
        series: [{ data: [22, 19, 30, 47, 32, 44, 34, 55, 41, 69] }],
        options: {
            chart: {
                height: 58,
                type: 'line',
                fontFamily: 'Nunito, sans-serif',
                sparkline: {
                    enabled: true,
                },
                dropShadow: {
                    enabled: true,
                    blur: 3,
                    color: '#e2a03f',
                    opacity: 0.4,
                },
            },
            stroke: {
                curve: 'smooth',
                width: 2,
            },
            colors: ['#e2a03f'],
            grid: {
                padding: {
                    top: 5,
                    bottom: 5,
                    left: 5,
                    right: 5,
                },
            },
            tooltip: {
                x: {
                    show: false,
                },
                y: {
                    title: {
                        formatter: () => {
                            return '';
                        },
                    },
                },
            },
        },
    };
    // uniqueVisitorSeriesOptions
    const uniqueVisitorSeries: any = {
        series: [
            {
                name: 'Direct',
                data: [58, 44, 55, 57, 56, 61, 58, 63, 60, 66, 56, 63],
            },
            {
                name: 'Organic',
                data: [91, 76, 85, 101, 98, 87, 105, 91, 114, 94, 66, 70],
            },
        ],
        options: {
            chart: {
                height: 360,
                type: 'bar',
                fontFamily: 'Nunito, sans-serif',
                toolbar: {
                    show: false,
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                width: 2,
                colors: ['transparent'],
            },
            colors: ['#5c1ac3', '#ffbb44'],
            dropShadow: {
                enabled: true,
                blur: 3,
                color: '#515365',
                opacity: 0.4,
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    borderRadius: 8,
                    borderRadiusApplication: 'end',
                },
            },
            legend: {
                position: 'bottom',
                horizontalAlign: 'center',
                fontSize: '14px',
                itemMargin: {
                    horizontal: 8,
                    vertical: 8,
                },
            },
            grid: {
                borderColor: isDark ? '#191e3a' : '#e0e6ed',
                padding: {
                    left: 20,
                    right: 20,
                },
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                axisBorder: {
                    show: true,
                    color: isDark ? '#3b3f5c' : '#e0e6ed',
                },
            },
            yaxis: {
                tickAmount: 6,
                opposite: isRtl ? true : false,
                labels: {
                    offsetX: isRtl ? -10 : 0,
                },
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: isDark ? 'dark' : 'light',
                    type: 'vertical',
                    shadeIntensity: 0.3,
                    inverseColors: false,
                    opacityFrom: 1,
                    opacityTo: 0.8,
                    stops: [0, 100],
                },
            },
            tooltip: {
                marker: {
                    show: true,
                },
            },
        },
    };
    // followersOptions
    const followers: any = {
        series: [
            {
                data: [38, 60, 38, 52, 36, 40, 28],
            },
        ],
        options: {
            chart: {
                height: 160,
                type: 'area',
                fontFamily: 'Nunito, sans-serif',
                sparkline: {
                    enabled: true,
                },
            },
            stroke: {
                curve: 'smooth',
                width: 2,
            },
            colors: ['#4361ee'],
            grid: {
                padding: {
                    top: 5,
                },
            },
            yaxis: {
                show: false,
            },
            tooltip: {
                x: {
                    show: false,
                },
                y: {
                    title: {
                        formatter: () => {
                            return '';
                        },
                    },
                },
            },
        },
    };
    // referralOptions
    const referral: any = {
        series: [
            {
                data: [60, 28, 52, 38, 40, 36, 38],
            },
        ],
        options: {
            chart: {
                height: 160,
                type: 'area',
                fontFamily: 'Nunito, sans-serif',
                sparkline: {
                    enabled: true,
                },
            },
            stroke: {
                curve: 'smooth',
                width: 2,
            },
            colors: ['#e7515a'],
            grid: {
                padding: {
                    top: 5,
                },
            },
            yaxis: {
                show: false,
            },
            tooltip: {
                x: {
                    show: false,
                },
                y: {
                    title: {
                        formatter: () => {
                            return '';
                        },
                    },
                },
            },
        },
    };
    // engagementOptions
    const engagement: any = {
        series: [
            {
                name: 'Sales',
                data: [28, 50, 36, 60, 38, 52, 38],
            },
        ],
        options: {
            chart: {
                height: 160,
                type: 'area',
                fontFamily: 'Nunito, sans-serif',
                sparkline: {
                    enabled: true,
                },
            },
            stroke: {
                curve: 'smooth',
                width: 2,
            },
            colors: ['#1abc9c'],
            grid: {
                padding: {
                    top: 5,
                },
            },
            yaxis: {
                show: false,
            },
            tooltip: {
                x: {
                    show: false,
                },
                y: {
                    title: {
                        formatter: () => {
                            return '';
                        },
                    },
                },
            },
        },
    };
    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link href="/" className="text-primary hover:underline">
                        Dashboard
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Analytics</span>
                </li>
            </ul>
            <div className="pt-5">
                <div className="mb-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="panel h-full sm:col-span-2 lg:col-span-1">
                        {/* statistics */}
                        <div className="mb-5 flex justify-between dark:text-white-light">
                            <h5 className="text-lg font-semibold ">Statistics</h5>
                            <div className="dropdown">
                                <Dropdown
                                    offset={[0, 5]}
                                    placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                                    btnClassName="hover:text-primary"
                                    button={<IconHorizontalDots className="text-black/70 hover:!text-primary dark:text-white/70" />}
                                >
                                    <ul>
                                        <li>
                                            <button type="button">This Week</button>
                                        </li>
                                        <li>
                                            <button type="button">Last Week</button>
                                        </li>
                                        <li>
                                            <button type="button">This Month</button>
                                        </li>
                                        <li>
                                            <button type="button">Last Month</button>
                                        </li>
                                    </ul>
                                </Dropdown>
                            </div>
                        </div>
                        <div className="grid gap-8 text-sm font-bold text-[#515365] sm:grid-cols-2">
                            <div>
                                <div>
                                    <div>Total Visits</div>
                                    <div className="text-lg text-[#f8538d]">423,964</div>
                                </div>
                                {isMounted && <ReactApexChart series={totalVisit.series} options={totalVisit.options} type="line" height={58} width={'100%'} />}
                            </div>

                            <div>
                                <div>
                                    <div>Paid Visits</div>
                                    <div className="text-lg text-[#f8538d]">7,929</div>
                                </div>

                                {isMounted && <ReactApexChart series={paidVisit.series} options={paidVisit.options} type="line" height={58} width={'100%'} />}
                            </div>
                        </div>
                    </div>

                    <div className="panel h-full">
                        <div className="mb-5 flex justify-between dark:text-white-light">
                            <h5 className="text-lg font-semibold ">Expenses</h5>

                            <div className="dropdown">
                                <Dropdown
                                    offset={[0, 5]}
                                    placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                                    btnClassName="hover:text-primary"
                                    button={<IconHorizontalDots className="text-black/70 hover:!text-primary dark:text-white/70" />}
                                >
                                    <ul>
                                        <li>
                                            <button type="button">This Week</button>
                                        </li>
                                        <li>
                                            <button type="button">Last Week</button>
                                        </li>
                                        <li>
                                            <button type="button">This Month</button>
                                        </li>
                                        <li>
                                            <button type="button">Last Month</button>
                                        </li>
                                    </ul>
                                </Dropdown>
                            </div>
                        </div>
                        <div className=" my-10 text-3xl font-bold text-[#e95f2b]">
                            <span>$ 45,141 </span>
                            <span className="text-sm text-black ltr:mr-2 rtl:ml-2 dark:text-white-light">this week</span>
                            <IconTrendingUp className="inline text-success" />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="h-5 w-full overflow-hidden rounded-full bg-dark-light p-1 shadow-3xl dark:bg-dark-light/10 dark:shadow-none">
                                <div
                                    className="relative h-full w-full rounded-full bg-gradient-to-r from-[#4361ee] to-[#805dca] before:absolute before:inset-y-0 before:m-auto before:h-2 before:w-2 before:rounded-full before:bg-white ltr:before:right-0.5 rtl:before:left-0.5"
                                    style={{ width: '65%' }}
                                ></div>
                            </div>
                            <span className="ltr:ml-5 rtl:mr-5 dark:text-white-light">57%</span>
                        </div>
                    </div>

                    <div
                        className="panel grid h-full grid-cols-1 content-between overflow-hidden before:absolute before:-right-44 before:bottom-0 before:top-0 before:m-auto before:h-96 before:w-96 before:rounded-full before:bg-[#1937cc]"
                        style={{
                            background: 'linear-gradient(0deg,#00c6fb -227%,#005bea)',
                        }}
                    >
                        <div className="z-[7] mb-16 flex items-start justify-between text-white-light">
                            <h5 className="text-lg font-semibold">Total Balance</h5>

                            <div className="relative whitespace-nowrap text-xl">
                                $ 41,741.42
                                <span className="mt-1 table rounded bg-[#4361ee] p-1 text-xs text-[#d3d3d3] ltr:ml-auto rtl:mr-auto">+ 2453</span>
                            </div>
                        </div>
                        <div className="z-10 flex items-center justify-between">
                            <div className="flex items-center justify-between">
                                <button type="button" className="place-content-center rounded p-1 text-white-light shadow-[0_0_2px_0_#bfc9d4] hover:bg-[#1937cc] ltr:mr-2 rtl:ml-2">
                                    <IconPlus />
                                </button>
                                <button type="button" className="grid place-content-center rounded p-1 text-white-light shadow-[0_0_2px_0_#bfc9d4] hover:bg-[#1937cc]">
                                    <IconCreditCard />
                                </button>
                            </div>
                            <button type="button" className="z-10 rounded p-1 text-white-light shadow-[0_0_2px_0_#bfc9d4] hover:bg-[#4361ee]">
                                Upgrade
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mb-6 grid gap-6 lg:grid-cols-3">
                    <div className="panel h-full p-0 lg:col-span-2">
                        <div className="mb-5 flex items-start justify-between border-b border-white-light p-5  dark:border-[#1b2e4b] dark:text-white-light">
                            <h5 className="text-lg font-semibold ">Unique Visitors</h5>
                            <div className="dropdown">
                                <Dropdown
                                    offset={[0, 5]}
                                    placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                                    btnClassName="hover:text-primary"
                                    button={<IconHorizontalDots className="text-black/70 hover:!text-primary dark:text-white/70" />}
                                >
                                    <ul>
                                        <li>
                                            <button type="button">View</button>
                                        </li>
                                        <li>
                                            <button type="button">Update</button>
                                        </li>
                                        <li>
                                            <button type="button">Delete</button>
                                        </li>
                                    </ul>
                                </Dropdown>
                            </div>
                        </div>

                        {isMounted && <ReactApexChart options={uniqueVisitorSeries.options} series={uniqueVisitorSeries.series} type="bar" height={360} width={'100%'} />}
                    </div>

                    <div className="panel h-full">
                        <div className="-mx-5 mb-5 flex items-start justify-between border-b border-white-light p-5 pt-0  dark:border-[#1b2e4b] dark:text-white-light">
                            <h5 className="text-lg font-semibold ">Activity Log</h5>
                            <div className="dropdown">
                                <Dropdown
                                    offset={[0, 5]}
                                    placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                                    btnClassName="hover:text-primary"
                                    button={<IconHorizontalDots className="text-black/70 hover:!text-primary dark:text-white/70" />}
                                >
                                    <ul>
                                        <li>
                                            <button type="button">View All</button>
                                        </li>
                                        <li>
                                            <button type="button">Mark as Read</button>
                                        </li>
                                    </ul>
                                </Dropdown>
                            </div>
                        </div>
                        <PerfectScrollbar className="perfect-scrollbar relative h-[360px] ltr:-mr-3 ltr:pr-3 rtl:-ml-3 rtl:pl-3">
                            <div className="space-y-7">
                                <div className="flex">
                                    <div className="relative z-10 shrink-0 before:absolute before:left-4 before:top-10 before:h-[calc(100%-24px)] before:w-[2px] before:bg-white-dark/30 ltr:mr-2 rtl:ml-2">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-white shadow shadow-secondary">
                                            <IconPlus className="h-4 w-4" />
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className="font-semibold dark:text-white-light">
                                            New project created :{' '}
                                            <button type="button" className="text-success">
                                                [VRISTO Admin Template]
                                            </button>
                                        </h5>
                                        <p className="text-xs text-white-dark">27 Feb, 2020</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="relative z-10 shrink-0 before:absolute before:left-4 before:top-10 before:h-[calc(100%-24px)] before:w-[2px] before:bg-white-dark/30 ltr:mr-2 rtl:ml-2">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-success text-white shadow-success">
                                            <IconMail className="h-4 w-4" />
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className="font-semibold dark:text-white-light">
                                            Mail sent to{' '}
                                            <button type="button" className="text-white-dark">
                                                HR
                                            </button>{' '}
                                            and{' '}
                                            <button type="button" className="text-white-dark">
                                                Admin
                                            </button>
                                        </h5>
                                        <p className="text-xs text-white-dark">28 Feb, 2020</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="relative z-10 shrink-0 before:absolute before:left-4 before:top-10 before:h-[calc(100%-24px)] before:w-[2px] before:bg-white-dark/30 ltr:mr-2 rtl:ml-2">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                                            <IconChecks className="h-4 w-4" />
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className="font-semibold dark:text-white-light">Server Logs Updated</h5>
                                        <p className="text-xs text-white-dark">27 Feb, 2020</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="relative z-10 shrink-0 before:absolute before:left-4 before:top-10 before:h-[calc(100%-24px)] before:w-[2px] before:bg-white-dark/30 ltr:mr-2 rtl:ml-2">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-danger text-white">
                                            <IconChecks className="h-4 w-4" />
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className="font-semibold dark:text-white-light">
                                            Task Completed :
                                            <button type="button" className="ml-1 text-success">
                                                [Backup Files EOD]
                                            </button>
                                        </h5>
                                        <p className="text-xs text-white-dark">01 Mar, 2020</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="relative z-10 shrink-0 before:absolute before:left-4 before:top-10 before:h-[calc(100%-24px)] before:w-[2px] before:bg-white-dark/30 ltr:mr-2 rtl:ml-2">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-warning text-white">
                                            <IconFile className="h-4 w-4" />
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className="font-semibold dark:text-white-light">
                                            Documents Submitted from <button type="button">Sara</button>
                                        </h5>
                                        <p className="text-xs text-white-dark">10 Mar, 2020</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="shrink-0 ltr:mr-2 rtl:ml-2">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-dark text-white">
                                            <IconServer className="h-4 w-4" />
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className="font-semibold dark:text-white-light">Server rebooted successfully</h5>
                                        <p className="text-xs text-white-dark">06 Apr, 2020</p>
                                    </div>
                                </div>
                            </div>
                        </PerfectScrollbar>
                    </div>
                </div>

                <div className="mb-6 grid gap-6 sm:grid-cols-3 xl:grid-cols-5">
                    <div className="panel h-full sm:col-span-3 xl:col-span-2">
                        <div className="mb-5 flex items-start justify-between">
                            <h5 className="text-lg font-semibold dark:text-white-light">Visitors by Browser</h5>
                        </div>
                        <div className="flex flex-col space-y-5">
                            <div className="flex items-center">
                                <div className="h-9 w-9">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary dark:bg-primary dark:text-white-light">
                                        <IconChrome className="h-5 w-5" />
                                    </div>
                                </div>
                                <div className="w-full flex-initial px-3">
                                    <div className="w-summary-info mb-1 flex justify-between font-semibold text-white-dark">
                                        <h6>Chrome</h6>
                                        <p className="text-xs ltr:ml-auto rtl:mr-auto">65%</p>
                                    </div>
                                    <div>
                                        <div className="h-5 w-full overflow-hidden rounded-full bg-dark-light p-1 shadow-3xl dark:bg-dark-light/10 dark:shadow-none">
                                            <div
                                                className="relative h-full w-full rounded-full bg-gradient-to-r from-[#009ffd] to-[#2a2a72] before:absolute before:inset-y-0 before:m-auto before:h-2 before:w-2 before:rounded-full before:bg-white ltr:before:right-0.5 rtl:before:left-0.5"
                                                style={{ width: '65%' }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="h-9 w-9">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-danger/10 text-danger dark:bg-danger dark:text-white-light">
                                        <IconSafari className="h-5 w-5" />
                                    </div>
                                </div>
                                <div className="w-full flex-initial px-3">
                                    <div className="w-summary-info mb-1 flex justify-between font-semibold text-white-dark">
                                        <h6>Safari</h6>
                                        <p className="text-xs ltr:ml-auto rtl:mr-auto">40%</p>
                                    </div>
                                    <div>
                                        <div className="h-5 w-full overflow-hidden rounded-full bg-dark-light p-1 shadow-3xl dark:bg-dark-light/10 dark:shadow-none">
                                            <div
                                                className="relative h-full w-full rounded-full bg-gradient-to-r from-[#a71d31] to-[#3f0d12] before:absolute before:inset-y-0 before:m-auto before:h-2 before:w-2 before:rounded-full before:bg-white ltr:before:right-0.5 rtl:before:left-0.5"
                                                style={{ width: '40%' }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="h-9 w-9">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-warning/10 text-warning dark:bg-warning dark:text-white-light">
                                        <IconGlobe className="h-5 w-5" />
                                    </div>
                                </div>
                                <div className="w-full flex-initial px-3">
                                    <div className="w-summary-info mb-1 flex justify-between font-semibold text-white-dark">
                                        <h6>Others</h6>
                                        <p className="text-xs ltr:ml-auto rtl:mr-auto">25%</p>
                                    </div>
                                    <div>
                                        <div className="h-5 w-full overflow-hidden rounded-full bg-dark-light p-1 shadow-3xl dark:bg-dark-light/10 dark:shadow-none">
                                            <div
                                                className="relative h-full w-full rounded-full bg-gradient-to-r from-[#fe5f75] to-[#fc9842] before:absolute before:inset-y-0 before:m-auto before:h-2 before:w-2 before:rounded-full before:bg-white ltr:before:right-0.5 rtl:before:left-0.5"
                                                style={{ width: '25%' }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="panel h-full p-0">
                        <div className="flex p-5">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary dark:bg-primary dark:text-white-light">
                                <IconUsersGroup className="h-5 w-5" />
                            </div>
                            <div className="font-semibold ltr:ml-3 rtl:mr-3">
                                <p className="text-xl dark:text-white-light">31.6K</p>
                                <h5 className="text-xs text-[#506690]">Followers</h5>
                            </div>
                        </div>
                        <div className="h-40">
                            {isMounted && <ReactApexChart series={followers.series} options={followers.options} type="area" height={160} width={'100%'} className="absolute bottom-0 w-full" />}
                        </div>
                    </div>

                    <div className="panel h-full p-0">
                        <div className="flex p-5">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-danger/10 text-danger dark:bg-danger dark:text-white-light">
                                <IconLink className="h-5 w-5" />
                            </div>
                            <div className="font-semibold ltr:ml-3 rtl:mr-3">
                                <p className="text-xl dark:text-white-light">1,900</p>
                                <h5 className="text-xs text-[#506690]">Referral</h5>
                            </div>
                        </div>
                        <div className="h-40">
                            {isMounted && <ReactApexChart series={referral.series} options={referral.options} type="area" height={160} width={'100%'} className="absolute bottom-0 w-full" />}
                        </div>
                    </div>

                    <div className="panel h-full p-0">
                        <div className="flex p-5">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-success/10 text-success dark:bg-success dark:text-white-light">
                                <IconChatDots className="h-5 w-5" />
                            </div>
                            <div className="font-semibold ltr:ml-3 rtl:mr-3">
                                <p className="text-xl dark:text-white-light">18.2%</p>
                                <h5 className="text-xs text-[#506690]">Engagement</h5>
                            </div>
                        </div>
                        <div className="h-40">
                            {isMounted && <ReactApexChart series={engagement.series} options={engagement.options} type="area" height={160} width={'100%'} className="absolute bottom-0 w-full" />}
                        </div>
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    <div className="panel h-full">
                        <div className="-m-5 mb-5 flex  items-start border-b border-white-light p-5 dark:border-[#1b2e4b]">
                            <div className="shrink-0 rounded-full ring-2 ring-white-light ltr:mr-4 rtl:ml-4 dark:ring-dark">
                                <img src="/assets/images/profile-1.jpeg" alt="profile1" className="h-10 w-10 rounded-full object-cover" />
                            </div>
                            <div className="font-semibold">
                                <h6>Jimmy Turner</h6>
                                <p className="mt-1 text-xs text-white-dark">Monday, Nov 18</p>
                            </div>
                        </div>
                        <div>
                            <div className="pb-8 text-white-dark">
                                {`"Duis aute irure dolor" in reprehenderit in voluptate velit esse
                cillum "dolore eu fugiat" nulla pariatur. Excepteur sint
                occaecat cupidatat non proident.`}
                            </div>
                            <div className="absolute bottom-0 -mx-5 flex w-full items-center justify-between p-5">
                                <div className="flex items-center">
                                    <IconThumbUp className="relative -top-0.5 inline h-5 w-5 text-info ltr:mr-1.5 rtl:ml-1.5" />
                                    <span className="dark:text-info">551 Likes</span>
                                </div>
                                <button type="button" className="flex items-center rounded-md bg-success/30 px-1.5 py-1 text-xs text-success hover:shadow-[0_10px_20px_-10px] hover:shadow-success">
                                    Read More
                                    <IconCaretsDown className="h-4 w-4 -rotate-90 ltr:ml-1.5 rtl:mr-1.5 rtl:rotate-90" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="panel h-full">
                        <div className="-m-5 mb-5 flex items-center  justify-between border-b border-white-light p-5 dark:border-[#1b2e4b]">
                            <div className="flex">
                                <div className="media-aside align-self-start">
                                    <div className="shrink-0 rounded-full ring-2 ring-white-light ltr:mr-4 rtl:ml-4 dark:ring-dark">
                                        <img src="/assets/images/g-8.png" alt="profile2" className="h-10 w-10 rounded-full object-cover" />
                                    </div>
                                </div>
                                <div className="font-semibold">
                                    <h6>Dev Summit - New York</h6>
                                    <p className="mt-1 text-xs text-white-dark">Bronx, NY</p>
                                </div>
                            </div>
                        </div>
                        <div className="pb-8 text-center font-semibold">
                            <div className="mb-4 text-primary">4 Members Going</div>
                            <div className="flex items-center justify-center gap-3 pb-8">
                                <img className="h-10 w-10 overflow-hidden rounded-lg object-cover ring-2 ring-white-light dark:ring-dark" src="/assets/images/profile-1.jpeg" alt="profile1" />
                                <img className="h-10 w-10 overflow-hidden rounded-lg object-cover ring-2 ring-white-light dark:ring-dark" src="/assets/images/profile-2.jpeg" alt="profile2" />
                                <img className="h-10 w-10 overflow-hidden rounded-lg object-cover ring-2 ring-white-light dark:ring-dark" src="/assets/images/profile-3.jpeg" alt="profile3" />
                                <img className="h-10 w-10 overflow-hidden rounded-lg object-cover ring-2 ring-white-light dark:ring-dark" src="/assets/images/profile-4.jpeg" alt="profile4" />
                            </div>

                            <div className="absolute bottom-0 -mx-5 flex w-full items-center justify-between p-5">
                                <button type="button" className="btn btn-secondary btn-lg w-full border-0 bg-gradient-to-r from-[#3d38e1] to-[#1e9afe]">
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="panel h-full">
                        <div className="-m-5 mb-5 flex items-center justify-between border-b border-white-light p-5 dark:border-[#1b2e4b]">
                            <button type="button" className="flex font-semibold">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-secondary text-white ltr:mr-4 rtl:ml-4">
                                    <span>FD</span>
                                </div>
                                <div style={{ textAlign: 'left' }}>
                                    <h6>Figma Design</h6>
                                    <p className="mt-1 text-xs text-white-dark">Design Reset</p>
                                </div>
                            </button>

                            <div className="dropdown">
                                <Dropdown
                                    offset={[0, 5]}
                                    placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                                    btnClassName="hover:text-primary"
                                    button={<IconHorizontalDots className="h-5 w-5 text-black/70 hover:!text-primary dark:text-white/70" />}
                                >
                                    <ul>
                                        <li>
                                            <button type="button">View Project</button>
                                        </li>
                                        <li>
                                            <button type="button">Edit Project</button>
                                        </li>
                                        <li>
                                            <button type="button">Mark as Done</button>
                                        </li>
                                    </ul>
                                </Dropdown>
                            </div>
                        </div>
                        <div className="group">
                            <div className="mb-5 text-white-dark">Doloribus nisi vel suscipit modi, optio ex repudiandae voluptatibus officiis commodi. Nesciunt quas aut neque incidunt!</div>
                            <div className="mb-2 flex items-center justify-between font-semibold">
                                <div className="flex items-center">
                                    <IconSquareCheck className="h-4 w-4 text-success" />
                                    <div className="text-xs ltr:ml-2 rtl:mr-2">5 Tasks</div>
                                </div>
                                <p className="text-primary">65%</p>
                            </div>
                            <div className="mb-5 h-2.5 rounded-full bg-dark-light p-0.5 dark:bg-dark-light/10">
                                <div className="h-full rounded-full bg-gradient-to-r from-[#1e9afe] to-[#60dfcd]" style={{ width: '65%' }}></div>
                            </div>
                            <div className="flex items-end justify-between">
                                <div className="flex items-center rounded-full bg-danger/20 px-2 py-1 text-xs font-semibold text-danger">
                                    <IconClock className="h-3 w-3 ltr:mr-1 rtl:ml-1" />3 Days Left
                                </div>
                                <div className="flex items-center justify-center group-hover:-space-x-2 rtl:space-x-reverse rtl:group-hover:space-x-reverse">
                                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#bfc9d4] font-semibold text-white opacity-0 transition-all duration-300 group-hover:opacity-100 dark:bg-dark">
                                        +6
                                    </span>
                                    <img
                                        className="h-9 w-9 rounded-full border-2 border-white object-cover transition-all duration-300 dark:border-dark"
                                        src="/assets/images/profile-6.jpeg"
                                        alt="profile6"
                                    />
                                    <img
                                        className="h-9 w-9 rounded-full border-2 border-white object-cover transition-all duration-300 dark:border-dark"
                                        src="/assets/images/profile-7.jpeg"
                                        alt="profile7"
                                    />
                                    <img
                                        className="h-9 w-9 rounded-full border-2 border-white object-cover transition-all duration-300 dark:border-dark"
                                        src="/assets/images/profile-8.jpeg"
                                        alt="profile8"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComponentsDashboardAnalytics;
