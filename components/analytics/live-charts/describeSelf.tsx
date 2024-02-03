import useSWR from 'swr';
import { fetcher, analysisURL } from '@/utils/fetch';
import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), {
    ssr: false,
});

const DescribeSelf = () => {
    const { data: describeselfCount, error, isLoading } = useSWR(`${analysisURL}/describeself`, fetcher);
    if (isLoading || error) return null;

    const series = [
        {
            data: [
                {
                    x: Object.keys(describeselfCount)[0],
                    y: Object.values(describeselfCount)[0]
                },
                {
                    x: Object.keys(describeselfCount)[1],
                    y: Object.values(describeselfCount)[1]
                },
                {
                    x: Object.keys(describeselfCount)[2],
                    y: Object.values(describeselfCount)[2]
                },
                {
                    x: Object.keys(describeselfCount)[3],
                    y: Object.values(describeselfCount)[3]
                },
                {
                    x: Object.keys(describeselfCount)[4],
                    y: Object.values(describeselfCount)[4]
                },
                {
                    x: Object.keys(describeselfCount)[5],
                    y: Object.values(describeselfCount)[5]
                },
                {
                    x: Object.keys(describeselfCount)[6],
                    y: Object.values(describeselfCount)[6]
                },
                {
                    x: Object.keys(describeselfCount)[7],
                    y: Object.values(describeselfCount)[7]
                },
                {
                    x: Object.keys(describeselfCount)[8],
                    y: Object.values(describeselfCount)[8]
                },
                {
                    x: Object.keys(describeselfCount)[9],
                    y: Object.values(describeselfCount)[9]
                }
            ],
        },
    ];
    const options = {
        legend: {
            show: false,
        },
        chart: {
            height: 350,
            type: 'treemap',
            toolbar: {
                show: false,
                tools: {
                    download: false,
                },
            },
        },
        dataLabels: {
            style: {
                fontSize: '20px',
                colors: ['#6b7280'],
            },
        },
        colors: [
            '#fb7185',
            '#ff8b98',
            '#ff9fa8',
            '#ffafb6',
            '#ffbdc2',
            '#ffc8cc',
            '#ffd1d4',
            '#ffd9db',
            '#ffe0e2',
            '#ffe8e9',
            '#fff0f0',
            '#fff7f8',
            '#ffffff'
        ],
        plotOptions: {
            treemap: {
                distributed: true,
                enableShades: false,
            },
        }
    };

    return <ReactApexChart type="treemap" series={series} options={options as ApexCharts.ApexOptions} />;
};

export default DescribeSelf;
