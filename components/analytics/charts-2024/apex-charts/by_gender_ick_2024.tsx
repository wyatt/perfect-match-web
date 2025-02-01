import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), {
    ssr: false,
});

const ByGenderIck2024 = () => {
    const series = [
        {
            name: 'Female',
            data: [9.3, 31.2, 31.8, 19.3, 8.6],
            color: '#fda4af',
        },
        {
            name: 'Male',
            data: [11.9, 53.0, 16.4, 14.5, 4.2],
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
                colors: ['#4b5563'],
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
                'From Westchester',
                'Believing in astrology',
                'Chasing a beer pong ball',
                ['Referring to their football', 'team as “we”'],
                'Gym rat',
            ],
            labels: {
                style: {
                    fontSize: '18px',
                    colors: '#4b5563',
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
                    colors: '#4b5563',
                },
                maxWidth: 250
            }
        },
        legend: {
            fontSize: '20px',
            labels: {
                colors: '#4b5563',
            },
        }
    };

    return <ReactApexChart type="bar" series={series} options={options as ApexCharts.ApexOptions} />;
};

export default ByGenderIck2024;