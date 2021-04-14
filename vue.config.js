module.exports = {
    publicPath:'./',
    pages: {
        index: {
            entry: 'src/index/main.js',
            template: 'public/index.html', // source template
            title: 'ELIFERD - Accueil' // <title><%= htmlWebpackPlugin.options.title %></title>
        },
        projets: {
            entry: 'src/projets/main.js',
            template: 'public/index.html',
            title: 'ELIFERD - Projets'
        },
        portfolio: {
            entry: 'src/portfolio/main.js',
            template: 'public/index.html',
            title: 'ELIFERD - Portfolio'
        },
        contact: {
            entry: 'src/contact/main.js',
            template: 'public/index.html',
            title: 'ELIFERD - Contact'
        }
    }
}