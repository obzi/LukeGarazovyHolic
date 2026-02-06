/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
        extend: {
                fontFamily: {
                        heading: ['Oswald', 'sans-serif'],
                        body: ['Montserrat', 'sans-serif'],
                },
                colors: {
                        garage: {
                                dark: '#0f0f10',
                                zinc: '#18181b',
                                panel: '#27272a',
                                amber: '#f59e0b',
                                'amber-dark': '#d97706',
                                metal: '#9ca3af',
                                rust: '#c2410c',
                        },
                },
                borderRadius: {
                        lg: 'var(--radius)',
                        md: 'calc(var(--radius) - 2px)',
                        sm: 'calc(var(--radius) - 4px)'
                },
                keyframes: {
                        'fade-in-up': {
                                '0%': { opacity: '0', transform: 'translateY(30px)' },
                                '100%': { opacity: '1', transform: 'translateY(0)' },
                        },
                        'slide-in-left': {
                                '0%': { opacity: '0', transform: 'translateX(-40px)' },
                                '100%': { opacity: '1', transform: 'translateX(0)' },
                        },
                },
                animation: {
                        'fade-in-up': 'fade-in-up 0.7s ease-out forwards',
                        'slide-in-left': 'slide-in-left 0.6s ease-out forwards',
                },
        }
  },
  plugins: [require("tailwindcss-animate")],
};
