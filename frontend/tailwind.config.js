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
                        heading: ['Alfa Slab One', 'serif'],
                        body: ['Lora', 'serif'],
                        vintage: ['Playfair Display', 'serif'],
                },
                colors: {
                        garage: {
                                dark: '#1a1814',
                                mid: '#231f1b',
                                panel: '#2c2620',
                                teal: '#1586a5',
                                'teal-light': '#1a9fc4',
                                cream: '#f0e0c8',
                                'cream-dark': '#c4b69c',
                                metal: '#8a8070',
                                rust: '#a0522d',
                                stripe: '#262018',
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
                },
                animation: {
                        'fade-in-up': 'fade-in-up 0.7s ease-out forwards',
                },
        }
  },
  plugins: [require("tailwindcss-animate")],
};
