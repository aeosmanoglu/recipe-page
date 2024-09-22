/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html'],
    theme: {
        extend: {
            colors: {
                'rose-50': '#FFF7FB',
                'rose-800': '#7A284E',
                'stone-100': '#F3E5D7',
                'stone-150': '#E3DDD7',
                'stone-600': '#5F564D',
                'stone-900': '#312E2C',
                'brown-800': '#854632',
            },
            fontFamily: {
                'serif': ['Young Serif', 'serif'],
                'sans': ['Outfit', 'sans-serif'],
            }
        },
    },
    plugins: [],
}

