const { colors } = require(`tailwindcss/defaultTheme`);

module.exports = {
  content: ['./src/**/*.{html,js,json}'],
  theme: {
    // MEDIA QUERIES
    screens: {
      xs: { max: '360px' },
      sm: '480px',
      md: '768px',
      xl: '1280px',
      smOnly: { max: '767.98px' },
      mdOnly: { min: '768px', max: '1279.98px' },
      notXl: { max: '1279.98px' },
    },
    // BASE FONT
    fontFamily: {
      montserratAlternates: ['Montserrat Alternates', 'sans-serif'],
    },
    // SHADOW
    boxShadow: {
      card: '0px 10px 20px 0px rgba(0, 0, 0, 0.07)', // class="shadow-card"
      btn: '0px 6px 8px 0px rgba(0, 9, 40, 0.20)', // class="shadow-btn"
      review: '0px 2px 10px 0px rgba(0, 0, 0, 0.12)', // class="shadow-review"
      questions: '0px 2px 11px 0px rgba(0, 0, 0, 0.16)',
    },
    // THEME
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
      }),
      backgroundImage: {
        check: "url('../images/agree-checkbox.svg')",
      },
      // ALL COLORS
      colors: {
        body: '#ffffff', // class="bg-body"
        primary: '#000000',
        accent: '#4F8235', // class="bg-accent text-accent border-accent"
        black: {
          DEFAULT: '#000000', // class="bg-black text-black border-black"
          light: '#202020', // class="bg-black-light text-black-light border-black-light"
          dark: '#010101',
        },
        courses: {
          salad: '#DCF5BD', // class="bg-courses-salad
          beige: '#FFE9C9', // class="bg-courses-beige
        },
        green: {
          DEFAULT: '#8BDB62', // class="bg-green text-green border-green"
          hover: '#B9F19D', // class="bg-green-hover  text-green-hover border-green-hover"
          pressed: '#A0D387', // class="bg-green-pressed  text-green-pressed  border-green-pressed "
          age: '#D1F1AB',
          close: '#8ADB62',
        },
        white: {
          DEFAULT: '#ffffff', // class="bg-white text-white border-white"
          dark: '#fafafa', // class="bg-white-dark text-white-dark border-white-dark"
        },
        background: {
          green: '#A1CA6B', // class="bg-background-green text-background-green border-background-green"
          orange: '#DB8C44', // class="bg-background-orange text-background-orange border-background-orange"
        },
      },
      // CONTAINER
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '1.25rem',
          md: '2rem',
          xl: '2rem',
        },
      },
      // KEYFRAMES
      keyframes: {
        side: {
          '0%, 100%': { transform: 'translateX(25%)' },
          '50%': { transform: ' translateY(0)' },
        },
      },
      // ANIMATION
      animation: {
        side: 'side 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
