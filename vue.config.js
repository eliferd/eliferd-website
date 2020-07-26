module.exports = {
    publicPath:'',
    pages: {
        index: {
            entry: 'src/index/main.js',
            template: 'public/index.html', // source template
            title: 'Page d\'accueil-' // <title><%= htmlWebpackPlugin.options.title %></title>
        },
        subpage: {
            entry: 'src/subpage/main.js',
            template: 'public/index.html', // source template
            title: 'Second page' // <title><%= htmlWebpackPlugin.options.title %></title>
        }
    }
}