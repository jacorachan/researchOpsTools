module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/researchOpsTools'
    : '/',
  outputDir: 'docs'
}
