/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{html,ts}",
    ],
      theme      : {
        fontSize: {
            'xs'  : '0.625rem',
            'sm'  : '0.75rem',
            'md'  : '0.8125rem',
            'base': '0.875rem',
            'lg'  : '1rem',
            'xl'  : '1.125rem',
            '2xl' : '1.25rem',
            '3xl' : '1.5rem',
            '4xl' : '2rem',
            '5xl' : '2.25rem',
            '6xl' : '2.5rem',
            '7xl' : '3rem',
            '8xl' : '4rem',
            '9xl' : '6rem',
            '10xl': '8rem'
        },
        screens : {
            sm: '600px',
            md: '960px',
            lg: '1280px',
            xl: '1440px'
        },
        extend  : {
            backgroundImage : {
              'hero-pattern': "url('/assets/images/hero_background.png')",
              'hero-background': "url('/assets/images/hero-fisher-women.png')",
              'cow-pattern': "url('/assets/images/cow.png')",
              'cta-pattern':"url('/assets/images/CTA.png')",
              'result-pattern':"url('/assets/images/result-bg.png')",
            },
            animation               : {
                'spin-slow': 'spin 3s linear infinite'
            },
            colors                  : {
  
                yellowColor:'#F59E21',
                orangeColor : '#FF6C22'
            },
            flex                    : {
                '0': '0 0 auto'
            },
            fontFamily              : {
                sans: `"Inter var"`,
                roboto: `"Roboto Regular"`,
                roboto_condensed:`"Roboto Condensed", sans-serif`
            },
            opacity                 : {
                12: '0.12',
                38: '0.38',
                87: '0.87'
            },
            rotate                  : {
                '-270': '270deg',
                '15'  : '15deg',
                '30'  : '30deg',
                '60'  : '60deg',
                '270' : '270deg'
            },
            scale                   : {
                '-1': '-1'
            },
            zIndex                  : {
                '-1'   : -1,
                '49'   : 49,
                '60'   : 60,
                '70'   : 70,
                '80'   : 80,
                '90'   : 90,
                '99'   : 99,
                '999'  : 999,
                '9999' : 9999,
                '99999': 99999
            },
            spacing                 : {
                '13': '3.25rem',
                '15': '3.75rem',
                '18': '4.5rem',
                '22': '5.5rem',
                '26': '6.5rem',
                '30': '7.5rem',
                '50': '12.5rem',
                '90': '22.5rem',
  
                // Bigger values
                '100': '25rem',
                '120': '30rem',
                '128': '32rem',
                '140': '35rem',
                '160': '40rem',
                '180': '45rem',
                '192': '48rem',
                '200': '50rem',
                '240': '60rem',
                '256': '64rem',
                '280': '70rem',
                '320': '80rem',
                '360': '90rem',
                '400': '100rem',
                '480': '120rem',
  
                // Fractional values
                '1/2': '50%',
                '1/3': '33.333333%',
                '2/3': '66.666667%',
                '1/4': '25%',
                '2/4': '50%',
                '3/4': '75%'
            },
           
            maxHeight               : {
                none: 'none'
            },
            transitionDuration      : {
                '400': '400ms'
            },
            transitionTimingFunction: {
                'drawer': 'cubic-bezier(0.25, 0.8, 0.25, 1)'
            },
  
            // @tailwindcss/typography
            typography: ({theme}) => ({
                sm     : {
                    css: {
                        code : {
                            fontSize: '1em'
                        },
                        pre  : {
                            fontSize: '1em'
                        },
                        table: {
                            fontSize: '1em'
                        }
                    }
                }
            })
        }
    },
    corePlugins: {
      appearance        : false,
      container         : false,
      float             : false,
      clear             : false,
      placeholderColor  : false,
      placeholderOpacity: false,
      verticalAlign     : false
    },
    plugins: [],
  }
  
  