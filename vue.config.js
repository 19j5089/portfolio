module.exports = {
    outputDir: 'docs',
    publicPath: '/portfolio/',
    transpileDependencies: [
        "vuetify"
    ],
    devServer: {
        // host: 'localhost',
        port: '8080',
        watchOptions: {
            poll: true
        }
    }
}