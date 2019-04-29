const Generator = require('yeoman-generator');
const yosay = require('yosay')
const _ = require('lodash')
const path = require('path')
const to = require('to-case')

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
    }
    welcome() {
        this.log(
            yosay(
            "Generator for a react component."
            )
        )
    }

    componentNamePromting() {
        return this.prompt([
            {
              name: 'componentName',
              type: 'input',
              message: 'Component name:',
              default: 'component',
            },
          ]).then(answers => {
            this.componentName = answers.componentName
          })
    }

    writing() {
        let componentName = to.pascal(this.componentName)

        this.fs.copyTpl(this.templatePath('component.scss'), this.destinationPath(`src/components/${componentName}/${componentName}.scss`), {
            componentName
        })
        this.fs.copyTpl(this.templatePath('component.tsx'), this.destinationPath(`src/components/${componentName}/component.tsx`), {
            componentName
        })
        this.fs.copyTpl(this.templatePath('component.test.tsx'), this.destinationPath(`src/components/${componentName}/component.test.tsx`), {
            componentName
        })
        this.fs.copyTpl(this.templatePath('index.tsx'), this.destinationPath(`src/components/${componentName}/index.tsx`), {
            componentName
        })
    }

};
