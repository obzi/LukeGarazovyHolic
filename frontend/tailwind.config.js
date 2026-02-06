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
                                dark: '#070d17',
                                zinc: '#0c1525',
                                panel: '#162033',
                                teal: '#2dd4bf',
                                'teal-deep': '#0d9488',
                                cream: '#f0e6d3',
                                metal: '#8b9cb7',
                                navy: '#1e3a5f',
                                stripe: '#0e2a4a',
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
