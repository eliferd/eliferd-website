module.exports = {
    publicPath:'',
    pages: {
        index: {
            entry: 'src/index/main.js',
            template: 'public/index.html', // source template
            title: 'ELIAS54 - Accueil' // <title><%= htmlWebpackPlugin.options.title %></title>
        },
        projets: {
            entry: 'src/projets/main.js',
            template: 'public/index.html', // source template
            title: 'ELIAS54 - Projets' // <title><%= htmlWebpackPlugin.options.title %></title>
        }
    }
}