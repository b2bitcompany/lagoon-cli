const command = {
  name: 'generate:module',
  description: 'Generate a new module in src/modules folder',
  run: async (toolbox) => {
    const { print, parameters, template, filesystem } = toolbox

    if (!parameters.first) {
      print.error('Please provide a module name')
      return
    }

    filesystem.dir('src/modules/aa')

    // await template.generate({
    //   template: '',
    // })
  },
}

module.exports = command
