import useSWR from 'swr';
import { fetcher, analysisURL } from '@/utils/fetch';
import dynamic from 'next/dynamic';
import { SurveyModel } from 'survey-react';

const ReactApexChart = dynamic(() => import('react-apexcharts'), {
    ssr: false,
});

const LoveLanguageLive = () => {
    //const { data: typeCount, error, isLoading } = useSWR(`${analysisURL}/lovelanguage`, fetcher);
    //if (isLoading || error) return null;

    const series = [12, 10, 8, 6, 4, 2]; //Object.values(typeCount || {});
    const options = {
        chart: {
            toolbar: {
                show: false,
                tools: {
                    download: false,
                },
            },
            width: '100%',
            type: 'donut',
            animations: {
                speed: 1400,
                animateGradually: {
                    delay: 250,
                },
                dynamicAnimation: {
                    speed: 450,
                },
            },
        },
        labels: ["Acts of service", "Quality time", "Receiving gifts", "Physical touch", "Words of affirmation", "Not sure"],//Object.keys(typeCount || {}),
        colors: ['#fda4af', '#86efac', '#fde047', '#7dd3fc', '#fdba74', '#c4b5fd', '#f0abfc'],
        plotOptions: {
            pie: {
                dataLabels: {
                    offset: -3,
                },
                donut: {
                    size: '40%',
                },
            },
        },
        dataLabels: {
            formatter(val: string, opts: any) {
                const name = opts.w.globals.labels[opts.seriesIndex];
                return [name, parseInt(val).toFixed(1) + '%'];
            },
            style: {
                fontSize: '14px',
            },
        },
        legend: {
            show: false,
        },
        responsive: [
            {
                breakpoint: 780,
                options: {
                    dataLabels: {
                        style: {
                            fontSize: '12px',
                        },
                    },
                },
            },
        ],
    };

    return <ReactApexChart type="donut" series={series} options={options as unknown as ApexCharts.ApexOptions} />;
};

export default LoveLanguageLive;
