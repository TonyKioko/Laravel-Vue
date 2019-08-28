let mix = require('laravel-mix');



mix.js('resources/assets/js/app.js', 'public/js')
    .webpackConfig({
         module: {
             rules: [
                 {
                     test: /\.jsx?$/,
                     exclude: /node_modules(?!\/foundation-sites)|bower_components/,
                     use: [
                         {
                             loader: 'babel-loader',
                             options: Config.babel()
                         }
                     ]
                 }
             ]
         }
     })
   .sass('resources/assets/sass/app.scss', 'public/css');