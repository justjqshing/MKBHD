/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], darkMode: 'class',
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '30px'],
      '3.5xl': ['45px', '45px'],
      '4xl': ['48px', '58px'],
      '4xl': ['72px', '87px'],
      '8xl': ['96px', '106px'],
    },
    extend: {
      keyframes: {
        slideside: {
          '0%': { width: '0vw'},
          '100%': { width: '50%' },
        },
        slidesideout: {
          '0%': { width: '50%' },
          '100%': { width: '0vw'},
        },
          loopscroll: {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(-100%)'},
        },
          
      },
      animation: {
        slideside: 'slideside 450ms ease-in-out',
        slidesideout: 'slidesideout 450ms ease-in-out',
        loopscroll: 'loopscroll 50s linear infinite',
       
      },
     
      fontFamily: {
        poppins: ["Poppins"],
        DMsans: ["DM Sans"],
      },
      backgroundImage:{
        'ModelY': "url('url(https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-Y-Desktop-Global.png)",
      },
      colors: {
        'primary': "#ECEEFF",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)"
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {
        'hero': "url('assets/images/collection-background.svg')",
        'DarkHero': "url('assets/images/Dark/collection-background-dark.svg')",
        'card': "url('assets/images/thumbnail-background.svg')",
        'DarkCard': "url('assets/images/Dark/thumbnail-background-dark.svg')",
      },
      screens: {
        '2sm': '490px',
        "wide": "1440px",
        'test': '1000px',
        '3xl': '1920px',
        'athic': '2900px',
        'thic': '7500px'
      }
    },
  },
  plugins: []
  ,
}