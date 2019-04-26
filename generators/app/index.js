const Generator = require('yeoman-generator');

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
        this.option('typescript');
    }

    createReactApp() {
        this.log("Starting the IE React Generator");
        return this.prompt([{
            type: 'confirm',
            name: 'typescript',
            message: 'Do you want this project to use TypeScript?',
            default: true
        }]).then((answers) => {
            this.log(answers);
        });
    }
};
