// Move me back up a directory when we are ready to build an app

module.exports = function(grunt) {

    grunt.initConfig({
        nodewebkit: {
            options: {
                version: '0.12.0',
                buildDir: './build',
                macIcns: './App/beaglebone-getting-started.icns',
                platforms: ['win', 'osx', 'linux'] // builds both 32 and 64 bit versions
            },
            src: ['./App/**', './Docs/**', './README.htm']
        }
    });

    grunt.loadNpmTasks('grunt-node-webkit-builder');
    grunt.registerTask('build', ['nodewebkit']);
    grunt.registerTask('test', []);

};
