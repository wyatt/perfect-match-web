import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), {
    ssr: false,
});

const ByGenderNumDated2024 = () => {
    const series = [
        {
            name: 'Female',
            data: [-40.3, -30.2, -18.0, -8.0, -1.9, -1.6],
            color: '#fda4af',
        },
        {
            name: 'Male',
            data: [31.2, 31.5, 21.5, 10.6, 2.9, 2.3],
            color: '#7dd3fc',
        },
    ];
    const options = {
        chart: {
            type: 'bar',
            stacked: true,
            fontFamily: 'Work Sans, sans-serif', // Change font family
            toolbar: {
                show: false,
                tools: {
                    download: false,
                },
            },
        },
        plotOptions: {
            bar: {
                horizontal: true,
                barHeight: '80%',
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            width: 1,
            colors: ['#fff'],
        },
        grid: {
            xaxis: {
                lines: {
                    show: false,
                },
            }
        },
        yaxis: {
            min: -40,
            max: 40,
            labels: {
                style: {
                    fontSize: '18px',
                    colors: '#4b5563',
                    fontFamily: 'Work Sans, sans-serif',
                },
            }
        },
        tooltip: {
            theme: 'dark',
            style: {
                fontFamily: 'Work Sans, sans-serif', // Change font family
            },
            shared: false,
            y: {
                formatter: function (val: any) {
                    return Math.abs(val) + '%';
                },
            },
        },
        xaxis: {
            categories: [
                '0 person',
                '1 person',
                '2 people',
                '3 people',
                '4 people',
                '5+ people'
            ],
            labels: {
                formatter: function (val: any) {
                    return Math.abs(Math.round(val)) + '%';
                },
                style: {
                    fontSize: '18px', // Increase x-axis labels size
                    colors: '#4b5563',
                    fontFamily: 'Work Sans, sans-serif', // Change font family
                },
            }
        },
        legend: {
            fontSize: '20px', // Increase legend size
            labels: {
                colors: '#4b5563',
                fontFamily: 'Work Sans, sans-serif', // Change font family
            },
        },
        responsive: [
            {
                breakpoint: 640,
                options: {
                    xaxis: {
                        labels: {
                            style: {
                                fontSize: '14px', // Adjust for smaller screens
                                fontFamily: 'Work Sans, sans-serif', // Change font family
                            },
                            offsetY: -5,
                        },
                        title: {
                            style: {
                                fontSize: '14px', // Adjust for smaller screens
                            },
                        },
                    },
                    yaxis: {
                        labels: {
                            style: {
                                fontSize: '14px', // Adjust for smaller screens
                                colors: '#4b5563',
                                fontFamily: 'Work Sans, sans-serif', // Change font family
                            },
                        },
                        title: {
                            style: {
                                fontSize: '14px', // Adjust for smaller screens
                            },
                        },
                    },
                    legend: {
                        fontSize: '14px', // Adjust for smaller screens
                    },
                },
            },
        ],
    };

    return <ReactApexChart type="bar" series={series} options={options as ApexCharts.ApexOptions} />;
};

export default ByGenderNumDated2024;