## NAM Project Structure & Features

- DNS prefetching, responsive meta
- one-file CSS/JS
- jQuery CDN among others
- Modernizr and HTML5 Shiv
- Google Universal Analytics snippet
- Grunt.js running on Node.js
- Livereloading the browser and file injection upon changes
- Annotated Gruntfile.js for extending
- auto-minification of CSS and JavaScript files for production
- Sass/SCSS files and folders for baseline project structure and imports
- Includes .editorconfig for consistent coding styles in IDEs
- Standard .gitignore to ignore minified files and standard ignorables such as .DS_Store
- linted with https://github.com/google/eslint-config-google


````
├── app
│   ├── apple-touch-icon-precomposed.png
│   ├── assets
│   │   ├── css
│   │   ├── fonts
│   │   ├── img
│   │   └── js
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── js
│   │   └── scripts.js
│   └── scss
│       ├── mixins
│       ├── modules
│       ├── partials
│       ├── vendor
│       └── style.scss
├── docs
├── grunt-build.command
├── grunt-build.bat
├── grunt-dev.command
├── grunt-dev.bat
├── package.json
├── README.md
├── .editorconfig
├── .gitignore
├── .jshintrc
└── .travis.yml
````
