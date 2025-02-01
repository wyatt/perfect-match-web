import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), {
    ssr: false,
});

const ByGenderGreenflag2024 = () => {
    const series = [
        {
            name: 'Female',
            data: [14.7, 16.8, 14.6, 49.1, 4.8],
            color: '#fda4af',
        },
        {
            name: 'Male',
            data: [14.9, 14.8, 18.7, 42.0, 9.6],
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
                ['Sends you a GCal invite', 'for the date'],
                'Your pet likes them',
                'Low screen time',
                'Smells good',
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

export default ByGenderGreenflag2024;