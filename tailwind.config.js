/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                pmpink: {
                    500: '#fce5f3',
                },
                pmpink2: {
                    500: '#f7a4af',
                },
                pmred: {
                    500: '#f30020',
                },
                pmblue: {
                    500: '#24438d',
                },
                pmorange: {
                    500: '#FF7E55',
                },
                pmblue2: {
                    500: '#C5E1EF',
                },
            },
            fontFamily: {
                'dela-gothic': ['Dela Gothic One', 'sans-serif'],
                'work-sans': ['Work Sans', 'sans-serif'],
                'press-start': ['"Press Start 2P"', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
