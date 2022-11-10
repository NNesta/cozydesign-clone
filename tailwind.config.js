/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
         smc:'753px',
         mdc:'991px',
         lgc: '1220px',
      },
      colors:{
        brown: {
          100: '#e4ded5',
          300: '#d4ac8e',
          500: '#c47d57',
          900: '#b55730',
        },
        red: {
          550: '#d90f54',
        },
        dark: {
          500: '#223240',
          600: '#17313b',
          700: '#2d4850',
          
        },
        colorIcon: {
          tw: '#1da1f2',
          ld: '#2977c9',
          fb: '#4267b2',
          in: '#e4405f',
          yt: '#e4405f',
          cl: '#16313a',
          em: '#223240',
          
        },
      },
      fontSize: {

          'mds': ['11px','1.1em'],
          'lg': ['1.125','1.1em'],
          'lgs': ['12px','1.33em'],
          'lgs1': ['13px','1.2em'],
          'lgg': ['13px','1.53em'],
          'lgg1': ['14px','1.4em'],
          'xls1': ['20px','1em'],
          'xls2': ['20px','1.5em'],
          'xls3': ['18px','1.6em'],
          'xls4': ['20px','1.6em'],
          'xls': ['22px','1.6em'],
          'xlg': ['37px','1.6em'],
          '2xls': ['30px','1em'],
          '2xlg': ['30px','1.1em'],
          '7xls': ['48px','1.1em'],
          '8xl': ['39px','1.3em'],
          '8xls1': ['30px','1.1em'],
          '8xls': ['61px','1.1em'],
          '8xlg': ['70px','1.1em'],
          '10xl': ['5rem','1.1em'],

      },
      fontFamily:{
        'fraunces1':"Fraunces144ptsupersoft,sans-serif",
        'fraunces7':"Fraunces72ptsupersoft,sans-serif",
        'geomanistu':"Geomanist ultra,sans-serif",
        'geomanistb':"Geomanist book,sans-serif",
        'geomanist':"Geomanist,sans-serif",
      },
      fontWeight:{
        'semibolder':"700",
        'mediumSm':"400",
      },
      backgroundSize:{
        '50':"50px auto cover",
      },
      margin: {
        '13': '9.75rem',
      }
    },
  },
  plugins: [],
}