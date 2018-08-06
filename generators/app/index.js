const path = require('path');
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const mkdirp = require('mkdirp');
const fg = require('fast-glob');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the primo ${chalk.red('generator-typelibrary')} generator!`)
    );

    const prompts = [
      {
        name: 'projectName',
        message: 'Your project name',
        required: true
      }
    ];

    return this.prompt(prompts).then((props) => {
      this.props = props;
    });
  }

  default() {
    this.composeWith(require.resolve('generator-license'), {
      licensePrompt: 'Which license do you want to use?',
      defaultLicense: 'MIT'
    });

    if (path.basename(this.destinationPath()) !== this.props.projectName) {
      this.log(
        `Your generator must be inside a folder named ${this.props.projectName}
        I'll automatically create this folder.`
      );
      mkdirp(this.props.projectName);
      this.destinationRoot(this.destinationPath(this.props.projectName));
    }
  }

  writing() {
    const templates = fg.sync([this.templatePath('**/*')]);
    const templatesRoot = this.templatePath();
    templates.forEach((templatePath) => {
      const templateRelativePath = templatePath.replace(templatesRoot + path.sep, '');
      const paths = templateRelativePath.split(path.sep);
      const templateName = paths.pop();
      if (!templateName.startsWith('_')) {
        return true;
      }
      if (paths.length > 0) {
        mkdirp(this.destinationPath(paths.join(path.sep)));
      }
      this.fs.copyTpl(
        templatePath,
        this.destinationPath([...paths, templateName.slice(1)].join(path.sep)),
        this.props
      );
      return true;
    });
  }
};
