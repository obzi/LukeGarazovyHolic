/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    theme: {
        extend: {
            fontFamily: {
                heading: ['Righteous', 'cursive'],
                body: ['Lora', 'serif'],
                vintage: ['Playfair Display', 'serif'],
            },
            colors: {
                garage: {
                    dark: '#171310',
                    mid: '#1e1a16',
                    panel: '#2c2620',
                    teal: '#0e7fa0',
                    'teal-light': '#12a0c8',
                    cream: '#e8d5b5',
                    'cream-dark': '#b8a888',
                    metal: '#7a7060',
                    rust: '#a0522d',
                    stripe: '#262018',
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            keyframes: {
                'fade-in-up': {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
            animation: {
                'fade-in-up': 'fade-in-up 0.7s ease-out forwards',
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
