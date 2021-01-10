module.exports = {
    publicPath:'./',
    pages: {
        index: {
            entry: 'src/index/main.js',
            template: 'public/index.html', // source template
            title: 'ELIAS54 - Accueil' // <title><%= htmlWebpackPlugin.options.title %></title>
        },
        projets: {
            entry: 'src/projets/main.js',
            template: 'public/index.html',
            title: 'ELIAS54 - Projets'
        },
        portfolio: {
            entry: 'src/portfolio/main.js',
            template: 'public/index.html',
            title: 'ELIAS54 - Portfolio'
        },
        contact: {
            entry: 'src/contact/main.js',
            template: 'public/index.html',
            title: 'ELIAS54 - Contact'
        }
    }
}