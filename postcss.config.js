module.exports = {
    plugins: [
        require('autoprefixer'),
        require('stylelint'),
        require('cssnano')({
            preset: 'default'
        })
    ]
};
