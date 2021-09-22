module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'VirtualizedList',
      entry: './src/index.js',
      externals: {
        'react': 'React'
      }
    }
  }
}
