let mix = require('laravel-mix');


mix.js('resources/assets/js/app.js', 'public/js')
      .webpackConfig({
         resolve: {
            alias: {
            '@': path.resolve('resources/assets/sass')
            }
         }
      })
   .sass('resources/assets/sass/app.scss', 'public/css');
