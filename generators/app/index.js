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
        this.yarnInstall(['redux-thunk','@types/react-redux', 'react-redux', 'redux', 'node-sass']);
        this.yarnInstall(['redux-devtools-extension','eslint','eslint-plugin-react','husky','lint-staged', 'stylelint','stylelint-declaration-strict-value','stylelint-order','stylelint-scss', 'tslint', 'tslint-config-airbnb', 'tslint-react'], { dev: true })
    }
  
    eslint() {
        this.fs.copy(this.templatePath('eslintignore'), this.destinationPath('.eslintignore'))
        this.fs.copy(this.templatePath('eslintrc.js'), this.destinationPath('eslintrc.js'))
    }
  
    stylelint() {
        this.fs.copy(this.templatePath('stylelintrc'), this.destinationPath('.stylelintrc'))
    }  

    tslint() {
        this.fs.copy(this.templatePath('tslint.json'), this.destinationPath('tslint.json'))
    }

    husky() {
        this.fs.copy(this.templatePath('huskyrc'), this.destinationPath('.huskyrc'))
    }

    lintstaged() {
        this.fs.copy(this.templatePath('lintstagedrc'), this.destinationPath('.lintstagedrc'))
    }

    src() {
        this.fs.copy(this.templatePath('src'), this.destinationPath('src'))
    }
};
