/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,ts,tsx,jsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                customOrange: '#FF6B01',
                grey: '#808080',
                yellow: '#FF0',
                footerBg: '#F7F7F7', 
            },
            spacing: {
                '2.5': '10px',
                '5.5': '22px',
                '7.5': '30px',
                '12.5': '48px',
            },
            width: {
                'screen-60': '60vw',
            },
            zIndex: {
                '2': '2'
            },
            backgroundPosition: {
                registerBg: 'top -5px center'
            }
        },
        screens: {
            'minimal': {'max': '319px'},
            'only-mobile': {'min': '320px', 'max': '767px'},
            // 'only-tablet': {'min': '768px', 'max': '1023px'},
            'mobile': '320px',
            'tablet': '768px',
            'desktop': '1024px',
            
        },
        
    },
    plugins: [],
    corePlugins: {
        preflight: false,
    }
};
