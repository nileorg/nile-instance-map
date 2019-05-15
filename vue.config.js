module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/nile-instance-map/'
        : '/'
}