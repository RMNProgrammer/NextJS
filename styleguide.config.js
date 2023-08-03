module.exports = {
    components: 'components/**/[A-Z]*.jsx',
    webpackConfig: {
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                }

            ]
        }
    }
}
