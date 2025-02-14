import ComponentsChartsArea from '@/components/charts/components-charts-area';
import ComponentsChartsBar from '@/components/charts/components-charts-bar';
import ComponentsChartsBubble from '@/components/charts/components-charts-bubble';
import ComponentsChartsColumn from '@/components/charts/components-charts-column';
import ComponentsChartsColumnStacked from '@/components/charts/components-charts-column-stacked';
import ComponentsChartsDonut from '@/components/charts/components-charts-donut';
import ComponentsChartsLine from '@/components/charts/components-charts-line';
import ComponentsChartsMixed from '@/components/charts/components-charts-mixed';
import ComponentsChartsPie from '@/components/charts/components-charts-pie';
import ComponentsChartsPolarArea from '@/components/charts/components-charts-polar-area';
import ComponentsChartsRadar from '@/components/charts/components-charts-radar';
import ComponentsChartsRadialBar from '@/components/charts/components-charts-radial-bar';
import IconBell from '@/components/icon/icon-bell';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
    title: 'Charts',
};

const Charts = () => {
    return (
        <div>
            <ul className="mb-6 flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link href="#" className="text-primary hover:underline">
                        Dashboard
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Charts</span>
                </li>
            </ul>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div className="panel flex items-center overflow-x-auto whitespace-nowrap p-3 text-primary lg:col-span-2">
                    <div className="rounded-full bg-primary p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3">
                        <IconBell />
                    </div>
                    <span className="ltr:mr-3 rtl:ml-3">Documentation: </span>
                    <a href="https://www.npmjs.com/package/react-apexcharts" target="_blank" className="block hover:underline" rel="noreferrer">
                        https://www.npmjs.com/package/react-apexcharts
                    </a>
                </div>

                <ComponentsChartsLine />
                <ComponentsChartsArea />
                <ComponentsChartsColumn />
                <ComponentsChartsColumnStacked />
                <ComponentsChartsBar />
                <ComponentsChartsMixed />
                <ComponentsChartsRadar />
                <ComponentsChartsPie />
                <ComponentsChartsDonut />
                <ComponentsChartsPolarArea />
                <ComponentsChartsRadialBar />
                <ComponentsChartsBubble />
            </div>
        </div>
    );
};

export default Charts;
