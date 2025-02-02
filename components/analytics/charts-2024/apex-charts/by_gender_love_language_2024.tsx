import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), {
    ssr: false,
});

const ByGenderLoveLanguage2024 = () => {
    const series = [
        {
            name: 'Female',
            data: [17.3, 1.9, 48.8, 17.4, 11.6, 3.0],
            color: '#fda4af',
        },
        {
            name: 'Male',
            data: [7.8, 0.7, 48.9, 29.0, 7.2, 6.4],
            color: '#7dd3fc',
        },
    ];
    const options = {
        chart: {
            type: 'bar',
            height: 500,
            toolbar: {
                show: false,
                tools: {
                    download: false,
                },
            },
            fontFamily: 'Work Sans, sans-serif',
        },
        plotOptions: {
            bar: {
                horizontal: true,
                dataLabels: {
                    position: 'top'
                },
            },
        },
        dataLabels: {
            enabled: true,
            style: {
                fontSize: '16px',
                colors: ['#374151'],
                fontWeight: 400,
            },
            formatter: function (val: any) {
                return Math.abs(Math.round(val)) + '%';
            },
            offsetX: 20
        },
        stroke: {
            show: true,
            width: 1,
            colors: ['#fff'],
        },
        tooltip: {
            theme: 'dark',
            shared: true,
            intersect: false,
            y: {
                formatter: function (val: any) {
                    return Math.abs(val) + '%';
                },
            }
        },
        xaxis: {
            categories: [
                'Acts of service',
                'Receiving gifts',
                'Quality time',
                'Physical touch',
                'Words of affirmation',
                'Not sure'
            ],
            labels: {
                style: {
                    fontSize: '18px',
                    colors: '#374151',
                },
                formatter: function (val: any) {
                    return Math.abs(Math.round(val)) + '%';
                },
            },
        },
        yaxis: {
            labels: {
                style: {
                    fontSize: '16px',
                    colors: '#374151',
                },
                maxWidth: 250
            }
        },
        legend: {
            fontSize: '20px',
            labels: {
                colors: '#374151',
            }
        }
    };

    return <ReactApexChart type="bar" series={series} options={options as ApexCharts.ApexOptions} />;
};

export default ByGenderLoveLanguage2024;