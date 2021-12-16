module.exports = {
    outputDir: 'docs',
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