// See http://brunch.io for documentation.
exports.files = {
    javascripts: {
        joinTo: {
            'app.js': /^app/,
            'vendor.js': /^node_modules/
        }
    },
    stylesheets: {
        joinTo: 'app.css'
    }
};

exports.plugins = {
    babel: {
      presets: ['latest']
    }
}