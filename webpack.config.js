module.exports = {
    entry: {
        test: './test/sample.mkv'
    },
    output: {
        filename: '[name].[ext]'
    },
    resolve: {
        extensions: [".mkv"]
    },
    module: {
        rules: [
            {
                test: /\.mkv$/,
                use: [
                    { loader: 'file-loader', options: { name: '[name].[ext]' } },
                    {
                        loader: require.resolve('./source/loader'),
                        options: {
                            format: 'mp4',
                            preset: 'Very Fast 1080p30',
                            optimize: true,
                            encoder: 'mpeg4',
                            quality: 0.0,
                            vb: '10000',
                            rate: 120,
                        }
                    }
                ]
            }
        ]
    }
}
