const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  purge: isProduction ? ['src/**/*.html', 'src/**/*.ts', 'src/**/*.tsx'] : [],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
