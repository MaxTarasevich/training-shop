module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      'spartan':['Spartan']
    },
    fontSize:{
      'title':['36px','42px'],
      'title1':['26px','36px'],
      'title2':['22px','30px'],
      'title3':['16px','24px'],
      'title4':['14px','22px'],
      'subtitle':['12px','18px'],
      'body':['14px','22px'],
      'small':['11px','18px'],
      'button':['13px','15px']
    },
    colors: {
      'dark':'#121212',
      'white':'#FFFFFF',
      'error':'#D61313',
      'grey':'#E5E5E5',
      'sale':'#E91E63',
      'ok':'#0BB17F',
      'gr-white':'#F8F8F8',
      'yellow':'#F0CC84',
      'grey-dark':'#9C9C9C',
      'dark-shadow':'rgba(18,18,18, 0.4)',
      'white-800':'rgba(255,255,255, 0.8)',
    }
  },
  plugins: [],
}
