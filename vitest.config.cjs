// vitest.config.cjs
export default {
  testDir: 'tests', // specify the directory containing your test files
  use: {
    browser: 'jsdom'
  },
  globals: true
}