const pkg = require('./package')

module.exports = {
    apiPath: 'stubs/api',
    webpackConfig: {
        output: {
            publicPath: `/static/${pkg.name}/${process.env.VERSION || pkg.version}/`
        }
    },
    navigations: {
        'fdp.main': '/fdp'
    },
    features: {
        'fdp': {
            // add your features here in the format [featureName]: { value: string }
        },
    },
    config: {
        apiKey: ''
    }
}
