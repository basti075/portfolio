module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/portfolio/' // Replace <repository-name> with your GitHub repo name
        : '/'
};
