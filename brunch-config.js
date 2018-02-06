module.exports = {
    files: {
        javascripts: {
            joinTo: {
                'app.js': /^app/,
                'vendor.js': /^node_modules/
            }
        },
        stylesheets: {
            joinTo: 'app.css'
        }
    },
    plugins: {
        babel: {
            presets: ["es2015"]
        }
    },
    npm: {
        globals: {
            Vue: 'vue/dist/vue',
            Leaflet: 'vue2-leaflet'
        }
    }
}
