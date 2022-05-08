module.exports = {
  content: ["*"],
  theme: {
    extend: {
      keyframes: {
        wave: {
          
          '50%': { transform: 'translateX(50px)' },
          
          
          '50%': { transform: 'translateX(190px)' },
          
          
          
        },
      },
      animation: {
        'linearly': 'wave 4s linear infinite',
      },
    },
  },
  plugins: [],
}
