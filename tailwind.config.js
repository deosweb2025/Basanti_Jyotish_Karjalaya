/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#FFA91E',
          red: '#FF3D0D',
          darkOlive: '#3E4100',
          oliveOverlay: '#4E4600',
          darkBg: '#0C0606',
          textDark: '#102136',
          bodyMuted: '#4D5D6D',
          borderLight: '#E4E9F0',
          arrowOrange: '#F77D0E',
          whatsapp: '#25D366'
        },
        testimonial: {
          greenTop: '#36CC00',
          greenBottom: '#154700'
        }
      },
      fontFamily: {
        aclonica: ['"Aclonica"', 'cursive', 'sans-serif'],
        roboto: ['"Roboto"', 'sans-serif']
      },
      maxWidth: {
        'elementor': '1140px',
      },
      screens: {
        'tablet': {'max': '1024px'},
        'mobile': {'max': '767px'},
      }
    },
  },
  plugins: [],
};

