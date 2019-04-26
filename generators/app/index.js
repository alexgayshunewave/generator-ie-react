const Generator = require('yeoman-generator');
const yosay = require('yosay')
const _ = require('lodash')
module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
        this.option('projectName');
    }
    welcome() {
        this.log(
          yosay(
            "Generator for a react app using typescript, redux and other goodies."+
            "\n\nBrought to you by --- IE"
          )
        )
      }

    createReactApp() {
        this.log("Starting the IE React Generator");
        var done = this.async();
        return this.spawnCommand('npx', ['create-react-app', '.', '--typescript']).on('close', done);
    }

    installExtraDependencies() {
        this.yarnInstall(['@types/react-redux', 'react-redux', 'redux']);
    }
};
